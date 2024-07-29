'use client'

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Car, Fuel as Fuelcon, CalendarDays, TicketSlash, ChevronLeft, Info, IterationCw } from 'lucide-react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HeaderIcon, HeaderRoot, HeaderTitle } from '../../components/header';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


export default function App() {

  const [id, setId] = useState('');
  const gerarId = () => {
    const novoId = Math.floor(100000 + Math.random() * 900000);
    setId(novoId.toString());
  };
  useEffect(() => {
    gerarId();
  }, []);

  const fuel = ['Gasolina Comum', 'Gasolina Aditivada', 'Álcool - Etanol', 'Diesel']
  
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

      <div>
        <form action="" className='grid grid-cols-2 grid-rows-3 gap-3 mx-[34rem]'>
          <div>
            <Form.Label className='font-bold'>Veiculos</Form.Label>
            <InputGroup className="mb-5">
              <InputGroup.Text><Car /></InputGroup.Text>
              <FloatingLabel
                label='Ex: Celta'
              >
                <Form.Control
                  className='font-bold text-zinc-500 focus:text-zinc-500'
                  type="text"
                  placeholder='Celta'
                  aria-describedby="Veiculo"
                  required
                />
              </FloatingLabel>
            </InputGroup>
          </div>
          <div>
            <Form.Label className='font-bold'>Ano</Form.Label>
            <InputGroup className="mb-5">
              <InputGroup.Text><CalendarDays /></InputGroup.Text>
              <FloatingLabel
                label='Ex: 21/22'
              >
                <Form.Control
                  className='font-bold text-zinc-500 focus:text-zinc-500'
                  type="text"
                  placeholder='21/22'
                  aria-describedby="Ano"
                  required
                />
              </FloatingLabel>
            </InputGroup>
          </div>
          <div>
            <Form.Label className='font-bold'>Placa</Form.Label>
            <InputGroup className="mb-5">
              <InputGroup.Text><TicketSlash /></InputGroup.Text>
              <FloatingLabel
                label='Ex: HTJ2346'
              >
                <Form.Control
                  className='font-bold text-zinc-500 focus:text-zinc-500'
                  type="text"
                  placeholder='HTJ2346'
                  aria-describedby="Placa"
                  required
                />
              </FloatingLabel>
            </InputGroup>
          </div>
          <div>
            <Form.Label className='font-bold'>Tipos de Combustível</Form.Label>
            <InputGroup className="mb-5">
              <InputGroup.Text><Fuelcon /></InputGroup.Text>
              <FloatingLabel
                label='Ex: Diesel'
              >
                <Form.Select
                  aria-label="Default select example"
                  className='font-bold text-zinc-500'
                  defaultValue={''}
                >
                  <option selected className='font-bold text-zinc-500'>...</option>
                  {fuel?.map(
                    fuel => {
                      return (
                        <option value={fuel} className='font-bold text-zinc-500'>{fuel}</option>
                      )
                    }
                  )}
                </Form.Select>
              </FloatingLabel>
            </InputGroup>
          </div>
          <div>
            <Form.Label className='font-bold'>ID</Form.Label>
            <InputGroup className="mb-5 flex flex-row">
              <InputGroup.Text><Info/></InputGroup.Text>
              <FloatingLabel
                label='Nº De Matricula'
              >
                <Form.Control
                  className='font-bold text-zinc-500 focus:text-zinc-500'
                  type="number"
                  placeholder='Ex: 10L'
                  aria-describedby="km final"
                  disabled
                  value={id}
                />
              </FloatingLabel>
              <button onClick={gerarId} type={'button'} className='px-2'><IterationCw /></button>
            </InputGroup>
            <InputGroup className='flex flex-row items-center gap-2 justify-center'>
              <InputGroup.Radio />
              <Form.Label className='font-bold text-sm text-zinc-400'>Estou ciente da importância do n° de matricula</Form.Label>
            </InputGroup>
          </div>

          <div className=' h-full ml-4 w-full flex flex-row justify-center items-center'>
            <Link to={'/SucessCadastro'} >
              <button type={'submit'} className='font-semibold text-zinc-200 rounded p-3 bg-indigo-400 border-none hover:bg-indigo-500 transition-all'>Cadastra Veiculo </button>
            </Link>
          </div>
        </form> 
      </div>
    </div>
  )
}