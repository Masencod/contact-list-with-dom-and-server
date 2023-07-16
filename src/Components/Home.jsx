import ContactList from "./ContactList"
import { Link } from "react-router-dom"
import { Suspense } from "react"

const Home = () => {
  return (
    <Suspense fallback={<p>Page is Loading...</p>}>
      <div className="p-4">
          <div className="flex justify-between items-center border-b-fuchsia-500 pb-5 border-b-2">
              <h2 className="text-4xl">Contact List</h2>
              <Link to='/new-contact'>
                  <button
                    className="py-2 px-5 rounded-md bg-fuchsia-300 border-2 border-fuchsia-700 transition-all duration-300 ease-in-out font-semibold hover:bg-fuchsia-500 "
                  >
                    Add new contact
                  </button>
              </Link>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <ContactList/>
          </Suspense>
      </div>
    </Suspense>
  )
}

export default Home