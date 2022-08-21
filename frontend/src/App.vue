<template>
  <el-container>
    <el-header></el-header>
    <el-main>
    </el-main>
  </el-container>
</template>

<script>

export default {
  name: 'App',
  components: {
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
</style>
