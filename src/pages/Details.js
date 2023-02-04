import {Link, useParams} from 'react-router-dom'
import YoutubeEmbed from '../components/YoutubeEmbed.js';
import items from "../Data.js"

export const Details = () => {
    let {id} = useParams();
    console.log(id);
    const item = items.find((item) => item.id === Number(id));
    // console.log(item);
     return (
        <div className='outline'>
            <h5>Item id: {item.id}</h5>
            
            <h1>{item.name}</h1>

            <YoutubeEmbed embedId={item.yt} />
        </div>
    )
}