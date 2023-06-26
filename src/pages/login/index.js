import { Box, Container, Typography, List, ListItem, IconButton, ListItemButton, ListItemIcon, Checkbox, ListItemText } from "@mui/material";
import CommentIcon from '@mui/icons-material/Comment';
import styles from "./login.module.css";
import empty from "../login";
import React from "react";



export const Login = () => {

  const [token, setToken] = React.useState(null);
  const [Validated, setValidated] = React.useState(null);

  const handlechange = event => {
    setToken(event.target.value);
    console.log(token);
  };

  const handleclick = () => {
    setValidated(token);
  };

  const FILE_URL = "http://localhost:3000/courses.zip"

  const handledownload = () => {
    const element = document.createElement("a");
    element.href = FILE_URL;
    element.setAttribute("download", "courses.zip");
    document.body.appendChild(element);
    element.click();
    element.remove();
  };

  const CheckboxList = () => {
    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];

      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }

      setChecked(newChecked);
    };

    const courses = ["Physics 2 <PHY 1402>", "Data Structures <CSC 2302>", "Public Speaking <COM 1301>", "Multivariable Calculus <MAT 2301>"]

    return (
      <div className="">
        <List sx={{
          width: '100%',
          maxWidth: 400,
          heigh: '280px',
          bgcolor: 'rgba(119, 119, 119, 0.13)',
          border: '2px solid rgba(255,255,255,0.1)',
          boxShadow: '0 0 40px rgba(145, 145, 145, 0.6)',
          padding: '50px 35px',
          borderRadius: '0.15em',
          backgroundfilter: 'blur(10px)',
          position: 'relative',
        }}>
          {[0, 1, 2, 3].map((value) => {
            const labelId = `checkbox-list-label-${value}`;

            return (
              <ListItem
                key={value}
                secondaryAction={
                  <IconButton edge="end" aria-label="comments">
                    <CommentIcon />
                  </IconButton>
                }
                disablePadding
              >
                <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(value) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ 'aria-labelledby': labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={courses[value]} />
                </ListItemButton>
              </ListItem>
            );
          })}
          <button
                  className={styles.mybutton2}
                  type="submit"
                  onClick={handledownload} 
                >Proceed to download</button>
        </List>
      </div >
    );
  }

  return (
    <Container
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={2.1}
      >

        <div className={styles.mybackground}>
        </div>
        {Validated ? (
          <>
            <CheckboxList />
          </>
        ) : (
          <>
            <form className={styles.myform}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap={.1}
              >
                <label className={styles.mylabel}>Token</label>
                <input
                  className={styles.myinput}
                  type="text"
                  placeholder="e.g. 12345678"
                  id="token"
                  name="token"
                  onChange={handlechange}
                />
                <button
                  className={styles.mybutton}
                  type="submit"
                  onClick={handleclick}
                >Validate</button>
              </Box>
            </form>
          </>
        )}
      </Box>
    </Container>
  );
};
