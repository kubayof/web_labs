<template>
  <Navbar :key="reload_navbar" @router_view_update="onRouterViewUpdate"/>
  <Jumbotron/>
  <main>
    <router-view :key="reload_router_view"/>
  </main>
  <footer class="text-muted py-5">
    <div class="container">
      <p class="float-end mb-1">
        <a href="#">Back to top</a>
      </p>
    </div>
  </footer>
</template>

<script>
import Navbar from '@/components/Navbar'
import Jumbotron from '@/components/Jumbotron'


export default {
  name: 'App',
  data() {
    return {
      reload_navbar: false,
      reload_router_view: false
    }
  },
  components: {
    Navbar,
    Jumbotron
  },
  methods: {
    onNavbarUpdate() {
      this.reload_navbar = !this.reload_navbar;
    },
    onRouterViewUpdate() {
      this.reload_router_view = !this.reload_router_view;
    }
  }
}
</script>

<style>
body {
  min-height: 75rem;
}

main {
  padding: 10px;
  background-color: rgba(100, 100, 100, 0.3);
  margin: 10px;
}

@media screen and (min-width: 800px) {
  main {
    margin: 10px 100px;
  }
}

</style>
