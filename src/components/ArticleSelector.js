import React, { useState } from "react";

const ArticleSelector = ({filterFunction}) =>{

    const [filter, setFilter] = useState("")

    const handleInput = ((event) =>{
        setFilter(event.target.value)
        filterFunction (event.target.value)
    })

    // const handleSubmit = (event) =>{
    //     event.preventDefault()
        // const filterInput = filter
        // filterFunction (filterInput)
    


    return(
<>
    <form className="form" >
    <input type="text" placeholder="Type here"  value={filter} onChange={handleInput}/>
    {/* <button type="submit">Submit</button> */}


    </form>
</>
    )
}

export default ArticleSelector;