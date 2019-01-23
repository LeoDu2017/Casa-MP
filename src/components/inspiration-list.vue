<template>
  <div class="wrap">
    <ul class="list">
      <inspiration-item
        v-bind="$attrs"
        v-on="$listeners"
        v-for="(item, index) in inspirations"
        v-if="index % 2 === 0"
        :key="index"
        :inspiration="item">
      </inspiration-item>
    </ul>
    <ul class="list">
      <inspiration-item
        v-bind="$attrs"
        v-on="$listeners"
        v-for="(item, index) in inspirations"
        v-if="index % 2 === 1"
        :key="index"
        :inspiration="item">
      </inspiration-item>
    </ul>
  </div>
</template>

<script>
  import InspirationItem from './units/model-six'
  export default {
    props: ['inspirations'],
    components: {
      InspirationItem
    }
  }
</script>

<style scoped lang="less">
  .wrap{
    padding: 15px;
    display: flex;
    justify-content: space-between;
    .list{
      display: flex;
      flex-direction: column;
    }
  }
</style>
