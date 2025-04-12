<script setup>
import { computed } from 'vue'
import { useCartStore } from './stores/cart'

const cartStore = useCartStore()
const cartItemCount = computed(() => cartStore.cartCount)
</script>

<template>
  <div class="app">
    <header>
      <div class="container">
        <RouterLink to="/" class="logo">ShopList</RouterLink>
        
        <nav>
          <RouterLink to="/" class="nav-link">Home</RouterLink>
          <RouterLink to="/products" class="nav-link">Products</RouterLink>
          <RouterLink to="/cart" class="nav-link cart-link">
            Cart
            <span v-if="cartItemCount > 0" class="cart-badge">{{ cartItemCount }}</span>
          </RouterLink>
        </nav>
      </div>
    </header>

    <main>
      <RouterView />
    </main>
    
    <footer>
      <div class="container">
        <p>&copy; 2024 ShopList | A Vue.js Shopping List Project</p>
      </div>
    </footer>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Roboto', 'Segoe UI', sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f8f8f8;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

header {
  background-color: #42b883;
  padding: 1rem 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

header .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 1.8rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

nav {
  display: flex;
  gap: 1rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
  position: relative;
}

.nav-link:hover,
.router-link-active {
  background-color: rgba(255, 255, 255, 0.2);
}

.cart-badge {
  position: absolute;
  top: -8px;
  right: -5px;
  background-color: #ff6b6b;
  color: white;
  border-radius: 50%;
  font-size: 0.8rem;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

main {
  flex-grow: 1;
  padding: 2rem 0;
}

footer {
  background-color: #2c3e50;
  color: white;
  text-align: center;
  padding: 1.5rem 0;
  margin-top: auto;
}
</style>
