import { useEffect, useState } from "react";
import api from "./api";
import { Product } from "./types";

import {
  Aside,
  Image,
  Article,
  PrimaryButton,
  StyledFooter,
  Section,
  Header,
  Main,
} from "./StyledComponents";

import { useCart } from "./useCart";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const { addProduct, totalPrice, size } = useCart();

  useEffect(() => {
    api.list().then(setProducts);
  }, []);

  return (
    <Main>
      <Header>Estampitiency</Header>
      <Section>
        {products.map((product) => (
          <Article key={product.id}>
            <Image src={product.image} />
            <div>
              <p>{product.title}</p>
              <p>{product.description}</p>
            </div>
            <PrimaryButton onClick={() => addProduct(product)}>
              Agregar
            </PrimaryButton>
            {/* <div>
              <PrimaryButton onClick={() => {}}>-</PrimaryButton>
              {}
              <PrimaryButton onClick={() => {}}>+</PrimaryButton>
            </div> */}
          </Article>
        ))}
      </Section>
      <Aside>
        <PrimaryButton>
          {size} productos (total: ${totalPrice})
        </PrimaryButton>
      </Aside>
      <StyledFooter>
        Encontrá la consigna de este ejercicio y otros más{" "}
        <a href="https://github.com/goncy/interview-challenges/tree/main/simple-cart">
          acá
        </a>
      </StyledFooter>
    </Main>
  );
}

export default App;
