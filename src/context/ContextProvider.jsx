import { createContext, useContext, useReducer,useEffect, useState} from "react"
import ApiService from "../api_service/ApiService";
const StateContext = createContext();
const ContextProvider = ({children}) => {
  const [productList,setProductList] = useState([])
  const [detailList,setdetailList] = useState([])
  const [search,setSearch] = useState("")
  const initialState = {
    products : [],
    cart : []
  }
  const reducer = (state,action)=>{
    switch (action.type) {
      case "Get_Products":
        return {...state,products :action.payload};
        case "ADD_TO_CART":
          const item = action.payload;
          const isExisted = state.cart.find((c) => c.id === item.id);
          if (isExisted) {
            return {
              ...state,
              cart: state.cart.map((c) =>
                c.id === item.id ? { ...item } : { ...c }
              ),
            };
          } else {
            return {
              ...state,
              cart: [...state.cart, { ...item }],
            };
          }
        case "REMOVE_FROM_CART":
          return {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload.id),
          };
        case "CART_EMPTY":
          return { ...state, cart: (state.cart = []) };
        default:
          return state;
      }
    };
  const [state,dispatch] = useReducer(reducer,initialState)
  const getData=async()=>{
    const dataList = await ApiService("products")
    setProductList(dataList)
  }
  useEffect(() => {
    getData()
  }, []);
  useEffect(()=>{
    dispatch({type : "Get_Products",payload : productList})
    const filterList = productList.filter((pd) =>
    pd.title.toLowerCase().includes(search.toLocaleLowerCase())
  );
    dispatch({type : "Get_Products",payload : filterList})
  },[productList, search])
  const data = {state,search, setSearch,detailList,setdetailList, dispatch};
  return (
    <StateContext.Provider value={data}>
      {children}
    </StateContext.Provider>
  )
}
export const useStateContext =()=> useContext(StateContext)
export default ContextProvider