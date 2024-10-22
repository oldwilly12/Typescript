import { MouseEventHandler, ReactNode } from "react";

interface ButtonPros {
    children: ReactNode,
    handleClick: MouseEventHandler<HTMLButtonElement>
}

export default function Button({ children, handleClick }: ButtonPros) {
    return(
        <button onClick={ handleClick } className="button is-primary">{children}</button>
    )
}