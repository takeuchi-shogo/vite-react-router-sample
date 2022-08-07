import React from "react";

import Child from "../components/Children"
import PropsMessage from "../components/PropsMessage";

const Message = () => {

	const message = 'このメッセージはPropsで送られています' 

	return (
		<>
			<PropsMessage message={ message } />
			<Child color="blue">これはchildrenで渡されています</Child>
		</>
	)
}


export default Message