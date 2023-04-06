import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
// import Footer from './Footer';
import Header from './Header';
import { useEffect, useState } from 'react';
import FullScreenLoader from './FullScreenLoader';
import Footer from './Footer';
function Main() {
   const [preloader, setPreloader] = useState(false);
   useEffect(() => {
      setPreloader(true);
      const timer = setTimeout(() => {
         setPreloader(false);
      }, 100);
      return () => clearTimeout(timer);
   }, []);
   if (preloader) {
      return <FullScreenLoader />;
   }
   return (
      <div>
         <Header />
         <div style={{ backgroundColor: '#F7F8FA' }}>
            <Outlet />
         </div>
         <Footer />
      </div>
   );
}
export default Main;
