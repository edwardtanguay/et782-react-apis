import { useState } from "react"

const url = 'https://api.dictionaryapi.dev/api/v2/entries/en';

export const ApiDictionary = () => {
	const [word, setWord] = useState('house');

	const handleGetDefinition = () => {
		alert('clicked')
	}

	return (
		<div className="flex gap-5 flex-col bg-slate-200 p-6 w-[20rem] rounded">
			<input value={word} onChange={(e) => setWord(e.target.value)} />
			<button onClick={handleGetDefinition}>Get definition</button>
			<p>(definition)</p>
		</div>
	)
}