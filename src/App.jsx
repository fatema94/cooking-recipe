import { useState } from 'react'
import './App.css'
import Blogs from './componenets/Blogs/Blogs'
import Cooktable from './componenets/Cooktable/Cooktable'
import Header from './componenets/Header/Header';
import Banner from './componenets/Banner/Banner';

function App(){
  const[cooktable , setCooktable] = useState([]);
  const handleToCookTable = blog =>{
    const newTable =[...cooktable , blog];
    setCooktable(newTable)
  }

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <div className='md:flex'>
        <Blogs handleToCookTable={handleToCookTable}></Blogs>
        <Cooktable cooktable={cooktable}></Cooktable>
      </div>
    </>
  )
}

export default App
