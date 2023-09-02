import React, { useState } from 'react'

function FilterTabs() {
  const [filterTab, setFilterTab] = useState("top");

  return (
        <>
        <div className="flex text-gray-400 w-full pb-3 mt-4">
          <button
          onClick={()=>setFilterTab("top")}
            className={`text-black pb-2 flex-1 border-b-2 font-semibold ${filterTab==="top"?"border-b-black border-b-2":"border-b-2"}`}
          >
            Top
          </button>
          <button
          onClick={()=>setFilterTab("accounts")}
            className={`text-black pb-2 flex-1 border-b-2 font-semibold ${filterTab==="accounts"?"border-b-black border-b-2":"border-b-2"}`}
          >
            Accounts
          </button>
          <button
          onClick={()=>setFilterTab("tags")}
            className={`text-black pb-2 flex-1 border-b-2 font-semibold ${filterTab==="tags"?"border-b-black border-b-2":"border-b-2"}`}
          >
            Tags
          </button>
        </div></>
  )
}

export default FilterTabs