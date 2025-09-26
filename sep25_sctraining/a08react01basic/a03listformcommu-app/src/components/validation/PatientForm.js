import React, { useState } from 'react';

const PatientForm = () => {
  const [formData, setFormData] = useState({
    name: 'generalize',
    age: '',
    email: '',
    symptoms: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Patient name is required';
    }

    const age = Number(formData.age);
    if (!formData.age || isNaN(age) || age < 0 || age > 120) {
      newErrors.age = 'Enter a valid age between 0 and 120';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailPattern.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert('Patient registered successfully!');
      console.log('Submitted Data:', formData);
      // Reset form
      setFormData({
        name: '',
        age: '',
        email: '',
        symptoms: '',
      });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Patient Registration</h2>

      <label>Name:</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} />
      {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}

      <br/><label>Age:</label>
      <input type="number" name="age" value={formData.age} onChange={handleChange} />
      {errors.age && <div style={{ color: 'red' }}>{errors.age}</div>}

      <br/><label>Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} />
      {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}

      <br/><label>Symptoms (optional):</label>
      <textarea name="symptoms" value={formData.symptoms} onChange={handleChange} />

      <br /><br />
      <button type="submit">Register</button>
    </form>
  );
};

export default PatientForm;
