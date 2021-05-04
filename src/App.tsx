import React from 'react';
import {useEffect} from 'react';
// import logo from './logo.svg';
import './App.css';
import {useInteractJS} from './hooks';


/**
 * App function
 * @return {jsx}
 */
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

/**
 * App function
 * @return {React.FC}
 */
const App: React.FC = () => {
  const initPositionB = {
    width: 100,
    height: 100,
    x: 100,
    y: 0,
  };
  const initPositionC = {
    width: 100,
    height: 100,
    x: 200,
    y: 0,
  };
  const initPositionD = {
    width: 100,
    height: 100,
    x: 0,
    y: 100,
  };
  const initPositionE = {
    width: 100,
    height: 100,
    x: 100,
    y: 100,
  };
  const initPositionF = {
    width: 100,
    height: 100,
    x: 200,
    y: 100,
  };
  const initPositionG = {
    width: 100,
    height: 100,
    x: 0,
    y: 200,
  };
  const initPositionH = {
    width: 100,
    height: 100,
    x: 100,
    y: 200,
  };
  const initPositionJ = {
    width: 100,
    height: 100,
    x: 300,
    y: 200,
  };
  const interactA = useInteractJS();
  const interactB = useInteractJS(initPositionB);
  const interactC = useInteractJS(initPositionC);
  const interactD = useInteractJS(initPositionD);
  const interactE = useInteractJS(initPositionE);
  const interactF = useInteractJS(initPositionF);
  const interactG = useInteractJS(initPositionG);
  const interactH = useInteractJS(initPositionH);
  const interactJ = useInteractJS(initPositionJ);

  useEffect(() => {
    // interactG.disable();
    // console.log(interactJ.positionName);
    console.log('test');
  }, [interactJ.position]);


  return (
    <div className='App'>
      <button onClick={() => interactA.enable()}>有効化</button>
      <button onClick={() => interactA.disable()}>無効化</button>
      {/* A (0,0) */}
      <div
        ref={interactA.ref}
        style={{
          ...interactA.style,
          border: '2px solid #0489B1',
          backgroundColor: '#A9D0F5',
        }}
      >
        A
      </div>
      {/* B (100,0) */}
      <div
        ref={interactB.ref}
        style={{
          ...interactB.style,
          border: '2px solid #0489B1',
          backgroundColor: '#A9D0F5',
        }}
      >
        B
      </div>
      {/* C (200,0) */}
      <div
        ref={interactC.ref}
        style={{
          ...interactC.style,
          border: '2px solid #0489B1',
          backgroundColor: '#A9D0F5',
        }}
      >
        C
      </div>
      {/* D (0,100) */}
      <div
        ref={interactD.ref}
        style={{
          ...interactD.style,
          border: '2px solid #0489B1',
          backgroundColor: '#A9D0F5',
        }}
      >
        D
      </div>
      {/* E (100,100) */}
      <div
        ref={interactE.ref}
        style={{
          ...interactE.style,
          border: '2px solid #0489B1',
          backgroundColor: '#A9D0F5',
        }}
      >
        E
      </div>
      {/* F (200,100) */}
      <div
        ref={interactF.ref}
        style={{
          ...interactF.style,
          border: '2px solid #0489B1',
          backgroundColor: '#A9D0F5',
        }}
      >
        F
      </div>
      {/* G (0,200) */}
      <div
        ref={interactG.ref}
        style={{
          ...interactG.style,
          border: '2px solid #0489B1',
          backgroundColor: '#A9D0F5',
        }}
      >
        G
      </div>
      {/* H (100,200) */}
      <div
        ref={interactH.ref}
        style={{
          ...interactH.style,
          border: '2px solid #0489B1',
          backgroundColor: '#A9D0F5',
        }}
      >
        H
      </div>
      {/* I (200,200) */}
      <div
        ref={interactJ.ref}
        style={{
          ...interactJ.style,
          border: '2px solid #0489B1',
          backgroundColor: '#A9D0F5',
        }}
      >
        {interactJ.position.x}
        I
      </div>
    </div>
  );
};

export default App;
