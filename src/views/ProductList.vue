<script setup lang="ts">
import { ref } from 'vue';
import { products, formatPrice } from '../data/products';
import ProductCard from '../components/ProductCard.vue';
</script>

<template>
  <div class="container">
    <h1 class="page-title">محصولات</h1>
    <div class="product-grid">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<style scoped>
.page-title {
  margin: 2rem 0 1.5rem;
  color: #333;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .product-grid {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 1rem;
  }
  
  .page-title {
    font-size: 1.5rem;
    margin: 1rem 0;
  }
}

@media (prefers-color-scheme: dark) {
  .page-title {
    color: #e0e0e0;
  }
}
</style>