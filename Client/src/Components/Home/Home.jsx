import { useState, useEffect } from 'react'
import './Home.modulus.css'
import NewsCard from '../NewsCard/NewsCard';

const Home = () => {

    const [ data, setData ] = useState(null);
    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    const url = 'https://newsapi.org/v2/top-headlines?country=us&pageSize=13&apiKey=b8977644269c43d09378dc71761b932d';

    useEffect(() => {
    const fetchData = async () =>{
        try{
        const response = await fetch(url);
        if (!response.ok){
            throw new Error('Network response was not ok');
        }
        const result = await response.json();
        // console.log(result)
        setData(result);
        }
        catch(error){
        setError(error.message);
        }
        finally{setLoading(false)}
    };

    fetchData();
    },[]);

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error}</div>

    let updatedData = data.articles;

    updatedData = updatedData.filter((item) => item.content !== "[Removed]" && item.urlToImage)

    console.log(updatedData);

    return(
        <div className="home container">
            <h2 className='header'>News Feed</h2>
            <div className='Home-cards'>
                <NewsCard updatedData={updatedData} />
            </div>
        </div>
    )
}
export default Home