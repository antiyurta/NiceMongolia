import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';
import './App.css';
import 'antd/dist/reset.css';
import './style/header.css';
import { Route, Routes } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';
import Home from './pages/Home';
import Main from './components/Main';
import About from './pages/About';
function App() {
   return (
      <>
         <NotificationContainer />
         <Routes>
            <Route path="/" element={<Main />}>
               <Route index element={<Home />} />
               <Route path="/about" element={<About />} />
            </Route>
         </Routes>
      </>
   );
}

export default App;
