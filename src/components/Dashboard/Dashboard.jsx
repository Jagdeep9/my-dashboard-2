import * as React from 'react';
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ArticleIcon from '@mui/icons-material/Article';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import {useNavigate} from 'react-router-dom';


const drawerWidth = 240;

interface Props {
 
  window?: () => Window;
}

export default function Dashboard(props: Props) {//this is the main dashboard in which all the linking from different assests is linked up, also drawer ,app bar,navigation.
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);    

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const navigate = useNavigate();

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      {/* <List>
        
          <ListItem  disablePadding onClick={()=>{navigate("/mydashboard")}}>
            <ListItemButton>
              <ListItemIcon>
              <DashboardIcon/>
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
        
      </List> */}
      <List>
        
        <ListItem  disablePadding onClick={()=>{navigate("/profile")}}>
          <ListItemButton>
            <ListItemIcon>
             <AccountCircleIcon /> 
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
      
    </List>
    <List>
        
        <ListItem  disablePadding onClick={()=>{navigate("/newsfeed")}}>
          <ListItemButton>
            <ListItemIcon>
             <ArticleIcon /> 
            </ListItemIcon>
            <ListItemText primary="Newsfeed" />
          </ListItemButton>
        </ListItem>
      
    </List>
    <List>
        
        <ListItem  disablePadding onClick={()=>{navigate("/weather")}}>
          <ListItemButton>
            <ListItemIcon>
             <WbSunnyIcon/> 
            </ListItemIcon>
            <ListItemText primary="Weather" />
          </ListItemButton>
        </ListItem>
      
    </List>
    <List>
    <ListItem  disablePadding onClick={()=>{navigate("/thoughts")}}>
          <ListItemButton>
            <ListItemIcon>
             <PsychologyAltIcon /> 
            </ListItemIcon>
            <ListItemText primary="Thoughts" />
          </ListItemButton>
        </ListItem>
      
    </List>
    <List>
        
        <ListItem  disablePadding onClick={()=>{navigate("/tools")}}>
          <ListItemButton>
            <ListItemIcon>
             <SettingsIcon/> 
            </ListItemIcon>
            <ListItemText primary="Tools" />
          </ListItemButton>
        </ListItem>
      
    </List>
    
      <Divider />
      <List>
    <ListItem  disablePadding onClick={()=>{navigate("/")}}>
          <ListItemButton>
            <ListItemIcon>
             <LogoutIcon /> 
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      
    </List>
   
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
          Webian's Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
   
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' }, 
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' }, 
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
   
        <Toolbar />
       
       
    
    </Box>
  );
}