import { useEffect, useState } from "react"
import EachContact from "./EachContact"
import axios from "axios"
import { useDebounce } from "@uidotdev/usehooks"


const ContactList = () => {
    const API_URL = 'http://localhost:3000/contacts'
    const [contacts,setContacts] = useState({})
    const searchResult = useDebounce(contacts, 300)
    useEffect(() => {
        const getContacts = async ( ) => {
            try {
                const { data } = await axios.get(API_URL)
                setContacts(data)
            } catch (error) {
                console.warn(error)
                alert(`an error has been catched in fetching : ${error}`)
            }

        }
        getContacts()
    }, [searchResult])
  return (
    <div className="mt-4 p-2">
        {contacts.length > 0 ? <EachContact contacts={contacts}/> : <div>Loading Contacts...</div>}
    </div>
  )
}

export default ContactList