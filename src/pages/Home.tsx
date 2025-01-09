import { useState } from "react";
import Scooters, { ScooterType } from "../service/Scooters";

const Home = () => {
  const [selectedScooter, setSelectedScooter] = useState<ScooterType | null>(null)

  return (
    <div className="">
      <div className="px-[210px] bg-gray-600">
        <Scooters setSelectedScooter={setSelectedScooter} />
      </div>
      {/* Selected scooter information part */}
      {selectedScooter && (
        <div className="mt-8 p-4 bg-gray-800 text-white rounded">
          <h2 className="text-2xl font-bold mb-4">{selectedScooter.name} informations</h2>
          <p><strong>Cost:</strong> ${selectedScooter.cost}</p>
          <p><strong>Discount:</strong> {selectedScooter.discount}</p>
          <p><strong>Max Speed:</strong> {selectedScooter.maxSpeed}</p>
          <p><strong>Max Distance:</strong> {selectedScooter.maxDistance}</p>
          <p><strong>Battery:</strong> {selectedScooter.battery}</p>
          <p><strong>Charging Time:</strong> {selectedScooter.chargingTime}</p>
          <p><strong>Weight:</strong> {selectedScooter.weight}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
