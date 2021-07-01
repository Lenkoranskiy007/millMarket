import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from 'react-router-dom'

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button  aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
       Связаться с нами
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        
      >
       <Link to="/areworking"><MenuItem onClick={handleClose}>Как мы Работаем</MenuItem></Link> 
       <Link to="/contacts" > <MenuItem onClick={handleClose}>Контакты</MenuItem></Link> 
       <Link to="/delivery" ><MenuItem onClick={handleClose}>Доставка и Оплата</MenuItem></Link>
         
      </Menu>
    </div>
  );
}
