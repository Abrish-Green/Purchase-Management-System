import Header from './Components/Header/Index'
import Product from './Components/Product/Index'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllItem } from './Services/Redux/Purchase';
import React from 'react';
function App() {
  const dispatch = useDispatch()
  const product = useSelector((state)=> state.product) || []
  React.useEffect(() => {
    dispatch(fetchAllItem())
    console.log(product)
  }, [dispatch, product])

  return (
    <>
      <div className="w-full">
        <Header />
        <div className="p-1">
          {product.items != null && product?.items?.map((item) => {
            return (<>
              <Product Data={item} />
            </>)
            })}
        </div>
        
      </div>
      
    </>
  );
}

export default App;
