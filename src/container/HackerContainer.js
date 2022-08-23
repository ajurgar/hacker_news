import React, { useEffect, useState } from "react";
import ArticleSelector from "../components/ArticleSelector";
import NewsList from "../components/NewsList";


const HackerContainer = () => {

    const [news, setNews] = useState([])
    const [filteredData, setFilteredData] = useState([])

    useEffect(() => {
        getNewsData();
    }, [])


    const getNewsData = () => {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
            .then(res => res.json())
            .then(data => getAllData(data.slice(0,20)))


    }

    const getAllData = (stories) => {
        const newPromises = stories.map((storyid) => {
            return fetch(`https://hacker-news.firebaseio.com/v0/item/${storyid}.json`)
                .then(res => res.json())



        })
        Promise.all(newPromises)
        .then((result) => {
            setFilteredData(result);
            setNews(result)
            //why both states?

        })
        


    }

    const filterFunction = (input) => {
        const filteredNews = news.filter((story) => story.title.toLowerCase().includes(input) )
        setFilteredData(filteredNews)

        //why can we not use filteredData.filter there?



    }



    return (
        <>
            <NewsList news={filteredData} />
            <ArticleSelector filterFunction={filterFunction} />
        </>

    )


}



export default HackerContainer;