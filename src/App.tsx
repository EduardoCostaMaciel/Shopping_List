import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { Iproduct } from './types';

export const App = () => {
  const productListLocalStorage = localStorage.getItem('productList') || 'false';
  const initialState: [] = JSON.parse(productListLocalStorage) || [];

  const [productList, setProductList] = useState<Iproduct[]>(initialState);

  useEffect(() => {
    localStorage.setItem('productList', JSON.stringify(productList)), [productList]
  })

  return (
    <main className="min-h-screen bg-primary-300 sm:container">
      <Header productList={productList} />

      <h1>productList</h1>

      <h1>Form</h1>
    </main>
  )
}

export default App
