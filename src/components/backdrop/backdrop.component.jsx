import React from 'react';
import './backdrop.styles.scss'


const Backdrop = ({ backdropClick }) => (
    <div className="backdrop" onClick={backdropClick}/>
)


export default Backdrop;