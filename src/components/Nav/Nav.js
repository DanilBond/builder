import DrawerBurger from "../Drawer/DrawerBurger";
import classes from "./Nav.module.css";

const Nav = ({setWindowState, windowState, setDrawerState, state}) => {
    return ( 
        <div className={classes.Nav}>
            {/* <img src={logo} alt=""/> */}
            <div className={classes.logo}>PCBUILDER</div>
            <div className={classes.RightSide}>
            <h3 className={classes.menubutton}>
                {/* <a href=''>BUILDER</a> */}
                <div className={classes.underline} onClick={()=>{if(windowState != "Hide"){setWindowState("Close");}}}>BUILDER</div>
            </h3>
            
            <h3 className={classes.menubutton}>
                {/* <a href=''>ORDER</a> */}
                <div className={classes.underline} onClick={()=>{setWindowState("Open");}}>ORDER</div>
            </h3>
                {/* <div>BUILDER</div>
                <div>ORDER</div> */}
            </div>
            <DrawerBurger state={state} setDrawerState={setDrawerState}/>
        </div>
     );
}
 
export default Nav;
//https://danil-bondarev.netlify.app/static/media/i3.png