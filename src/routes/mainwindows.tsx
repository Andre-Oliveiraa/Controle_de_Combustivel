import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function MainWindows() {

  return (
    <div>
     <h1>Ola Mundo</h1>
     <Link to={'homepage'}>
      <Button variant='success'>Button Test</Button>
     </Link>
    </div>
  )
}
