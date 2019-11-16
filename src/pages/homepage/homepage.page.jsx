//libs
import React, { Component } from 'react';

//styles
import './homepage.styles.scss'
//components
import Directory from '../../components/directory/directory.component'


class Homepage extends Component{

    render(){
        return(
            <div className="homepage__div">
                <Directory/>
            </div>
        )
    }
}


export default Homepage;