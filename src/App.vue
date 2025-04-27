<template>
  <div class="app-container">
    <header class="header">
      <div class="container">
        <h1 class="logo">فروشگاه خلازیر</h1>
        <nav class="nav">
          <router-link to="/">صفحه اصلی</router-link>
        </nav>
      </div>
    </header>
    <main class="main">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <footer class="footer">
      <div class="container">
        <p>تمامی حقوق محفوظ است &copy; ۱۴۰۴</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-weight: 700;
  color: #1a73e8;
  margin: 0;
}

.nav a {
  color: #333;
  font-weight: 500;
  transition: color 0.2s;
}

.nav a:hover {
  color: #1a73e8;
}

.main {
  flex: 1;
}

.footer {
  background-color: #f5f5f5;
  padding: 1.5rem 0;
  text-align: center;
  color: #666;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (prefers-color-scheme: dark) {
  .header {
    background-color: #1a1a1a;
  }
  
  .logo {
    color: #3b82f6;
  }
  
  .nav a {
    color: #e0e0e0;
  }
  
  .nav a:hover {
    color: #3b82f6;
  }
  
  .footer {
    background-color: #1a1a1a;
    color: #b0b0b0;
  }
}
</style>