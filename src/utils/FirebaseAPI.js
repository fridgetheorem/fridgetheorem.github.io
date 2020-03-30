import app from 'firebase/app';
import React from 'react';

export const config = {
    apiKey:"AIzaSyDBo36Mworvq0FHWnbXVdaQ7f_q40D3uqM",
    authDomain:"personalwebsiteassets.firebaseapp.com",
    databaseURL:"https://personalwebsiteassets.firebaseio.com",
    projectId:"personalwebsiteassets",
    storageBucket:"",
    messagingSenderId:"412723832129"
}

export class Firebase {
    constructor(){
        app.initializeApp(config);
    }
}

export const firebaseContext = React.createContext(null);