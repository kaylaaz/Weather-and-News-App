import React, { useEffect, useState } from 'react';

//flex box; built into CSS (grab each component and have class name within div; go into css file; use flexbox to display them horizontally)

function TopStories() {

    const api = process.env.REACT_APP_api_key_nyt;



    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=${api}`)
            .then((response) => response.json())
            .then((data) => {
                setData(data.results)
                // setImg(data.results.media)
                // setTxt(data.results.media["media-metadata"])
                // setTxt2(data.results[0].media[0]['media-metadata'][0].url)
            })
            .catch((error) => console.log("Error: ", error))
    }, []);

    if (!data) { return null }

    return (
        <>
            <h2 className="news-title">Top 5 Stories</h2>
            <div className="container">
                {data.slice(0, 5).map((story, index) => {
                    const mediaUrl = story.media[0]?.['media-metadata'][0]?.url;

                    return (
                        <div key={index} className="story">
                            <p>Top Story {index + 1}: {story.title}</p>
                            <p>{story.byline}</p>

                            {mediaUrl && (
                                <center>
                                    <img
                                        src={mediaUrl}
                                        alt="centered image"
                                        height="200"
                                        width="200"
                                        className="image"
                                    />
                                </center>
                            )}
                            <p>{story.abstract}</p>
                            <p>{story.url}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );





    // return (
    //     <>
    //         <h2 className="news-title">Top 5 Stories</h2>
    //         {data.slice(0, 5).map((story, index) => {
    //             const mediaUrl = story.media[0]?.['media-metadata'][0]?.url; // Access the media-metadata URL

    //             return (
    //                 <div key={index}>
    //                     <p>Top Story {index + 1}: {story.title}</p>
    //                     <p>{story.byline}</p>
    //                     <p>{story.abstract}</p>
    //                     {mediaUrl && (
    //                         <center>
    //                             <img
    //                                 src={mediaUrl}
    //                                 alt="centered image"
    //                                 height="200"
    //                                 width="200"
    //                                 className="image"
    //                             />
    //                         </center>
    //                     )}
    //                     <p>{story.url}</p>
    //                 </div>
    //             );
    //         })}
    //     </>
    // );





    // return (
    //     <>
    //         <h2 class="news-title">Top 5 Stories</h2>
    //         {data.slice(0, 5).map((story, index) => {
    //             return (
    //                 <>
    //                     <p>{index + 1}: {story.title}</p>
    //                     <p>{story.byline}</p>
    //                     <p>{story.abstract}</p>
    //                     <center><img src={txt[0]} //{txt[0].url}
    //                         alt="centered image"
    //                         height="300"
    //                         width="300"
    //                         class="image" /></center>
    //                     <p>{story.url}</p>
    //                     {/* <p> Testing: {story.byline}</p>
    //                     <p> Testing 2: {story.media[0].type}</p> */}
    //                 </>
    //             )
    //         })}
    //     </>
    // );
}

export default TopStories;