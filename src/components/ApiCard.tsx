import { ReactNode } from "react"

interface IProps {
	children: ReactNode;
	cardWidth?: string;
}

export const ApiCard = ({ children, cardWidth = '50rem' }: IProps) => {
	return (
		<div className="flex gap-5 flex-col bg-slate-200 p-6 w-[20rem] rounded">
			<h2>cardWidth: {cardWidth}</h2>
			{children}
		</div>
	)
}