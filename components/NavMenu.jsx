import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";

export default function NavMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const style = {
    margin: "15px",
  };

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
        <MenuItem onClick={handleClose}>
          <Link href="/">
            <HomeIcon fontSize="large" />
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/workouts">
            <FitnessCenterIcon fontSize="large" />
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/store">
            <LocalGroceryStoreIcon fontSize="large" />
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
