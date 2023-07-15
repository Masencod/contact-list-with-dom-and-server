import { useEffect, useState } from "react"
import EachContact from "./EachContact"
import axios from "axios"


const ContactList = () => {
    const API_URL = 'http://localhost:3000/contacts'
    const [contacts,setContacts]=useState({})
    useEffect(() => {
        const getContacts = async ( ) => {
            try {
                const { data } = await axios.get(API_URL)
                console.log(data)
                setContacts(data)
            } catch (error) {
                console.warn(error)
            }

        }
        getContacts()
    }, [])
  return (
    <div className="mt-4 p-2">
        <EachContact contacts={contacts}/>
    </div>
  )
}

export default ContactList