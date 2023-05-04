import {Link} from 'react-router-dom';
import {AiFillStar} from "react-icons/ai";
import { useStateContext } from "../context/ContextProvider";
const Card = ({ productData }) => {
  const {dispatch} = useStateContext();
  return(
    <div className="w-72 h-90 bg-white p-2 border-2 rounded-lg shadow-lg hover:shadow-xl transition hover:scale-105">
      <div>
        <img className="rounded-t-lg m-auto w-[200px] h-[200px]" src={productData.image} alt="" />
      </div>
      <div class="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {productData?.title.substring(0,20)+"..."}
        </h5>
        <div className='flex justify-between'>
          <h5 className="text-xl tracking-tight text-warn" >${productData?.price}</h5>
          <div className='flex items-center gap-1'>
            <AiFillStar className='text-danger text-xl' />
            <small className='text-info text-xl font-semibold'>( {productData?.rating?.rate} )</small>
          </div>
        </div>
      </div>
      <div className="flex justify-around p-2 -mt-2">
        <button onClick={() => dispatch({type:"ADD_TO_CART", payload: productData})} className='bg-secondary text-primary px-5 py-2 rounded shadow-lg transform transition hover:scale-90'>
          Add To Cart
        </button>
        <Link to={`/details/${productData.id}`}>
          <button className='bg-header text-primary px-5 py-2 rounded shadow-lg ml-3 transform transition hover:scale-90'>Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
