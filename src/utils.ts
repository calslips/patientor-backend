import { NewPatient, Gender, patientInputs } from './types';

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const parseName = (name: unknown): string => {
  if (!name || !isString(name)) {
    throw new Error('Name missing or formatted incorrectly');
  }
  return name;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseDateOfBirth = (date: unknown): string => {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error('Birth date missing or formatted incorrectly: ' + date);
  }
  return date;
};

const ssnRegex = new RegExp(/^(\d{3})-?(\d{2})-?(\d{4})$/);

const parseSsn = (ssn: unknown): string => {
  if (!ssn || !isString(ssn) || !ssnRegex.test(ssn)) {
    throw new Error(
      'SSN missing or formatted incorrectly. Valid format: XXX-XX-XXXX or XXXXXXXXX.'
    );
  }
  return ssn;
};

const isGender = (param: unknown): param is Gender => {
  return Object.values(Gender).includes(param as Gender);
};

const parseGender = (gender: unknown): Gender => {
  if (!gender || !isGender(gender)) {
    throw new Error('Gender missing or formatted incorrectly: ' + gender);
  }
  return gender;
};

const parseOccupation = (occupation: unknown): string => {
  if (!occupation || !isString(occupation)) {
    throw new Error('Occupation missing or formatted incorrectly: ' + occupation);
  }
  return occupation;
};

const validateNewPatient = ({ name, dateOfBirth, ssn, gender, occupation }: patientInputs): NewPatient => {
  const newPatientData: NewPatient = {
    name: parseName(name),
    dateOfBirth: parseDateOfBirth(dateOfBirth),
    ssn: parseSsn(ssn),
    gender: parseGender(gender),
    occupation: parseOccupation(occupation)
  };
  return newPatientData;
};

export default validateNewPatient;