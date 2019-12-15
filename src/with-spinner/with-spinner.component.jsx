import React from "react";
import Spinner from '../components/spiner/spiner.component'

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
    return isLoading ? <Spinner/> : <WrappedComponent {...otherProps} />

};

export default WithSpinner;
