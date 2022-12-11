import { useEffect, useState } from 'react'
import { Form } from './components/Form';
import { Header } from './components/Header'
import { Iproduct } from './types';

export const App = () => {
  const productListLocalStorage = localStorage.getItem('productList') || 'false';
  const initialState: [] = JSON.parse(productListLocalStorage) || [];

  const [product, setNewProduct] = useState<string>('');
  const [price, setNewPrice] = useState<string>('');
  const [productList, setProductList] = useState<Iproduct[]>(initialState);

  useEffect(() => {
    localStorage.setItem('productList', JSON.stringify(productList)), [productList]
  })

  return (
    <main className="min-h-screen bg-primary-300 sm:container">
      <Header productList={productList} />

      <h1>productList</h1>

      <Form
        product={product}
        setNewProduct={setNewProduct}
        price={price}
        setNewPrice={setNewPrice}
        productList={productList}
        setProductList={setProductList}
      />
    </main>
  )
}

export default App
