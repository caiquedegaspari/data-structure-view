import React, { useMemo, useState } from 'react';
import { StackComponent } from './Stack';
import { GlobalStyle } from './styled';

type DataStructureTypes = 'stack'

function App() {
  const [dataStructure, setDataStructure] = useState<DataStructureTypes>('stack')
  
  const component = useMemo(() => {
    if (!dataStructure) return;
    console.log('called')
    switch(dataStructure) {
      case 'stack':
        return <StackComponent />
    }
  }, [dataStructure])
  
  return (
    <>
      <h1>Choose the Data Structure using the buttons below</h1>
      <button onClick={() => setDataStructure('stack')}>Stack</button>
      {component}
      <GlobalStyle />
    </>
  );
}

export default App;
