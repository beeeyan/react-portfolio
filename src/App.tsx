import React from 'react';
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
  const interact = useInteractJS();

  return (
    <div className='App'>
      <button onClick={() => interact.enable()}>有効化</button>
      <button onClick={() => interact.disable()}>無効化</button>
      <div
        ref={interact.ref}
        style={{
          ...interact.style,
          border: '2px solid #0489B1',
          backgroundColor: '#A9D0F5',
        }}
      >

      </div>
    </div>
  );
};

export default App;
