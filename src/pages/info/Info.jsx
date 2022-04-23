import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// import css from './Info.module.css';

 

export default function Info() {
    const {id} = useParams();
    // const [] = useState();
    const [house, setHouse] = useState(null);

    useEffect(() => {
        fetch('https://625eaad13b039517f1fa0794.mockapi.io/react-house/' + id)
        .then((res) => res.json())
        .then((data) => {
            setHouse(data)
        })
    }gitt);

    if(house===null){
        return <h1>Loading...</h1>
    }
    return (
        <div className='container'>
            <img src = {house.image} alt=""/>
            <h1>{house.title}</h1>
        </div>
        
    )
}




