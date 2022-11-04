import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Contact from './Pages/Contact/Contact';
import Services from './Pages/Services/Services';
import About from './Pages/About/About';
import CheckOut from './Pages/CheckOut/CheckOut';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className='App.css'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/checkout' element={<PrivateRoute><CheckOut/></PrivateRoute>}/>

      </Routes>
    </div>
  );
}

export default App;
