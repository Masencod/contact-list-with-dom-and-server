import ContactList from "./ContactList"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="p-4">
        <div className="flex justify-between items-center border-b-fuchsia-500 pb-5 border-b-2">
            <h2 className="text-4xl">Contact List</h2>
            <Link to='/new-contact'>
                <button className="py-2 px-5 rounded-md bg-fuchsia-300 border-2 border-fuchsia-700 transition-all duration-300 ease-in-out hover:bg-fuchsia-500 ">add</button>
            </Link>
        </div>
        <ContactList/>
    </div>
  )
}

export default Home