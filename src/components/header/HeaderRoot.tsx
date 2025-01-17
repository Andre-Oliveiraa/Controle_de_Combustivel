import { ReactNode } from "react";

interface HeaderRootProps{
  children: ReactNode
}

export function HeaderRoot({ children }: HeaderRootProps){
  return(
    <div className="w-full py-5 h-20 flex justify-center items-center gap-3 bg-zinc-700 mb-6">
      {children}
    </div>
  )
}