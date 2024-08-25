import { useState } from 'react';
import { getButtonArray } from '../helper/function';
import { useFormContext } from '../context/FormContext';

export const usePatientViewModel = () => {
    const [page, setPage] = useState(1);
    const pages = getButtonArray(300, page);
    const [expandedId, setExpandedId] = useState(null);
    const [selectedId, setSelectedId] = useState(null);
    const { formValues, handleChange, resetForm, filteredPatients, patientData, setFilteredPatients } = useFormContext();
    const handleClickPage = pageNumber => {
        setPage(pageNumber);
    };
    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
        setSelectedId(prevId => (prevId === id ? null : id));
    };
    const handleFilter = () => {
        const filtered = patientData.filter(patient => {
            return (
                (!formValues.patientName || patient.patientName.toLowerCase().includes(formValues.patientName.toLowerCase())) &&
                (!formValues.mrn || patient.patientID.toLowerCase().includes(formValues.mrn.toLowerCase())) &&
                (!formValues.studyDate || patient.examinationDate === formValues.studyDate) &&
                (!formValues.modality || patient.examinationType.toLowerCase() === formValues.modality.toLowerCase())
            );
        });
        setFilteredPatients(filtered);
    };
    const handleClearFilter = () => {
        setFilteredPatients(patientData);
        resetForm();
    };
    return {
        formValues,
        handleChange,
        handleFilter,
        handleClearFilter,
        filteredPatients,
        selectedId,
        toggleExpand,
        expandedId,
        page,
        pages,
        handleClickPage
    };
};
