import React from 'react';
import { PencilLine, Trash } from 'phosphor-react';
import { Iproduct } from '../types';

type propsList = {
  product: string
  productList: Iproduct[];
  setProductList: React.Dispatch<React.SetStateAction<Iproduct[]>>,
  setEditIten: React.Dispatch<React.SetStateAction<Iproduct | undefined>>,
}

export function ProductList(
  {
    product,
    productList,
    setProductList,
    setEditIten,
  }: propsList,
) {
  const handleFilterIten = (idValue: string): void => {
    const filterList = productList.filter(({ id }) => id !== idValue);
    setProductList(filterList);
  };

  const handleFindIten = (idValue: string): void => {
    const findList = productList.find(({ id }) => id === idValue);
    if (findList) {
      setEditIten(findList);
    }
  };

  return (
    <ol className="bg-primary-300 text-slate-400 pt-16 pb-7 p-1 sm:container">
      {productList && productList.filter((elem) => elem.name.includes(product.toUpperCase()))
        .map(({ id, name, priceValue }) => (
          <li
            key={id}
            className="
                relative
                flex
                items-center
                border-solid
                border-4
                border-slate-700
                rounded-full
                px-2
                py-1
                m-1
                sm:m-2
               "
          >
            <span className="pl-1">{`${name}`}</span>
            <span className="absolute inset-x-1/3 pl-2">
              {`R$: ${(priceValue)}`}
            </span>

            <button
              type="button"
              onClick={() => handleFindIten(id)}
              className="
                  absolute
                  right-12
                  p-0.5
                  bg-primary-400
                  rounded-lg
                  flex
                  justify-center
                  items-center
                  shadow-sm
                  shadow-secundary-400
                "
            >
              <PencilLine size={20} className="text-secundary-400 m-0.5" />
            </button>
            <button
              type="button"
              onClick={() => handleFilterIten(id)}
              className="
                  absolute
                  right-3
                  p-0.5
                  bg-primary-400
                  rounded-md
                  flex
                  justify-center
                  items-center
                  shadow-sm
                  shadow-secundary-400
                "
            >
              <Trash size={20} className="text-secundary-400 m-0.5" />
            </button>
          </li>
        ))}
    </ol>
  );
}
