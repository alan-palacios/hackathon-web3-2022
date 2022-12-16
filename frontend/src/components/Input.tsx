import { InputHTMLAttributes } from "react";

/* eslint-disable react/jsx-props-no-spreading */
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	value: string | number
	onChange?: (value: any) => void
	className?: string
}

export default function Input({ value, onChange = (e: string) => { }, className, ...defaultProps }: InputProps) {
	return (
		<input value={value} onChange={(e) => onChange(e.target.value)} {...defaultProps}
			className={`appearance-none bg-transparent w-full h-10 text-left ring-0 ring-transparent overflow-hidden px-1 
			focus:outline-none focus:border-gray-dark  border-b-2 ${className}`}
		/>
	)
}