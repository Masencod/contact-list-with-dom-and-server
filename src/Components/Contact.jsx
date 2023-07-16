import axios from "axios"
import { useEffect, useState } from "react"
import { Link,useNavigate,useParams,useLocation } from "react-router-dom"

const Contact = () => {

    const [data, setData] = useState("")


    
    // api link
    const API_URL = 'http://localhost:3000/contacts'
    
    const navigate = useNavigate()
    const param = useParams()
    const location = useLocation()
    const isEditable = () => {
        if (location.state == null) {
            return false
        } else {
            return location.state.isEditable
        }
    } 


    const [contact,setContact] = useState({name: '',number: '',id: param.id})
    const { name,number } = contact
    
    useEffect(() => {
        const getData = async ( ) => {
            try {
                const { data } = await axios.get(`${API_URL}/${param.id}`)
                setData(data)
            } catch (er) {
                console.warn(er)
                alert(`there was a error with getting your data : ${er}`)
            }
        }
        getData()
    }, [])
    

    const handleOnChange = (e) => {
        setContact({...contact, [e.target.name] : e.target.value})
    }



    const handleSubmit = (e) => {
        e.preventDefault()
        const patchContact = async () => {
          try {
            const data = await axios.patch(`${API_URL}/${param.id}`, contact)
            console.log(data)
          } catch (error) {
            console.warn(error)
            alert(`there was an error editing your contact : ${error}`)
          }
        }
        patchContact()
        setContact({name: '',number: ''})
        navigate('/')
      }

      


  return (
    <div className="flex flex-col min-h-screen items-center w-full">
        <div
            className="w-full border-b p-4"
        >
            <button
                className="bg-gray-100 border border-fuchsia-600 p-3 rounded-md hover:bg-fuchsia-400 transition-all duration-200 ease-in-out"
                onClick={() => navigate('/')}
            >
                 Go back Home

            </button>
        </div>
        {data.id ? 
            <div
                className="w-full h-[90vh] flex flex-col items-center justify-center"
                id="mid"
            > 
            {isEditable() ? <form
                    className="p-5 max-w-3xl bg-gray-100 rounded-xl shadow-xl border border-gray-200 flex flex-col gap-4 items-center"
                    onSubmit={handleSubmit}
                >
                                        <span className="">
                        <div
                        className="flex flex-col items-center gap-2"
                        >
                        <span>Set your new name :</span>
                        <input
                            className="p-2 w-3/4 bg-gray-200 border-2 rounded-lg border-black"
                            type="text"
                            value={name}
                            name="name"
                            onChange={handleOnChange}
                            placeholder="Name"/>
                        </div>
                    </span>
                    <span className="">
                        <div
                        className="flex flex-col items-center gap-2"
                        >
                        <span>Set your new Number :</span>
                        <input
                            className="p-2 w-3/4 bg-gray-200 border-2 rounded-lg border-black"
                            type="number"
                            inputMode="numeric"
                            value={number}
                            name="number"
                            onChange={handleOnChange}
                            placeholder="Phone number"/>
                        </div>
                    </span>
                    <button
                        type="submit"
                        className="p-2 rounded-lg bg-gray-200 border-black border-2 w-fit text-lg hover:bg-gray-300 transition-all duration-200 ease-in-out"
                    >
                        Submit
                    </button>
                    <span className="">
                        Contact id:  {data.id}
                    </span>
                </form>
                
                :   <div 
                    className="p-5 max-w-3xl bg-gray-100 rounded-xl shadow-xl border border-gray-200 flex flex-col gap-4 items-center"
                >
                    <span className="">
                        <span>Contact name: {data.name}</span>
                    </span>
                    <span className="">
                        <span>Contact number: {data.number}</span>
                    </span>
                    <span className="">
                        Contact id:  {data.id}
                    </span>
                </div>}
            </div>
            : <p className="mt-10">Data is Loading...</p>}
    </div>
  )
}

export default Contact








