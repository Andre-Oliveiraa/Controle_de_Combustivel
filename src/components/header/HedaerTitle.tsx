import { ReactNode } from "react";

interface HeaderTitleProps{
  children: ReactNode
}

export function HeaderTitle({ children }: HeaderTitleProps){
  return(
    <h1 className=" text-3xl text-zinc-300 font-bold">
      {children}
    </h1>
  )
}