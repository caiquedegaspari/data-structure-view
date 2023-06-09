import React, { useState } from 'react';
import { StackContainer } from './styled';
import {
	ButtonGroupContainer,
	Container,
	DefaultItem as Stack,
} from '../styled';

export function StackComponent() {
	const [stack, setStack] = useState<string[]>([]);

	const push = (value: string) => {
		setStack([...stack, `${value} ${stack.length + 1}`]);
	};

	const remove = () => {
		const items = stack;
		items.pop();
		setStack([...items]);
	};

	const clear = () => {
		setStack([]);
	};

	const size = () => {
		alert(`Actual Stack size is: ${stack.length}`);
	};

	const getFirstItem = () => {
		const items = [...stack];
		alert(`First Stack item is: ${items.pop() ?? 'Empty'}`);
	};

	const getLastItem = () => {
		const items = [...stack];
		alert(`Last Stack item is: ${items.shift() ?? 'Empty'}`);
	};

	return (
		<Container>
			<div>
				<h1>Actions</h1>
				<ButtonGroupContainer>
					<button onClick={() => push('Item')}>Add</button>
					<button onClick={remove}>Remove</button>
					<button onClick={clear}>Clear</button>
					<button onClick={size}>Size</button>
					<button onClick={getFirstItem}>Get item From Top</button>
					<button onClick={getLastItem}>Get item bottom</button>
				</ButtonGroupContainer>
			</div>
			<StackContainer>
				<h1>Stack</h1>

				{stack
					.map((item, key) => (
						<Stack key={key}>
							<p>{item}</p>
						</Stack>
					))
					.reverse()}
			</StackContainer>
		</Container>
	);
}
