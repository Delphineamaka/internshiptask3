import React, { useState } from 'react'
import metabnb2 from './Asset/metabnb2.png'
 import CloseIcon from '@material-ui/icons/Close';
 import MenuIcon from '@material-ui/icons/Menu';
 import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
 import './connectwallet.css';
 import './home.css'
import doll from './Asset/doll.png';
import arrow from './Asset/arrow.png';
import wifi from './Asset/wifi.png'
import { Link } from 'react-router-dom';
 

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
   
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;
    return (
    <DialogTitle DialogTitle {
      ...other
    } >
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

function Header() {

	const [toggleMenu, setToggleMenu] = useState(false);
	const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

	

  return (

	<nav className='navbar'>
      
	<div className='nav_logo'>
	 <img src={metabnb2} alt='' />
	 </div>
	  <ul className='nav_links'>
	  <Link className='Link' to='/'>Home</Link>
		<Link className='Link' to='/Place'><li>Place to stay</li></Link>
		<li>NFTs</li>
		<li>Community</li>
	  </ul>
	   <button  className='connect_btn'
	   onClick = { handleClickOpen } >
	   connect wallet
	    </button>
	     <BootstrapDialog
        onClose={handleClose}
        open={open}
      >
    
		 
	<div className='connect_wallet'>
	<div className = 'wallet_header' >
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
			<h3 className='header_h3'>Walletconnect</h3>
		     <img src={arrow} alt='' />
		</button>
	 </div>
	  </div>
      
         </BootstrapDialog>
     <div className='navbar-smscreen  '>
     <MenuIcon fontSize='27' onClick={() =>{setToggleMenu(true)}}/>

	 {toggleMenu && (
	 <div className='smscreen_overlay'>
       <CloseIcon className='overlay_close' fontSize='27' onClick={() =>{setToggleMenu(false)}} />

	    <ul className='smscreen_links' >
		<Link className='Link' to='/'><li>Home</li></Link>
		<Link className='Link' to='/Place'><li>Place to stay</li></Link>
		<li>NFTs</li>
		<li>Community</li>
	  </ul>
	   <button className='btn_smscreen' onClick={ handleClickOpen } >connect wallet
	   </button>
       <BootstrapDialog
        onClose={handleClose}
        open={open}
      >
    
		 
	<div className='connect_wallet'>
	<div className = 'wallet_header' >
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
			<h3 className='header_h3'>Walletconnect</h3>
		     <img src={arrow} alt='' />
		</button>
	 </div>
	  </div>
      
         </BootstrapDialog>
	 </div>
	 )}
	 </div>
	 
	  </nav>
	
  )
}

export default Header
