<template>
  <div class="home">
    <h1>Welcome to ShopList</h1>
    <p>Your simple e-commerce shopping list application</p>
    
    <div class="actions">
      <RouterLink to="/products" class="btn">Browse Products</RouterLink>
      <RouterLink to="/cart" class="btn btn-secondary">View Cart</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.home {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

p {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #42b883;
  color: white;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #3aa876;
}

.btn-secondary {
  background-color: #2c3e50;
}

.btn-secondary:hover {
  background-color: #1e2a36;
}
</style> 