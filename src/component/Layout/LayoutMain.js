import React, { Fragment } from "react";
import HeaderMain from '../Header/HeaderMain'
const LayoutMain = (props) => {
    return (
        <Fragment>
            <HeaderMain />
            {props.children}
        </Fragment>
    );
}
 
export default LayoutMain;