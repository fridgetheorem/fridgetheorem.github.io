import React, {Component} from 'react';
import NavigationElem from './NavigationElem/NavigationElem';
import NavigationTitle from './NavigationTitle/NavigationTitle';
import classes from './Navigationbar.module.css';
import NavigationItems from './NavigationItems/NavigationItems';

class NavigationBar extends Component{

    render(){
        return(
            <div className={classes.Taskbar}>
                <NavigationTitle> CH </NavigationTitle>
                <NavigationItems>
                    <NavigationElem href="/"> Home </NavigationElem>
                    <NavigationElem href="/work"> Resume </NavigationElem>
                    <NavigationElem href="/projects"> Projects </NavigationElem>
                </NavigationItems>
            </div>
        );
    }
}

export default NavigationBar;