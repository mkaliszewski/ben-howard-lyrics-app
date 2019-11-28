import React from 'react';

import Directory from '../../components/directory/directory.component'
import './albums.styles.scss'
import DisplaySearch from '../../components/display-search/display-search'


class Albums extends React.Component{
    render(){
        return(
            <div className="albums">
                <div className="albums__col albums__col-left">
                    <Directory/>
                </div>
                <div className="albums__col albums__col-right">
                    <DisplaySearch />
                </div>
            </div>
            
        )
    }
}


export default Albums