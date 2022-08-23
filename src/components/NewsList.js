import React from "react";
import NewsDetail from "./NewsDetail";


const NewsList = ({ news }) => {

    const newsNodes = news.map((newsItem, index) => {
        return <NewsDetail newsItem={newsItem} key={index} />
    })

    return (
<>
<h1>List of Books</h1>
{ newsNodes }
</>
      

    )

}


export default NewsList;