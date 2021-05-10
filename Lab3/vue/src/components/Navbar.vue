<template>
  <nav id="nav" class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a href="#" class="navbar-brand d-flex align-items-center">
        <img :src="require('@/assets/logo.png')" width="30" alt="logo"/>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="
            {name: 'Workspace', params: {chordsName: '', chordsAuthor: '', chordsText: ''}}
              " class="nav-link">
              Workspace
            </router-link>
          </li>
          <li class="nav-item" v-if="authorized">
            <router-link to="my_account" class="nav-link">My account</router-link>
          </li>
          <li class="nav-item" v-if="authorized">
            <button class="nav-link" @click="onSignOut">Sign Out</button>
          </li>
          <li class="nav-item" v-if="!authorized">
            <router-link to="/sign_in" class="nav-link">Sign In</router-link>
          </li>
          <li class="nav-item" v-if="!authorized">
            <router-link to="/sign_up" class="nav-link">Sign Up</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      authorized: false
    }
  },
  methods: {
    onSignOut() {
      fetch("/logout")
          .then(result => {
            if (result.status === 200) {
              this.$router.push('/').then(() => this.$emit('router_view_update'))
              this.$forceUpdate();
            }
          })
    },
    fetchAuthorized() {
      let vm = this;
      fetch("/isAuthorized")
          .then(response => response.json())
          .then(data => {
            vm.authorized = data;
          });
    }
  },
  updated: function() {
    this.fetchAuthorized();
  },
  created: function() {
    this.fetchAuthorized();
  }
}
</script>