<template>
  <p>
    Example: <br/>
    &lt;Am&gt; Hello &lt;Cm&gt; It's me
  </p>
  <form id="workspace_form" @submit.prevent="onPublish">
    <div class="form-group">
      <label for="song_name">Name</label>
      <input type="text" name="name" class="form-control" id="song_name" aria-describedby="emailHelp"
             v-model="chordsNameData">
      <label for="song_author">Author</label>
      <input type="text" name="author" class="form-control" id="song_author" aria-describedby="emailHelp"
             v-model="chordsAuthorData">
    </div>
    <div class="form-group">
      <label for="song_text">Lyrics and chords:</label>
      <textarea name="text" class="form-control" id="song_text" rows="50" v-model="chordsTextData">
      </textarea>
    </div>
    <button type="submit" id="publish_button" class="btn btn-primary">Publish</button>
  </form>
</template>

<script>
export default {
  name: 'Workspace',
  props: ['chordsName', 'chordsAuthor', 'chordsText'],
  data() {
    return {
      chordsNameData: '',
      chordsAuthorData: '',
      chordsTextData: '',
    }
  },
  methods: {
    onPublish() {
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      let raw = JSON.stringify({
        author: this.chordsAuthorData,
        title: this.chordsNameData,
        text: this.chordsTextData
      });
      let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("/chords/new", requestOptions)
          .then(result => {
            if (result.status === 200) {
              this.$router.push("/");
              // alert("You can sign in now")
            } else if (result.status === 302) {
              alert("User with email is already exists");
            }
          })
    },
    //"03/11/2000 09:20"
    formatDate(date) {
      return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
    }
  },
  created: function () {
    this.chordsNameData = this.chordsName;
    this.chordsAuthorData = this.chordsAuthor;
    this.chordsTextData = this.chordsText;
    // 'chordsName', 'chordsAuthor', 'chordsText'
  }
}
</script>

<style>
#publish_button {
  margin-top: 10px;
}
</style>