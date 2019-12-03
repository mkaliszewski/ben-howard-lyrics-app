import React from 'react';

import './about.styles.scss'
import SelectForm from '../../components/select-form/select-form.component'


const AboutPage = () =>(
    <div className="aboutpage">
        <SelectForm guitarTypes={["acoutstic","electric"]} label="Select Guitar"/>
    </div>
)

export default AboutPage;