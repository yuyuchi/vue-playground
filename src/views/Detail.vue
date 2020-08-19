<template>
  <div class="detail">
    <GithubUserInfo/>
  </div>
</template>

<script>
import GithubUserInfo from '@/components/GithubUserInfo.vue';

export default {
  name: 'Detail',
  components: {
    GithubUserInfo,
  },
};
</script>
