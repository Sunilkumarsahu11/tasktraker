import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Kaggle Tracker</Typography>
        
        
      </Toolbar>
    </AppBar>
  );
}
export default Header;