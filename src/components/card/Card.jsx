// import css from './Card.module.css'
import {Link} from 'react-router-dom'


export default function Card(props){
    return(

        <div className="card" style={{width: "15rem", margin: "10px 0"}}>
            <img src={props.img} className="card-img-top" alt="#"/>

                <div className="card-body">
                    <h4 className="card-title">{props.title}</h4>
                    <h5> {props.price}</h5>
                    <p>{props.description}</p>
                    <Link to={"/info/" + props.id} className="btn btn-primary" >more info</Link>
                </div>
        </div>

    )
}



