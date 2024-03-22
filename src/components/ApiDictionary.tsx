import { useState } from "react"

export const ApiDictionary = () => {
	const [word, setWord] = useState('house');

	return (
		<div className="flex gap-5 flex-col bg-slate-200 p-6 w-[20rem] rounded">
			<input value={word} onChange={(e) => setWord(e.target.value)} />
			<button>Get definition</button>
			<p>(definition)</p>
		</div>
	)
}