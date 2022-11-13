import './App.css';
import LoginPage from './Pages/LoginPage'
import Home from './Pages/Home'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import name from './Routes/LoginProtect';
import { AuthProvider } from './Context/AuthContext';
import LoginProtect from './Routes/LoginProtect';
import CaseOfReverse from './Routes/CaseOfReverse';
import CaseOfAdmin from './Routes/CaseOfAdmin';
import { RequireAuth } from 'react-auth-kit';
import Register from './Pages/Register'


function App() {
  return (
    <div className="App">
      <Router>

        <AuthProvider>

          <Routes>

            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/register' element={<Register/>}></Route>

          </Routes>
        
          </AuthProvider>

      </Router>
    </div>
  );
}

export default App;
