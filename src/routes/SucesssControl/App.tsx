'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import { HeaderIcon, HeaderRoot, HeaderTitle } from '../../components/header';
import { ChevronLeft, BadgeCheck } from 'lucide-react'
import { Link } from 'react-router-dom';

export default function App() {

  return (
    <div className='h-screen bg-slate-100 font-outfit flex flex-col justify-between pb-80 items-center'>
      <HeaderRoot>
        <HeaderIcon src='Logo.png' />
        <HeaderTitle>Controle de Combustivel</HeaderTitle>
      </HeaderRoot>

      <div className='flex flex-col items-center'>
        <div className='font-semibold flex flex-row justify-center items-center gap-2 text-green-600 text-2xl'>   
          <BadgeCheck size={30} />
          <p>Enviado para analise</p>
        </div>
        <div>
          <p className='font-semibold text-slate-400'>Resposta sera enviada pelo email</p>
        </div>
      </div>

      <div className='w-24 ml-4 '>
        <Link to={'/'} >
          <button className='flex flex-row gap-2 p-1 text-red-500 border-red-300 border-2 w-24 items-center justify-center rounded-lg'> <ChevronLeft /> <p className='hover:outline-none'>Voltar</p></button>
        </Link>
      </div>

    </div>
  )
}
