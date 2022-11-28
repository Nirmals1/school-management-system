import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'remixicon/fonts/remixicon.css'

import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Student from './pages/admin/students/Student'
import AddStudent from './pages/admin/students/AddStudent'
import Teacher from './pages/admin/Teacher/Teacher'
import AddTeacher from './pages/admin/Teacher/AddTeacher'
import Grade from './pages/admin/Grade/Grade'
import AddGrade from './pages/admin/Grade/AddGrade'
import Guardian from './pages/admin/Guardian/Guardian'
import AddGuardian from './pages/admin/Guardian/AddGuardian'
import Staff from './pages/admin/Staff/Staff'
import AddStaff from './pages/admin/Staff/AddStaff'
import Subject from './pages/Subject/Subject'
import AddSubject from './pages/Subject/AddSubject'
import Login from './pages/Login'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/login' element={<Login />} />
          <Route path='/student'>
            <Route index element={<Student />} />
            <Route path='create' element={<AddStudent />} />
          </Route>
          <Route path='/teacher'>
            <Route index element={<Teacher />} />
            <Route path='create' element={<AddTeacher />} />
          </Route>
          <Route path='/grade'>
            <Route index element={<Grade />} />
            <Route path='create' element={<AddGrade />} />
          </Route>
          <Route path='/guardian'>
            <Route index element={<Guardian />} />
            <Route path='create' element={<AddGuardian />} />
          </Route>
          <Route path='/staff'>
            <Route index element={<Staff />} />
            <Route path='create' element={<AddStaff />} />
          </Route>
          <Route path='/subject'>
            <Route index element={<Subject/>} />
            <Route path='create' element={<AddSubject />} />
          </Route>
        </Routes>
      </Router>
  </React.StrictMode>
)
