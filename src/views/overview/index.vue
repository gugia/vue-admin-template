<template>
  <el-container class="overview">
    <el-header>Header
      <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">
    </el-header>
    <el-main>Main</el-main>
  </el-container>
  <!--</el-row>-->
  <!--<div class="overview">-->
  <!--<div class="info_box">-->
  <!--<img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">-->
  <!--<div class="left_info_box">-->
  <!--<p>你好，祝你开心每一天</p>-->
  <!--<span>公司名称，角色</span>-->
  <!--</div>-->
  <!--<div class="right__info_box">-->
  <!--<span class="top">待处理事项</span>-->
  <!--<p>0</p>-->
  <!--</div>-->
  <!--<div class="right__info_box">-->
  <!--<span class="top">负责设备数</span>-->
  <!--<p>25<span>/99</span></p>-->
  <!--</div>-->
  <!--</div>-->
  <!--</div>-->
</template>

<script>
import { mapGetters } from 'vuex'
import 'element-ui/lib/theme-chalk/display.css'

export default {
  name: 'Overview',
  computed: {
    ...mapGetters([
      'avatar'
    ])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .overview {
    background: #f0f2f5;
    padding: 20px;
    .col {
      background: white;
    }
  }
</style>
