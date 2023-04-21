import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Pages
import HomePage from './pages/Home/Home';
import AndroidPage from './pages/Android/Android';
import LinuxPage from './pages/Linux/LinuxPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='android-projects' element={<AndroidPage/>} />
        <Route path='linux-projects' element={<LinuxPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
