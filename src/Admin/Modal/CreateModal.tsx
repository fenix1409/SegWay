import React, { useState } from 'react';
import Modal from '../../components/CustomModal';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { instance } from '../../hook/useAxios';

interface CreateModalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface AccessoryType {
    id: string;
    name: string;
    image: string;
    price: string;
    description: string;
}

const CreateModal: React.FC<CreateModalProps> = ({ isOpen, onClose }) => {
    const queryClient = useQueryClient()

    const [name, setName] = useState<string>('')
    const [image, setImage] = useState<string>('')
    const [price, setPrice] = useState<string>('')
    const [description, setDescription] = useState<string>('')

    const mutation = useMutation({
        mutationFn: (newAccessory: AccessoryType) => {
            return instance().post('/accessories', newAccessory, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['accessories'] })
            onClose()
        }
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const newAccessory: AccessoryType = {
            id: Math.random().toString(36).substring(7),
            name, image, price, description,
        }
        mutation.mutate(newAccessory)
    }

    return (
        <Modal isOpen={isOpen} setIsOpen={onClose} width={500}>
            <h2 className="text-2xl font-bold mb-4">Add Accessory</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="w-full p-2 border border-gray-300 rounded" required/>
                <input type="text" name="image" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image URL" className="w-full p-2 border border-gray-300 rounded" required/>
                <input type="text" name="price" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" className="w-full p-2 border border-gray-300 rounded" required/>
                <textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" className="w-full p-2 border border-gray-300 rounded" required/>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Add Accessory</button>
            </form>
        </Modal>
    );
};

export default CreateModal;