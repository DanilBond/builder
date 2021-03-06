import SwitchTheme from "./Switch/Switch";
import DrawerBurger from "../Drawer/DrawerBurger";
import classes from "./Nav.module.css";
import { useEffect, useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import fire from "../../fire";

const Nav = ({setWindowState, windowState, setDrawerState, state, theme, settheme}) => {
    
    let Classes = [classes.Nav, theme ? classes.Nav : classes.NavLight];
    let ClassesLogin = [localStorage.getItem("user") ? classes.Show : classes.Hide];
    let ClassesLogout = [localStorage.getItem("user") ? classes.HideLog : classes.ShowLog];
    
    useEffect(function(){
        if(localStorage.getItem("theme") == "false"){
            Classes = classes.NavLight;
           // settheme(false);
        }
        if(localStorage.getItem("theme") == "true"){
            Classes = classes.Nav;
           // settheme(true);
        }
        
    }, []);


    useEffect(function(){
        if(localStorage.getItem("user") == ""){
            ClassesLogin = classes.Hide;
            ClassesLogout = classes.ShowLog;
           // settheme(false);
        }
        if(localStorage.getItem("user") != ""){
            ClassesLogin = classes.Show;
            ClassesLogout = classes.HideLog;
           // settheme(true);
        }
    }, []);

   
    return ( 
        
        <div className={Classes.join(" ")}>
            {/* <img src={logo} alt=""/> */}
            <div className={classes.logo}>PCBUILDER</div>
            <div className={classes.RightSide}>
            <SwitchTheme theme={theme} settheme={settheme} theme={theme}/>
            <h3 className={classes.menubutton}>
                {/* <a href=''>BUILDER</a> */}
                <div className={classes.underline} onClick={()=>{if(windowState != "Hide"){setWindowState("Close");}}}>BUILDER</div>
            </h3>
            
            <div className={ClassesLogout.join(" ")}>
            <h3 className={classes.menubutton}>
                {/* <a href=''>ORDER</a> */}
                <Link className={classes.Link} to="/auth">
                <div className={classes.underline}>LOGIN</div>
                </Link>
                
                
            </h3>
            </div>

            <div className={ClassesLogin.join(" ")}>
            <h3 className={classes.menubutton}>
                {/* <a href=''>ORDER</a> */}
                <div className={classes.underline} onClick={()=>{setWindowState("Open");}}>CHECKOUT</div>
                
            </h3>
            
            <h3 className={classes.menubutton}>
                {/* <a href=''>ORDER</a> */}
                
                <Link className={classes.Link} to="/orders">
                <div className={classes.underline} >ORDERS</div>
                </Link>
            </h3>
            
            <h3 className={classes.menubutton}>
                {/* <a href=''>ORDER</a> */}
                <div className={classes.underline} onClick={()=>{
                    fire.auth().signOut();
                    localStorage.setItem("user", "");}}>LOGOUT</div>
                
            </h3>
                {/* <div>BUILDER</div>
                <div>ORDER</div> */}
            </div>
            </div>


            <DrawerBurger state={state} setDrawerState={setDrawerState}/>
            
        </div>
     );
}
 
export default Nav;
//https://danil-bondarev.netlify.app/static/media/i3.png