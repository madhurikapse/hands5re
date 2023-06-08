import './App.css';
 import Pur from './Pur';
import Hoc from './Hoc';
import Pcomp from './Pcomp';
import React, { PureComponent } from 'react'

function App() {
  return (
    <div>
      <Pcomp/>
      {<Pur/> }

    </div>
  );
}

export default App;
