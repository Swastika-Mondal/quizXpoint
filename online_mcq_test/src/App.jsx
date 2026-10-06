import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FrontPage from './online_mcq_test/FrontPage';
import EndPage from './online_mcq_test/EndPage';
import Login from './online_mcq_test/Login';
import Exam from './online_mcq_test/Exam';
import NavBar from './online_mcq_test/NavBar';
import Registration from './online_mcq_test/Registration';
import Logout from './online_mcq_test/Logout';
import Contact from './online_mcq_test/Contact';
import ErrorPage from './online_mcq_test/ErrorPage';
import { useAuth } from './online_mcq_test/store/auth';
import Search from './online_mcq_test/Search';
import AboutUs from './online_mcq_test/AboutUs';
import Team from './online_mcq_test/Team';
import FAQ from './online_mcq_test/FAQ';
// import ReadPage from './online_mcq_test/ReadPage';

function App() {
  const {isLoggedIn} = useAuth()
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<FrontPage/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/team' element={<Team/>}/>
          <Route path='/faq' element={<FAQ/>}/>
          {isLoggedIn?
            <>
              <Route path='/result' element={<EndPage/>}/>
              <Route path='/exam' element={<Exam/>}/>
              <Route path='/start' element={<Search/>}/>
              {/* <Route path='/read' element={<ReadPage/>}/> */}
              <Route path='/logout' element={<Logout/>}/>
            </>
            :
            <>
              <Route path='/login' element={<Login/>}/>
              <Route path='/registration' element={<Registration/>}/>
            </>
          }
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/*' element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;