import { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { instance } from '../../hook/useAxios';
import AddModal from '../Modal/AddModal';
import toast from 'react-hot-toast';

interface ScooterType {
    id: string
    name: string
    image: string
    cost: string
    discount: string
    maxSpeed: string
    maxDistance: string
    battery: string
    chargingTime: string
    weight: string
}

const GetScooters = () => {
    const [showModal, setShowModal] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState<ScooterType | null>(null)
    const queryClient = useQueryClient()

    const { data: scooters, isLoading, error } = useQuery<ScooterType[]>({
        queryKey: ['scooters'],
        queryFn: async () => {
            const response = await instance().get('/scooters')
            return response.data
        }
    })

    const handleAddScooter = async (scooter: ScooterType) => {
        try {
            await instance().post('/scooters', scooter)
            queryClient.invalidateQueries({ queryKey: ['scooters'] })
            setShowModal(false)
        } catch (error) {
            toast.error('Error adding scooter:')
        }
    }

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error loading scooters</div>

    // edit part 
    function handleEdit(scooterEdit: ScooterType) {
        setSelectedProduct(scooterEdit)
        setShowModal(true)
    }

    return (
        <div className="mt-8">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold mb-4">Scooters List</h2>
                <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700" onClick={() => setShowModal(true)}>Add Scooter</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
                {scooters?.map((scooter) => (
                    <div key={scooter.id} className="bg-white p-6 rounded-lg shadow-md">
                        <img src={scooter.image} alt={scooter.name} className="w-full h-40 mb-4" />
                        <h3 className="text-xl font-bold mb-2">{scooter.name}</h3>
                        <p className="text-gray-700">Cost: {scooter.cost}</p>
                        <p className="text-gray-700">Max Speed: {scooter.maxSpeed}</p>
                        <p className="text-gray-700">Max Distance: {scooter.maxDistance}</p>
                        <p className="text-gray-700">Battery: {scooter.battery}</p>
                        <p className="text-gray-700">Charging Time: {scooter.chargingTime}</p>
                        <p className="text-gray-700">Weight: {scooter.weight}</p>
                        <button onClick={() => handleEdit(scooter)} className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Edit</button>
                    </div>
                ))}
            </div>
            <AddModal isOpen={showModal} onRequestClose={() => setShowModal(false)} onAddScooter={handleAddScooter} scooterEdit={selectedProduct}/>
        </div>
    );
};

export default GetScooters;