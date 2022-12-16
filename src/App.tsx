import { useEffect, useState } from 'react'
import { Form } from './components/Form';
import { Header } from './components/Header'
import { ProductList } from './components/ProductList';
import { Iproduct } from './types';

export const App = () => {
  const productListLocalStorage = localStorage.getItem('productList') || 'false';
  const initialState: [] = JSON.parse(productListLocalStorage) || [];

  const [product, setNewProduct] = useState<string>('');
  const [quantity, setQuantity] = useState<string>('1');
  const [price, setNewPrice] = useState<string>('');
  const [productList, setProductList] = useState<Iproduct[]>(initialState);
  const [editIten, setEditIten] = useState<Iproduct>();
  const [isOpenForm, setIsOpenForm] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem('productList', JSON.stringify(productList)), [productList]
  })

  useEffect((): void => {
    if (editIten) {
      setNewProduct(editIten.name);
      setQuantity(editIten.quantity);
      setNewPrice(editIten.priceValue || '0');
    } else {
      setNewProduct('');
      setQuantity('1')
      setNewPrice('');
    }
  }, [editIten]);

  const handleEditIten = (): void => {
    const newList = productList.map((prod) => (
      prod.id === editIten?.id
        ? {
          id: editIten?.id,
          name: product.toUpperCase(),
          priceValue: (Number(quantity) * Number(price)).toFixed(2),
          quantity,
          completed: editIten.completed
        } : prod));
    setProductList(newList);
    setIsOpenForm(false)
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
        setIsOpenForm={setIsOpenForm}
      />

      <Form
        product={product}
        setNewProduct={setNewProduct}
        quantity={quantity}
        setQuantity={setQuantity}
        price={price}
        setNewPrice={setNewPrice}
        productList={productList}
        setProductList={setProductList}
        editIten={editIten}
        setEditIten={setEditIten}
        handleEditIten={handleEditIten}
        isOpenForm={isOpenForm}
        setIsOpenForm={setIsOpenForm}
      />
    </main>
  )
}

export default App
