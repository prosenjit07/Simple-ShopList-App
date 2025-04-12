<template>
  <div class="cart">
    <h1>Your Shopping Cart</h1>
    
    <div v-if="cartItems.length === 0" class="empty-cart">
      <p>Your cart is empty.</p>
      <RouterLink to="/products" class="btn">Browse Products</RouterLink>
    </div>
    
    <div v-else class="cart-content">
      <div class="cart-items">
        <div v-for="item in cartItems" :key="item.id" class="cart-item">
          <div class="item-image">
            <img src="https://via.placeholder.com/80x80" alt="Product thumbnail" />
          </div>
          
          <div class="item-details">
            <h2>{{ item.name }}</h2>
            <p class="price">${{ item.price.toFixed(2) }}</p>
          </div>
          
          <div class="item-quantity">
            <button @click="decreaseQuantity(item.id)" class="quantity-btn">-</button>
            <span class="quantity">{{ item.quantity }}</span>
            <button @click="increaseQuantity(item.id)" class="quantity-btn">+</button>
          </div>
          
          <div class="item-total">
            ${{ (item.price * item.quantity).toFixed(2) }}
          </div>
          
          <button @click="removeItem(item.id)" class="remove-btn">
            Remove
          </button>
        </div>
      </div>
      
      <div class="cart-summary">
        <div class="summary-row">
          <span>Subtotal:</span>
          <span>${{ cartTotal.toFixed(2) }}</span>
        </div>
        <div class="summary-row">
          <span>Tax (10%):</span>
          <span>${{ (cartTotal * 0.1).toFixed(2) }}</span>
        </div>
        <div class="summary-row total">
          <span>Total:</span>
          <span>${{ (cartTotal * 1.1).toFixed(2) }}</span>
        </div>
        
        <button @click="checkout" class="checkout-btn">
          Proceed to Checkout
        </button>
        
        <button @click="clearCart" class="clear-btn">
          Clear Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cart'
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const cartStore = useCartStore()

const cartItems = computed(() => cartStore.cartItems)
const cartTotal = computed(() => cartStore.cartTotal)

function increaseQuantity(productId) {
  const item = cartItems.value.find(item => item.id === productId)
  if (item) {
    cartStore.updateQuantity(productId, item.quantity + 1)
  }
}

function decreaseQuantity(productId) {
  const item = cartItems.value.find(item => item.id === productId)
  if (item && item.quantity > 1) {
    cartStore.updateQuantity(productId, item.quantity - 1)
  } else if (item && item.quantity === 1) {
    cartStore.removeFromCart(productId)
  }
}

function removeItem(productId) {
  cartStore.removeFromCart(productId)
}

function clearCart() {
  if (confirm('Are you sure you want to clear your cart?')) {
    cartStore.clearCart()
  }
}

function checkout() {
  alert('Thank you for your purchase! In a real app, this would proceed to payment processing.')
  cartStore.clearCart()
}
</script>

<style scoped>
.cart {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #2c3e50;
  text-align: center;
}

.empty-cart {
  text-align: center;
  padding: 3rem;
}

.empty-cart p {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 1.5rem;
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

.cart-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
}

.cart-items {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.cart-item {
  display: grid;
  grid-template-columns: auto 2fr 1fr 1fr auto;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
}

.cart-item:last-child {
  border-bottom: none;
}

.item-image img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
}

.item-details {
  padding: 0 1rem;
}

.item-details h2 {
  margin: 0;
  font-size: 1.2rem;
  color: #2c3e50;
}

.price {
  color: #42b883;
  font-weight: bold;
}

.item-quantity {
  display: flex;
  align-items: center;
}

.quantity {
  padding: 0 0.5rem;
  font-weight: bold;
}

.quantity-btn {
  background-color: #eee;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  font-weight: bold;
}

.quantity-btn:hover {
  background-color: #ddd;
}

.item-total {
  font-weight: bold;
  color: #2c3e50;
}

.remove-btn {
  background-color: #ff6b6b;
  color: white;
  border: none;
  padding: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
}

.remove-btn:hover {
  background-color: #ee5253;
}

.cart-summary {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  height: fit-content;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.total {
  font-weight: bold;
  font-size: 1.3rem;
  border-top: 1px solid #eee;
  padding-top: 1rem;
  margin-top: 1rem;
}

.checkout-btn, .clear-btn {
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 1rem;
}

.checkout-btn {
  background-color: #42b883;
  color: white;
}

.checkout-btn:hover {
  background-color: #3aa876;
}

.clear-btn {
  background-color: #eee;
  color: #666;
}

.clear-btn:hover {
  background-color: #ddd;
}

@media (max-width: 768px) {
  .cart-content {
    grid-template-columns: 1fr;
  }
  
  .cart-item {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .item-image, .item-details, .item-quantity, .item-total, .remove-btn {
    text-align: center;
  }
  
  .item-quantity {
    justify-content: center;
  }
}
</style> 