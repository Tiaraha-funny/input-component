function Button(props) {
	console.log('props', props);
	const label = props.label || props.children;
	let classes = props.variant ? `btn btn--${props.variant}` : 'btn';
	if (props.disableShadow) {
		classes = `${classes} btn--disableshadow`;
	}
	if (props.size) {
		classes = `${classes} btn--${props.size}`;
	}
	if (props.color) {
		classes = `${classes} btn--${props.color}`;
	}
	return (
		<button className={classes} disabled={props.disabled}>
			{props.startIcon ? <Icon name={props.startIcon} /> : ''}
			{label}
			{props.endIcon ? <Icon name={props.endIcon} align="right" /> : ''}
		</button>
	);
}


//-------------------------------------------------------------------------------------
<main>
			<h1>Button component</h1>
			{`<Button />`}
			<Button>Hello World</Button>
			<br />
			{`<Button variant="outline" />`}
			<Button label="Hello Onja" variant="outline"></Button>
			<br />
			{`<Button variant="text" />`}
			<Button variant="text">Variant text</Button>
			<br />
			{`<Button disableShadow />`}
			<Button disableShadow>Disabled Shadow</Button>
			<br />
			{`<Button disabled />`}
			<Button disabled>Disabled</Button>
			{`<Button variant="text" disabled />`}
			<Button variant="text" disabled>
				Disabled text
			</Button>
			<br />
			{`<Button startIcon="add-cart" />`}
			<Button startIcon="add-cart">Add Cart</Button>
			<br />
			{`<Button endIcon="download" />`}
			<Button endIcon="download">Download</Button>
			<br />
			<div className="container">
				<div>
					{`<Button size="sm" />`}
					<Button size="sm">Small</Button>
				</div>
				<div>
					{`<Button size="md" />`}
					<Button size="md">Medium</Button>
				</div>
				<div>
					{`<Button size="lg" />`}
					<Button size="lg">Large</Button>
				</div>
			</div>
			<div className="container">
				<div>
					{`<Button color="default" />`}
					<Button color="default">Default color</Button>
				</div>
				<div>
					{`<Button color="primary" />`}
					<Button color="primary">Primary Color</Button>
				</div>
				<div>
					{`<Button color="secondary" />`}
					<Button color="secondary">Secondary Color</Button>
				</div>
				<div>
					{`<Button color="danger" />`}
					<Button color="danger">Danger Color</Button>
				</div>
			</div>

			<br />
		</main>