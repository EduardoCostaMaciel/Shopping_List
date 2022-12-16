import { useEffect, useState } from 'react';
import { Iproduct } from '../types';

type PropsProductList = {
  productList: Iproduct[];
}

export function Header({ productList }: PropsProductList) {
  const [totalPrice, setTotalPrice] = useState<number>(0);

  let totalValue = 0;
  productList.forEach(({ priceValue }) => totalValue += Number(priceValue));

  useEffect((): void => setTotalPrice(totalValue), [productList]);

  return (
    <header
      className="
        w-full
        fixed
        top-0
        py-4
        z-10
        shadow-sm
        bg-primary-400
        flex
        justify-around
        font-medium
        text-primary-300
        divide-x
        divide-secundary-400
        sm:container
        sm:inset-x-1
      "
    >
      <h1 className='font-extrabold italic'>Shopping List</h1>
      <span
        className="
            w-36
            pl-2
            pb-1
            border-b
            border-solid
            text-secundary-400
            "
      >
        {`Total R$: ${totalPrice.toFixed(2)}`}
      </span>
    </header>
  );
}
