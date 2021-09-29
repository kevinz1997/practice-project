import React, { Fragment } from "react";
import {
  Typography,
  Grid,
  Avatar,
  InputAdornment,
  TextField, Button,
} from "@mui/material";
import launcher from "../../assets/image/launcher.jpg";
import program from "../../assets/image/programmer.png";
import { makeStyles } from "@mui/styles";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PasswordOutlined from "@mui/icons-material/LockOutlined";
const useStyles = makeStyles({
  container: {
    height: "100vh",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    padding: 20,
    width: "100%",
  },
  formInput: {
    marginTop: 20,
  },
  formContainer: {
    height: "100vh",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
    margin: "0 auto",
  },
});

function Login(props) {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid container spacing={1} style={{height: '100vh'}}>
        <Grid item lg={6} md={6} className={classes.container}>
          <img src={launcher} width="100%" alt="launcher" />
        </Grid>
        <Grid item lg={6} md={6}>
          <div className={classes.formContainer}>
            <Avatar src={program} sx={{ width: 100, height: 100}} />
            <div className={classes.form}>
              <Typography
                variant="h4"
                color="initial"
                style={{
                  marginBottom: 15,
                  fontWeight: "300",
                  fontStyle: "italic",
                }}
              >
                WELCOME
              </Typography>

              {/* Username */}
              <TextField
                margin="dense"
                fullWidth
                id="input-with-icon-textfield2"
                label="Username"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
              />
              {/* Password */}
              <TextField
                margin="dense"
                fullWidth
                id="input-with-icon-textfield"
                label="Password"
                type="password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PasswordOutlined />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
              />
              <Typography variant="subtitle1" color="initial" style={{color:'rgb(40 7 7 / 65%)',cursor:'pointer', textAlign:'right'}}>
                Forgot Password?
              </Typography>
            </div>
            <Button variant="contained" color="primary" fullWidth style={{marginBottom: 15}}>
              LOGIN
            </Button>
            <Button variant="contained" color="secondary" fullWidth>
              REGISTER
            </Button>
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default Login;
