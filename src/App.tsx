import React from 'react';
import "./globalStyles.css"
import AppRoutes from './routes/Routes.tsx';
import NavBar from './components/layout/navbar/NavBar.tsx';

function App() {
  return (
    <>
      <NavBar />
      <AppRoutes />
    </>
  );
}

export default App;
