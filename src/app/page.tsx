'use client'
import { useState } from "react";

export default function Home() {
  const [feedback, setFeedback] = useState<string | null>(null);

  return (
    <>
      {/* Top Banner Message */}
  
      {/* Navigation Bar */}
      <nav className="bg-gray-800 py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-white text-2xl font-bold">Hotjar</h1>
          <a href="#" className="text-gray-400 hover:text-white">About</a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto mt-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-8/12 px-4 mb-8">
            <img src="/shoes.png" alt="Featured Image" className="w-96 h-64 object-cover rounded" />
            <h2 className="text-4xl font-bold mt-4 mb-2">My First HotJar Post</h2>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </p>
          </div>

    
          <div className="w-full md:w-4/12 px-4 mb-8">
            <div className="border border-gray-100 px-4 py-6 rounded">
              <h3 className="text-lg font-bold mb-2">Categories</h3>
              <ul className="list-disc list-inside">
                <li><a href="#" className="text-gray-700 hover:text-gray-900">Technology</a></li>
                <li><a href="#" className="text-gray-700 hover:text-gray-900">Travel</a></li>
                <li><a href="#" className="text-gray-700 hover:text-gray-900">Food</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Feedback Section with Emojis */}
        <div className="fixed bottom-5 right-5 bg-white shadow-lg p-4 rounded-lg flex flex-col items-center">
          <p className="text-gray-700 font-bold mb-2">Feedback:</p>
          <div className="flex space-x-2">
            <button className="text-2xl" onClick={() => setFeedback("happy")}>😊</button>
            <button className="text-2xl" onClick={() => setFeedback("neutral")}>😐</button>
            <button className="text-2xl" onClick={() => setFeedback("angry")}>😠</button>
          </div>
          {feedback && <p className="text-sm mt-2">You selected: {feedback}</p>}
        </div>

      </main>
    </>
  );
}
