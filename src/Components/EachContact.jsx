import axios from "axios"
import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

const API_URL = 'http://localhost:3000/contacts'


const EachContact = ({ contacts }) => {



    const navigate = useNavigate()
    

    // deletion function
    const handleDelete = (id) => {
        const deleteContact = async () => {
            try {
                const data = await axios.delete(`${API_URL}/${id}`)
            } catch (error) {
                console.warn(error)
                alert(`there was a error happening on deleting your contact : ${error}`)
            }
        }
        deleteContact()
    }


    //edition function
    const handleEdit = (id) => {
        navigate(`/${id}`, {state:{isEditable: true}})
    }





  return (
    <div className="flex flex-col gap-y-3">
        {contacts.length > 0 && contacts.map((e) => {
            return (
                <div
                    key={e.id}
                    className="hover:shadow-xl transition-all duration-200 ease-in-out w-full p-4 bg-gray-100 rounded-xl border border-fuchsia-400 hover:border-fuchsia-500 hover:bg-gray-200 shadow-lg flex items-center justify-between"
                >
                    <Link to={`/${e.id}`} className="flex flex-col min-[400px]:flex-row w-3/4 justify-between">
                        <div className="flex flex-col min-[400px]:flex-row w-full justify-between">
                            <span>
                                {e.name}
                            </span>
                            <span>
                                {e.number}
                            </span>
                        </div>
                    </Link>
                    <div className="flex gap-x-2">
                        <button onClick={() => handleEdit(e.id)}>
                            🖊
                        </button>
                        <button onClick={() => handleDelete(e.id)}>
                            ❌
                        </button>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default EachContact