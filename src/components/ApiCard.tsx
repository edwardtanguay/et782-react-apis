import { ReactNode } from "react"

interface IProps {
	children: ReactNode;
}

export const ApiCard = ({ children }: IProps) => {
	return (
		<div className="flex gap-5 flex-col bg-slate-200 p-6 w-[20rem] rounded">
			{children}
		</div>
	)
}