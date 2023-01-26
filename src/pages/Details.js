import {Link, useParams} from 'react-router-dom'
import YoutubeEmbed from '../components/YoutubeEmbed.js';
import items from "../Data.js"

export const Details = () => {
    let {id} = useParams();
    console.log(id);
    const item = items.find((item) => item.id === Number(id));
    console.log(item);
     return (
        <div>
            This is the details page.
            Item id: {item.id}
            Item name: {item.name}
            Item video: 
            <YoutubeEmbed embedId='3PVjWpyhEzQ' />
        </div>
    )
}