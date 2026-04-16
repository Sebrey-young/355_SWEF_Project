'use client'


import Image from "next/image";
import styles from "./../page.module.css";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MedicationOutlinedIcon from '@mui/icons-material/MedicationOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import NotificationsOffIcon from '@mui/icons-material/NotificationsOff';
import NotificationsIcon from '@mui/icons-material/Notifications';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Fab from '@mui/material/Fab';
import MedicationIcon from '@mui/icons-material/Medication';
import { SxProps } from '@mui/system';
import Divider from '@mui/material/Divider';




const fabStyle = {
  position: 'absolute',
  bottom: 16,
  right: 16,
};

export default function Page() {


  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);


  const fabs = [
    {
      color: 'primary',
      sx: fabStyle,
      icon: <MedicationIcon />,
      label: 'Medication',
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 , paddingLeft: 20, paddingRight: 20}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            7-Day Prescriptions
          </Typography>
                        <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>

        </Toolbar>
      </AppBar>

      <Fab color="primary" aria-label="add" size="large" sx={{bottom: 48, right: 48, position: 'absolute'}} >
        <MedicationIcon />
      </Fab>

              <List sx={{paddingLeft: 10, paddingRight: 10,        overflow: 'auto',
        maxHeight: 600,
}}>

      <Typography variant="h4" gutterBottom>
        <Divider textAlign="left" sx={{marginTop: 5}}>Monday</Divider>
      </Typography>

                <Box
                  sx={{
                    borderRadius: 2,
                    bgcolor: 'primary.main',
                    '&:hover': {
                      bgcolor: 'primary.dark',
                    },
                    marginBottom: 3,
                  }}>
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="NotificationsOff">
                      <NotificationsIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <MedicationOutlinedIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Advil"
                    secondary={secondary ? 'Secondary text' : '9:00 AM'}
                  />
                </ListItem>
            </Box>

                <Box
                  sx={{
                    borderRadius: 2,
                    bgcolor: 'primary.main',
                    '&:hover': {
                      bgcolor: 'primary.dark',
                    },
                    marginBottom: 3,
                  }}>

                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="NotificationsOff">
                      <NotificationsIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <MedicationOutlinedIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Gabapentin"
                    secondary={secondary ? 'Secondary text' : '12:00 PM'}
                  />
                </ListItem>

                </Box>

                                <Box
                  sx={{
                    borderRadius: 2,
                    bgcolor: 'primary.main',
                    '&:hover': {
                      bgcolor: 'primary.dark',
                    },
                    marginBottom: 3,
                  }}>

                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="NotificationsOff">
                      <NotificationsIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <MedicationOutlinedIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Pradaxa"
                    secondary={secondary ? 'Secondary text' : '8:00 PM'}
                  />
                </ListItem> 
                </Box>


      <Typography variant="h4" gutterBottom>
        <Divider textAlign="left" sx={{marginTop: 5}}>Tuesday</Divider>
      </Typography>

                <Box
                  sx={{
                    borderRadius: 2,
                    bgcolor: 'primary.main',
                    '&:hover': {
                      bgcolor: 'primary.dark',
                    },
                    marginBottom: 3,
                  }}>
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="NotificationsOff">
                      <NotificationsIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <MedicationOutlinedIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Gabapentin"
                    secondary={secondary ? 'Secondary text' : '7:00 AM'}
                  />
                </ListItem>
            </Box>

                <Box
                  sx={{
                    borderRadius: 2,
                    bgcolor: 'primary.main',
                    '&:hover': {
                      bgcolor: 'primary.dark',
                    },
                    marginBottom: 3,
                  }}>
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="NotificationsOff">
                      <NotificationsIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <MedicationOutlinedIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Advil"
                    secondary={secondary ? 'Secondary text' : '8:00 AM'}
                  />
                </ListItem>
            </Box>

                <Box
                  sx={{
                    borderRadius: 2,
                    bgcolor: 'primary.main',
                    '&:hover': {
                      bgcolor: 'primary.dark',
                    },
                    marginBottom: 3,
                  }}>

                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="NotificationsOff">
                      <NotificationsIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <MedicationOutlinedIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Gabapentin"
                    secondary={secondary ? 'Secondary text' : '12:00 PM'}
                  />
                </ListItem>

                </Box>

                                <Box
                  sx={{
                    borderRadius: 2,
                    bgcolor: 'primary.main',
                    '&:hover': {
                      bgcolor: 'primary.dark',
                    },
                    marginBottom: 3,
                  }}>

                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="NotificationsOff">
                      <NotificationsIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <MedicationOutlinedIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Pradaxa"
                    secondary={secondary ? 'Secondary text' : '8:00 PM'}
                  />
                </ListItem> 
                </Box>


            </List>

    </Box>

    
  );
}
