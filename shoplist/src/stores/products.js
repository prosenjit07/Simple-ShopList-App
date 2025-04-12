import { defineStore } from 'pinia'

export const useProductStore = defineStore('products', {
  state: () => ({
    products: [
      { id: 1, name: 'Laptop', price: 999.99, image: '/images/laptop.jpg', description: 'Powerful laptop for work and gaming' },
      { id: 2, name: 'Smartphone', price: 699.99, image: '/images/smartphone.jpg', description: 'Latest smartphone with advanced features' },
      { id: 3, name: 'Headphones', price: 149.99, image: '/images/headphones.jpg', description: 'Noise-cancelling wireless headphones' },
      { id: 4, name: 'Smartwatch', price: 249.99, image: '/images/smartwatch.jpg', description: 'Track your fitness and stay connected' },
      { id: 5, name: 'Tablet', price: 499.99, image: '/images/tablet.jpg', description: 'Portable tablet for entertainment and productivity' },
      { id: 6, name: 'Camera', price: 799.99, image: '/images/camera.jpg', description: 'High-quality digital camera for photos and videos' }
    ]
  }),
  
  getters: {
    getAllProducts: (state) => state.products,
    getProductById: (state) => (id) => {
      return state.products.find(product => product.id === id)
    }
  }
}) 