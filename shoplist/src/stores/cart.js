import { defineStore } from 'pinia'
import { useProductStore } from './products'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: JSON.parse(localStorage.getItem('cart-items')) || []
  }),
  
  getters: {
    cartItems: (state) => {
      const productStore = useProductStore()
      return state.items.map(item => {
        const product = productStore.getProductById(item.id)
        return {
          ...product,
          quantity: item.quantity
        }
      })
    },
    
    cartTotal: (state) => {
      const productStore = useProductStore()
      return state.items.reduce((total, item) => {
        const product = productStore.getProductById(item.id)
        return total + (product.price * item.quantity)
      }, 0)
    },
    
    cartCount: (state) => {
      return state.items.reduce((count, item) => count + item.quantity, 0)
    }
  },
  
  actions: {
    addToCart(productId) {
      const existingItem = this.items.find(item => item.id === productId)
      
      if (existingItem) {
        existingItem.quantity++
      } else {
        this.items.push({
          id: productId,
          quantity: 1
        })
      }
      
      this.updateLocalStorage()
    },
    
    removeFromCart(productId) {
      const index = this.items.findIndex(item => item.id === productId)
      if (index !== -1) {
        this.items.splice(index, 1)
        this.updateLocalStorage()
      }
    },
    
    updateQuantity(productId, quantity) {
      const item = this.items.find(item => item.id === productId)
      if (item) {
        item.quantity = quantity
        this.updateLocalStorage()
      }
    },
    
    clearCart() {
      this.items = []
      this.updateLocalStorage()
    },
    
    updateLocalStorage() {
      localStorage.setItem('cart-items', JSON.stringify(this.items))
    }
  }
}) 