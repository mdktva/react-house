import {useState} from "react"
import {useNavigate} from "react-router-dom"
import css from './Login.module.css';
import Ad from "../../pages/ad/Ad";
import { Link } from "react-router-dom"
import { UseNavigate} from "react-router-dom"


export default function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const navigate = useNavigate();

    const submit = (e) => {
        
        e.preventDefault();
        if(email === "admin" && password === "admin"){
            navigate("/create-new-add")
        }else{
            setError(true)   
        }

    }

    const handleEmail = (e) =>{
        setEmail(e.target.value);
    }

    const handlePassword = (e) =>{
        setPassword(e.target.value);
    }

    return (
        <div className={css.main}>
            <h3>Log in</h3>
            <form onSubmit={submit}>

                <span>Login   </span>
                <input className={css.input} 
                value={email}
                onChange={handleEmail}
                type="text" 
                placeholder='name@gmail.com'
                 />
                <br /> <br />

                <span>password  </span>

                <input className={css.input} 
                value={password}
                onChange={handlePassword}
                type="password" 
                placeholder='*********'
                /> 
                <br /> <br />
                {
                    error ? <div style={{color: "red"}}>incorrect credentials</div> : null
                }
                <input className={css.close} type="submit" value="Close" />
                <input className={css.login} type="submit" value="Login" />
                <Link className={css.login} to="/ad">Войти</Link>

            </form>


        </div>
    )
}

