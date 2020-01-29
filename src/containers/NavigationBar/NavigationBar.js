import React, {Component} from 'react';
import NavigationElem from './NavigationElem/NavigationElem';
import NavigationTitle from './NavigationTitle/NavigationTitle';
import classes from './Navigationbar.module.css';

class NavigationBar extends Component{

    render(){
        return(
            <div className={classes.Taskbar}>
                <NavigationTitle> CAMERON HADFIELD </NavigationTitle>
                <NavigationElem href="/"> Home </NavigationElem>
                <NavigationElem href="/work"> Resume </NavigationElem>
                <NavigationElem href="/projects"> Projects </NavigationElem>
            </div>
        );
    }
}

export default NavigationBar;