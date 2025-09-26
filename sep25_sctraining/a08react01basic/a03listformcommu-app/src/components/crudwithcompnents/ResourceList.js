import React from 'react';

const ResourceList = ({ resources, handleEdit, handleDelete }) => (
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
      {resources.map((res) => (
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
);

export default ResourceList;
