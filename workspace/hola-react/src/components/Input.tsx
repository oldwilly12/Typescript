import { ChangeEventHandler } from "react"

interface InputPrps{
    placeholder: string
    handleChange:ChangeEventHandler<HTMLInputElement>
    name: string
}

export default function Input({placeholder, handleChange, name}: InputPrps) {
    return (
        <input
        name = {name}
        placeholder={placeholder}
        onChange={handleChange} />
    )
}