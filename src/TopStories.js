import React, { useEffect, useState } from 'react';

//flex box; built into CSS (grab each component and have class name within div; go into css file; use flexbox to display them horizontally)

function TopStories() {

    const api = process.env.REACT_APP_api_key_nyt;

    const [data, setData] = useState([]);
    const [img, setImg] = useState({});
    const [txt, setTxt] = useState([]);

    useEffect(() => {
        //console.log(api);
        fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=${api}`)
            .then((response) => response.json())
            .then((data) => {
                setData(data.results)
                setImg(data.results.media)
                setTxt(data.results.media["media-metadata"])
            })
            .catch((error) => console.log("Error: ", error))
    }, []);


    // useEffect(() => {
    //     console.log(data);
    // }, [data]);

    //set range to end at 24
    //if (!data) { return null }
    return (
        <>
            <h2 class="title">Top 5 Stories</h2>
            {data.slice(0, 5).map((story, index) => {
                return (
                    <>
                        <p>{index + 1}: {story.title}</p>
                        <p>{story.byline}</p>
                        <p>{story.abstract}</p>
                        <center><img src="https://static01.nyt.com/images/2023/04/25/multimedia/24JPcnn-print-mhlv/24cnn-mhlv-thumbStandard.jpg"//{txt[0].url}
                            // alt="centered image"
                            // height="300"
                            // width="300"
                            class="image" /></center>
                        <p>{story.url}</p>
                    </>
                )
            })}
        </>
    );
}

export default TopStories;