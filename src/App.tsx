import { useEffect, useState } from "react";
import api from "./api";
import { Product } from "./types";

import {
  Aside,
  Button,
  Img,
  Article,
  Footer,
  Section,
  Header,
  Main,
} from "./StyledComponents";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    api.list().then(setProducts);
  }, []);

  useEffect(() => {
    const total = cart.reduce((acc, product) => {
      return acc + product.price;
    }, 0);
    setTotalPrice(total);
  }, [cart]);

  const handleAddProduct = (product: Product) => {
    setCart([...cart, product]);
  };

  return (
    <Main>
      <Header>Estampitiency</Header>
      <Section>
        {products.map((product) => (
          <Article key={product.id}>
            <Img src={product.image} />
            <div>
              <p>{product.title}</p>
              <p>{product.description}</p>
            </div>
            <Button onClick={() => handleAddProduct(product)}>Agregar</Button>
            <div>
              <Button onClick={() => {}}>-</Button>
              {}
              <Button onClick={() => {}}>+</Button>
            </div>
          </Article>
        ))}
      </Section>
      <Aside>
        <Button>
          {cart.length} productos (total: ${totalPrice})
        </Button>
      </Aside>
      <Footer>
        Encontrá la consigna de este ejercicio y otros más{" "}
        <a href="https://github.com/goncy/interview-challenges/tree/main/simple-cart">
          acá
        </a>
      </Footer>
    </Main>
  );
}

export default App;
