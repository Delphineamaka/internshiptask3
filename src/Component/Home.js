import React from 'react'
import imggframe from './Asset/imggframe.png';
import mbroken from './Asset/mbroken.png'
import mask from './Asset/mask.png'
import Opens from './Asset/Opens.png'
 import './home.css'
import Houses from './Houses';
import NFTs from './NFTs';
 
 

function Home() {

  return (
	<section>
	<div className='home'>
     <div className='home_header' >
	  <h1>Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span></h1>	 
	  <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>

	  <div className='home_input'>
		<input placeholder='search for location' type='text' />
	  <button className='search_btn'>search</button>
	  </div>
	  </div>
	  <div className='images'>
		<img src={imggframe} alt=''/>
	  </div>
	  
    </div>
	<div className='opensat'>
      <img src={mbroken} alt=''/>
	  <img src={mask} alt=''/>
	  <img src={Opens} alt='' />
	  </div>
	  <div className='adventure'>
		<h2>Inspiration for your next adventure</h2>
	  </div>
	  <div className='advent_image'>
      <Houses />
	  </div>
	  <div>
		<NFTs />
	  </div>
	  
	</section>
  )
}

export default Home;
