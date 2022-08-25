<template>
  <el-container>
    <el-header class="headerMenu">
      <el-menu class="mainMenu" :default-active="defaultActive" mode="horizontal" @select="handleSelect">
        <div v-for="(item) in menus" :key="item.path">
          <el-menu-item :index="item.path" :key="item.path" v-if="item.meta">
            {{ item.meta.title }}
          </el-menu-item>
        </div>
      </el-menu>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
import { routes } from "@/router";

export default {
  name: 'App',
  computed: {
    menus() {
      return routes
    }
  },
  data() {
    return {
      defaultActive: this.$route.path,
    }
  },
  methods: {
    handleSelect(index) {
      this.$router.push(index);
    }
  }
}
</script>

<style>
@import './assets/css/main.css';
</style>
