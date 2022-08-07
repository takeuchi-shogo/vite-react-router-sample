import React from "react";


const PropsMessage = (props) => {

	const message = props.message
	return (
		<>
			<p>{ message }</p>
		</>
	)
}


export default PropsMessage