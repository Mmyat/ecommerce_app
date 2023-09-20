import { useStateContext } from "../context/ContextProvider";
import Card from '../components/Card';
const Home = () => {
  const {state:{products}} = useStateContext();
  return (
    <div className="max-w-screen-xl flex flex-wrap items-center bg-white gap-5 justify-center mt-20">
      {products?.map(pd=>(
        <Card key = {pd.id} productData = {pd}/>
      ))}
    </div>
  )
}

export default Home;