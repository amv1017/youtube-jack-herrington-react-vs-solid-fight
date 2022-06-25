import { Component, createSignal, createResource } from "solid-js";
import { Routes, Route } from "solid-app-router";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { Product } from "./product";

const App: Component = () => {
  const [cart, setCart] = createSignal<Product[]>([])
  const [search, setSearch] = createSignal("")

  const [products] = createResource<Product[]>(() => 
    fetch("http://fakestoreapi.com/products").then((res) => res.json()),
    {
      initialValue: []
    }
  )

  return (<div>
    <Header
      cart={cart}
      onClearCart={() => setCart([])}
      search={search}
      onSetSearch={(str) => setSearch(str)}
    />
    <Routes>
      <Route path="/" element={
        <HomePage
          products={products}
          search={search}
          onAddToCart={(p) => setCart([...cart(), p])}
        />
      } />
    </Routes>
  </div>)
}

export default App
 