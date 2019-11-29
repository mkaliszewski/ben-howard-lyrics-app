import React from 'react';

import Directory from '../../components/directory/directory.component'
import './songs-list.page.scss'
import DisplaySearch from '../../components/display-search/display-search'


class SongsListPage extends React.Component{
    render(){
        return(
            <div className="songslist">
                <div className="songslist__col songslist__col-left">
                    <Directory/>
                </div>
                <div className="songslist__col songslist__col-right">
                    <DisplaySearch />
                </div>
            </div>
            
        )
    }
}


export default SongsListPage;