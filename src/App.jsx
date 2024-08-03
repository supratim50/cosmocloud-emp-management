import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Home, AddEmp, EmpDetails} from './pages'
import Layout from './Layout'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/add-employee' element={<AddEmp />} />
          <Route path='/employee-datails/:id' element={<EmpDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App