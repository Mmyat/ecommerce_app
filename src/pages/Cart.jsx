import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useStateContext } from "../context/ContextProvider";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = useStateContext();
  const [total, setTotal] = useState(0);

  const navigate = useNavigate();

  const checkoutHandler = () => {
    dispatch({ type: "CART_EMPTY" });
    navigate("/success");
  };

  const incresePrice = (price) => {
    setTotal(total + price);
  };
  const decresePrice = (price) => {
    setTotal(total - price);
  };

  useEffect(() => {
    setTotal(cart.reduce((initial, current) => initial + current.price, 0));
  }, []);

  return (
    <>
      {cart.length > 0 ? (
        <div className="max-w-screen-xl grid grid-cols-5 px-auto mt-24">
          <div className="col-span-3 flex flex-col gap-5">
            {cart?.map((item) => (
              <CartItem key={item.id} item={item} incresePrice={incresePrice} decresePrice={decresePrice} />
            ))}
          </div>
          <div className="col-span-2 mx-auto">
            <div className="h-auto justify-center bg-gray-50 px-2 py-4 mx-auto border rounded shadow-lg">
              <h1 className="text-2xl text-info font-semibold">
                Total Price - ${total.toFixed(2)}
              </h1>
              <button
                onClick={checkoutHandler}
                className="px-2 py-2 bg-info text-primary rounded shadow-lg uppercase my-5"
              >
                Checkout
              </button>
            </div>
            <button
              onClick={() => dispatch({ type: "CART_EMPTY" })}
              className="px-5 py-2 bg-danger text-primary rounded shadow-lg uppercase my-5"
            >
              Cart empty
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <div className="bg-secondary p-20 rounded shadow-lg mt-20 animate__animated animate__backInDown">
            <h1 className="text-4xl font-semibold tracking-wider my-5 text-primary">
              Your Cart is Empty
            </h1>
            <button
              onClick={() => navigate("/")}
              className="text-primary bg-danger px-5 py-2 shadow-lg uppercase rounded transition hover:scale-105"
            >
              go shopping
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;