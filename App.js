import React from 'react'
import ReactDOM from 'react-dom/client'
// const heading = React.createElement("h1", { id: "heading", erlmcec: "heading-text" }, "Hello Rajesh, Welcome to React")
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)


/*
*  <div id="parent">
*       <div>
            <h1> rfwr </h1>
        </div>
    </div>
*/

const parent = React.createElement("div",
    {
       id:"parent"
    },
    React.createElement("h1",{id:"heading2"},"h1 tag i'erewm")
)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)