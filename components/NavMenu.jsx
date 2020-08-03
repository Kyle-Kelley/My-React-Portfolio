import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';

export default function NavMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const style = {
    fontSize: '16px',
    fontWeight: 600,
    padding: '15px'
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
        <MenuItem onClick={handleClose}><Link href='/'><a>Home</a></Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href='/about'><a>About Me</a></Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href='/contact'><a>Contact</a></Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href='/gallery'><a>Gallery</a></Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href='/projects'><a>Projects</a></Link></MenuItem>
      </Menu>
    </div>
  );
}