import React, { useEffect, useState } from "react";
import { Modal, Input, Button } from "antd";
import { instance } from "../../hook/useAxios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { File } from "../../assets/Icons";
import { ScooterType } from "../../service/Scooters";

interface AddModalProps {
  isOpen: boolean;
  onRequestClose: () => void
  onAddScooter: (scooter: ScooterCreate) => void
  scooterEdit?: ScooterType | null
}

interface ScooterCreate {
  id: string;
  name: string;
  image: string;
  cost: string;
  discount: string;
  maxSpeed: string;
  maxDistance: string;
  battery: string;
  chargingTime: string;
  weight: string;
}

const AddModal: React.FC<AddModalProps> = ({ isOpen, onRequestClose, scooterEdit }) => {
  const queryClient = useQueryClient()

  const [, setId] = useState<string>("")
  const [name, setName] = useState<string>("")
  const [imagePreview, setImagePreview] = useState<string | null>("")
  const [image, setImage] = useState<string>("")
  const [cost, setCost] = useState<string>("")
  const [discount, setDiscount] = useState<string>("")
  const [maxSpeed, setMaxSpeed] = useState<string>("")
  const [maxDistance, setMaxDistance] = useState<string>("")
  const [battery, setBattery] = useState<string>("")
  const [chargingTime, setChargingTime] = useState<string>("")
  const [weight, setWeight] = useState<string>("")

  useEffect(() => {
    if (scooterEdit?.id) {
      setId(scooterEdit.id)
      setName(scooterEdit.name)
      setImage(scooterEdit.image)
      setCost(scooterEdit.cost)
      setDiscount(scooterEdit.discount)
      setMaxSpeed(scooterEdit.maxSpeed)
      setMaxDistance(scooterEdit.maxDistance)
      setBattery(scooterEdit.battery)
      setChargingTime(scooterEdit.chargingTime)
      setWeight(scooterEdit.weight)
    } else {
      setId("")
      setName("")
      setImage("")
      setImagePreview(null)
      setCost("")
      setDiscount("")
      setMaxSpeed("")
      setMaxDistance("")
      setBattery("")
      setChargingTime("")
      setWeight("")
    }
  }, [scooterEdit])


  // add and edit part 
  const mutation = useMutation({
    mutationFn: (newScooter: ScooterType) => {
      if (scooterEdit) {
        return instance().put(`/scooters/${newScooter.id}`, newScooter, {
          headers: {
            'Content-Type': 'application/json',
          }
        })
      } 
      else {
        return instance().post('/scooters', newScooter, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['scooters'] })
      onRequestClose()
    }
  })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const newScooter: ScooterCreate = {
      id: scooterEdit ? scooterEdit.id : Math.random().toString(36).substring(7),
      name, image: imagePreview || "", cost, discount, maxSpeed, maxDistance, battery, chargingTime, weight
    }
    mutation.mutate(newScooter)
    onRequestClose()
  }
  // add and edit part 

  // img part 
  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>){
    const file = e.target.files?.[0]
    if(file){
      const reader = new FileReader()
      reader.onload = () => {
        setImagePreview(reader.result as string)
        setImage(file.name)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <Modal
      title={scooterEdit ? "Edit Scooter" : "Add Scooter"}
      visible={isOpen}
      onCancel={onRequestClose}
      footer={[
        <Button key="cancel" onClick={onRequestClose}>Cancel</Button>,
        <Button key="submit" type="primary" onClick={handleSubmit}>{scooterEdit ? "Update" : "Add Scooter"}</Button>
      ]}>
      <form className="space-y-4">
        <Input name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required autoComplete="off" />
        {image && <img src={image} alt="Image Preview" style={{ width: '100%', height: 'auto', marginBottom: '10px' }} />}
        <label>
          <File />
          <Input name="image" onChange={handleImageChange} placeholder="Image URL" type="file" required />
        </label>
        <Input name="cost" value={cost} onChange={(e) => setCost(e.target.value)} placeholder="Cost" required autoComplete="off" />
        <Input name="discount" value={discount} onChange={(e) => setDiscount(e.target.value)} placeholder="Discount" />
        <Input name="maxSpeed" value={maxSpeed} onChange={(e) => setMaxSpeed(e.target.value)} placeholder="Max Speed" required autoComplete="off" />
        <Input name="maxDistance" value={maxDistance} onChange={(e) => setMaxDistance(e.target.value)} placeholder="Max Distance" required autoComplete="off" />
        <Input name="battery" value={battery} onChange={(e) => setBattery(e.target.value)} placeholder="Battery" required autoComplete="off" />
        <Input name="chargingTime" value={chargingTime} onChange={(e) => setChargingTime(e.target.value)} placeholder="Charging Time" required autoComplete="off" />
        <Input name="weight" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Weight" required autoComplete="off" />
      </form>
    </Modal>
  )
}

export default AddModal