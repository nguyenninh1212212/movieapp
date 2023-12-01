    import React,{useEffect,useState} from 'react'
    import axios from 'axios';
    import Action from '../Action/Action';
    const Usemovies = () => {
        const [mov, setMov] = useState([]);

        const options = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/auto-complete',
        params: { q: 'game of throne' },
        headers: {
            'X-RapidAPI-Key': '39133bbab0msh4031de9b5b17327p1d6f72jsnb3f81fe57b55',
            'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
        },
        };
    
        const callFetch = async () => {
        try {
            const response = await axios.request(options);
    
            if (response.data && Array.isArray(response.data.d)) {
            setMov(response.data.d);
            console.log(response.data.d);
            } else {
            console.error('qweqwe');
            }
        } catch (error) {
            console.error(error);
        }
        };
        useEffect(() => {
            callFetch();
        }, []);
        console.log(mov);
    return (
        <div>
        {mov && <Action mov={mov}/>}
        </div>
    )
    }

    export default Usemovies