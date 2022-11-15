import React from 'react'
import './Footer.css'
import footerMb from './Asset/footerMb.png'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

function Footer() {
  return (
	<footer id='footer' >
	<div  className = 'footer' >
	  <div>
		<img src={footerMb} alt='' />
		<div >
          <FacebookIcon className='footer_icons' />
		<InstagramIcon className='footer_icons' />
		<TwitterIcon className='footer_icons' />
		</div>
		<p>&copy; 2022 Metabnb</p>
	  </div>

	  <div>
	  <h3>places</h3>
		<ul>
			<li>Castle</li>
			<li>Farms</li>
			<li>Beach</li>
			<li>Learn More</li>
		</ul>
	  </div>

	   <div>
	  <h3>About Us</h3>
		<ul>
			<li>Road maps</li>
			<li>Creators</li>
			<li>career</li>
			<li>Contacts</li>
		</ul>
	  </div>

	   <div>
	  <h3>Community</h3>
		<ul>
			<li>NFT</li>
			<li>Token</li>
			<li>Landlords</li>
			<li>Discord</li>
		</ul>
	  </div>
	</div>
	</footer>
  )
}

export default Footer;
