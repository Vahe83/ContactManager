import React, { Fragment } from 'react'

const Icons = (props) =>
{
    const styleShow = 
    {
        cursor: 'pointer',
        marginLeft: '0.3rem'
    }

    const styleDelete = 
    {
        cursor: 'pointer',
        float: 'right',
        color: 'red',
        
    }

    const styleEdit =
    {
        cursor: 'pointer',
        float: 'right',
        color: 'black',
        marginRight: '1rem'
    }
    
    return (
        <Fragment>
            <i onClick={props.showDetails} className="fas fa-sort-down" style={styleShow}></i>
            {props.deleteIcon ?
                <Fragment>
                    <i onClick={props.deleteContact} className="fas fa-times" style={styleDelete}></i>
                    <i onClick={props.updateContact} className="fas fa-pencil-alt" style={styleEdit}></i>
                </Fragment> :
            null}
        </Fragment>
    );
    
}

export default Icons;
