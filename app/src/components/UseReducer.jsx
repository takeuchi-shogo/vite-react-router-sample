import { useReducer } from "react"


// グローバルな初期値
const initialState = 0

//reducer関数を作成
//countStateとactionを渡して、新しいcountStateを返すように実装する
const reducerFunc = (countState, action) => {
	//reducer関数にincrement、increment、reset処理を書く
	//どの処理を渡すかはactionを渡すことによって判断する
	switch (action) {
		case 'increment':
			return countState + 1
		case 'decrement':
			return countState - 1
		case 'reset':
			return initialState
		default:
			return countState
	}
}

// 状態管理のためのフックで、useStateと似たような機能。useStateはuseReducerに内部実装されています。
// (state, action) => newState という型のreducer を受け取り、現在のstateとdispatch関数の両方を返します。
const UseReducer = () => {
	//作成したreducerFunc関数とcountStateをuseReducerに渡す
	//useReducerはcountStateとdispatchをペアで返すので、それぞれを分割代入
	const [count, dispatch] = useReducer(reducerFunc, initialState)

	//カウント数とそれぞれのactionを実行する<button/>を設置する
	return (
		<>
			<h1>useReducer Sample</h1>

			<h2>カウント:{ count }</h2>
			<div>
				<button onClick={() => dispatch('increment')}>increment</button>
				<button onClick={() => dispatch('decrement')}>decrement</button>
				<button onClick={() => dispatch('reset')}>reset</button>
			</div>
		</>
	)
}

export default UseReducer