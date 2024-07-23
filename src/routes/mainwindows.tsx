import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HeaderIcon, HeaderRoot, HeaderTitle } from '../components/header';



export default function MainWindows() {

  return (
    <div className='w-screen h-screen flex flex-col items-center bg-zinc-600 font-outfit justify-between'>

      <HeaderRoot>
        <HeaderIcon src='Logo.png' />
        <HeaderTitle>Controle de Combustível</HeaderTitle>
      </HeaderRoot>

      <p className='text-4xl w-1/2 my-1 text-justify'>Bem vindo, ao nosso sistema de controle de combustível que visa ajudar voçê a ter mais controle e gerenciar os seus carros e caminhões ou para planejar seus gastos na viajem. </p>
      <Link to={'homepage'} className='my-4'> 
      <Button variant='success'>Começar Trabalho</Button>
     </Link>
    </div>
  )
}
