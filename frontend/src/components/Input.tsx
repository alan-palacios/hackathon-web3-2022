import { InputHTMLAttributes } from "react";

/* eslint-disable react/jsx-props-no-spreading */
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	value: string | number
	onChange?: (value: any) => void
	className?: string
}

export default function Input({ value, onChange = (e: string) => { }, className, ...defaultProps }: InputProps) {
	return (
		<input placeholder="Search" value={value} onChange={(e) => onChange(e.target.value)} {...defaultProps}
			className={`appearance-none bg-black bg-opacity-0 w-full h-10 px-2 border-l-0 border-r-0 border-t-0 mb-5
			focus:outline-none focus:border-gray-dark  border-2 ${className}`}
		/>
	)
}