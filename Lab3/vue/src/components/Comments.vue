<template>
  <div class="container comments">
    <div class="row">
      <div class="panel panel-default widget">
        <div class="panel-heading">
          <span class="glyphicon glyphicon-comment"></span>
          <h3 class="panel-title">Comments</h3>
          <span class="label label-info">{{ comments.length }}</span>
        </div>
        <div class="panel-body" v-if="authorized">
          <ul class="list-group">
            <li v-for="comment in comments" v-bind:key="comment.id" class="list-group-item">


              <div class="row">
                <div class="col-xs-12 col-md-11">
                  <div>
                    <div class="mic-info">
                      By: <b>{{ comment.username }}</b> on {{ comment.postDate }}
                    </div>
                  </div>
                  <div class="comment-text">
                    {{ comment.text }}
                  </div>
                </div>
              </div>

            </li>
          </ul>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">New comment</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <a href="#" class="btn btn-primary btn-sm btn-block" role="button">Add</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comments',
  props: ['chordsId'],
  data() {
    return {
      comments: {},
      authorized: false
    }
  },
  created: function () {
    let vm = this;
    fetch("/comment/all")
        .then(resp => resp.json())
        .then(function (data) {
          vm.chords = data;
        });

    fetch("/isAuthorized")
        .then(response => response.json())
        .then(data => {
          vm.authorized = data;
        });
  }
}
</script>

<style>
.comments {
  padding-top: 30px;
}

.widget .panel-body {
  padding: 0px;
}

.widget .list-group {
  margin-bottom: 0;
}

.widget .panel-title {
  display: inline
}

.widget .label-info {
  float: right;
}

.widget li.list-group-item {
  border-radius: 0;
  border: 0;
  border-top: 1px solid #ddd;
}

.widget li.list-group-item:hover {
  background-color: rgba(86, 61, 124, .1);
}

.widget .mic-info {
  color: #666666;
  font-size: 11px;
}

.widget .action {
  margin-top: 5px;
}

.widget .comment-text {
  font-size: 12px;
}

.btn {
  margin-top: 10px;
}
</style>