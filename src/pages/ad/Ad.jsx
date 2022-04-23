import css from './Ad.module.css'
import { useState } from "react"
import { useNavigate } from 'react-router-dom'


export default function Ad() {

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState()
    const [error, setError] = useState(false)
    const navigate = useNavigate();


    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const handlePrice = (e) => {
        setPrice(e.target.value);
    }
    const handleDescription = (e) => {
        setDescription(e.target.value);
    }


    const submit = (e) => {
        e.preventDefault();
       
        fetch('https://625eaad13b039517f1fa0794.mockapi.io/react-house', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                price: price,
                description: description,
                image: "https://pics.livejournal.com/whoamelly_nyc/pic/000a1d3w/s640x480"

            })     
        })

        .then((res) =>{
            if(res.status === 201){
                alert('SUCCESS')
                navigate('/main')
            }
        })
    }
    


    return (
        <form onSubmit={submit} className="container">
            <div className="mb-3">
                <label className="form-label">Title</label>

                <input className="form-control"
                    value={title}
                    onChange={handleTitle}
                    type="text"
                    placeholder="Title" />
            </div>

            <div className="mb-3">
                <label className="form-label">Price</label>
                <input className="form-control"
                    value={price}
                    onChange={handlePrice}
                    type="text"
                    placeholder="Price" />
            </div>

            <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea className="form-control" rows="3"
                    value={description}
                    onChange={handleDescription}
                ></textarea>
            </div>
            <button className="btn btn-success w-100"
                type="submit"> + Создать</button>
        </form>
    )
}