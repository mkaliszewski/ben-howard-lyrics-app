//libs
import React, { Component } from 'react';

//styles
import { HomepageDiv } from './homepage.styles'

//components
import Directory from '../../components/directory/directory.component'


class Homepage extends Component{

    render(){
        return(
            <HomepageDiv className="home">
                <Directory/>
            </HomepageDiv>
        )
    }
}


export default Homepage;