import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Iproduct } from '../types';

type propsForm = {
  product: string;
  setNewProduct: React.Dispatch<React.SetStateAction<string>>;
  quantity: string;
  setQuantity: React.Dispatch<React.SetStateAction<string>>;
  price: string;
  setNewPrice: React.Dispatch<React.SetStateAction<string>>;
  productList: Iproduct[];
  setProductList: React.Dispatch<React.SetStateAction<Iproduct[]>>;
  editIten: Iproduct | undefined;
  setEditIten: React.Dispatch<React.SetStateAction<Iproduct | undefined>>;
  handleEditIten: () => void;
  isOpenForm: boolean;
  setIsOpenForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Form(
  {
    product,
    setNewProduct,
    quantity,
    setQuantity,
    price = '0',
    setNewPrice,
    productList,
    setProductList,
    editIten,
    setEditIten,
    handleEditIten,
    isOpenForm,
    setIsOpenForm
  }: propsForm,
) {

  const handleFormSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (!editIten) {
      setProductList([
        ...productList,
        {
          id: uuidv4(),
          name: product.toUpperCase(),
          priceValue: (Number(quantity) * Number(price)).toFixed(2),
          quantity,
          completed: false,
        }]);
      setNewProduct('');
      setQuantity('1')
      setNewPrice('');
    } else {
      handleEditIten();
    }
  };

  return (
    <section
      className="
        fixed
        bottom-0
        text-lg
        sm:container
        sm:inset-x-1
        shadow-md
        w-full
        group
        bg-slate-700
        rounded-t-xl
      "
    >
      <button
        type="button"
        onClick={() => {
          setIsOpenForm(!isOpenForm)
          setEditIten(undefined)
        }}
        className="
          w-full
          italic
          font-extrabold
          text-slate-400
          bg-slate-700
          shadow-sm
          shadow-slate-500
          rounded-t-xl
        "
      >
        {editIten ? 'Edit Product' : 'Add Product'}
      </button>

      <form
        onSubmit={handleFormSubmit}
        className={`
          flex
          flex-col
          gap-2
          items-center
          text-primary-400
          text-md
          font-extrabold
          overflow-hidden
          ${isOpenForm ? 'max-h-24' : 'max-h-0'}
          transition-all
          duration-500
          ease-linear
          sm:container
          sm:flex-row
          mx-2
        `}
      >
        <section className='w-full flex justify-around gap-2 mt-2 px-2 sm:mb-2 sm:px-0 sm:pl-2'>

          <label
            htmlFor="product"
            className="w-full"
          >
            <input
              id="product"
              type="text"
              name="product"
              value={product}
              maxLength={12}
              title="Maximo 12 caracteres"
              className="
              w-full
              bg-primary-300
              placeholder-slate-400
              shadow-sm
              shadow-slate-500
              rounded-full
              p-1
              pl-3.5
              outline-none
              sm:text-sm
            "
              placeholder="Product"
              onChange={({ target }) => setNewProduct(target.value)}
            />
          </label>

          <label
            htmlFor="price"
          >
            <input
              id="price"
              type="text"
              name="price"
              value={price}
              maxLength={7}
              pattern="([0-9]{1,4})\.?([0-9]{0,2})"
              title="Maximo 7 caracteres, somente números, Ex: 1250.00"
              className="
                w-24
                bg-primary-300
                placeholder-slate-400
                shadow-sm
                shadow-slate-500
                rounded-full
                p-1
                pl-3.5
                outline-none
                sm:text-sm
              "
              placeholder="R$"
              onChange={({ target }) => setNewPrice(target.value)}
            />
          </label>

          <label htmlFor="quantity">
            <input
              type="text"
              id="quantity"
              name="quantity"
              value={quantity}
              onChange={({ target }) => setQuantity(target.value)}
              className="
                w-12
                bg-primary-300
                shadow-sm
                shadow-slate-500
                rounded-full
                p-1
                text-center
                text-primary-400
                font-extrabold
                outline-none
                sm:text-sm
              "
            />
          </label>
        </section>

        <button
          type="submit"
          className={`
            w-11/12
            rounded-full
            bg-primary-300
            shadow-sm
            shadow-slate-500
            font-medium
            ${product ? 'text-primary-400' : 'text-slate-400'}
            font-extrabold
            italic
            p-1
            px-2
            mb-3
            sm:text-sm
            sm:w-36
            sm:my-2
            sm:mr-2
          `}
          disabled={!product}
        >
          Add
        </button>
      </form>
    </section>
  );
}
