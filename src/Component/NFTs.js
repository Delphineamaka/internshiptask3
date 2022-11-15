import React from 'react'
import NFTSS from './Asset/NFTSS.png';
import './Nfts.css'
 

function NFTs() {
  return (
	<div className='Nfts_'>
	<div className='nfts_one'>
	   <h1>Metabnb NFTs</h1>
	   <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our customer access to loads of our exclusive services.</p>
       <button className='learnmoreBtn'>Learn more</button>
	</div>
	<div >
		<img src={NFTSS} alt=''/>
	</div>
	</div>
  )
}

export default NFTs
