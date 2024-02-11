import * as React from 'react';
import {Routes, Route, Navigate, BrowserRouter} from 'react-router-dom';
import Home from './components/Home';

/**
 * Home function
 * @return {jsx}
 */
export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
