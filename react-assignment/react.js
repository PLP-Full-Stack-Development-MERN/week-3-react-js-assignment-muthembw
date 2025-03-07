import { useState } from "react";

// Header Component
const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4 text-center text-xl font-bold">
      React.js Fundamentals Assignment
    </header>
  );
};

// Profile Component
const Profile = ({ name, email }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md text-center">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-600">{email}</p>
    </div>
  );
};

// Counter Component
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-center">
      <h2 className="text-lg font-semibold">Counter: {count}</h2>
      <button
        onClick={() => setCount(count + 1)}
        className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg shadow-md"
      >
        Increment
      </button>
    </div>
  );
};

// App Component
const App = () => {
  return (
    <div className="min-h-screen bg-gray-200 p-6 flex flex-col items-center space-y-6">
      <Header />
      <Profile name="John Doe" email="john.doe@example.com" />
      <Counter />
    </div>
  );
};

export default App;
