
import { useEffect, useState } from "react"

// useEffectを使うと、useEffectに渡された関数はレンダーの結果が画面に反映された後に動作します。
// つまりuseEffectとは、「関数の実行タイミングをReactのレンダリング後まで遅らせるhook」です。

// 副作用の処理（DOMの書き換え、変数代入、API通信などUI構築以外の処理）を関数コンポーネントで扱えます。
// クラスコンポーネントでのライフサイクルメソッドに当たります。

// ・componentDidMount
// ・componentDidUpdate
// ・componentWillUnmount
const UseEffect = () => {

	const [count, setCount] = useState(0)

	const EffectFunc = () => {
		setCount(count + 1)
	}

	// 第二引数が空の場合、レンダリング時に2回動作される（仕様）
	useEffect(() => {
		console.log('useEffect: レンダリングされました'),
		[]
	})

	return (
		<>
			<h1>useEffect Sample</h1>
			<p>レンダリング時コンソールにログがでます</p>
			<p>{ count }回クリックされました</p>
			<button onClick={ EffectFunc }>クリック</button>
		</>
	)
}


export default UseEffect