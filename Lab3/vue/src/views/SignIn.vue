<template>
  <div id="sign_in_body" class="text-center">
    <div id="sign_in_main" class="form-signin">
      <form id="sign_in_form" method="post" action="/signIn">
        <img class="mb-4" :src="require('@/assets/logo.png')" alt="" width="100">
        <h1 class="h3 mb-3 fw-normal">Sign in</h1>
        <label for="inputEmail" class="visually-hidden">Email address</label>
        <input type="email" v-model="user.email" name="username" id="inputEmail" class="form-control"
               placeholder="Email address" required autofocus>
        <label for="inputPassword" class="visually-hidden">Password</label>
        <input type="password" v-model="user.password" name="password" id="inputPassword"
               class="form-control" placeholder="Password" required>
        <button id="submit_sign_in" class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignIn',
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  }
}
</script>

<style>
#sign_in_body, #sign_in_main {
  height: 70%;
}

#sign_in_body {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin {
  font-weight: 400;
}

.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}

.form-signin .form-control:focus {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

</style>