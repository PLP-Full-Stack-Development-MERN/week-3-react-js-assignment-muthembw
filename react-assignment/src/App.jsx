import React from 'react';
import Header from './components/Header';  
import Counter from './components/Counter';
import Profile from './components/Profile';
import "/src/all-css/Counter.css";  // ✅ Correct CSS path
import "/src/all-css/Header.css";   // ✅ Correct CSS path
import "/src/all-css/Profile.css";  // ✅ Correct CSS path

const App = () => {
  return (
    <div>
      <Header />
      <Counter />
      <div className="player-details">
        <Profile name="Bridget Masila" email="masilabridget6@gmail.com" />
        <Profile name="Max Wairimu" email="wairimumax@gmail.com" />
        <Profile name="Joel Joe" email="joejoe@gmail.com" />
      </div>
    </div>
  );
};

export default App;
