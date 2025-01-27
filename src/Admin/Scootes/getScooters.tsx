import { useState } from 'react';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { instance } from '../../hook/useAxios';
import AddModal from '../Modal/AddModal';
import toast, { Toaster } from 'react-hot-toast';
import { Modal } from 'antd';

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
    const [openModal, setOpenModal] = useState(false)
    const [scooterToDelete, setScooterToDelete] = useState<ScooterType | null>(null)
    const queryClient = useQueryClient()

    const { data: scooters } = useQuery<ScooterType[]>({
        queryKey: ['scooters'],
        queryFn: async () => {
            const response = await instance().get('/scooters')
            return response.data
        }
    })

    // add and edit part 
    const handleAddScooter = async (scooter: ScooterType) => {
        try {
            await instance().post('/scooters', scooter)
            queryClient.invalidateQueries({ queryKey: ['scooters'] })
            setShowModal(false)
        } catch (error) {
            toast.error('Error adding scooter:')
        }
    }

    const handleEditScooter = async (scooter: ScooterType) => {
        try {
            await instance().put(`/scooters/${scooter.id}`, scooter)
            queryClient.invalidateQueries({ queryKey: ['scooters'] })
            setShowModal(false)
        } 
        catch (error) {
            toast.error('Error editing scooter:')
        }
    }
    // add and edit part 

    // delete part 
    const deleteMutation = useMutation({
        mutationFn: (scooterId: string) => {
            return instance().delete(`/scooters/${scooterId}`)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['scooters'] })
            setOpenModal(false)
            toast.success('Scooter deleted successfully')
        },
        onError: () => {
            toast.error('Error deleting scooter')
        }
    })

    const handleDelete = () => {
        if (scooterToDelete) {
            deleteMutation.mutate(scooterToDelete.id)
        }
    }

    const confirmDelete = (scooter: ScooterType) => {
        setScooterToDelete(scooter)
        setOpenModal(true)
    }
    // delete part 

    const handleEdit = (scooterEdit: ScooterType) => {
        setSelectedProduct(scooterEdit)
        setShowModal(true)
    }

    return (
        <div className="mt-8">
            <Toaster position="top-center" reverseOrder={false}/>
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold mb-4">Scooters List</h2>
                <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700" onClick={() => setShowModal(true)}>Add Scooter</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
                {scooters?.map((scooter) => (
                    <div key={scooter.id} className="bg-white p-6 rounded-lg shadow-md">
                        <img src={scooter.image} alt={scooter.name} className="w-full h-40 mb-4 object-contain" />
                        <h3 className="text-xl font-bold mb-2">{scooter.name}</h3>
                        <p className="text-gray-700">Cost: {scooter.cost}</p>
                        <p className="text-gray-700">Max Speed: {scooter.maxSpeed}</p>
                        <p className="text-gray-700">Max Distance: {scooter.maxDistance}</p>
                        <p className="text-gray-700">Battery: {scooter.battery}</p>
                        <p className="text-gray-700">Charging Time: {scooter.chargingTime}</p>
                        <p className="text-gray-700">Weight: {scooter.weight}</p>
                        <div className="flex items-center gap-[25px]">
                            <button onClick={() => handleEdit(scooter)} className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Edit</button>
                            <button onClick={() => confirmDelete(scooter)} className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
            <AddModal isOpen={showModal} onRequestClose={() => setShowModal(false)} onAddScooter={selectedProduct ? handleEditScooter : handleAddScooter} scooterEdit={selectedProduct} />
            <Modal title="Confirm Delete" open={openModal} onOk={handleDelete} onCancel={() => setOpenModal(false)}>
                <p>Are you sure you want to delete this scooter?</p>
            </Modal>
        </div>
    );
};

export default GetScooters;