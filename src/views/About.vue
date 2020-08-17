<template>
  <div class="about">
    <h1>This is an about page</h1>
    <GithubUserCard username="yuyuchi" />
  </div>
</template>

<script>
import GithubUserCard from '@/components/GithubUserCard.vue';

export default {
  name: 'About',
  components: {
    GithubUserCard,
  },
};
</script>
