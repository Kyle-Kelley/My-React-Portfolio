import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ContactsIcon from '@material-ui/icons/Contacts';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import WorkIcon from '@material-ui/icons/Work';

export default function NavMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const style = {
    margin: '15px'
  }

  return (
    <div>
      <Button 
        aria-controls="simple-menu" 
        aria-haspopup="true" 
        onClick={handleClick}
        style={style}
      >
        <MenuIcon fontSize="large" />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><Link href='/'><a><HomeIcon fontSize="large" /></a></Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href='/about'><a><InfoIcon fontSize='large' /></a></Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href='/contact'><a><ContactsIcon fontSize='large' /></a></Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href='/gallery'><a><PhotoLibraryIcon fontSize='large' /></a></Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href='/projects'><a><WorkIcon fontSize='large' /></a></Link></MenuItem>
      </Menu>
    </div>
  );
}