import React from 'react';
import useStyles from "./Styles.js";
import { Container, ThemeProvider, Typography, } from "@material-ui/core";

import Navbar from '../../../Nav/Navbar.js';

import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: "#18B0C3",
            main: "#0C9EB5",
            dark: "#008CA7",
            contrastText: "#fff",
        },
    },
});

function Privacy(props) {

    const classes = useStyles();

    return (
        <>
         <Navbar username={props.username}> </Navbar>
            <ThemeProvider theme={theme}>
                <Container className={classes.container} >

                    <Typography className={classes.heading} >
                        Privacy </Typography>

                    <Typography className={classes.conditions} variant="h6" component="h6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus odit impedit deserunt neque ad provident ut modi eaque voluptatem soluta, eum maxime necessitatibus dolorem quis. Sed necessitatibus doloremque reiciendis eligendi?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas assumenda dolores sequi eaque, explicabo quidem illum excepturi quam eligendi quibusdam. Nulla odit ipsa eveniet, laudantium a temporibus tempore sequi non. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid corrupti cum rem accusantium praesentium fugiat accusamus ea. Asperiores quia distinctio repellat quas esse ratione ipsa recusandae, temporibus repudiandae laudantium illo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus odit impedit deserunt neque ad provident ut modi eaque voluptatem soluta, eum maxime necessitatibus dolorem quis. Sed necessitatibus doloremque reiciendis eligendi?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas assumenda dolores sequi eaque, explicabo quidem illum excepturi quam eligendi quibusdam. Nulla odit ipsa eveniet, laudantium a temporibus tempore sequi non. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid corrupti cum rem accusantium praesentium fugiat accusamus ea. Asperiores quia distinctio repellat quas esse ratione ipsa recusandae, temporibus repudiandae laudantium illo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus odit impedit deserunt neque ad provident ut modi eaque voluptatem soluta, eum maxime necessitatibus dolorem quis. Sed necessitatibus doloremque reiciendis eligendi?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas assumenda dolores sequi eaque, explicabo quidem illum excepturi quam eligendi quibusdam. Nulla odit ipsa eveniet, laudantium a temporibus tempore sequi non. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid corrupti cum rem accusantium praesentium fugiat accusamus ea. Asperiores quia distinctio repellat quas esse ratione ipsa recusandae, temporibus repudiandae laudantium illo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus odit impedit deserunt neque ad provident ut modi eaque voluptatem soluta, eum maxime necessitatibus dolorem quis. Sed necessitatibus doloremque reiciendis eligendi?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas assumenda dolores sequi eaque, explicabo quidem illum excepturi quam eligendi quibusdam. Nulla odit ipsa eveniet, laudantium a temporibus tempore sequi non. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid corrupti cum rem accusantium praesentium fugiat accusamus ea. Asperiores quia distinctio repellat quas esse ratione ipsa recusandae, temporibus repudiandae laudantium illo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus odit impedit deserunt neque ad provident ut modi eaque voluptatem soluta, eum maxime necessitatibus dolorem quis. Sed necessitatibus doloremque reiciendis eligendi?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas assumenda dolores sequi eaque, explicabo quidem illum excepturi quam eligendi quibusdam. impedit deserunt neque ad provident ut modi eaque voluptatem soluta, eum maxime necessitatibus dolorem quis. Sed necessitatibus doloremque reiciendis eligendi?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas assumenda dolores sequi eaque, explicabo quidem illum excepturi quam eligendi quibusdam. Nulla odit ipsa eveniet, laudantium a temporibus tempore sequi non. Lorem ipsum accusantium praesentium fugiat accusamus ea. Asperiores quia distinctio repellat quas esse ratione ipsa recusandae, temporibus repudiandae laudantium illo? </Typography>


                    <div className={classes.footer}></div>
                </Container>
            </ThemeProvider>
        </>
    )
}

export default Privacy
