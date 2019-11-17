import React from 'react';
import { connect } from 'react-redux'
import './backdrop.styles.scss'
import { hideSidedrawer } from '../../redux/toolbar/toolbar.actions'

const Backdrop = ({ hideSidedrawer }) => (
    <div className="backdrop" onClick={hideSidedrawer}/>
)



const mapDispatchToProps = dispatch =>({
    hideSidedrawer: () =>dispatch(hideSidedrawer())
})
export default connect(null, mapDispatchToProps)(Backdrop);