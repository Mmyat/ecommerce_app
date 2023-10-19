import React, { useState } from "react";
import {
  AiFillDelete,
  AiFillMinusSquare,
  AiFillPlusSquare,
} from "react-icons/ai";
import { useStateContext } from "../context/ContextProvider";

const CartItem = ({ item, incresePrice, decresePrice }) => {
  const { dispatch } = useStateContext();
  const [qty, setQty] = useState(1);
  const increseQty = () => {
    setQty((prev) => prev + 1);
    incresePrice(item.price);
  };
  const decreseQty = () => {
    if (qty > 1) {
      setQty((prev) => prev - 1);
      decresePrice(item.price);
    }
  };
  const removeItemHandler = () => {
    decresePrice(item?.price * qty);
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };
  return (
    <div className="flex flex-col sm:flex-row w-full items-center bg-gray-50 px-auto px-1 sm:px-2 py-4 border rounded shadow-lg gap-4">
      <img src={item?.image} className="w-[150px] h-[150px] border-2 rounded p-4" alt="" />
      <div className="">
        <h3 className="flex-wrap text-lg md:text-xl font-semibold">{item?.title}</h3>
        <p className="text-secondary text-lg md:text-xl my-3">${item?.price * qty}</p>
        <div className="flex items-center flex-wrap gap-3">
          <AiFillMinusSquare
            onClick={decreseQty}
            className="text-2xl md:text-3xl text-danger cursor-pointer"
          />
          <p className="tex-2xl">{qty}</p>
          <AiFillPlusSquare
            onClick={increseQty}
            className="text-2xl md:text-3xl text-info cursor-pointer"
          />

          <AiFillDelete
            onClick={removeItemHandler}
            className="text-danger text-2xl md:text-3xl cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
