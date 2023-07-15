import { useEffect } from "react"


const EachContact = ({ contacts }) => {
  return (
    <div className="flex flex-col gap-y-3">
        {contacts.length > 1 && contacts.map((e) => {
            return (
                <div key={e.id} className="w-full p-4 bg-gray-100 rounded-xl shadow-lg flex items-center justify-between"> 
                    <div className="flex flex-col min-[400px]:flex-row w-3/4 justify-between">
                        <span>
                            {e.name}
                        </span>
                        <span>
                            {e.number}
                        </span>
                    </div>
                    <div className="flex gap-x-2">
                        <button>
                            🖊
                        </button>
                        <button>
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