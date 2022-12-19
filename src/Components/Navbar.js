import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import AuthContext from '../Context/AuthContext';
import axios  from '../axios'
import { Link, useNavigate } from "react-router-dom";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import JobView from '../Components/HomePage/JobView'


const pages = ['Profile' , 'Job'];
const settings = ['Profile', 'Account', 'Dashboard'];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  marginRight: "20px",
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
    marginRight: "25px",
    border: "2px solid #616161",
    borderRadius: "34px",
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));



function Navbar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const {logOut , user} = React.useContext(AuthContext);

  const navigate = useNavigate()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const val= localStorage.getItem('token')


  const [search, setSearch] = React.useState('');

  const handleSubmit =(e) =>{
    e.preventDefault()
    props.onData(search)
  }

  return (
    <AppBar className='navbar' position="static" sx={{ bgcolor: "#fff"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            TrabaJo
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none'} }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon style={{color:"#000"}} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <div
                style={{display: "flex", flexDirection: "column"}}>
                  <button
                  style={{textDecoration:"none", border:"none", color:"#fff" , padding:"0px 3px" , background:"none", margin:"none"}}
                  key={page.id}
                  onClick={(e)=>{
                    e.preventDefault()
                    navigate(`/${page}`)
                  }}
                  >
                <MenuItem style={{borderRadius: '26px'}} className='navbar-list' key={page} onClick={handleCloseNavMenu}>
                  <Typography  className='navbar-buttons' style={{fontWeight: '800',fontSize: '20px'}} textAlign="center">
                  {page}
                  </Typography>
                </MenuItem>
                </button>
                </div>
              ))}
            </Menu>
          </Box>
          
          <Typography
            id='navbar-logo'
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Trabajo
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

            <div
                style={{display: "flex", flexDirection: "column"}}>
                  <button
                  style={{textDecoration:"none", border:"none", color:"#fff" , padding:"0px 3px" , background:"none", margin:"none"}}
                  onClick={(e)=>{
                    e.preventDefault()
                    navigate(`/`)
                  }}
                  >
                <MenuItem style={{borderRadius: '26px'}} className='navbar-list' onClick={handleCloseNavMenu}>
                  <Typography  className='navbar-buttons' style={{fontWeight: '800',fontSize: '20px'}} textAlign="center">
                    Home
                  </Typography>
                </MenuItem>
                </button>
            </div>

          {pages.map((page) => (
                <div
                style={{display: "flex", flexDirection: "column"}}>
                  <button
                  style={{textDecoration:"none", border:"none", color:"#fff" , padding:"0px 3px" , background:"none", margin:"none"}}
                  key={page.id}
                  onClick={(e)=>{
                    e.preventDefault()
                    navigate(`/${page}`)
                  }}
                  >
                <MenuItem style={{borderRadius: '26px'}} className='navbar-list' key={page} onClick={handleCloseNavMenu}>
                  <Typography  className='navbar-buttons' style={{fontWeight: '800',fontSize: '20px'}} textAlign="center">
                  {page}
                  </Typography>
                </MenuItem>
                </button>
                </div>
              ))}
            
          </Box>
          
          <Search className='search'  style={{color:"#000" , border:'none'}}>
            <SearchIconWrapper >
              <SearchIcon for="icon" htmlFor="icon" />
            </SearchIconWrapper>
            <form onSubmit={handleSubmit}>
              <StyledInputBase
                placeholder="Search…"
                style={{background:"none"}}
                inputProps={{ 'aria-label': 'search' }}
                onChange={(e)=>{
                  setSearch(e.target.value)
                }}
              />
              <button type='submit' name='icon' id='icon' style={{display:"none"}}></button>
            </form>
          </Search>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={(e)=>{
                navigate('/profile/')
              }}>
                  <Typography textAlign="center">Profile</Typography>
                </MenuItem>

              {val? <MenuItem  onClick={logOut}>
                  <Typography textAlign="center">Logout</Typography>
              </MenuItem> : '' }
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;