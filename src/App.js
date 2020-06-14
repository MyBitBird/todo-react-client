import React from 'react';
import Tasks from './pages/tasks'
import 'fontsource-roboto';
import {ApiLoading} from './services/api'

function App() {
  return (
    <div className="App">
      <ApiLoading />
      <Tasks />
    </div>
  );
}

export default App;
