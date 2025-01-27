import { useState } from "react"
import { instance } from "../../hook/useAxios"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import CreateModal from "../Modal/CreateModal";
import { Modal } from "antd";
import toast from "react-hot-toast";
import { AccessoryType } from "../../service/Accessory";

interface AccessoryEdit {
  id: string
  name: string
  image: string
  price: string
  description: string
}
const GetAccessory = () => {
  const [showModal, setShowModal] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const queryClient = useQueryClient()
  const [accessoryToDelete, setAccessoryToDelete] = useState<AccessoryType | null>(null)
  const [selectedProduct, setSelectedProduct] = useState<AccessoryEdit | null>(null)

  const { data: accessories } = useQuery<AccessoryEdit[]>({
    queryKey: ['accessories'],
    queryFn: async () => {
      const response = await instance().get('/accessories')
      return response.data
    }
  })

  // update part 
  function handleUpdate(accessoryEdit: AccessoryEdit) {
    setSelectedProduct(accessoryEdit)
    setShowModal(true)
  }

  // delete part 
  const deleteMutation = useMutation({
    mutationFn: (accessoryId: string) => {
      return instance().delete(`/accessories/${accessoryId}`)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['accessories'] })
      setOpenModal(false)
      toast.success('Accessory deleted successfully')
    },
    onError: () => {
      toast.error('Error deleting accessory')
    }
  })

  function handleDelete() {
    if (accessoryToDelete) {
      deleteMutation.mutate(accessoryToDelete.id)
    }
  }

  function confirmDelete(accessory: AccessoryEdit) {
    setAccessoryToDelete(accessory)
    setOpenModal(true)
  }
  return (
    <div className="mt-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold mb-4">Accessory List</h2>
        <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700" onClick={() => setShowModal(true)}>Add accessory</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
        {accessories?.map((accessory) => (
          <div key={accessory.id} className="bg-white p-6 rounded-lg shadow-md">
            <img src={accessory.image} alt={accessory.name} className="w-full h-40 mb-4" />
            <h3 className="text-xl font-bold mb-2">{accessory.name}</h3>
            <p className="text-gray-700">Price: {accessory.price}</p>
            <p className="text-gray-700">Description: {accessory.description}</p>
            <div className="flex items-center gap-[25px]">
              <button onClick={() => handleUpdate(accessory)} className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Edit</button>
              <button onClick={() => confirmDelete(accessory)} className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-blue-700">Delete</button>
            </div>
          </div>
        ))}
      </div>
      <CreateModal isOpen={showModal} onClose={() => setShowModal(false)} accessoryEdit={selectedProduct} />
      <Modal title="Confirm Delete" open={openModal} onOk={handleDelete} onCancel={() => setOpenModal(false)}>
        <p>Are you sure you want to delete this accessory?</p>
      </Modal>
    </div>
  )
}

export default GetAccessory