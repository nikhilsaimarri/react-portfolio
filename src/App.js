import React, { useState } from 'react';
import './App.css';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-colors">
        <div className="flex justify-between items-center p-6">
          <h1 className="text-2xl font-bold">Nikhil Sai Marri</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded"
          >
            {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>

        <div className="flex flex-col items-center mt-8 px-6">
          <img
            src="/profile.jpg"
            alt="Nikhil Sai Marri"
            className="w-48 h-48 rounded-full shadow-lg mb-4"
          />
          <h2 className="text-xl font-semibold">Cybersecurity Student | Backend Developer</h2>
          <p className="text-center mt-2 max-w-xl">
            Seeking a Fall 2025 internship to apply my skills in backend, security, and cloud-native technologies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
