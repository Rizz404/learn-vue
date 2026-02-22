<script setup lang="ts">
import { ref } from 'vue'
import ProductCard, { type ProductCardProps } from './components/ProductCard.vue'

const products = ref<ProductCardProps[]>([
  {
    title: 'Wireless Noise-Cancelling Headphones',
    price: 4649000,
    category: 'Electronics',
    image: 'https://picsum.photos/seed/headphones/400/400',
    status: 'available',
    tags: ['wireless', 'audio', 'premium'],
    currency: 'IDR',
    featured: true,
  },
  {
    title: 'Minimalist Leather Wallet',
    price: 774000,
    category: 'Accessories',
    image: 'https://picsum.photos/seed/wallet/400/400',
    status: 'available',
    tags: ['leather', 'slim', 'everyday'],
    currency: 'IDR',
    featured: false,
  },
  {
    title: 'Mechanical Keyboard RGB',
    price: 2015000,
    category: 'Electronics',
    image: 'https://picsum.photos/seed/keyboard/400/400',
    status: 'available',
    tags: ['gaming', 'rgb', 'mechanical'],
    currency: 'IDR',
    featured: true,
  },
  {
    title: 'Yoga Mat Premium',
    price: 542000,
    category: 'Sports',
    image: 'https://picsum.photos/seed/yogamat/400/400',
    status: 'available',
    tags: ['fitness', 'yoga', 'non-slip'],
    currency: 'IDR',
    featured: false,
  },
  {
    title: 'Stainless Steel Water Bottle',
    price: 387000,
    category: 'Lifestyle',
    image: 'https://picsum.photos/seed/bottle/400/400',
    status: 'reserved',
    tags: ['eco', 'hydration', 'insulated'],
    currency: 'IDR',
    featured: false,
  },
  {
    title: 'Portable Bluetooth Speaker',
    price: 1240000,
    category: 'Electronics',
    image: 'https://picsum.photos/seed/speaker/400/400',
    status: 'available',
    tags: ['bluetooth', 'portable', 'waterproof'],
    currency: 'IDR',
    featured: true,
  },
  {
    title: 'Scented Soy Candle Set',
    price: 310000,
    category: 'Home & Living',
    image: 'https://picsum.photos/seed/candle/400/400',
    status: 'available',
    tags: ['aromatherapy', 'home', 'gift'],
    currency: 'IDR',
    featured: false,
  },
  {
    title: 'Laptop Stand Adjustable',
    price: 697000,
    category: 'Office',
    image: 'https://picsum.photos/seed/laptopstand/400/400',
    status: 'available',
    tags: ['ergonomic', 'aluminium', 'foldable'],
    currency: 'IDR',
    featured: false,
  },
  {
    title: 'Running Shoes Pro',
    price: 1860000,
    category: 'Sports',
    image: null,
    status: 'sold',
    tags: ['running', 'lightweight', 'breathable'],
    currency: 'IDR',
    featured: false,
  },
  {
    title: 'Smart Watch Series X',
    price: 3875000,
    category: 'Electronics',
    image: 'https://picsum.photos/seed/smartwatch/400/400',
    status: 'available',
    tags: ['wearable', 'fitness', 'smart'],
    currency: 'IDR',
    featured: true,
  },
])
</script>

<template>
  <main class="min-h-screen bg-background p-8">
    <div
      v-if="products.length > 0"
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center"
    >
      <ProductCard
        v-for="product in products"
        :key="product.title"
        :title="product.title"
        :price="product.price"
        :category="product.category"
        :status="product.status"
        :tags="product.tags"
        :featured="product.featured"
        :currency="product.currency"
        :image="product.image"
      />
    </div>
  </main>
</template>
