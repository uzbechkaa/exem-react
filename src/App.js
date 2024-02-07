import './App.css';
import { BrowserRouter, Routes, Route , Switch, Router, HashRouter}   from 'react-router-dom';
import Header from "./components/Header/header";
import Home from "./components/pages/Home/home";
import Courses from "./components/pages/Courses/Courses";
import CoursesOpen from './components/pages/CoursesOpen/CoursesOpen';
import Login from "./components/pages/SginPage/Login";
import SignUp  from './components/pages/SginPage/SignUp';
import Footer from "./components/Header/footer";


function App() {
  return (  
      <div className="container">

          <HashRouter>
        <Header/>
        
             <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/courses" element={<Courses />} />
               <Route path="/coursesopen" element={<CoursesOpen />} />
               <Route path="/signup" element={<SignUp />} />
               <Route path="/login" element={<Login />} />
             </Routes>

        <Footer/>
          </HashRouter>
       

      </div>
  );
}

export default App;
