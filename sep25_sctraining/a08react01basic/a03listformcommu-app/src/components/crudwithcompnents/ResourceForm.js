import React from 'react';

const ResourceForm = ({ formData, handleChange, handleSubmit, editId }) => (
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
);

export default ResourceForm;
