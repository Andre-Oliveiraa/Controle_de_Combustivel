'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import { HeaderIcon, HeaderRoot, HeaderTitle } from '../components/header';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Car, CircleFadingPlus, Trash2, Fuel as Fuelcon, HandCoins, Coins, Gauge, Construction, TicketSlash } from 'lucide-react'
import { useState } from 'react';
import { useForm } from 'react-hook-form'
import Button from 'react-bootstrap/Button';

interface PropsObjectInfo{
  finaliKm: string,
  initKm: string,
  moneyFuel: string,
  moneyLitro: string,
  nameCar: string,
  placaCar: string,
  typeFuel: string
}

export default function HomePage() {

  const [infoAll, SetInfoAll] = useState<PropsObjectInfo>()
  const [ValueFull, SetValueFull] = useState<any>()
  const [ValueForPart, SetValueForPart] = useState<any>()
  const [TotalValue, SetTotalValue] = useState<any>('0')
  const [KmInit, SetKmInit] = useState<any>()
  const [KmFinal, SetKmFinal] = useState<any>()
  const [KmRodado, SetKmRodado] = useState<any>("0")
  
  const { register, handleSubmit } = useForm()
  
  async function handleReqiterSubmit(dataForm: any) {
    SetInfoAll(dataForm)
    console.log(infoAll)
  }

  const fuel = ['Gasolina Comum', 'Gasolina Aditivada', 'Álcool - Etanol', 'Diesel']

  function TotalFull(){
    var total = ValueFull / ValueForPart
    SetTotalValue(total.toFixed(2))
  }
  
  function KmTotal(){
    var total = KmFinal - KmInit
    SetKmRodado(total.toFixed(2))
  }



  return (
    <div className='h-screen flex flex-col justify-between bg-zinc-600 font-outfit'>
      <HeaderRoot>
        <HeaderIcon src='Logo.png' />
        <HeaderTitle>Controle de Combustível</HeaderTitle>
      </HeaderRoot>

      {/* Home */}
      <form onSubmit={handleSubmit(handleReqiterSubmit)} className='w-full items-center flex flex-col px-10'>
        <div className='grid grid-cols-3 gap-3 w-full'>
          <div >
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
                  aria-describedby="km inicil"
                  required
                  {...register('nameCar')}
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
                  className='font-bold text-zinc-500 focus:text-zinc-500'
                  type="text"
                  placeholder='JTR 1S89'
                  required
                  aria-describedby="km inicil"
                  {...register('placaCar')}
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
                {...register('typeFuel')}
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
                  className='font-bold text-zinc-500 focus:text-zinc-500'
                  type="number"
                  placeholder='Ex: R$100'
                  aria-describedby="km inicil"
                  required
                  {...register('moneyFuel')}
                  min={0}
                  onChange={e => SetValueFull(e.target.value)}
                  pattern={"[0-9]+([,\.][0-9]+)?"}
                  step={"any"}
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
                  className='font-bold text-zinc-500 focus:text-zinc-500'
                  type="number"
                  placeholder='Ex: R$5,9'
                  aria-describedby="km final"
                  required
                  {...register('moneyLitro')}
                  min={0}
                  onChange={e => SetValueForPart(e.target.value)}
                  pattern={"[0-9]+([,\.][0-9]+)?"}
                  step={"any"}
                />
              </FloatingLabel>
            </InputGroup>
          </div>
          <div>
            <Form.Label className='font-bold'>Quantidade de Litro Abastecido</Form.Label>
            <InputGroup className="mb-5">
              <InputGroup.Text><Gauge /></InputGroup.Text>
              <FloatingLabel
                label='Qnt. de Litro'
              >
                <Form.Control
                  className='font-bold text-zinc-500 focus:text-zinc-500'
                  type="number"
                  placeholder='Ex: 10L'
                  aria-describedby="km final"
                  disabled
                  value={TotalValue}
                />
              </FloatingLabel>
              <Button variant='success' onClick={TotalFull}>Calcular</Button>
            </InputGroup>
          </div>
        </div>
        <div className='grid grid-cols-3 gap-3 w-full'>
        <div >
            <Form.Label className='font-bold'>Km inicial</Form.Label>
            <InputGroup className="mb-5">
              <InputGroup.Text><Car /></InputGroup.Text>
              <FloatingLabel
                label='Ex: 7km'
              >
                <Form.Control
                  className='font-bold text-zinc-500 focus:text-zinc-500'
                  type="number"
                  placeholder='Celta'
                  aria-describedby="km inicil"
                  required
                  {...register('initKm')}
                  min={0}
                 
                  onChange{e => SetKmInit(e.target.value)}
                />
              </FloatingLabel>
            </InputGroup>
          </div>
          <div >
            <Form.Label className='font-bold'>Km final</Form.Label>
            <InputGroup className="mb-5">
              <InputGroup.Text><Car /></InputGroup.Text>
              <FloatingLabel
                label='Ex: 14km'
              >
                <Form.Control
                  className='font-bold text-zinc-500 focus:text-zinc-500'
                  type="number"
                  placeholder='Celta'
                  aria-describedby="km inicil"
                  required
                  {...register('finaliKm')}
                  min={0}
                  
                  onChange{e => SetKmFinal(e.target.value)}
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
                  value={KmRodado}
                />
              </FloatingLabel>
              <Button variant='success'>Calcular</Button>
            </InputGroup>
          </div>
        </div>
        <div className='w-40 ml-auto'>
          <Button variant="success" className='mb-3 flex gap-2 items-center justify-center hover:text-green-200 w-full' type='submit'><CircleFadingPlus /><p>Cadastrar</p></Button>
          <Button variant="danger" className='mb-3 flex gap-2 items-center justify-center hover:text-red-200 w-full' type='button'><Trash2 /><p>Limpar</p></Button>
        </div>  
      </form>

      {/* Footer */}
      <footer className='h-32 bg-gray-400 w-full px-24 py-3 justify-between flex flex-col'>
        <p className='font-bold'>Desenvolvido por:</p>
        <div className='flex justify-between items-center w-full'>
          <a href="" className='font-bold text-xl outline-none hover:text-zinc-200'>Robson</a>
          <a href="" className='font-bold text-xl outline-none hover:text-zinc-200'>Wandell</a>
          <a href="" className='font-bold text-xl outline-none hover:text-zinc-200'>Igor</a>
        </div>
        <p></p>
      </footer>

    </div>
  )
}
