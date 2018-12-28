<template>
  <div class="caseBox" :id="'detail_'+len">
    <modular-title :title="真实案例"></modular-title>
    <case-list :artical="article"></case-list>
  </div>
</template>
<script>
  import ModularTitle from './modular-title'
  import CaseList from './case-list'
  export default {
    props: ['len', 'article'],
    components: {
      ModularTitle,
      CaseList
    }
  }
</script>

