import React, { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { instance } from '../../hook/useAxios';
import { Modal } from 'antd';

interface CreateModalProps {
    isOpen: boolean
    onClose: () => void
    accessoryEdit?: AccessoryType | null
}

interface AccessoryType {
    id: string
    name: string
    image: string
    price: string
    description: string
}

const CreateModal: React.FC<CreateModalProps> = ({ isOpen, onClose, accessoryEdit }) => {
    const queryClient = useQueryClient();

    const [name, setName] = useState<string>('')
    const [, setImage] = useState<string>('')
    const [price, setPrice] = useState<string>('')
    const [imagePreview, setImagePreview] = useState<string | null>(null)
    const [description, setDescription] = useState<string>('')

    useEffect(() => {
        if (accessoryEdit) {
            setName(accessoryEdit.name)
            setImage(accessoryEdit.image)
            setPrice(accessoryEdit.price)
            setDescription(accessoryEdit.description)
            setImagePreview(accessoryEdit.image)
        } else {
            setName('')
            setImage('')
            setPrice('')
            setDescription('')
            setImagePreview(null)
        }
    }, [accessoryEdit])

    const mutation = useMutation({
        mutationFn: (newAccessory: AccessoryType) => {
            if (accessoryEdit) {
                return instance().put(`/accessories/${newAccessory.id}`, newAccessory, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            }
            else {
                return instance().post('/accessories', newAccessory, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['accessories'] })
            onClose()
        }
    })

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        const newAccessory: AccessoryType = {
            id: accessoryEdit ? accessoryEdit.id : Math.random().toString(36).substring(7), name, image: imagePreview || '', price, description
        }
        mutation.mutate(newAccessory)
    }

    function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = () => {
                setImagePreview(reader.result as string)
                setImage(file.name)
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <Modal visible={isOpen} onCancel={onClose} width={500}>
            <h2 className="text-2xl font-bold mb-4">{accessoryEdit ? "Edit Accessory" : "Add Accessory"}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="w-full p-2 border border-gray-300 rounded" />
                <label>
                    <input name="image" type="file" accept="image/*" onChange={handleImageChange} />
                </label>
                {imagePreview && <img src={imagePreview} alt="Preview" className="w-full h-40 object-cover mb-4" />}
                <input type="text" name="price" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" className="w-full p-2 border border-gray-300 rounded" />
                <textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" className="w-full p-2 border border-gray-300 rounded" rows={4}/>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                    {accessoryEdit ? "Edit Accessory" : "Add Accessory"}
                </button>
            </form>
        </Modal>
    );
};

export default CreateModal;