import React from "react";

const Greet = ({name,children}) => {
    console.log(name)
    return (
    <div>
        <h1>{name}</h1>
        {children}
    </div>)
}

export default Greet 