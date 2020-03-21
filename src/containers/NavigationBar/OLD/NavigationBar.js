import React, {Component} from 'react';
import NavigationElem from './NavigationElem/NavigationElem';
import NavigationTitle from './NavigationTitle/NavigationTitle';
import classes from './Navigationbar.module.css';
import CircleImage from '../../components/UI/CircleImage/CircleImage';

class NavigationPane extends Component{

    render(){
        return(
            <div className={classes.Taskbar}>
                <div className={`centered ${classes.profileImage}`}>
                    <CircleImage 
                    height="150px" 
                    width="150px" 
                    style={{
                        border:"6px solid #333647aa"
                    }}
                    image="https://firebasestorage.googleapis.com/v0/b/personalwebsiteassets.appspot.com/o/images%2Fcam_face_pic_256.png?alt=media&token=a26a24ea-4f52-45ef-b1ed-dfb4f766812d"
                    />
                </div>
                <div className="centered header">
                    Cameron Hadfield
                </div>
                <div className={classes.RouteButtons}>
                    <NavigationElem href="/"> Home </NavigationElem>
                    <NavigationElem href="/work"> Resume </NavigationElem>
                    <NavigationElem href="/projects"> Projects </NavigationElem>
                </div>
            </div>
        );
    }
}

export default NavigationPane;