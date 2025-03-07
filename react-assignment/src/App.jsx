import { useState } from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Counter from './components/Counter';
import './App.css';

function App() {
  return (
    <div className="text-center">
      <Header title="My React App" />
      <Profile name="John Doe" email="john@example.com" />
      <Counter />
    </div>
  );
}

export default App;
