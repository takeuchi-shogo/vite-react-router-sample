import { createContext, useState } from "react";
import Context from './context/ContextA'

export const UserContext = createContext()
export const HobbyContext = createContext()

// useContextとは、Context機能をよりシンプルに使えるようになった機能。
// 親からPropsで渡されていないのに、Contextに収容されているデータへよりシンプルにアクセスできるというものです。
const UseContext = () => {

	const [user, setUser] = useState({
		name: 'john',
		age: 22
	})

	const [hobby, setHobby] = useState('カラオケ')

	// import順 ContextA -> ContextB -> ContextC(ここで表示) -> UseContext
	return (
		<div>
			<h1>useContext Sample</h1>
			{/* userContext.Providerを作成 */}
			<UserContext.Provider value={ user } >
				<HobbyContext.Provider value={ hobby }>
					<Context/>
				</HobbyContext.Provider>
			</UserContext.Provider>
		</div>
	)
}

export default UseContext