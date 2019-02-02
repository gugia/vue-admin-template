<template>
  <el-card :body-style="{ 'padding-top': '5px' }" class="card" shadow="never">
    <el-row type="flex">
      <p class="card-title">
        {{ title }}
        <span class="card-tip">
          <el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
            <i class="el-icon-info"/>
          </el-tooltip>
        </span>
      </p>
    </el-row>
    <el-row class="card-value">
      <h4 :class="{color: vcolor}">{{ value }}</h4>
    </el-row>
  </el-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    value: {
      type: String,
      default: ''
    },
    vcolor: {
      type: String,
      default: '#3860aa'
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .card {
    max-height: 120px;
    padding: 0;
    margin: 0;
    &-title {
      margin-top: 1em;
      margin-bottom: 0;
      max-width: 120px;
    }
    &-tip {
      margin-left: 2em;
    }
    &-value {
      padding: 0;
      margin: 0;
    }
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
</style>
