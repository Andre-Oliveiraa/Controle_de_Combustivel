'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import { HeaderIcon, HeaderRoot, HeaderTitle } from '../../components/header';
import { ChevronLeft, BadgeCheck, Info, BadgeDollarSign } from 'lucide-react'
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

export default function App() {
  const [localPartida, setLocalPartida] = useState('');
  const [localChegada, setLocalChegada] = useState('');
  const [matricula, setMatricula] = useState('');
  const [valorAbastecer, setValorAbastecer] = useState('');
  const [id, setId] = useState('');
  const [cadastroSucesso, setCadastroSucesso] = useState(false);
  const [partida, setPartida] = useState('');
  const [chegada, setChegada] = useState('');
  const cidades = [
    'São Paulo',
    'Rio de Janeiro',
    'Belo Horizonte',
    'Brasília',
    'Curitiba',
    'Porto Alegre',
    'Recife',
    'Salvador',
    'Fortaleza',
    'Goiânia',
  ];


  return (
    <div className='h-screen bg-slate-100 font-outfit'>
      <HeaderRoot>
        <HeaderIcon src='Logo.png' />
        <HeaderTitle>Controle de Combustivel</HeaderTitle>
      </HeaderRoot>

      <div className='w-24 ml-4 '>
        <Link to={'/'} >
          <button className='flex flex-row gap-2 p-1 text-red-500 border-red-300 border-2 w-24 items-center justify-center rounded-lg'> <ChevronLeft/> <p className='hover:outline-none'>Voltar</p></button>
        </Link>
      </div>

      { cadastroSucesso ? (
        <div className='font-semibold flex flex-row justify-center items-center gap-2 text-green-600 text-2xl'>
          <BadgeCheck size={30}/>
          <p>Cadastro Feito com Sucesso</p>
        </div>
      ) : (
        <form className='grid grid-cols-1 gap-4 justify-center w-1/2 m-auto'>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Form.Label>Local de Partida:</Form.Label>
              <Form.Select value={partida} onChange={(e) => setPartida(e.target.value)}>
                {cidades.map((cidade) => (
                  <option key={cidade} value={cidade}>
                    {cidade}
                  </option>
                ))}
              </Form.Select>
            </div>
            <div>
              <Form.Label>Local de Chegada:</Form.Label>
              <Form.Select value={chegada} onChange={(e) => setChegada(e.target.value)}>
                {cidades.map((cidade) => (
                  <option key={cidade} value={cidade}>
                    {cidade}
                  </option>
                ))}
              </Form.Select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
            <Form.Label className='font-bold'>Nº de Matricula de Carro</Form.Label>
            <InputGroup className="mb-5">
              <InputGroup.Text><Info /></InputGroup.Text>
              <FloatingLabel
                label='174597841'
              >
                <Form.Control
                  className='font-bold text-zinc-500 focus:text-zinc-500 h-16'
                  type="text"
                  placeholder='174597841'
                  aria-describedby="Nº de Matricula de Carro"
                  required
                />
              </FloatingLabel>
            </InputGroup>
            </div>
            <div>
            <Form.Label className='font-bold'>Valor para Abastecer</Form.Label>
            <InputGroup className="mb-5">
              <InputGroup.Text><BadgeDollarSign /></InputGroup.Text>
              <FloatingLabel
                label='Ex: 100R$'
                >  
                <Form.Control
                  min={0}
                  className='font-bold text-zinc-500 focus:text-zinc-500 h-16'
                  type="number"
                  placeholder='174597841'
                  aria-describedby="Valor para Abastecer"
                  required
                />
              </FloatingLabel>
            </InputGroup>
            </div>
          </div>
          <div className="flex justify-center">
            <Link to={'/SucessControl'}>
          <button type={'submit'} className='font-semibold text-zinc-200 rounded p-3 bg-indigo-400 border-none hover:bg-indigo-500 transition-all'>Cadastro de Veiculo </button>
          </Link>
          </div>
        </form>
      )}

      
    </div>
  )
}