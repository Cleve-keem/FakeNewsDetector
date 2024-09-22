import './NewsCard.modulus.css';
import moment from 'moment';

const NewsCard = ({updatedData}) =>{

    const timeAgo = (publishedData) => {
        return moment(publishedData).fromNow();
    }
    return (
        <>
        {updatedData.map((props, index) => (
            <div className="card" key={index}>
                <div className="card-info">
                    <div className="card_image">
                        <img src={props.urlToImage} />
                    </div>
                    <div className="card-content">
                        <div className='card-title'>{props.title}</div>
                        <p>{props.description}</p>
                        <a href={props.url}>Read more...</a>
                    </div>
                    <div className='source'>
                        <p>Published: {timeAgo(props.publishedAt)} by {props.source.name}</p>
                    </div>
                </div>
            </div>
        ))}
        </>
    )
}
export default NewsCard