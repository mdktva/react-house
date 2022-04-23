import {useEffect, useState} from "react";
import Card from "../../components/card/Card";
// import Footer from "../../components/footer/Footer";
// import About_us from "../../components/about_us/About_us";
// import Info from '../../pages/info/Info'

// import Login from '../../pages/login/Login'

// import { Info } from "../info/Info";
// import { Info } from './pages/info/Info';


export const Main = () => {

  const [houses, setHouses] = useState([]);

    // const home = [
    //   {
    //     title: 'For Sale',
    //     id: 1,
    //     price: '1000000$',
    //     img: 'https://expertfasada.ru/wp-content/uploads/2019/04/mini-8.jpg'
    //   },
    //   {
    //     title: 'For Sale',
    //     id: 2,
    //     price: '1000000$',
    //     img: 'https://expertfasada.ru/wp-content/uploads/2019/04/mini-8.jpg'
    //   },
    //   {
    //     title: 'For Sale',
    //     id: 3,
    //     price: '1000000$',
    //     img: 'https://expertfasada.ru/wp-content/uploads/2019/04/mini-8.jpg'
    //   },
    //   {
    //     title: 'For Sale',
    //     id: 4,
    //     price: '1000000$',
    //     img: 'https://expertfasada.ru/wp-content/uploads/2019/04/mini-8.jpg'
    //   },
    //   {
    //     title: 'For Sale',
    //     id: 5,
    //     price: '1000000$',
    //     img: 'https://expertfasada.ru/wp-content/uploads/2019/04/mini-8.jpg'
    //   },
    //   {
    //     title: 'For Sale',
    //     id: 6,
    //     price: '1000000$',
    //     img: 'https://expertfasada.ru/wp-content/uploads/2019/04/mini-8.jpg'
    //   },
    //   {
    //     title: 'For Sale',
    //     id: 7,
    //     price: '1000000$',
    //     img: 'https://expertfasada.ru/wp-content/uploads/2019/04/mini-8.jpg'
    //   },
    //   {
    //     title: 'For Sale',
    //     id: 8,
    //     price: '1000000$',
    //     img: 'https://expertfasada.ru/wp-content/uploads/2019/04/mini-8.jpg'
    //   },
    // ];

    useEffect((props) => {
      fetch('https://625eaad13b039517f1fa0794.mockapi.io/react-house')
        // .finally();
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setHouses(data);
        })
        .catch((error)=> console.log(error))
      }, []);
      
      
  
    return (
      <main className='container mt-5'>
        <h2 className='text-center'>Recent announcements</h2>
  
        <div className='mt-5 row justify-content-between'>
          {
            houses.map((item) => <Card
              id={item.id}
              title={item.title}
              img={item.image}
              description ={item.description}
              price={item.price}
            />)
          }
         
        </div>
      </main>
    )
  }
  
  