// src/services/patientService.js
import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/patients';

const getAllPatients = () => axios.get(BASE_URL);

const getPatientById = (id) => axios.get(`${BASE_URL}/${id}`);

const createPatient = (patient) => axios.post(BASE_URL, patient);

const updatePatient = (id, patient) => axios.put(`${BASE_URL}/${id}`, patient);

const deletePatient = (id) => axios.delete(`${BASE_URL}/${id}`);

const deleteAllPatients = () => axios.delete(BASE_URL);

export default {
  getAllPatients,
  getPatientById,
  createPatient,
  updatePatient,
  deletePatient,
  deleteAllPatients,
};
