<template>
  <nav class="blue darken-3">
    <div class="nav-wrapper">
      <router-link to="/" class="brand-logo">Task</router-link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <router-link
          tag="li"
          active-class="active"
          to="/"
          exact
        >
          <a href="#">Create</a>
        </router-link>
        <router-link
          tag="li"
          active-class="active"
          to="/list"
        >
          <a href="#">List</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
}
</script>


<style scoped lang="scss">
  .nav-wrapper {
    padding: 0 15px;
  }
  a {
    padding: 0 20px;
  }
</style>
