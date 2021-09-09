import './navbar.css';
import {views} from './subviews/enums';
export const NavBar = (props)=>{
    return(
        <div className="navbar">
            <div className="nav-button" onClick={()=>{props.goTo(views.Home)}}>
                Home
            </div>
            <div className="nav-button" onClick={()=>{props.goTo(views.Projects)}}>
                Projects
            </div>
            <div className="nav-button" onClick={()=>{props.goTo(views.Jobs)}}>
                Previous Jobs
            </div>
            <div className="nav-button" onClick={()=>{props.goTo(views.About)}}>
                About
            </div>
        </div>
    )
}