interface HeaderIconProps{
  src: string
}

export function HeaderIcon({ src }:HeaderIconProps){
  return(
    <img src={src} alt="" className='w-20'/>
  )
}