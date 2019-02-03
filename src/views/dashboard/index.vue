<template>
  <el-container class="dashboard-container">
    <el-header height="auto">
      <div class="dashboard-sub-container">
        <el-card class="dashboard-card" shadow="hover">
          <el-row>
            <el-col :span="4">
              <img v-if="avatar == null || avatar === ''" src="@/assets/default-avatar.png" class="user-avatar">
              <img v-if="avatar != null && avatar !== ''" :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">
            </el-col>
            <el-col :span="20" class="user-info">
              <p>你好，{{ realname }}，祝你开心每一天</p>
              <span>公司名称，{{ role.name }}</span>
            </el-col>
          </el-row>
        </el-card>

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
      </div>
    </el-header>

    <el-main>
      <div class="dashboard-container">
        <div class="dashboard-text">realname:{{ realname }}</div>
        <div class="dashboard-text">permissions:<span v-for="permission in permissions" :key="permission">{{ permission }}</span></div>
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
      'realname',
      'role',
      'permissions',
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
      /*text-align: center!important;*/
    }
    &-sub-container {
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      flex-direction: row;
      flex-wrap: wrap;
      margin-right: -15px;
      margin-left: -15px;
      justify-content: center;
      align-items: center;
    }
    &-card {
      height: 120px;
      margin-right: 20px;
      &:first-of-type {
        flex-wrap: wrap;
        min-width: 360px;
      }
      &:last-of-type {
        min-width: 360px;
      }
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
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
        p {
          min-width: 340px;
          font-size: 1.5rem;
          font-weight: bold;
          line-height: 28px;
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
