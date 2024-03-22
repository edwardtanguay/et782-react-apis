import { useState } from "react"

export const ApiNasa = () => {
	const [date, setDate] = useState('');

	const handleGetPhoto = () => {
		alert(date);
	}

	return (
		<form>
			<div className="flex gap-5 flex-col bg-slate-200 p-6 w-[20rem] rounded">
				<input value={date} onChange={(e) => setDate(e.target.value)} />
				<button onClick={(e) => handleGetPhoto(e)}>Get photo of the day</button>
				<p>(photo and explanation)</p>
			</div>
		</form>
	)
}