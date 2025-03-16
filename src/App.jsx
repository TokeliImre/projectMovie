import React, { useEffect } from 'react'
import { useState } from 'react'
import Search from './Components/Search'



function App() {
  const [SearchTerm,setSearchTerm]=useState('');
  
 

  return (
   <main>
    <div className="pattern"/>
    <div className="wrapper">

      <header>
      <img src="./hero.png" alt="Banner" />
      <h1>İstediğin <span className='text-gradient'>Filmleri</span> Yorulmadan Bulabileceksin</h1>
      </header>  

      <Search SearchTerm={SearchTerm} setSearchTerm={setSearchTerm}/>
    </div>  
    
  
   </main>
  )
}

export default App
