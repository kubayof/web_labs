<template>
  <div id="sign_up_body" class="text-center">
    <div id="sign_up_main" class="form-signup">
      <form method="post" action="/signUp">
        <img class="mb-4" :src="require('@/assets/logo.png')" alt="" width="100">
        <h1 class="h3 mb-3 fw-normal">Sign up</h1>
        <div class="input-group mb-3">
          <span class="input-group-text" id="name-hint">Name &nbsp;&nbsp;</span>
          <input type="text" v-model="user.name" name="name" class="form-control" id="name" aria-describedby="basic-addon3">
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="email-hint">Email &nbsp;&nbsp;</span>
          <input type="text" v-model="user.email" name="email" class="form-control" id="email" aria-describedby="basic-addon3">
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="password-hint">Password</span>
          <input type="password" v-model="user.password" name="password" class="form-control" id="password" aria-describedby="basic-addon3">
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="gender-hint">Gender</span>
          <select v-model="user.gender" class="form-select" name="gender" aria-label="Default select example">
            <option selected>Female</option>
            <option value="1">Male</option>
          </select>
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="birth_date-hint">Birth date</span>
          <input type="date" v-model="user.birthDate" name="user_birth" class="form-control" aria-describedby="basic-addon3">
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SignUp',
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: '',
        gender: '',
        birthDate: ''
      }
    }
  },
  methods: {
    //"03/11/2000 09:20"
    formatDate(date) {
      return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
    }
  }
}
</script>

<style>
#sign_up_body {
  height: 70%;
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
}

.form-signup {
  width: 100%;
  max-width: 400px;
  padding: 15px;
  margin: auto;
}

.form-signup {
  font-weight: 400;
}
</style>