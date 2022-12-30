import React, {useState, useRef} from 'react'

const Searchbar = ({handlesearch}) => {
 
  return (
    <>
        <div className="flex w-full justify-start items-center p-3 pl-4 overflow-hidden flex-row">
    <input 
    type="text"
    onChange={(e)=> handlesearch(e.target.value)}
    className="h-[46px] w-3/5 border-2 border-slate-200 my-4 rounded-lg" />
    
      {/* <MyDropdown/> */}
      <div className="grid px-0 grid-cols-2 justify-items-stretch w-2/5 ">
      <button className="w-1/3 flex flex-row mx-auto my-auto h-[46px] border-slate-200 border-2 rounded-lg">
      <svg className="align-middle" width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.5">
      <path d="M22 6.5H16" stroke="#0F191A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M6 6.5H2" stroke="#0F191A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10 10C11.933 10 13.5 8.433 13.5 6.5C13.5 4.567 11.933 3 10 3C8.067 3 6.5 4.567 6.5 6.5C6.5 8.433 8.067 10 10 10Z" stroke="#0F191A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M22 17.5H18" stroke="#0F191A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8 17.5H2" stroke="#0F191A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M14 21C15.933 21 17.5 19.433 17.5 17.5C17.5 15.567 15.933 14 14 14C12.067 14 10.5 15.567 10.5 17.5C10.5 19.433 12.067 21 14 21Z" stroke="#0F191A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      </svg>
      filters
      </button>
      <button className="w-2/3 flex flex-row m-2 h-[46px] border-slate-200 border-2 rounded-lg">
      today
      </button>
      {/* <button className="w-1/2">Filter</button>
      <button className="w-1/2">Filter</button> */}
      </div>
      </div>
    </>
  )
}

export default Searchbar