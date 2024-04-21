'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import { HeaderIcon, HeaderRoot, HeaderTitle } from './components/header';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Car, CircleFadingPlus, Trash2, Fuel, HandCoins, Coins, Gauge, Construction, TicketSlash } from 'lucide-react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

interface Object_car {
  nome: string,
  placa: string,
  km_rodado: string
}

interface Info_Fuel {
  car: Object_car
  Type: string,
  valueFuel: string,
  valueAbasta: string,
  qntFuel: string,
  km_rodado_car: number
}

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

    const objectCar: Object_car = {
      nome: nameCar,
      placa: valuePlaca,
      km_rodado: valueKmFinali
    }

    const infoAll: Info_Fuel = {
      Type: nameFuel,
      valueFuel: money,
      valueAbasta: valueFuel,
      qntFuel: qntFuel,
      km_rodado_car: valueKmTotal,
      car: objectCar
    }

    console.log(infoAll)

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
              <FloatingLabel
                label='Ex: Celta'
              >
                <Form.Control
                  className='font-bold text-zinc-400 focus:text-zinc-400'
                  type="text"
                  placeholder='Celta'
                  aria-describedby="km inicil"
                  onChange={(e) => { SetNameCar(e.target.value) }}
                  value={nameCar}
                />
              </FloatingLabel>
            </InputGroup>
          </div>
          <div>
            <Form.Label className='font-bold'>Placa</Form.Label>
            <InputGroup className="mb-5">
              <InputGroup.Text><TicketSlash /></InputGroup.Text>
              <FloatingLabel
                label='Ex: HTP6R54'
              >
                <Form.Control
                  className='font-bold text-zinc-400 focus:text-zinc-400'
                  type="text"
                  placeholder='JTR 1S89'
                  aria-describedby="km inicil"
                  onChange={(e) => { SetValuePlaca(e.target.value) }}
                  value={valuePlaca}
                />
              </FloatingLabel>
            </InputGroup>
          </div>
          <div>
            <Form.Label className='font-bold'>Tipos de Combustível</Form.Label>
            <InputGroup className="mb-5">
              <InputGroup.Text><Fuel /></InputGroup.Text>
              <FloatingLabel
                label='Ex: Diesel'
              >
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
              </FloatingLabel>
            </InputGroup>
          </div>
        </div>
        <div className='grid grid-cols-3 gap-3 w-full'>
          <div>
            <Form.Label className='font-bold'>Valor Abastecido</Form.Label>
            <InputGroup className="mb-5">
              <InputGroup.Text><HandCoins /></InputGroup.Text>
              <FloatingLabel
                label='Ex: R$ 150'
              >
                <Form.Control
                  className='font-bold text-zinc-400 focus:text-zinc-400'
                  type="number"
                  placeholder='Ex: R$100'
                  aria-describedby="km inicil"
                  onChange={(e) => { SetValueFuel(e.target.value) }}
                  value={valueFuel}
                />
              </FloatingLabel>
            </InputGroup>
          </div>
          <div>
            <Form.Label className='font-bold'>Preço por Litro</Form.Label>
            <InputGroup className="mb-5">
              <InputGroup.Text><Coins /></InputGroup.Text>
              <FloatingLabel
                label='Ex: R$5,4'
              >
                <Form.Control
                  className='font-bold text-zinc-400 focus:text-zinc-400'
                  type="number"
                  placeholder='Ex: R$5,9'
                  aria-describedby="km final"
                  onChange={(e) => { SetMoney(e.target.value) }}
                  value={money}
                />
              </FloatingLabel>
            </InputGroup>
          </div>
          <div>
            <Form.Label className='font-bold'>Quantidade de Litro Abastecido</Form.Label>
            <InputGroup className="mb-5">
              <InputGroup.Text><Gauge /></InputGroup.Text>
              <FloatingLabel
                label='Ex: 27,7L'
              >
                <Form.Control
                  className='font-bold text-zinc-400 focus:text-zinc-400'
                  type="number"
                  placeholder='Ex: 10L'
                  aria-describedby="km final"
                  onChange={(e) => { SetQntFuel(e.target.value) }}
                  value={qntFuel}
                />
              </FloatingLabel>
            </InputGroup>
          </div>
        </div>
        <div className='grid grid-cols-3 gap-3 w-full'>
          <div>
            <Form.Label className="font-bold">KM inicial</Form.Label>
            <InputGroup className="mb-5">
              <InputGroup.Text><Car /></InputGroup.Text>
              <FloatingLabel
                label='Ex: 7Km'
              >
                <Form.Control
                  className='font-bold text-zinc-400 focus:text-zinc-400'
                  type="number"
                  aria-describedby="km inicil"
                  onChange={(e) => { SetKmInit(e?.target?.value) }}
                  value={valueKmInit}
                />
              </FloatingLabel>
            </InputGroup>
          </div>
          <div>
            <Form.Label className="font-bold">KM Final</Form.Label>
            <InputGroup className="mb-5">
              <InputGroup.Text><Car /></InputGroup.Text>
              <FloatingLabel
                label='Ex: 14Km'
              >
                <Form.Control
                  className='font-bold text-zinc-400 focus:text-zinc-400'
                  type="number"
                  aria-describedby="km final"
                  onChange={(e) => { SetKmFinali(e?.target?.value) }}
                  value={valueKmFinali}
                />
              </FloatingLabel>
            </InputGroup>
          </div>
          <div>
            <Form.Label className="font-bold">KM Rodado</Form.Label>
            <InputGroup className="mb-5">
              <InputGroup.Text><Construction /></InputGroup.Text>
              <FloatingLabel
                label='KM Rodado'
              >
                <Form.Control
                  className='font-bold text-zinc-500 focus:text-zinc-500'
                  type="number"
                  aria-describedby="km final"
                  disabled
                  placeholder='0'
                  value={valueKmTotal}
                />
              </FloatingLabel>
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
      <footer className='h-32 bg-gray-400 w-full px-24 py-3 justify-between flex flex-col'>
        <p className='font-bold'>Desenvolvido por:</p>
        <div className='flex justify-between items-center w-full'>
          <a href="" className='font-bold text-xl hover:outline-none hover:text-zinc-200'>Robson</a>
          <a href="" className='font-bold text-xl hover:outline-none hover:text-zinc-200'>Wandell</a>
          <a href="" className='font-bold text-xl hover:outline-none hover:text-zinc-200'>Igor</a>
        </div>
        <p></p>
      </footer>

    </div>
  )
}
