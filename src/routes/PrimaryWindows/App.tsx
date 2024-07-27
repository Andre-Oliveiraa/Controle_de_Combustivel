import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HeaderIcon, HeaderRoot, HeaderTitle } from '../../components/header';
import { Github } from 'lucide-react';


export default function App() {

    return (
        <div className='w-screen h-screen flex flex-col items-center bg-slate-100 font-outfit gap-44'>

            <HeaderRoot>
                <HeaderIcon src='Logo.png' />
                <HeaderTitle>Controle de Combustível</HeaderTitle>
            </HeaderRoot>

            <p className='text-4xl w-1/2 my-1 text-justify font-extrabold'>Bem vindo, ao nosso sistema de controle de combustível que visa ajudar voçê a ter mais controle e gerenciar os seus carros e caminhões ou para planejar seus gastos na viajem. </p>
            <div className='flex flex-row justify-between w-1/2'>

                <Link to={'CadastraVeiculos'}>
                    <button className='font-semibold text-zinc-200 rounded p-3 bg-indigo-400 border-none hover:bg-indigo-500 transition-all'>Cadastra Veiculo</button>
                </Link>

                <Link to={'ControleOfCombustivel'}>
                    <button className='font-semibold text-zinc-200 rounded p-3 bg-indigo-400 border-none hover:bg-indigo-500 transition-all'>Controle de Combustivel</button>
                </Link>

            </div>
            <footer className='w-screen h-1/2 pl-20'>
                <a href="https://github.com/Andre-Oliveiraa/Controle_de_Combustivel" target='_blank' className='w-10 h-10 flex flex-row justify-center items-center rounded-full p-2 bg-zinc-600 hover:bg-zinc-400 cursor-pointer text-slate-100 hover:text-black transition-all'>
                    <Github />
                </a>
            </footer>
        </div>
    )
}
