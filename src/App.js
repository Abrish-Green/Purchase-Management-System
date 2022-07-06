import Header from './Components/Header/Index'
import Product from './Components/Product/Index'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllItem } from './Services/Redux/Purchase';
import React from 'react';
function App() {
  const dispatch = useDispatch()
  const state = useSelector((state => state))
  const product = useSelector((state)=> state.product) || []
  React.useEffect(() => {
    dispatch(fetchAllItem())
    console.log(product)
  }, [dispatch,product])
  console.log(state)
  return (
    <>
      <div className="w-full">
        <Header />
        <div className="p-1">
          {product.items != null && product?.items?.map((item) => {
            return (<>
              <Product key={item.name} Data={item} />
            </>)
          })}
          {(product.items != null && product.items.length === 0) && 
            <div className='p-4 text-2xl bg-red-600 shadow-md text-red'>
                Not Found
            </div>
          }
          
        </div>
        
      </div>
      
    </>
  );
}

export default App;
