<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { products, formatPrice } from '../data/products';

const route = useRoute();
const router = useRouter();

const product = computed(() => {
  const id = Number(route.params.id);
  return products.find(p => p.id === id);
});

// اگر محصول یافت نشد، به صفحه اصلی برمی‌گردیم
onMounted(() => {
  if (!product.value) {
    router.push('/');
  }
});
</script>

<template>
  <div class="container" v-if="product">
    <div class="back-button">
      <button @click="router.push('/')">بازگشت به محصولات</button>
    </div>
    
    <div class="product-detail">
      <div class="product-image">
        <img :src="product.image" :alt="product.title" />
      </div>
      
      <div class="product-info">
        <h1 class="product-title">{{ product.title }}</h1>
        <p class="product-price">{{ formatPrice(product.price) }}</p>
        <div class="product-category">
          <span class="category-label">دسته‌بندی:</span>
          <span class="category-value">{{ product.category }}</span>
        </div>
        <p class="product-description">{{ product.description }}</p>
        <button class="add-to-cart">افزودن به سبد خرید</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.back-button {
  margin: 1.5rem 0;
}

.back-button button {
  background-color: transparent;
  color: #1a73e8;
  border: 1px solid #1a73e8;
  font-size: 0.9rem;
  padding: 0.4rem 1rem;
  transition: all 0.2s;
}

.back-button button:hover {
  background-color: #f0f6ff;
}

.product-detail {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
}

.product-image {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.product-image img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.product-title {
  color: #333;
  margin-bottom: 1rem;
}

.product-price {
  font-size: 1.5rem;
  color: #e53935;
  font-weight: 700;
  margin-bottom: 1rem;
}

.product-category {
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.category-label {
  color: #666;
}

.category-value {
  background-color: #f0f6ff;
  color: #1a73e8;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.9rem;
}

.product-description {
  line-height: 1.8;
  color: #444;
  margin-bottom: 2rem;
}

.add-to-cart {
  width: 100%;
  padding: 0.8rem;
  font-size: 1.1rem;
  background-color: #1a73e8;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.add-to-cart:hover {
  background-color: #1558b3;
}

@media (max-width: 768px) {
  .product-detail {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .product-title {
    font-size: 1.5rem;
  }
  
  .product-description {
    font-size: 0.95rem;
  }
}

@media (prefers-color-scheme: dark) {
  .back-button button {
    color: #3b82f6;
    border-color: #3b82f6;
  }
  
  .back-button button:hover {
    background-color: rgba(59, 130, 246, 0.1);
  }
  
  .product-title {
    color: #e0e0e0;
  }
  
  .product-description {
    color: #b0b0b0;
  }
  
  .category-label {
    color: #a0a0a0;
  }
  
  .category-value {
    background-color: rgba(59, 130, 246, 0.1);
    color: #3b82f6;
  }
  
  .add-to-cart {
    background-color: #3b82f6;
  }
  
  .add-to-cart:hover {
    background-color: #2563eb;
  }
}
</style>