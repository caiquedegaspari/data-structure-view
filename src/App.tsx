import React, { useMemo, useState } from 'react';
import { StackComponent } from './Stack';
import { ButtonContainer, GlobalStyle } from './styled';
import { Queue } from './Queue';
import { LinkedList } from './Linked-list';
import { Set } from './Set';
import { Dictionary } from './Dictionary';
import { Tree } from './Tree';
import { Graph } from './Graph';

type DataStructureTypes =
	| 'stack'
	| 'queue'
	| 'linked-list'
	| 'set'
	| 'hash'
	| 'tree'
	| 'graph';

function App() {
	const [dataStructure, setDataStructure] =
		useState<DataStructureTypes>('stack');

	const component = useMemo(() => {
		if (!dataStructure) return;
		switch (dataStructure) {
			case 'stack':
				return <StackComponent />;
			case 'queue':
				return <Queue />;
			case 'linked-list':
				return <LinkedList />;
			case 'set':
				return <Set />;
			case 'hash':
				return <Dictionary />;
			case 'tree':
				return <Tree />;
			case 'graph':
				return <Graph />;
			default:
				return <h1>No Data Structure Found</h1>;
		}
	}, [dataStructure]);

	return (
		<>
			<h1>Choose the Data Structure using the buttons below</h1>
			<ButtonContainer>
				<button onClick={() => setDataStructure('stack')}>Stack</button>
				<button onClick={() => setDataStructure('queue')}>Queue</button>
				<button onClick={() => setDataStructure('linked-list')}>
					Linked-list
				</button>
				<button onClick={() => setDataStructure('set')}>Set</button>
				<button onClick={() => setDataStructure('hash')}>
					Dictionary/Hashmap
				</button>
				<button onClick={() => setDataStructure('tree')}>Tree</button>
				<button onClick={() => setDataStructure('graph')}>Graph</button>
			</ButtonContainer>

			{component}
			<GlobalStyle />
		</>
	);
}

export default App;
