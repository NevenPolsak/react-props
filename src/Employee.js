import React from 'react';

const Employee = (props) => {
    const {name,lastName,age} = props;
    return (
        <div>
            <h3>Employee name:{name} {lastName}</h3> 
            <h3>Who is age: {age}</h3>         
        </div>
    );
};

export default Employee;
