<template>
  <el-container>
    <el-header>
      <el-menu :default-active="defaultActive" mode="horizontal" @select="handleSelect">
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.el-header {
  width: 100%;
  height: 40px;
}

html,
body,
#app,
.el-container {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.el-menu {
  display: flex;
}

</style>
