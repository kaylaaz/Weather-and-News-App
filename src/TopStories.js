import React, { useEffect, useState } from 'react';

function TopStories() {

    const api = process.env.REACT_APP_api_key_nyt;
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=${api}`)
            .then((response) => response.json())
            .then((data) => setData(data.results))
            .catch((error) => console.log("Error: ", error))
    }, []);

    useEffect(() => {
        console.log(data);
    }, [data]);

    //set range to end at 24
    if (!data) { return null }
    return (
        <>
            <h2 class="title">Top 5 Stories</h2>
            {data.slice(0, 5).map((story, index) => {
                return (
                    <>
                        <p>{index}: {story.title}</p>
                        <p>{story.byline}</p>
                        <p>{story.abstract}</p>
                        <p>{story.media.media - data.url}</p>
                        <p>{story.url}</p>
                    </>
                )
            })}
        </>
    );
}

export default TopStories;