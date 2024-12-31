import React from 'react';
import Sidebar from './components/Sidebar';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="flex min-h-screen bg-gradient-to-b from-[#0a192f] to-[#020c1b] text-gray-300">
      <Sidebar />
      <main className="flex-grow p-8 space-y-32">
        <About />
        <Experience />
        <Projects />
      </main>
    </div>
  );
}

export default App;
