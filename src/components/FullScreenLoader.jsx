import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
function FullScreenLoader() {
   return (
      <Container>
         <div
            style={{
               height: '100vh',
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center'
            }}
         >
            <Spinner animation="border">{/* <img src={logo} /> */}</Spinner>
         </div>
      </Container>
   );
}
export default FullScreenLoader;
