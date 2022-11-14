import './App.css';
import LoginPage from './Pages/LoginPage'
import Home from './Pages/Home'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import name from './Routes/LoginProtect';
import { AuthProvider } from './Context/AuthContext';
import LoginProtect from './Routes/LoginProtect';
import AdminPrivetRoute from './Routes/AdminPrivetRoute';
import PrivateRoutes from './Routes/PrivateRoutes';
import { RequireAuth } from 'react-auth-kit';
import Register from './Pages/Register'
import Recruiter from './Pages/Recruiter'


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
