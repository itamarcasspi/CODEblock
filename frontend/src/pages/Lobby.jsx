import React from 'react'
import Titlebar from '../components/Titlebar'
import Codeblock from '../components/Codeblock'

const Home = () => {
  const id__ = '1'
  return (
    <div className="flex flex-col items-center">
    <Titlebar />
    <div className="grid grid-cols-1 sm:grid-cols-2 md-lg:grid-cols-3 gap-4 p-4 w-full max-w-7xl">
      {/* Add multiple Card components */}
      <Codeblock id_= {'1'} assignment={"Swap two variables."}></Codeblock>
      <Codeblock id_={'2'} assignment={"Reverse an array."}></Codeblock>
      <Codeblock id_={'3'} assignment={"Sort an array."}></Codeblock>
      <Codeblock id_={'4'} assignment={"Alternate strings"}></Codeblock>

    </div>
  </div>

  )
}

export default Home