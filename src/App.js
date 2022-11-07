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
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import ExpertDetail from './Pages/Home/ExpertDetail/ExpertDetail';


function App() {
  return (
    <div className='App.css'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/checkout/:checkoutId' element={
          <PrivateRoute>
            <CheckOut></CheckOut>
          </PrivateRoute>
        } />
        <Route path='/expert/:expertId' element={<ExpertDetail></ExpertDetail>}/>
        <Route path='*' element={<NotFound></NotFound>}/>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
