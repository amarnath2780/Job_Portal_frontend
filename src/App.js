import './App.css';
import LoginPage from './Pages/LoginPage'
import Home from './Pages/Home'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';
import AdminPrivetRoute from './Routes/AdminPrivetRoute';
import PrivateRoutes from './Routes/PrivateRoutes';
import Register from './Pages/Register'
import Recruiter from './Pages/Recruiter'
import NewCompany from './Pages/NewCompany';
import Applications from './Pages/Applications';


function App() {
  return (
    <div className="App">
      <Router>

        <AuthProvider>


          <Routes>



            <Route element={<PrivateRoutes/>}>
                <Route path='/' element={<Home/>} exact/>
           </Route>

            <Route element={<AdminPrivetRoute/>}>
                <Route path='/recruiter' element={<Recruiter/>} exact/>
                <Route path='/add-company' element={<NewCompany/>}/>
                <Route path='/application' element={<Applications/>}/>
            </Route>

            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/register' element={<Register/>}></Route>

          </Routes>
        
          </AuthProvider>

      </Router>
    </div>
  );
}

export default App;
