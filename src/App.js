import './App.css';
import LoginPage from './Pages/LoginPage'
import Home from './Pages/Home'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';
import AdminPrivetRoute from './Routes/AdminPrivetRoute';
import PrivateRoutes from './Routes/PrivateRoutes';
import CaseOfAdmin from './Routes/CaseOfAdmin'
import Register from './Pages/Register'
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

function App() {
  
  return (
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
                  <Route path='/profile' element={<RecruiterProfilepage/>}/>
              </Route>

              <Route path='/login' element={<LoginPage/>}/>
              <Route path='/register' element={<Register/>}></Route>
            </Routes>
            </SingleJob>
        </AuthProvider> 

      </Router>
    </div>
  );
}

export default App;
