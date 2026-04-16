import Image from "next/image";
import styles from "./../page.module.css";
import styled from "styled-components";
import '@fontsource/roboto/300.css'; //is this for real
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import IconButton from '@mui/material/IconButton';


const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffca61',
      main: '#f4b536',
      dark: '#ba7f00',
      contrastText: '#000',
    },
  },
});



export default function Page() {
  
  
  return (
      <div className={styles.page}>
        <main className={styles.login}>
          <Image
          className={styles.logo}
          src="/globe.svg"
          alt="website logo"
          width={100}
          height={20}
          priority
          />
          <TextField fullWidth id="filled-basic" label="Username" variant="filled" size="large" />
          <TextField id="filled-basic" label="Password" variant="filled" type="password" size="large" />
          <div>
            <Button color="primary" variant="contained" size="large">Register</Button>{" "}
            <Button color="primary" variant="contained" size="large">Log In</Button>
          </div>
        </main>
      </div>
  );
}
