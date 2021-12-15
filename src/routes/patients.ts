import express from 'express';
import patientService from '../services/patientService';
import { NewPatient } from '../types';
import validateNewPatient from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(patientService.getPublicPatientData());
});

router.post('/', (req, res) => {
  try {
    const newPatient = validateNewPatient(req.body as NewPatient);
    const addedPatient = patientService.addPatient(newPatient);
    res.send(addedPatient);
  } catch (error: unknown) {
    let errorMessage = 'Oops, something\'s wrong.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    res.status(400).send(errorMessage);
  }
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  res.send(patientService.getSinglePatient(id));
});

export default router;