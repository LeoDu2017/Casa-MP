<template>
  <div class="counter-warp">
    <div v-if="act_status === 0" class="text" :style="{color:color}">
      本活动还未开始!
    </div>
    <div v-else-if="act_status === 1" class="text_box">
      <div class="text" :style="{color:color}">
        距结束还有：
      </div>
      <div class="time" :style="{color:color}">
        {{Day}}天
        {{Hour}}时
        {{Minute}}分
        {{Second}}秒
      </div>
    </div>
    <div v-else class="text" :style="{color:color}">
      本活动已结束
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        Day: null,
        Hour: null,
        Minute: null,
        Second: null,
        act_status: 0
      }
    },
    props: ['start', 'end'],
    onLoad () {
      let interval = setInterval(() => {
        let now = Date.parse(new Date()) / 1000
        let totalSecond = this.end - now

        if (this.start - now > 0) {
          this.act_status = 0
        } else if (this.end - this.now < 0) {
          this.act_status = 2
        } else {
          this.act_status = 1
        }
        // 秒数
        let second = totalSecond

        // 天数位
        let day = Math.floor(second / 3600 / 24)
        let dayStr = day.toString()
        if (dayStr.length === 1) dayStr = '0' + dayStr

        // 小时位
        let hr = Math.floor((second - day * 3600 * 24) / 3600)
        let hrStr = hr.toString()
        if (hrStr.length === 1) hrStr = '0' + hrStr

        // 分钟位
        let min = Math.floor((second - day * 3600 * 24 - hr * 3600) / 60)
        let minStr = min.toString()
        if (minStr.length === 1) minStr = '0' + minStr

        // 秒位
        let sec = second - day * 3600 * 24 - hr * 3600 - min * 60
        let secStr = sec.toString()
        if (secStr.length === 1) secStr = '0' + secStr

        this.Day = dayStr
        this.Hour = hrStr
        this.Minute = minStr
        this.Second = secStr

        this.totalSecond--

        if (totalSecond < 0) {
          clearInterval(interval)
        }
      }, 1000)
    }
  }
</script>
<style scoped lang="less">
  .counter-warp{
    .text{
      font-size: 24rpx;
      color: #999999;
    }
    .time{
      font-size: 24rpx;
      color: #333;
    }
    .text_box{
      display: flex;
    }
  }
</style>
