import React, { createContext, useContext, useEffect, useState } from 'react';
import { patient_data } from '../helper/MockingApi/data';

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formValues, setFormValues] = useState({
    patientName: '',
    mrn: '',
    studyDate: '',
    modality: ''
  });
  const [filteredPatients, setFilteredPatients] = useState([]);
  const patientData = patient_data;

  useEffect(() => {
    if (patientData) {
        setFilteredPatients(patientData);
    }
}, [patientData]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues(prevValues => ({ ...prevValues, [id]: value }));
  };

  const resetForm = () => {
    setFormValues({
      patientName: '',
      mrn: '',
      studyDate: '',
      modality: ''
    });
  };

  return (
    <FormContext.Provider value={{ formValues, handleChange, resetForm, filteredPatients, patientData, setFilteredPatients  }}>
      {children} 
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);
