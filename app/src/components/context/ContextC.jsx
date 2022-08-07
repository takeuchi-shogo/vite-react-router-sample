
import { useContext } from "react";

import { HobbyContext, UserContext } from "../UseContext"

const ContextC = () => {

	const user = useContext(UserContext)
	const hobby = useContext(HobbyContext)

	return (
		<p>{ user.name }{ user.age }歳です。趣味は{ hobby }です</p>
	)
}

export default ContextC