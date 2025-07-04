import React from 'react'
import ReactDOM from 'react-dom/client'

/*
* Header
*   - Logo
*   - Nav items
* Body
*   - Search
*   - ReastaurentContainer
*       - RestaurantCard
* Footer
*   - Copyright
*   - Links
*   - Address
*   - Contact
* 
*/

const Head2 = (props) => {
    console.log(props)
}

const head3 = (props) => {
    console.log(props)
}

const HeadingComponent = () =>{
    return(
        <>
        <Head2  names="Rjaesh" age={22}/>
        {head3(names="Rajesh", age=22)}
        </>
    )
}



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<HeadingComponent />)