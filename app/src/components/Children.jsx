const Children = (props) => {
	const contentStyle = {
		color: props.color,
	}
	return (
		<p style={contentStyle}>{ props.children }</p>
	)
}

export default Children