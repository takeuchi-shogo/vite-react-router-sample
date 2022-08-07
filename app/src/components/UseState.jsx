
import { useState } from "react";


const UseState = () => {
	// 初期値の代入
	const [num, setNum] = useState(0)

	// 1追加する
	const addNumber = () => {
		console.log('useState: カウントを追加しました')
		setNum(num + 1)
	}

	return (
		<div>
			<h1>useState Sample</h1>
			<p>コンソールに</p>
			<button onClick={ addNumber }>{ num }</button>
		</div>
	)
}


export default UseState