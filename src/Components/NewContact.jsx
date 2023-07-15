import { useState } from "react"


const NewContact = () => {
    const [contact,setContact]=useState({name: '',number: ''})
    const { name,number } = contact

    const handleOnChange = (e) => {
        setContact({...contact, [e.target.name] : e.target.value})
    }
  return (
    <div className="p-5">
        <h2>Add new contact</h2>
        <form className="flex flex-col gap-4 mt-4" >
            <input className="w-80 p-2  bg-gray-200 border-2 rounded-lg border-black" type="text" value={name} name="name" onChange={handleOnChange}/>
            <input className="w-80 p-2 bg-gray-200 border-2 rounded-lg border-black" type="text" inputMode="numeric" value={number} name="number" onChange={handleOnChange}/>
        </form>
    </div>
  )
}

export default NewContact