'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import { HeaderIcon, HeaderRoot, HeaderTitle } from '../../components/header';
import { ChevronLeft, Info, BadgeDollarSign, Map, Locate, LocateFixed, AtSign } from 'lucide-react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

interface Estado {
  nome: string;
  cidades: string[];
}

const estados: Estado[] = [
  {
    nome: 'Acre',
    cidades: ['Rio Branco', 'Cruzeiro do Sul', 'Tarauacá', 'Senador Guiomard', 'Capixaba'],
  },
  {
    nome: 'Amapá',
    cidades: ['Macapá', 'Santana', 'Laranjal do Jari', 'Oiapoque', 'Pedra Branca do Amapari'],
  },
  {
    nome: 'Amazonas',
    cidades: ['Manaus', 'Parintins', 'Itacoatiara', 'Manacapuru', 'Presidente Figueiredo'],
  },
  {
    nome: 'Pará',
    cidades: ['Belém', 'Ananindeua', 'Marituba', 'Santarém', 'Castanhal'],
  },
  {
    nome: 'Rondônia',
    cidades: ['Porto Velho', 'Ji-Paraná', 'Ariquemes', 'Cacoal', 'Vilhena'],
  },
  {
    nome: 'Roraima',
    cidades: ['Boa Vista', 'Rorainópolis', 'Caracaraí', 'Bonfim', 'Cantá'],
  },
  {
    nome: 'Tocantins',
    cidades: ['Palmas', 'Araguaína', 'Gurupi', 'Porto Nacional', 'Paraíso do Tocantins'],
  },
];

export default function App() {

  const [estadoSelecionado, setEstadoSelecionado] = useState('');
  const [cidade1, setCidade1] = useState('');
  const [cidade2, setCidade2] = useState('');

  const handleEstadoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setEstadoSelecionado(event.target.value);
  };

  const handleCidade1Change = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const cidadeSelecionada = event.target.value;
    if (cidadeSelecionada === cidade2) {
      alert('Não é permitido escolher a mesma cidade nos dois campos!');
      return;
    }
    setCidade1(cidadeSelecionada);
  };

  const handleCidade2Change = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const cidadeSelecionada = event.target.value;
    if (cidadeSelecionada === cidade1) {
      alert('Não é permitido escolher a mesma cidade nos dois campos!');
      return;
    }
    setCidade2(cidadeSelecionada);
  };

  const getEstadosOptions = () => {
    return estados.map((estado) => (
      <option key={estado.nome} value={estado.nome}>
        {estado.nome}
      </option>
    ));
  };

  const getCidadesOptions = (estado: string) => {
    const estadoSelecionado = estados.find((e) => e.nome === estado);
    if (!estadoSelecionado) return [];

    return estadoSelecionado.cidades.map((cidade) => (
      <option key={cidade} value={cidade}>
        {cidade}
      </option>
    ));
  };

  return (
    <div className='h-screen bg-slate-100 font-outfit'>
      <HeaderRoot>
        <HeaderIcon src='Logo.png' />
        <HeaderTitle>Controle de Combustivel</HeaderTitle>
      </HeaderRoot>

      <div className='w-24 ml-4 '>
        <Link to={'/'} >
          <button className='flex flex-row gap-2 p-1 text-red-500 border-red-300 border-2 w-24 items-center justify-center rounded-lg'> <ChevronLeft /> <p className='hover:outline-none'>Voltar</p></button>
        </Link>
      </div>

      <form className='grid grid-cols-2 grid-rows-3 gap-5 justify-center mx-[34rem]'>

        <div className='h-16'>
          <Form.Label className='font-bold'>Estado</Form.Label>
          <InputGroup className="mb-5">
            <InputGroup.Text><Map /></InputGroup.Text>
            <FloatingLabel
              label='Ex: Rondônia'
            >
              <Form.Select
                aria-label="Default select example"
                className='h-full'
                defaultValue={''}
                value={estadoSelecionado}
                onChange={handleEstadoChange}
              >
                <option value="">Selecione um Cidade</option>
                {getEstadosOptions()}
              </Form.Select>
            </FloatingLabel>
          </InputGroup>
        </div>
        <div className='h-16'>
          <Form.Label className='font-bold'>Local de Partida</Form.Label>
          <InputGroup className="mb-5">
            <InputGroup.Text><Locate  /></InputGroup.Text>
            <FloatingLabel
              label='Ex: Porto Velho'
            >
              <Form.Select
                aria-label="Default select example"
                className='h-full'
                defaultValue={''}
                value={cidade1}
                onChange={handleCidade1Change}
              >
                <option value="">Selecione um Cidade</option>
                {getCidadesOptions(estadoSelecionado)}
              </Form.Select>
            </FloatingLabel>
          </InputGroup>
        </div>
        <div className='h-16'>
          <Form.Label className='font-bold'>Local de Chegada</Form.Label>
          <InputGroup className="mb-5">
            <InputGroup.Text><LocateFixed /></InputGroup.Text>
            <FloatingLabel
              label='Ex: Vilhena'
            >
              <Form.Select
                aria-label="Default select example"
                className='h-full'
                defaultValue={''}
                value={cidade2}
                onChange={handleCidade2Change}
              >
                <option value="">Selecione um Cidade</option>
                {getCidadesOptions(estadoSelecionado)}
              </Form.Select>
            </FloatingLabel>
          </InputGroup>
        </div>
        <div className='h-16'>
          <Form.Label className='font-bold'>Nº de Matricula de Carro</Form.Label>
          <InputGroup className="mb-5">
            <InputGroup.Text><Info /></InputGroup.Text>
            <FloatingLabel
              label='174591'
            >
              <Form.Control
                className='font-bold text-zinc-500 focus:text-zinc-500 h-full'
                type="text"
                placeholder='174597841'
                aria-describedby="Nº de Matricula de Carro"
                required
                maxLength={6}
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
        <div className='h-16'>
          <Form.Label className='font-bold'>Email</Form.Label>
          <InputGroup className="mb-5">
            <InputGroup.Text><AtSign  /></InputGroup.Text>
            <FloatingLabel
              label='emailexemplo@gmail.com'
            >
              <Form.Control
                className='font-bold text-zinc-500 focus:text-zinc-500 h-full'
                type="text"
                placeholder='emailexemplo@gmail.com'
                aria-describedby="Nº de Matricula de Carro"
                required
              />
            </FloatingLabel>
          </InputGroup>
        </div>
        <div className="flex justify-center flex-col items-center">
          <Link to={'/SucessControl'}>
            <button type={'submit'} className='font-semibold text-zinc-200 rounded p-3 bg-indigo-400 border-none hover:bg-indigo-500 transition-all'>Enviar para analiser</button>
          </Link>
          <Link to={'/CadastraVeiculos'}>
            <p className='text-sm text-slate-400 hover:text-cyan-500 transition-all'> Aviso! Cadastre primeiro seu veículo.</p>
          </Link>
        </div>
      </form>
    </div>
  )
}