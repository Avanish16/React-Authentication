import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'
import Home from './components/Home.jsx'
import ForgetPassword from './components/ForgetPassword.jsx'
import ResetPassword from './components/ResetPassword.jsx'
import Dashboard from './components/Dashboard.jsx'

function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/forgetPassword' element={<ForgetPassword/>}></Route>
      <Route path='/resetPassword/:token' element={<ResetPassword/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
