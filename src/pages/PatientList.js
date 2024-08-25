import React from 'react';
import Pagination from '../Components/Pagination';
import FilterList from '../Components/FilterList';
import NoDataFound from '../Components/NoDataFound';
import TableContainer from '../Components/TableContainer';
import { usePatientViewModel } from '../ViewModel/PatientViewModel';
import BreadCrumb from '../Components/BreadCrumb';
const PatientList = () => {
  const {
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
  } = usePatientViewModel();
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-7xl mx-auto">
        <BreadCrumb filteredPatients={filteredPatients} />
        <FilterList formValues={formValues} handleChange={handleChange} handleFilter={handleFilter} handleClearFilter={handleClearFilter} />
        {
          filteredPatients.length <= 0 ?
            <NoDataFound />
            :
            <>
              <TableContainer filteredPatients={filteredPatients} selectedId={selectedId} toggleExpand={toggleExpand} expandedId={expandedId} />
              < Pagination pages={pages} page={page} handleClickPage={handleClickPage} />
            </>
        }
      </div>
    </div>
  );
}

export default PatientList
