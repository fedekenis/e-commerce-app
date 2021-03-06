import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from '../assets/e-commerce.png';
import { ShoppingCart } from '@material-ui/icons';
import Badge from '@material-ui/core/Badge';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "7rem",
  },
  appBar: {
    backgroundColor: "whitesmoke",
    boxShadow: "none"
  },
  grow: {
      flexGrow: 1,
  },
  button: {
    marginLeft: theme.spacing(2),
  },
  image: {
    marginRight: "10px",
    height: "4rem"
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky" className={classes.appBar} style={{ background: '#f8e593' }}>
        <Toolbar>
          <Link to='/'>
          <IconButton edge="start" className={classes.button} color="inherit" aria-label="menu">
            <img src={logo} alt="logo" className={classes.image}/>
          </IconButton>
          </Link>
          <div className={classes.grow}/>
          <Typography variant="h6" color='textPrimary' component="p">
            Hello Guest
          </Typography>
          <div className={classes.button}>
            <Button variant='outlined'>
                <strong>Sign In</strong>    
            </Button>
            <Link to='checkout-page'>
              <IconButton aria-label='show cart items' color='inherit'>
                  <Badge badgeContent={2} color="secondary">
                      <ShoppingCart fontSize='large' color='primary'/>
                  </Badge>
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
