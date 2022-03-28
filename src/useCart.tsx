import { useMemo, useState } from "react";
import { Cart, Product } from "./types";

export const useCart = () => {
  console.log("RENDERING USE CART");
  const [cart, setCart] = useState<Cart>({
    addProduct: () => {},
    deleteProduct: () => {},
    cartProducts: {},
  });

  const { total, count } = useMemo(
    () =>
      Object.keys(cart?.cartProducts).reduce(
        ({ count, total }, item) => ({
          count: count + cart?.cartProducts[item].count,
          total:
            total +
            cart?.cartProducts[item].count * cart?.cartProducts[item].price,
        }),
        {
          count: 0,
          total: 0,
        }
      ),
    [cart.cartProducts]
  );

  const addProduct = (product: Product) => {
    let newCartProducts = { ...cart.cartProducts };

    if (cart.cartProducts[product.id]) {
      newCartProducts[product.id].count += 1;
    } else {
      newCartProducts[product.id] = {
        ...product,
        count: 1,
      };
    }

    setCart((cart) => ({
      ...cart,
      cartProducts: { ...newCartProducts },
    }));
  };

  // const deleteProduct = (productId: string) => {
  //   // Verificar si el producto existe en la lista de productos del carrito
  //   const prodIndex = cart.products[productId].count

  //   .findIndex((p:Product) => p.id === productId);

  //   // Este caso no se debería dar porque el botón pasa a Agregar, al sacar el ultimo item del carrito.
  //   // if(prodIndex === -1) return;

  //   // Si existe y hay 1 solo producto, tendría que eliminarlo de la lista y descontarlo del totalPrice y del totalSize
  //   cart
  //   const newProducts = cart.products.slice(prodIndex,1)

  //   //restarle uno a la cantidad de productos

  //   // No habría chance de que NO exista, porque el botón pasaría a ser Agregar
  //   setCart(cart => ({
  //     ...cart,
  //     products: [ ...newProducts, {...product, count: product.count ? 1 :  product.count++}] }));
  //   }));
  // }

  return {
    addProduct,
    totalPrice: total,
    size: count,
  };
};
