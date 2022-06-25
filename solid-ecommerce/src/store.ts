import { createSignal, createResource } from "solid-js";
import { createMutable } from "solid-js/store"
import { Product } from "./product";

export const cart = createMutable({
  products: JSON.parse(window.localStorage.getItem('cart') || '[]'),
  get total() {
    return this.products.reduce((total, product) => total + product.price, 0)
  },
  addToCart(p: Product) {
    this.products.push(p)
    window.localStorage.setItem('cart', JSON.stringify(this.products))
  },
  clearCart() {
    this.products.length = 0
    window.localStorage.setItem('cart', JSON.stringify(this.products))
  }
})

/*
// Standart Implementation Replaced By Mutable Object Implementation

export const [cart, setCart] = createSignal<Product[]>([])
export const onAddToCart = (p: Product) => setCart(cart().concat(p))
export const onClearCart = () => setCart([])
*/

export const [search, setSearch] = createSignal("")
export const onSetSearch = (s: string) => setSearch(s)

export const [products] = createResource<Product[]>(() => 
  fetch("http://fakestoreapi.com/products").then((res) => res.json()),
  {
    initialValue: []
  }
)
