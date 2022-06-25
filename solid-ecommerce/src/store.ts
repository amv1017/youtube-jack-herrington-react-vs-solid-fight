import { createSignal, createResource } from "solid-js";
import { Product } from "./product";

export const [cart, setCart] = createSignal<Product[]>([])
export const onAddToCart = (p: Product) => setCart(cart().concat(p))
export const onClearCart = () => setCart([])

export const [search, setSearch] = createSignal("")
export const onSetSearch = (s: string) => setSearch(s)

export const [products] = createResource<Product[]>(() => 
  fetch("http://fakestoreapi.com/products").then((res) => res.json()),
  {
    initialValue: []
  }
)
