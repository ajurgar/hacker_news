import React from "react";


const NewsDetail = ({ newsItem }) => {

    return (
        <>
        <ul>

<li>
<a href={ newsItem.url }>{ newsItem.title }</a>
</li>
        </ul>
        
            
        </>
        
    )
}

export default NewsDetail;