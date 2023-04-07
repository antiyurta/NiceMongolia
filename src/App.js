import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'antd/dist/reset.css';
import './style/header.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Main from './components/Main';
import About from './pages/About';
//
import DMain from './pages/dashboard/Main';
import Dashboard from './pages/dashboard/Dashboard';
import Cargo from './pages/dashboard/Cargo';
//
function App() {
   return (
      <Routes>
         <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
         </Route>
         <Route path="/dashboard" element={<DMain />}>
            <Route index element={<Dashboard />} />
            <Route path="/dashboard/cargo" element={<Cargo />} />
         </Route>
      </Routes>
   );
}

export default App;
