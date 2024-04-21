'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import { HeaderIcon, HeaderRoot, HeaderTitle } from './components/header';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Car, CircleFadingPlus, Trash2, Fuel, HandCoins, Coins, Gauge, Construction, TicketSlash } from 'lucide-react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
export default function App() {

  const [nameCar, SetNameCar] = useState('')
  const [valuePlaca, SetValuePlaca] = useState('')
  const [nameFuel, SetNameFuel] = useState('')
  const [valueFuel, SetValueFuel] = useState('')
  const [money, SetMoney] = useState('')
  const [qntFuel, SetQntFuel] = useState('')
  const [valueKmInit, SetKmInit] = useState<any>(0)
  const [valueKmFinali, SetKmFinali] = useState<any>(0)
  const [valueKmTotal, SetKmTotal] = useState(0)

  function OnClickInfo() {
    console.log(nameCar)
    console.log(valuePlaca)
    console.log(nameFuel)
    console.log(valueFuel)
    console.log(money)
    console.log(qntFuel)
    console.log(valueKmTotal)
  }

  function CalKM() {
    SetKmTotal(valueKmFinali - valueKmInit)
  }

  function onClear() {
    SetNameCar('')
    SetNameFuel('')
    SetKmInit('')
    SetValueFuel('')
    SetMoney('')
    SetQntFuel('')
    SetValuePlaca('')
    SetKmFinali('')
    SetKmTotal(0)
  }

  const fuel = ['Gasolina Comum', 'Gasolina Aditivada', 'Álcool - Etanol', 'Diesel']

  return (
    <div className='h-screen flex flex-col justify-between bg-zinc-600 font-outfit'>
      <HeaderRoot>
        <HeaderIcon src='Logo.png' />
        <HeaderTitle>Controle de Combustível</HeaderTitle>
      </HeaderRoot>

      {/* Home */}
      <div className='w-full items-center flex flex-col px-10'>
        <div className='grid grid-cols-3 gap-3 w-full'>
          <div >
            <Form.Label className='font-bold'>Veiculos</Form.Label>
            <InputGroup className="mb-5">
              <InputGroup.Text><Car /></InputGroup.Text>
              <Form.Control
                className='font-bold text-zinc-400 focus:text-zinc-400'
                type="text"
                placeholder='Celta'
                aria-describedby="km inicil"
                onChange={(e) => { SetNameCar(e.target.value) }}
                value={nameCar}
              />
            </InputGroup>
          </div>
          <div>
            <Form.Label className='font-bold'>Placa</Form.Label>
            <InputGroup className="mb-5">
              <InputGroup.Text><TicketSlash /></InputGroup.Text>
              <Form.Control
                className='font-bold text-zinc-400 focus:text-zinc-400'
                type="text"
                placeholder='JTR 1S89'
                aria-describedby="km inicil"
                onChange={(e) => { SetValuePlaca(e.target.value) }}
                value={valuePlaca}
              />
            </InputGroup>
          </div>
          <div>
            <Form.Label className='font-bold'>Tipos de Combustível</Form.Label>
            <InputGroup className="mb-5">
              <InputGroup.Text><Fuel /></InputGroup.Text>
              <Form.Select aria-label="Default select example" onChange={(e) => { SetNameFuel(e?.target?.value) }} className='font-bold'>
                <option selected>...</option>
                {fuel?.map(
                  fuel => {
                    return (
                      <option value={fuel} className='font-bold'>{fuel}</option>
                    )
                  }
                )}
              </Form.Select>
            </InputGroup>
          </div>
        </div>
        <div className='grid grid-cols-3 gap-3 w-full'>
          <div>
            <Form.Label className="font-bold">Valor Abastecido</Form.Label>
            <InputGroup className="mb-5">
              <InputGroup.Text><HandCoins /></InputGroup.Text>
              <Form.Control
                className='font-bold text-zinc-400 focus:text-zinc-400'
                type="number"
                placeholder='Ex: R$100'
                aria-describedby="km inicil"
                onChange={(e) => { SetValueFuel(e.target.value) }}
                value={valueFuel}
              />
            </InputGroup>
          </div>
          <div>
            <Form.Label className="font-bold">Preço por Litro</Form.Label>
            <InputGroup className="mb-5">
              <InputGroup.Text><Coins /></InputGroup.Text>
              <Form.Control
                className='font-bold text-zinc-400 focus:text-zinc-400'
                type="number"
                placeholder='Ex: R$5,9'
                aria-describedby="km final"
                onChange={(e) => { SetMoney(e.target.value) }}
                value={money}
              />
            </InputGroup>
          </div>
          <div>
            <Form.Label className="font-bold">Quantidade de Litro Abastecido</Form.Label>
            <InputGroup className="mb-5">
              <InputGroup.Text><Gauge /></InputGroup.Text>
              <Form.Control
                className='font-bold text-zinc-400 focus:text-zinc-400'
                type="number"
                placeholder='Ex: 10L'
                aria-describedby="km final"
                onChange={(e) => { SetQntFuel(e.target.value) }}
                value={qntFuel}
              />
            </InputGroup>
          </div>
        </div>
        <div className='grid grid-cols-3 gap-3 w-full'>
          <div>
            <Form.Label className="font-bold">KM inicial</Form.Label>
            <InputGroup className="mb-5">
              <InputGroup.Text><Car /></InputGroup.Text>
              <Form.Control
                className='font-bold text-zinc-400 focus:text-zinc-400'
                type="number"
                placeholder='Ex: 7Km'
                aria-describedby="km inicil"
                onChange={(e) => { SetKmInit(e?.target?.value) }}
                value={valueKmInit}
              />
            </InputGroup>
          </div>
          <div>
            <Form.Label className="font-bold">KM Final</Form.Label>
            <InputGroup className="mb-5">
              <InputGroup.Text><Car /></InputGroup.Text>
              <Form.Control
                className='font-bold text-zinc-400 focus:text-zinc-400'
                type="number"
                placeholder='Ex: 14Km'
                aria-describedby="km final"
                onChange={(e) => { SetKmFinali(e?.target?.value) }}
                value={valueKmFinali}
              />
            </InputGroup>
          </div>
          <div>
            <Form.Label className="font-bold">KM Rodado</Form.Label>
            <InputGroup className="mb-5">
              <InputGroup.Text><Construction /></InputGroup.Text>
              <Form.Control
                className='font-bold text-zinc-500 focus:text-zinc-500'
                type="number"
                aria-describedby="km final"
                disabled
                placeholder='0'
                value={valueKmTotal}
              />
              <Button variant='success' onClick={CalKM}>Calcular</Button>
            </InputGroup>
          </div>
        </div>
        <div className='w-40 ml-auto'>
          <Button variant="success" onClick={OnClickInfo} className='mb-3 flex gap-2 items-center justify-center hover:text-green-200 w-full'><CircleFadingPlus /><p>Cadastrar</p></Button>
          <Button variant="danger" onClick={onClear} className='mb-3 flex gap-2 items-center justify-center hover:text-red-200 w-full' ><Trash2 /><p>Limpar</p></Button>
        </div>
      </div>

      {/* Footer */}
      <footer className='h-32 bg-gray-400 w-full px-24 justify-between flex'>
        <p>Desenvolvido por:</p>
        <div className='flex justify-between items-center w-full'>
          <a href="">Robson</a>
          <a href="">VVande11</a>
          <a href="">Igor</a>
        </div>
      </footer>

    </div>
  )
}
