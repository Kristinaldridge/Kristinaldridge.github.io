import React, {useState, useEffect} from 'react';

const apiKey = 'live_AjjJU2oCfHEmb1SAzT7JqmkD7p2t1PEse2HWJRG4hb0gru53rsD1q1rB1aLjxwkE';

const BreedCardImage = () => {
    const [dogImageUrl, setDogImageUrl] = useState ('');

useEffect(() => {
    const fetchRandomDogImage = async () => {
        try {
            const response = await fetch('https://api.thedogapi.com/v1/images/r1ZfomsN7', {
                headers: {
                    'x-api-key': apiKey
                }
            });
            if (!response.ok) {
                throw new Error ("Network response error");
            }
            const data = await response.json();
            if (data.url) {
                setDogImageUrl(data.url);
            } else {
                throw new Error ('API Issue');
            }
        } catch (error) {
                console.error('Error fetching dog image:', error);
                setDogImageUrl('https://cdn2.thedogapi.com/images/mufxR-Px7.jpg');
            }
        };

        fetchRandomDogImage();
    },[]);

    return (
        <section className= "hero">
        <div className = "container">
            <h2>Get Peace Of Mind With Dog Insurance</h2>
            <p>Protect your fury friends with our custom insurance plans</p>
            <img id= "random-dog" src={dogImageUrl} alt="Random Dog" />
        </div>
        </section>
    );
};

export default BreedCardImage; 