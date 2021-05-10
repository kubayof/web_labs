<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div v-for="ch in chords" :key="ch.id">
          <div class="col">
            <div class="card shadow-sm">
              <div class="card-body">
                <p class="card-text">{{ ch.title }} by {{ ch.author }}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <router-link
                        :to="{name: 'Full chords', params: {rawChordsText: ch.text}}"
                        class="btn btn-sm btn-outline-secondary">
                      View
                    </router-link>


                    <router-link v-if="authorized"
                                 :to="{name: 'Workspace', params: {chordsName: ch.title, chordsAuthor: ch.author, chordsText: ch.text}}"
                                 class="btn btn-sm btn-outline-secondary">
                      Edit
                    </router-link>
                    <input type="button" v-if="authorized && (ch.userId === userId)"
                           @click="onDelete(ch.id)" class="btn btn-sm btn-outline-secondary" value="Delete"/>


                  </div>
                  <small class="text-muted">{{ ch.publicationDate }}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      chords: [],
      authorized: false,
      userId: undefined
    }
  },
  methods: {
    onDelete(chordsId) {
      console.log('Chords id: ' + chordsId)
      fetch('/chords/delete/' + chordsId,{
        method: 'DELETE'
      })
      .then(resp => {
        if (resp.status === 200) {
          this.$forceUpdate();
        } else {
          alert('Failed to delete chords');
        }
      })
    },
    fetchInfo() {
      let vm = this;
      fetch("/chords/all")
          .then(response => response.json())
          .then(data => {
            vm.chords = data;
          });

      fetch("/isAuthorized")
          .then(response => response.json())
          .then(data => {
            vm.authorized = data;
            if (vm.authorized) {
              fetch("/authenticationPrincipal")
                  .then(response => response.json())
                  .then(data => {
                    vm.userId = data.email;
                  });
            }
          });
    }
  },
  created: function () {
    this.fetchInfo()
  },
  updated: function () {
    this.fetchInfo()
  }
}
</script>
