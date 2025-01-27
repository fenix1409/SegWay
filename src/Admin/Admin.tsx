import { useState } from "react";
import GetScooters from "./Scootes/getScooters";
import GetAccessory from "./Accessories/getAccessory";

const Admin = () => {
    const [showScooters, setShowScooters] = useState(false) 
    const [showAccessory, setShowAccessory] = useState(false) 

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Users</a></li>
              <li><a href="#" className="hover:underline">Settings</a></li>
              <li><a href="#" className="hover:underline">Logout</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Users</h2>
            <p className="text-gray-700">Manage users and their permissions.</p>
            <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">View Users</button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Scooters</h2>
            <p className="text-gray-700">Configure Scooters.</p>
            <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700" onClick={() => setShowScooters(!showScooters)}>
              {showScooters ? 'Hide Scooters' : 'View Scooters'}
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Accessories</h2>
            <p className="text-gray-700">Generate Accessories.</p>
            <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700" onClick={() => setShowAccessory(!showAccessory)}>
              {showAccessory ? "Hide Accessories" : "View Accessories"}
            </button>
          </div>
        </div>
        {showScooters && <GetScooters/>}
        {showAccessory && <GetAccessory/>}
      </main>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          &copy; 2023 Admin Dashboard. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Admin;