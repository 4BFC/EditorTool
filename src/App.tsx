import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Page/Main/components/Main';
import Editor from './Page/Editor/components/Editor';

import './App.scss';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='editor' element={<Editor />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
