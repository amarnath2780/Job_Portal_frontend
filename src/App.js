import './App.css';
import LoginPage from './Pages/LoginPage'
import Home from './Pages/Home'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';
import AdminPrivetRoute from './Routes/AdminPrivetRoute';
import PrivateRoutes from './Routes/PrivateRoutes';
import CaseOfAdmin from './Routes/CaseOfAdmin'
import Register from './Pages/Login/Register'
import Recruiter from './Pages/Recruiter'
import NewCompany from './Pages/NewCompany';
import Applications from './Pages/Applications';
import Admin from './Pages/Admin';
import AdmAdminUserView from './Pages/AdminUserView';
import AdminAddSkill from './Pages/Admin/AdminAddSkill';
import ListSkill from './Pages/Admin/ListSkill';
import PostJob from './Pages/PostJob';
import AddRequest from './Pages/AddRequest';
import Profile from './Pages/User/Profile';
import RecruiterProfilepage from './Pages/Recruiter/RecruiterProfilepage';
import SingleJob from './Context/JobContext'
import JobDetails from './Components/HomePage/JobDetails';
import ListRequest from './Pages/Admin/ListRequest';
import Login from './Pages/Login/Login';
import Otp from './Pages/Login/Otp';
import PosedJob from './Pages/Recruiter/PosedJob';
import Shortlist from './Pages/Recruiter/Shortlist';
import {PayPalScriptProvider} from '@paypal/react-paypal-js';



function App() {
  
  return (
    <PayPalScriptProvider options={{ "client-id" : process.env.REACT_APP_PAYPAL_CLIENT_ID }}>
    <div className="App">
      <Router>

        <AuthProvider>
        <SingleJob>
          <Routes>
              <Route element={<PrivateRoutes/>}>
                  <Route path='/' element={<Home/>} exact/>
                  <Route path='/profile' element={<Profile/>} exact/>
                  <Route path='/job-details' element={<JobDetails/>} exact/>
              </Route>

              <Route element={<CaseOfAdmin/>}>
                  <Route path='/admin' element={<Admin/>} />
                  <Route path='/Users' element={<AdmAdminUserView/>} />
                  <Route path='/add-view' element={<AdminAddSkill/>} />
                  <Route path='/Skill' element={<ListSkill/>} />
                  <Route path='/requests' element={<ListRequest/>}/>
              </Route>


              <Route element={<AdminPrivetRoute/>}>
                  <Route path='/page' element={<Recruiter/>} exact/>
                  <Route path='/add-company' element={<NewCompany/>}/>
                  <Route path='/application' element={<Applications/>}/>
                  <Route path='/post-job' element={<PostJob/>}/>
                  <Route path='/request-add' element={<AddRequest/>}/>
                  <Route path='/rec-profile' element={<RecruiterProfilepage/>}/>
                  <Route path='/post' element={<PosedJob/>}/>
                  <Route path='/Shortlist' element={<Shortlist/>}/>
              </Route>

              <Route path='/login' element={<Login/>}/>
              <Route path='/register' element={<Register/>}></Route>
              <Route path='/verify' element={<Otp/>}></Route>
            </Routes>
            </SingleJob>
        </AuthProvider> 

      </Router>
    </div>
    </PayPalScriptProvider>
  );
}

export default App;
