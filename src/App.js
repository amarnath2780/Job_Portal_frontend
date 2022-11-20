import './App.css';
import LoginPage from './Pages/LoginPage'
import Home from './Pages/Home'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';
import { UserProvider } from './Context/UserContext';
import AdminPrivetRoute from './Routes/AdminPrivetRoute';
import PrivateRoutes from './Routes/PrivateRoutes';
import CaseOfAdmin from './Routes/CaseOfAdmin'
import Register from './Pages/Register'
import Recruiter from './Pages/Recruiter'
import NewCompany from './Pages/NewCompany';
import Applications from './Pages/Applications';
import Admin from './Pages/Admin';
import AdmAdminUserView from './Pages/AdminUserView';

function App() {
  return (
    <div className="App">
      <Router>

        <AuthProvider>
        <UserProvider>
          <Routes>
              <Route element={<PrivateRoutes/>}>
                  <Route path='/' element={<Home/>} exact/>
              </Route>

              <Route element={<CaseOfAdmin/>}>
                  <Route path='/admin' element={<Admin/>} />
                  <Route path='/user-view' element={<AdmAdminUserView/>} />
              </Route>


              <Route element={<AdminPrivetRoute/>}>
                  <Route path='/recruiter' element={<Recruiter/>} exact/>
                  <Route path='/add-company' element={<NewCompany/>}/>
                  <Route path='/application' element={<Applications/>}/>
              </Route>

              <Route path='/login' element={<LoginPage/>}/>
              <Route path='/register' element={<Register/>}></Route>
            </Routes>
          </UserProvider>
        </AuthProvider> 

      </Router>
    </div>
  );
}

export default App;
