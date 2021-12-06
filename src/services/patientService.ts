import patients from '../../data/patients';
import { v1 as uuid } from 'uuid';
import { Patient, NonSensitivePatientData, NewPatient } from '../types';

const getPatients = (): Patient[] => {
  return patients;
};

const getNonSensitivePatientData = (): NonSensitivePatientData[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }));
};

const addPatient = (newPatient: NewPatient): Patient => {
  const id = uuid();
  const patientToAdd = {
    id: id,
    ...newPatient
  };
  patients.push(patientToAdd);
  return patientToAdd;
};

export default {
  getPatients,
  getNonSensitivePatientData,
  addPatient
};