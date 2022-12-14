import { useEffect, useState } from 'react'
import { Form } from './components/Form';
import { Header } from './components/Header'
import { ProductList } from './components/ProductList';
import { Iproduct } from './types';

export const App = () => {
  const productListLocalStorage = localStorage.getItem('productList') || 'false';
  const initialState: [] = JSON.parse(productListLocalStorage) || [];

  const [product, setNewProduct] = useState<string>('');
  const [price, setNewPrice] = useState<string>('');
  const [productList, setProductList] = useState<Iproduct[]>(initialState);
  const [editIten, setEditIten] = useState<Iproduct>();

  useEffect(() => {
    localStorage.setItem('productList', JSON.stringify(productList)), [productList]
  })

  useEffect((): void => {
    if (editIten) {
      setNewProduct(editIten.name);
      setNewPrice(editIten.priceValue || '0');
    } else {
      setNewProduct('');
      setNewPrice('');
    }
  }, [editIten]);

  const handleEditIten = (): void => {
    const newList = productList.map((prod) => (
      prod.id === editIten?.id
        ? {
          id: editIten?.id,
          name: product.toUpperCase(),
          priceValue: Number(price).toFixed(2),
          completed: editIten.completed
        } : prod));
    setProductList(newList);
    setEditIten(undefined);
  };

  return (
    <main className="min-h-screen bg-primary-300 sm:container sm:shadow-sm">
      <Header productList={productList} />

      <ProductList
        productList={productList}
        product={product}
        setProductList={setProductList}
        setEditIten={setEditIten}
      />

      <Form
        product={product}
        setNewProduct={setNewProduct}
        price={price}
        setNewPrice={setNewPrice}
        productList={productList}
        setProductList={setProductList}
        editIten={editIten}
        handleEditIten={handleEditIten}
      />
    </main>
  )
}

export default App
