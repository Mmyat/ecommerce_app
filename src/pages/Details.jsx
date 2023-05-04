import { Link,useParams } from "react-router-dom";
import ApiService from "../api_service/ApiService";
import {AiFillStar} from "react-icons/ai"
import { useState,useEffect } from "react";
import { useStateContext } from "../context/ContextProvider";
const Details = () => {
  const {dispatch} = useStateContext();
  const {id} = useParams()
  const [product,setProduct] = useState([])
  const [filterproducts,setfilterproducts] = useState([])
  const getProduct=async()=>{
    setProduct(await ApiService(`products/${id}`))
  }
  const getProductByCat=async()=>{
    setfilterproducts(await ApiService(`products/category/${product.category}`))
  }
  useEffect(() => {
    getProduct()
    getProductByCat()
  }, [product,filterproducts]);
  return (
    <>
      <div className="flex gap-5 items-start mx-7 my-20">
        <img
          src={product?.image}
          className="w-[250px] h-[370px] border-2 shadow-lg p-10"
          alt=""
        />
        <div className="flex flex-col gap-5 mt-5">
          <p className="bg-header text-info font-bold px-2 py-1 text-xs rounded-full w-40 text-center">
            {product?.category}
          </p>
          <h3 className="text-2xl font-semibold text-header">
            {product?.title}
          </h3>
          <div className="">
            <p className="text-header font-semibold text-lg">Description</p>
            <p className="text-secondary tracking-wider leading-6 mt-1">
              {product?.description}
            </p>
          </div>
          <p className="flex items-center gap-2">
            <AiFillStar className="text-xl text-danger" />{" "}
            <small className="text-secondary font-bold">
              {product?.rating?.rate}
            </small>{" "}
          </p>
          <p className="text-warn text-xl font-semibold">${product?.price}</p>
          <div className="flex">
            <button onClick={() => dispatch({type:"ADD_TO_CART", payload: product})} className="bg-secondary text-primary py-2 rounded shadow-lg w-40 transform transition hover:scale-90">
              Add to Cart
            </button>
            <Link to="/success">
              <button className="bg-header ml-3 text-primary py-2 rounded shadow-lg w-40 transform transition hover:scale-90">
                Buy Now
            </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-5 my-20">
        <h1 className="text-2xl font-semibold">You may also like</h1>
        <div className="flex flex-wrap gap-5 my-10">
          {filterproducts?.map(items=>(
            <div key={items.id} className="border-2 shadow-lg">
              <img src={items?.image} className="w-[200px] h-[200px] p-3 rounded" alt=""/>
              <p className="text-warn font-semibold mt-2">${items?.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Details;