import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import ContactListComponent from './components/container/contact_list';
import Notfoundpage from './pages/404/NotFoundPage'
import Loginpage from './pages/auth/LoginPage';
import Registerpage from './pages/auth/RegisterPage';
import Homepage from './pages/home/HomePage';
import Profilepage from './pages/profile/ProfilePage';

function AppRouting() {
    let loggedIn = false

  return (
   <Router>

    <Routes>
        <Route exact path='/' element={ <Homepage /> }/>
        <Route exact path='/login' element= { <Loginpage /> } />
        <Route exact path='/registration' element= {<Registerpage />}/>
        <Route exact path='/profile' element={loggedIn ? <Profilepage></Profilepage> : <Navigate to="/login" />}>
        </Route>
        <Route exact path='/contacts' element = { <ContactListComponent></ContactListComponent>} />
        <Route path='*' element={ <Notfoundpage /> }/>
    </Routes>


    
   </Router>
  );
}

export default AppRouting