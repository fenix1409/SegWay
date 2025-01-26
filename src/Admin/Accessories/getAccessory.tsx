import { useState } from "react"
import CreateModal from "../Modal/CreateModal"
import { instance } from "../../hook/useAxios"
import { useQuery } from "@tanstack/react-query"
import { AccessoryType } from "../../service/Accessory"

const GetAccessory = () => {
  const [showModal, setShowModal] = useState(false)

  const { data: accessories, isLoading, error } = useQuery<AccessoryType[]>({
    queryKey: ['accessories'],
    queryFn: async () => {
      const response = await instance().get('/accessories')
      return response.data
    }
  })
  console.log(accessories);

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
            <p className="text-gray-700">Cost: {accessory.price}</p>
            <p className="text-gray-700">Max Speed: {accessory.description}</p>
            {/* <button onClick={() => handleEdit(accessory)} className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Edit</button> */}
          </div>
        ))}
      </div>
      <CreateModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  )
}

export default GetAccessory