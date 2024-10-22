import { ChangeEventHandler } from "react"

interface InputPrps{
    placeholder: string
    handleChange:ChangeEventHandler<HTMLInputElement>
    name: string
    value: string
}

export default function Input({placeholder, handleChange, name, value}: InputPrps) {
    return (
        <input
        value = {value}
        name = {name}
        placeholder={placeholder}
        onChange={handleChange} />
    )
}