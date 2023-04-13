<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div>
    <nav>
      <RouterLink to="/">rxjs</RouterLink>
      <RouterLink to="/copy">copy</RouterLink>
      <RouterLink to="/ellipsis">Ellipsis</RouterLink>
      <RouterLink to="/life-cycle">生命周期</RouterLink>
      <RouterLink to="/slot">Slot</RouterLink>
      <RouterLink to="/transfer-value">传值</RouterLink>
      <RouterLink to="/provide-inject">依赖注入</RouterLink>
      <RouterLink to="/watch">Watch</RouterLink>
      <RouterLink to="/watch-effect">WatchEffect</RouterLink>
      <RouterLink to="/computed">Computed 计算属性</RouterLink>
      <RouterLink to="/hooks">自定义Hooks函数</RouterLink>
      <RouterLink to="/readOnly">ReadOnly</RouterLink>
      <RouterLink to="/shallowRef">ShallowRef</RouterLink>
      <RouterLink to="/toraw">toRaw</RouterLink>
      <RouterLink to="/pinia">pinia</RouterLink>
      <RouterLink to="/layout">layout</RouterLink>
    </nav>
  </div>
  <div>
    <RouterView />
  </div>
</template>

<style scoped>
  header {
    line-height: 1.5;
    max-height: 100vh;
  }
  .logo {
    display: block;
    margin: 0 auto 2rem;
  }

  nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
  }

  nav a.router-link-exact-active {
    color: var(--color-text);
  }

  nav a.router-link-exact-active:hover {
    background-color: transparent;
  }

  nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
  }

  nav a:first-of-type {
    border: 0;
  }
</style>
