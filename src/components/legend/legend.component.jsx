import React from 'react'

import './legend.styles.scss'
import { clearCurrentAlbum } from '../../redux/albums/albums.actions.js'
import { connect } from 'react-redux'
import CustomButton from '../custom-button/custom-button'
const Legend = ({ clearCurrentAlbum }) =>(
    <div className = "legend">

        <div className="legend__block">
            <div className="legend__block-color1"></div>
            <span className="legend__span"><p>Every Kingdom</p></span>
        </div>

        <div className="legend__block">
            <div className="legend__block-color2"></div>
            <span className="legend__span"><p>I Forget Where We Were</p></span>
        </div>

        <div className="legend__block">
            <div className="legend__block-color3"></div>
            <span className="legend__span"><p>Noonday Dream</p></span>
        </div>
            
        <div onClick={() =>clearCurrentAlbum()} className="legend__button">
        <CustomButton >Reset</CustomButton>
        </div>

    </div>
)

const mapDispatchToProps = dispatch =>({
    clearCurrentAlbum: () =>dispatch(clearCurrentAlbum())
})

export default connect(null, mapDispatchToProps)(Legend);