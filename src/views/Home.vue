<template>
  <div class="home has-background-color-dark">
    <MemberList/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MemberList from '@/components/MemberList.vue'; // @ is an alias to /src

@Component({
  components: {
    MemberList,
  },
})
export default class Home extends Vue {}
</script>
