<template>
    <div class="tab-control">
      <div v-for="(item,index) in titles"
      :key="index"
      :class="{active: currentIndex === index}"
      @click= itemClick(index)
      class="tab-control-item">

        <span>{{item}}</span>

      </div>
    </div>
</template>

<script>
  export default{
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
        this.$emit('tabClick', index)//监听点击，将点击事件发出去，子传父
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    font-size: 15px;
    background-color: #fff;
  }

  .tab-control-item {
    flex: 1;
    height: 40px;
    line-height: 40px;
  }
  .tab-control-item span {
    padding: 5px;
  }
  .active {
    color: #6eb6ff;
  }
  .active span {
    border-bottom: 3px solid #6eb6ff;
  }
</style>
