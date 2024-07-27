'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import { HeaderIcon, HeaderRoot, HeaderTitle } from '../../components/header';
import { ChevronLeft } from 'lucide-react'
import { Link } from 'react-router-dom';

export default function App() {

  return (
    <div className='h-screen bg-slate-100 font-outfit'>
      <HeaderRoot>
        <HeaderIcon src='Logo.png' />
        <HeaderTitle>Cadastra Veiculos</HeaderTitle>
      </HeaderRoot>

      <div className='w-24 ml-4 '>
        <Link to={'/'} >
          <button className='flex flex-row gap-2 p-1 text-red-500 border-red-300 border-2 w-24 items-center justify-center rounded-lg hover:outline-none'> <ChevronLeft /> <p className='outline-none'>Voltar</p></button>
        </Link>
      </div>

      <div className='w-24 ml-4 '>
        <Link to={'/SucessCadastro'} >
          <button className='flex flex-row gap-2 p-1 text-red-500 border-red-300 border-2 w-24 items-center justify-center rounded-lg outline-none'>Button of Test </button>
        </Link>
      </div>

    </div>
  )
}
