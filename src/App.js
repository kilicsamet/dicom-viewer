import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import { FormProvider } from './context/FormContext';
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <Router>
      <FormProvider>
        <AppRouter />
      </FormProvider>
    </Router>
  );
}

export default App;
