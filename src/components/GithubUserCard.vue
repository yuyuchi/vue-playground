<template>
  <h1>GitHub Profiles</h1>
  <div>
    <div class="image">
      <router-link :to="{ name: 'Detail'}">
        <img :src="user.avatar_url">
      </router-link>
    </div>
      <div class="content">
        <p>click image to show more details</p>
        <a :href="`https://github.com/${username}`" class="header">{{user.name}}</a>
        <div class="meta">
          <span class="date">Joined in {{user.created_at}}</span>
        </div>
        <div class="description">
          {{user.bio}}
        </div>
      </div>
  </div>
</template>

<script>
import api from '@/api';

export default {
  name: 'GithubUserCard',
  props: {
    username: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      user: {},
    };
  },
  async created() {
    const { data } = await api.getGithubUser(this.username);
    this.user = data;
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/components/GithubUserCard";
</style>
