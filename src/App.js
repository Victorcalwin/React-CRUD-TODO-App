import React, { useState } from 'react';
import './App.css';
import Create from './Components/create';
import Dashboard from './Components/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Edit from './Components/Edit'

export const createData = React.createContext()

function App() {

  const [data, setData] = useState([
    {
      name: "Victor",
      email: "victorcalwin@gmail.com",
      phone: "9500859595"
    },
    {
      name: "josh",
      email: "josh@gmail.com",
      phone: "9500859595"
    },
    {
      name: "raja",
      email: "raja@gmail.com",
      phone: "9500859595"
    },
  ]);

  return (
    <div className="App">
      <BrowserRouter>
        <createData.Provider value={{ data, setData }}>
          <Routes>
            <Route path='/' element={<Create />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/edit/:id' element={<Edit />} />
          </Routes>
        </createData.Provider>
      </BrowserRouter>

    </div>
  );
}

export default App;
