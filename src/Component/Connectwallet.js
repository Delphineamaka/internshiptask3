import React from 'react'
import doll from './Asset/doll.png';
import arrow from './Asset/arrow.png';
import wifi from './Asset/wifi.png'
import './connectwallet.css';
 import CloseIcon from '@material-ui/icons/Close';
 

function Connectwallet() {

	 
 
	 
  return (
 

	 
	<div className='connect_wallet'>
	<div className='wallet_header'>
		<h2>Connect Wallet</h2>
        <CloseIcon />
	</div> 
    
	  <div className='preferred_wallet'>
	    <p>Choose Preferred Wallet:</p>
		
	    <button>
			<img  className='preferred_logo' src={doll} alt='' />
			<h3>Metamask</h3>
		 
		 <img src={arrow} alt='' />
	</button>
		
	 <button>
           
			<img  className='preferred_logo' src={wifi} alt='' />
			<h3>Walletconnect</h3>
		   
		     <img src={arrow} alt='' />
		</button>
	 </div>
	  </div>
	   
	 
  )
}

export default Connectwallet
