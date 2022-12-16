import React, { ButtonHTMLAttributes } from 'react'

/* eslint-disable react/jsx-props-no-spreading */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	/** Button content */
	label: string
	/** Width full */
	width?: string
	/** append styling */
	className?: string
	/** Button type */
	color?: string
}

export default function Button({ label, className, width, color, ...defaultProps }: ButtonProps) {
	return (
		<button className={`bg-${color} px-10 w-${width} ${className}`}
			{...defaultProps}>
			{label}
		</button>
	)
}