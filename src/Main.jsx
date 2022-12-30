import React, {useState} from 'react'
import { MyDropdown } from './utils/Dropdown';
import { MyTable } from './utils/MyTable';
import Searchbar from './components/Searchbar';
import {data} from './utils/data.jsx'

const Main = () => {
  
  const [database, setdatabase] = useState(data)
  const [searchTerm, setSearchTerm] = useState('');
  console.log(searchTerm)
  const filterOut = (arr) => {
    arr.filter((val) => {
      if (searchTerm === ''){ 
        return database} else { 
      if (val.customerName.toLowerCase().includes(searchTerm.toLowerCase()) || (val.orderId.toLowerCase().includes(searchTerm.toLowerCase()))
      ) setdatabase(val); return database
        }
    })
  }
  return (
    <div className="flex w-screen md:flex-row flex-col h-screen transaction-height duration-75 ease-out">
    <div className="flex flex-row w-screen h-screen my-0">
<div className="w-[210px] sticky shadow-lg h-screen overflow-y-scroll no-scrollbar">
sidebar
    </div>
    <div className="w-7/10 mx-7">
      
    
    <div className="text-black font-semibold text-lg justify-center">
      Order Details
    </div>
    <Searchbar
    handlesearch={setSearchTerm}
    />
      <div className="max-w-screen-xl mx-auto my-6 sticky">
    <MyTable 
    dataFilter={filterOut}
    className="max-w-screen-md max-h-min"
    
    />
    

    </div>
    </div>
    
    
    
    </div>
    </div>
    
  )
}

export default Main