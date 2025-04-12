<template>
  <div class="products">
    <h1>Our Products</h1>
    
    <div class="product-grid">
      <div v-for="product in products" :key="product.id" class="product-card">
        <div class="product-image">
          <img src="https://via.placeholder.com/200x150" alt="Product image placeholder" />
        </div>
        <div class="product-details">
          <h2>{{ product.name }}</h2>
          <p class="price">${{ product.price.toFixed(2) }}</p>
          <p class="description">{{ product.description }}</p>
          <button @click="addToCart(product.id)" class="add-to-cart">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProductStore } from '../stores/products'
import { useCartStore } from '../stores/cart'
import { computed } from 'vue'

const productStore = useProductStore()
const cartStore = useCartStore()

const products = computed(() => productStore.getAllProducts)

function addToCart(productId) {
  cartStore.addToCart(productId)
  alert('Product added to cart!')
}
</script>

<style scoped>
.products {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #2c3e50;
  text-align: center;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.product-card {
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.product-image img {
  width: 100%;
  height: auto;
  display: block;
}

.product-details {
  padding: 1.5rem;
}

.product-details h2 {
  margin-top: 0;
  font-size: 1.5rem;
  color: #2c3e50;
}

.price {
  font-size: 1.2rem;
  font-weight: bold;
  color: #42b883;
  margin: 0.5rem 0;
}

.description {
  color: #666;
  margin-bottom: 1rem;
}

.add-to-cart {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
}

.add-to-cart:hover {
  background-color: #3aa876;
}
</style> 