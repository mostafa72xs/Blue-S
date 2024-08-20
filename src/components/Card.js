import React ,{useState} from 'react'
import Loading from './Hooks/Loading';
import "./css/card.css"
import { useCart } from 'react-use-cart'

function Card(props) {
  const [loading , setloading] = useState(false);

  const {addItem} = useCart()


  const handleclick = () => {
    addItem(props.item);
    setloading(true);
    setTimeout(()=>{
        setloading(false);
    },2000);
}
  return (
    <div className='card' keys={props.id}>
      <div>
        <img src={props.image} alt='imgg' />
      </div>
        <h1>{props.title}</h1>
        <p className='spaa'>${props.price}</p>
        <button onClick={handleclick}>
          {
            loading ? (<Loading />) : ("Add to cart")
          }
        </button>
    </div>
  )
}

export default Card