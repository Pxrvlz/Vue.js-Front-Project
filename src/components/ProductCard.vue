<script setup lang="ts">
import { Product, formatPrice } from '../data/products';

defineProps<{
  product: Product
}>();
</script>

<template>
  <router-link :to="`/product/${product.id}`" class="product-card card">
    <div class="product-image">
      <img :src="product.image" :alt="product.title" />
    </div>
    <div class="product-info">
      <h2 class="product-title">{{ product.title }}</h2>
      <p class="product-price">{{ formatPrice(product.price) }}</p>
    </div>
  </router-link>
</template>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform 0.3s, box-shadow 0.3s;
}

.product-image {
  aspect-ratio: 1 / 1;
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.product-card:hover .product-image img {
  transform: scale(1.05);
}

.product-info {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.product-title {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: 600;
  line-height: 1.4;
  /* For long titles */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}

.product-price {
  margin-top: auto;
  font-size: 1.1rem;
  color: #e53935;
  font-weight: 700;
}

@media (prefers-color-scheme: dark) {
  .product-title {
    color: #e0e0e0;
  }
}
</style>