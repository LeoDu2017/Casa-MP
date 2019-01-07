<template>
  <div class="account">
    <div class="profile_box">
      <canvas canvas-id="wave" :style="{height:height + 'px'}"></canvas>
      <div class="profile_photo" :style="{top:height - 63 + 'px'}">
        <i class="iconfont icon-zhanghu"></i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        height: 0
      }
    },
    onLoad () {
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        fontFamily: '微软雅黑',
        backgroundColor: '#212224',
        animation: {
          duration: 100,
          timingFunc: 'easeIn'
        }
      })
    },
    onReady () {
      this.drawWave()
    },
    methods: {
      drawWave () {
        const ctx = wx.createCanvasContext('wave')
        const width = wx.getSystemInfoSync().windowWidth
        this.height = width / 2
        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.lineTo(0, this.height - 30)
        ctx.bezierCurveTo(width / 4, this.height + 20, width * 3 / 4, this.height - 70, width, this.height - 30)
        ctx.lineTo(width, 0)
        ctx.fillStyle = '#212224'
        ctx.closePath()
        ctx.fill()
        ctx.draw()
      }
    }
  }
</script>
<style scoped lang="less">
  .account{
    width: 100vw;
    height: 100vh;

    .profile_box{
      position: relative;
      canvas {
        width: 100%;
      }
      .profile_photo{
        width: 66px;
        height: 66px;
        line-height: 66px;
        background-color: #DEDEDE;
        border:4px solid #fff;
        border-radius: 50%;
        position: absolute;
        cursor: pointer;
        box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
        left: 50%;
        transform: translateX(-50%);
        color: #999;
        text-align: center;
        .icon-zhanghu{
          font-size: 30px;
        }
      }

    }

  }

</style>
