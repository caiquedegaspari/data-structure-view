import React, { useState } from 'react';
import {
	ButtonGroupContainer,
	Container,
	DefaultItem as QueueItem,
} from '../styled';
import { QueueContainer, TitleContainer } from './styled';

export function Queue() {
	const [queue, setQueue] = useState<string[]>([]);

	const enqueue = () => {
		setQueue([...queue, `Item ${queue.length}`]);
	};

	const dequeue = () => {
		const toDequeue = queue;
		toDequeue.shift();
		setQueue([...toDequeue]);
	};

	const front = () => {
		alert(queue[0]);
	};

	const end = () => {
		alert(queue[queue.length - 1]);
	};

	const size = () => {
		alert(`Queue size is: ${queue.length}`);
	};

	return (
		<Container>
			<div>
				<h1>Actions</h1>
				<ButtonGroupContainer>
					<button onClick={enqueue}>Enqueue</button>
					<button onClick={dequeue}>Dequeue</button>
					<button onClick={front}>Queue Front</button>
					<button onClick={end}>Queue End</button>
					<button onClick={size}>Size</button>
				</ButtonGroupContainer>
			</div>
			<TitleContainer>
				<h1>Queue</h1>
				<QueueContainer>
					{queue
						.map((item, key) => (
							<QueueItem key={key}>
								<p>{item}</p>
							</QueueItem>
						))
						.reverse()}
				</QueueContainer>
			</TitleContainer>
		</Container>
	);
}
