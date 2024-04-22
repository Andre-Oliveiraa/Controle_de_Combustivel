import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import MainWindows from './routes/mainwindows';
import HomePage from './routes/homepage';

export default function App() {

  return (
    <Routes>
      <Route path='/' element={<MainWindows/>}/>
      <Route path='/homepage' element={<HomePage/>}/>
    </Routes>
  )
}
