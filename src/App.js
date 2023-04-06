import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'antd/dist/reset.css';
import './style/header.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Main from './components/Main';
import About from './pages/About';
function App() {
   return (
      <Routes>
         <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
         </Route>
      </Routes>
   );
}

export default App;
