import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"




const NewContact = () => {
  const navigate = useNavigate()
    const API_URL = 'http://localhost:3000/contacts'
    const [contact,setContact]=useState({name: '',number: ''})
    const { name,number } = contact

    const handleOnChange = (e) => {
        setContact({...contact, [e.target.name] : e.target.value})
    }
    const handleSubmit = (e) => {
      e.preventDefault()
      const addContact = async () => {
        try {
          const data = await axios.post(API_URL, contact)
          console.log(data)
        } catch (error) {
          console.warn(error)
        }
      }
      addContact()
      setContact({name: '',number: ''})
      navigate('/')
    }
  return (
    <div className="p-5 h-screen flex flex-col justify-center items-center w-full">
        <h2
          className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-green-500 "
        >
          Pls add your new contact
        </h2>
        <form
          className="flex flex-col items-center gap-4 mt-4 p-3 w-full"
          onSubmit={handleSubmit}
        >
            <input
              className="p-2 w-3/4 bg-gray-200 border-2 rounded-lg border-black"
              type="text"
              value={name}
              name="name"
              onChange={handleOnChange}
              placeholder="Name"
            />
            <input
              className="p-2 w-3/4 bg-gray-200 border-2 rounded-lg border-black"
              type="number"
              inputMode="numeric"
              value={number}
              name="number"
              onChange={handleOnChange}
              placeholder="Phone number"
            />
            <button
              type="submit"
              className="p-4 rounded-lg bg-gray-200 border-black border-2 w-fit text-lg font-semibold"
            >
              Add Contact
            </button>
        </form>
    </div>
  )
}

export default NewContact