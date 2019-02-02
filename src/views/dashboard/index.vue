<template>
  <el-container class="dashboard-container">
    <el-header height="auto">
      <el-row :gutter="20">
        <el-col :span="7">
          <el-card class="dashboard-card" shadow="hover">
            <el-row>
              <el-col>
                <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">
              </el-col>
              <el-col class="hidden-sm-and-down user-info">
                <div>你好，{{ name }}，祝你开心每一天</div>
                <span>公司名称，角色</span>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
        <el-col :span="9" class="hidden-sm-and-down">
          <el-card class="dashboard-card" shadow="hover">
            <el-row :gutter="20">
              <el-col :span="6">
                <hint-card :title="title" :value="value"/>
              </el-col>
              <el-col :span="6">
                <hint-card :title="title" :value="value"/>
              </el-col>
              <el-col :span="6">
                <hint-card :title="title" :value="value"/>
              </el-col>
              <el-col :span="6">
                <hint-card :title="title" :value="value"/>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="dashboard-card" shadow="hover">
            <div class="right__info_box">
              <span class="top">待处理事项</span>
              <p>0</p>
            </div>
            <div class="right__info_box">
              <span class="top">负责设备数</span>
              <p>25<span>/99</span></p>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-header>

    <el-main>
      <div class="dashboard-container">
        <div class="dashboard-text">name:{{ name }}</div>
        <div class="dashboard-text">roles:<span v-for="role in roles" :key="role">{{ role }}</span></div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import { mapGetters } from 'vuex'
import HintCard from '@/components/HintCard'

export default {
  components: {
    HintCard
  },

  data() {
    return {
      title: '标题',
      value: '99'
    }
  },

  computed: {
    ...mapGetters([
      'name',
      'roles',
      'avatar'
    ])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .dashboard {
    &-container {
      background: #f0f2f5;
      padding: 20px;
    }
    &-card {
      min-width: 100%;
      height: 120px;
      /*padding-bottom: 20px;*/
      .user-avatar {
        border-radius: 50%;
        width: 80px;
        height: 80px;
        float: left;
      }
      .user-info {
        position: absolute;
        margin-left: 100px;
        float: left;
        display: block;
        font-family: '微软雅黑', serif;
        div {
          width: 100%;
          font-size: 20px;
          font-weight: bold;
          line-height: 40px;
          color: #303133;
        }
        span {
          color: #909399;
        }
      }
    }
    &-text {
      font-size: 30px;
      line-height: 46px;
    }
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>
