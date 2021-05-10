<template>
  <div class="container">
    <div class="mb-3 row">
      <label for="name" class="col-sm-2 col-form-label">Name</label>
      <div class="col-sm-10">
        <input type="text" readonly class="form-control-plaintext" id="name"
               :value="this.user.name">
      </div>
    </div>
    <div class="mb-3 row">
      <label for="email" class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-10">
        <input type="text" readonly class="form-control-plaintext" id="email"
               :value="this.user.email">
      </div>
    </div>
    <div class="mb-3 row">
      <label for="gender" class="col-sm-2 col-form-label">Gender</label>
      <div class="col-sm-10">
        <input type="text" readonly class="form-control-plaintext" id="gender"
               :value="this.user.gender">
      </div>
    </div>
    <div class="mb-3 row">
      <label for="birth_date" class="col-sm-2 col-form-label">Birth date</label>
      <div class="col-sm-10">
        <input type="text" readonly class="form-control-plaintext" id="birth_date"
               :value="this.user.birthDate">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyAccount',
  data() {
    return {
      user: {}
    }
  },
  created: function() {
    fetch('/authenticationPrincipal')
    .then(resp => resp.json())
    .then(data => {
      this.user = data;
    });
  }
}
</script>