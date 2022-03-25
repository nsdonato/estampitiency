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

  useEffect(() => {
    api.list().then(setProducts);
  }, []);

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
            <Button>Agregar</Button>
          </Article>
        ))}
      </Section>
      <Aside>
        <Button>3 productos (total: $12)</Button>
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
