import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
	size?: 'sm' | 'md' | 'lg';
	children: React.ReactNode;
}

export function Button({
	variant = 'primary',
	size = 'md',
	className = '',
	children,
	...props
}: ButtonProps) {
	const baseStyles =
		'inline-flex items-center justify-center font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

	const variants = {
		primary: 'bg-accent text-primary hover:bg-[#C49F27] focus:ring-accent',
		secondary:
			'bg-primary text-secondary hover:bg-[#2E1F18] focus:ring-primary toggle-dark',
		outline:
			'border-2 border-primary text-primary hover:bg-primary hover:text-secondary',
		ghost: 'bg-transparent text-primary hover:bg-primary/10',
	};

	const sizes = {
		sm: 'h-9 px-4 text-sm',
		md: 'h-11 px-6 text-base',
		lg: 'h-14 px-8 text-lg',
	};

	return (
		<button
			className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
			{...props}
		>
			{children}
		</button>
	);
}
