<template>
  <div class="container">
    <home-search @menuToggle="menuToggle" :on="on"></home-search>
  </div>
</template>

<script>
import HomeSearch from "@/components/home-search";
export default {
  data () {
    return {
      on:false
    }
  },

  components: {
    HomeSearch,
    card
  },

  methods: {
    menuToggle(toggle) {
      console.log(toggle)
      this.on = toggle
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
