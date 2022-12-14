import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Iproduct } from '../types';

type propsForm = {
  product: string;
  setNewProduct: React.Dispatch<React.SetStateAction<string>>;
  price: string;
  setNewPrice: React.Dispatch<React.SetStateAction<string>>;
  productList: Iproduct[];
  setProductList: React.Dispatch<React.SetStateAction<Iproduct[]>>;
  editIten: Iproduct | undefined;
  handleEditIten: () => void;
}

export function Form(
  {
    product,
    setNewProduct,
    price = '0',
    setNewPrice,
    productList,
    setProductList,
    editIten,
    handleEditIten,
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
          priceValue: Number(price).toFixed(2),
          completed: false,
        }]);
      setNewProduct('');
      setNewPrice('');
    } else {
      handleEditIten();
    }
  };

  // bg-opaced-100
  // backdrop-blur-[2px]

  // max-h-0
  // overflow-hidden

  return (
    <section
      className="
        fixed
        bottom-0
        text-md
        sm:container
        sm:grid-cols-5
        sm:inset-x-1
        shadow-md
        w-full
        group
        bg-primary-300
      "
    >
      <button
        type='button'
        className='w-full text-secundary-400 bg-primary-400'
      >
        touch up
        {/* or touch down */}
      </button>

      <form
        onSubmit={handleFormSubmit}
        className="
          grid
          grid-cols-3
          px-2
          items-center
          justify-between
          text-primary-300
          text-md
          h-24
          overflow-hidden
          max-h-0
          group-hover:max-h-24
          transition-all
          duration-500
          ease-linear
          sm:container
          sm:grid-cols-5
          sm:inset-x-1
        "
      >
        <label
          htmlFor="product"
          className="col-span-2 sm:col-span-3 pr-1"
        >
          <input
            id="product"
            type="text"
            name="product"
            value={product}
            className="
              w-full
              bg-primary-400
              placeholder-secundary-400
              shadow-sm
              shadow-secundary-400
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
          className="col-span-1 sm:pr-1"
        >
          <input
            id="price"
            type="text"
            name="price"
            value={price}
            maxLength={5}
            className="
              w-full
              bg-primary-400
              placeholder-secundary-400
              shadow-sm
              shadow-secundary-400
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
        <button
          type="submit"
          className="
            col-span-3
            rounded-full
            bg-primary-400
            shadow-sm
            shadow-secundary-400
            font-medium
            text-secundary-400
            p-1
            mx-2
            sm:text-sm
            sm:col-span-1
            sm:mx-0
          "
          disabled={!product}
        >
          Add
        </button>
      </form>
    </section>
  );
}
