import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import PrimaryWindows from './routes/PrimaryWindows/App';
import ControleOfCombustivel  from './routes/ControleOfCombustivel/App';
import CadastraVeiculos  from './routes/CadastraVeiculos/App';

export default function App() {

  return (
    <Routes>
      <Route path='/' element={<PrimaryWindows/>}/>
      <Route path='/ControleOfCombustivel' element={<ControleOfCombustivel/>}/>
      <Route path='/CadastraVeiculos' element={<CadastraVeiculos/>}/>
    </Routes>
  )
}
