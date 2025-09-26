import React, { useState, useEffect } from 'react';

const API_URL = 'http://localhost:3001/resources';

const ResourceManager = () => {
  const [resources, setResources] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({
    resourceId: '',
    resourceName: '',
    status: false,
  });
  const [editId, setEditId] = useState(null);

  // Fetch resources
  const fetchResources = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setResources(data);
  };

  useEffect(() => {
    fetchResources();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Add or Update resource
  const handleSubmit = async (e) => {
    e.preventDefault();

    const method = editId ? 'PUT' : 'POST';
    const url = editId ? `${API_URL}/${editId}` : API_URL;

    await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    setFormData({ resourceId: '', resourceName: '', status: false });
    setEditId(null);
    fetchResources();
  };

  // Edit resource
  const handleEdit = (resource) => {
    setFormData(resource);
    setEditId(resource.id);
  };

  // Delete resource
  const handleDelete = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    fetchResources();
  };

  // Filtered search
  const filteredResources = resources.filter((res) =>
    res.resourceName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Company Resource Manager</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: '5px', marginBottom: '10px', width: '200px' }}
      />

      {/* Resource Form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          name="resourceId"
          placeholder="Resource ID"
          value={formData.resourceId}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="resourceName"
          placeholder="Resource Name"
          value={formData.resourceName}
          onChange={handleChange}
          required
        />
        <label>
          Active:
          <input
            type="checkbox"
            name="status"
            checked={formData.status}
            onChange={handleChange}
          />
        </label>
        <button type="submit">{editId ? 'Update' : 'Add'} Resource</button>
      </form>

      {/* Resource List */}
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Resource ID</th>
            <th>Resource Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredResources.map((res) => (
            <tr key={res.id}>
              <td>{res.id}</td>
              <td>{res.resourceId}</td>
              <td>{res.resourceName}</td>
              <td>{res.status ? 'Active' : 'Inactive'}</td>
              <td>
                <button onClick={() => handleEdit(res)}>Edit</button>
                <button onClick={() => handleDelete(res.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResourceManager;
