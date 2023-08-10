import React from "react";

const Hello = () => {
    // return (
    //     <div>
    //         <h1>Man</h1>
    //     </div>
    // )
    return React.createElement('div',{'id':'hello','className':'dummyClass'},null,
    React.createElement('h1',null,'hey'))
}

export default Hello