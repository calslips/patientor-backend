import { Patient } from '../src/types';
import validateNewPatient from '../src/utils';

const data = [
  {
      "id": "d2773336-f723-11e9-8f0b-362b9e155667",
      "name": "John McClane",
      "dateOfBirth": "1986-07-09",
      "ssn": "090-78-6122",
      "gender": "male",
      "occupation": "New york city cop"
  },
  {
      "id": "d2773598-f723-11e9-8f0b-362b9e155667",
      "name": "Martin Riggs",
      "dateOfBirth": "1979-01-30",
      "ssn": "300-17-9770",
      "gender": "male",
      "occupation": "Cop"
  },
  {
      "id": "d27736ec-f723-11e9-8f0b-362b9e155667",
      "name": "Hans Gruber",
      "dateOfBirth": "1970-04-25",
      "ssn": "250-47-0555",
      "gender": "male",
      "occupation": "Technician"
  },
  {
      "id": "d2773822-f723-11e9-8f0b-362b9e155667",
      "name": "Dana Scully",
      "dateOfBirth": "1974-01-05",
      "ssn": "050-17-4432",
      "gender": "female",
      "occupation": "Forensic Pathologist"
  },
  {
      "id": "d2773c6e-f723-11e9-8f0b-362b9e155667",
      "name": "Matti Luukkainen",
      "dateOfBirth": "1971-04-09",
      "ssn": "090-47-1889",
      "gender": "male",
      "occupation": "Digital evangelist"
  }
];

const patients: Patient[] = data.map(singlePatient => {
    const patient = validateNewPatient(singlePatient) as Patient;
    patient.id = singlePatient.id;
    return patient;
});

export default patients;