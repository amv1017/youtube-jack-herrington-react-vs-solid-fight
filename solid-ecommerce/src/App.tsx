import { Component, createSignal } from "solid-js";
import { Header } from "./components/Header";
import { Product } from "./product";

const App: Component = () => {
  const [cart, setCart] = createSignal<Product[]>([])
  const [search, setSearch] = createSignal("")
  return <div>
    <Header
      cart={cart}
      onClearCart={() => setCart([])}
      search={search}
      onSetSearch={(str) => setSearch(str)}
    />
    <div>{search()}</div>
  </div>
}

export default App
