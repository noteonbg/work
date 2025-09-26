// src/components/PatientManager.js
import React, { useEffect, useState } from 'react';
import patientService from '../services/patientService';

function PatientManager() {
  const [patients, setPatients] = useState([]);
  const [form, setForm] = useState({ id: '', name: '', age: '', gender: '', condition: '' });
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const res = await patientService.getAllPatients();
      setPatients(res.data);
    } catch (error) {
      if (error.response && error.response.status === 204) {
        setPatients([]);
        setMessage('No patients found.');
      } else {
        console.error(error);
        setMessage('Failed to load patients.');
      }
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        await patientService.updatePatient(editingId, form);
        setMessage('Patient updated.');
      } else {
        await patientService.createPatient(form);
        setMessage('Patient created.');
      }
      fetchPatients();
      setForm({ id: '', name: '', age: '', gender: '', condition: '' });
      setEditingId(null);
    } catch (error) {
      console.error(error);
      setMessage('Error saving patient.');
    }
  };

  const handleEdit = (patient) => {
    setForm(patient);
    setEditingId(patient.id);
  };

  const handleDelete = async (id) => {
    try {
      await patientService.deletePatient(id);
      fetchPatients();
      setMessage('Patient deleted.');
    } catch (error) {
      console.error(error);
      setMessage('Error deleting patient.');
    }
  };

  return (
    <div>
      <h2>Patient Manager</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input name="age" type="number" placeholder="Age" value={form.age} onChange={handleChange} required />
        <input name="gender" placeholder="Gender" value={form.gender} onChange={handleChange} required />
        <input name="condition" placeholder="Condition" value={form.condition} onChange={handleChange} required />
        <button type="submit">{editingId ? 'Update' : 'Create'}</button>
      </form>

      {message && <p>{message}</p>}

      <h3>Patients List</h3>
      <ul>
        {patients.map((p) => (
          <li key={p.id}>
            {p.name}, {p.age}, {p.gender}, {p.condition}
            <button onClick={() => handleEdit(p)}>Edit</button>
            <button onClick={() => handleDelete(p.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PatientManager;
