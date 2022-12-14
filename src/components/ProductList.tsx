import React from 'react';
import { Check, PencilLine, Trash } from 'phosphor-react';
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

  const handleIsProductChecked = (idValue: string): void => {
    const isProductCheckedList = productList.map((prod) => {
      if (prod.id === idValue) {
        return { ...prod, completed: !prod.completed }
      }
      return prod
    });
    setProductList(isProductCheckedList)
  };

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
    <ol
      className="list-decimal list-inside bg-primary-300 text-slate-400 pt-16 pb-7 p-1 sm:container"
    >
      {productList && productList.filter((elem) => elem.name.includes(product.toUpperCase()))
        .map(({ id, name, priceValue, completed }) => (
          <li
            key={id}
            className={`
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
              ${completed ? 'line-through' : null}
              decoration-secundary-400
              sm:m-2
            `}
          >
            <span className="pl-1">{`${name}`}</span>
            <span className="absolute inset-x-40 whitespace-nowrap sm:inset-x-1/2">
              {`R$: ${(priceValue)}`}
            </span>

            <div className="absolute right-3 flex justify-center items-center gap-1">
              <button
                type="button"
                onClick={() => handleIsProductChecked(id)}
                className="
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
                <Check size={18} className="text-secundary-400 m-0.5" />
              </button>

              <button
                type="button"
                onClick={() => handleFindIten(id)}
                className="
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
                <PencilLine size={18} className="text-secundary-400 m-0.5" />
              </button>
              <button
                type="button"
                onClick={() => handleFilterIten(id)}
                className="
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
                <Trash size={18} className="text-secundary-400 m-0.5" />
              </button>
            </div>

          </li>
        ))}
    </ol>
  );
}
