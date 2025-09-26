import React, { useState, useEffect } from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import ResourceForm from './ResourceForm';
import ResourceList from './ResourceList';

const API_URL = 'http://localhost:3001/resources';

const ResourceManagerComponent = () => {
  const [resources, setResources] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({
    resourceId: '',
    resourceName: '',
    status: false,
  });
  const [editId, setEditId] = useState(null);

  const fetchResources = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setResources(data);
  };

  useEffect(() => {
    fetchResources();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editId ? 'PUT' : 'POST';
    const url = editId ? `${API_URL}/${editId}` : API_URL;

    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    setFormData({ resourceId: '', resourceName: '', status: false });
    setEditId(null);
    fetchResources();
  };

  const handleEdit = (res) => {
    setFormData(res);
    setEditId(res.id);
  };

  const handleDelete = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    fetchResources();
  };

  const filteredResources = resources.filter((res) =>
    res.resourceName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <Header />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ResourceForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        editId={editId}
      />
      <ResourceList
        resources={filteredResources}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default ResourceManagerComponent;
