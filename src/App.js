import './App.css';
import LoginPage from './Pages/LoginPage'
import Home from './Pages/Home'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import name from './Routes/LoginProtect';
import { AuthProvider } from './Context/AuthContext';
import LoginProtect from './Routes/LoginProtect';
import CaseOfReverse from './Routes/CaseOfReverse';
import CaseOfAdmin from './Routes/CaseOfAdmin';


function App() {
  return (
    <div className="App">
      <Router>

        <AuthProvider>

          <Routes element={<CaseOfReverse/>}>

            <Route path='/' element={<Home/>}/>

          </Routes>
          
          <Routes element={<CaseOfReverse />}>
          <Route path='/login' element={<LoginPage/>}/>
          </Routes>

          </AuthProvider>

      </Router>
    </div>
  );
}

export default App;
