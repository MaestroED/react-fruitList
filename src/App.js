import './App.css';
import { Row, } from 'react-bootstrap'
import Content from './components/Content'
import 'bootstrap/dist/css/bootstrap.min.css';



function App({}) {


  

  return (
    <div className="container">
      
      
      <Row className="justify-content-center" md={4} >  <Content /> </Row>
    </div>
  );
}

export default App;
