import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useQuery } from "react-query";

function App() {
  const fetchEmployees = async () => {
    const res = await fetch("http://localhost:3000/employees");
    return res.json();
  };

  const { data, status } = useQuery("employees", fetchEmployees);

  return (
    <div className="App">

    </div>
  );
}

export default App;
