<template>
  <div>
    <div v-for="line in chordsLines" v-bind:key="line">
      {{ line }}
    </div>
    <Comments/>
  </div>
</template>

<script>
import Comments from '../components/Comments'

export default {
  name: "FullChords",
  components: {
    Comments
  },
  data() {
    return {
      chordsLines: '',
    }
  },
  methods: {
    isChord(line) {
      return line.startsWith("<") && line.endsWith(">");
    }
  },
  props: ['rawChordsText'],
  created: function () {
    let chordsLines = [];
    this.rawChordsText.split("\n").map((line) => {
      let newLineParts = [];
      let chordsLine = "";
      line.split(/(<[ 0-9a-zA-Z]+>)/g).forEach((str) => {
        if (this.isChord(str)) {
          if (newLineParts.length > 0) {
            chordsLine += " ".repeat(newLineParts[newLineParts.length - 1].length);
          }
          chordsLine += str.substr(1, str.length - 2);
        } else {
          newLineParts.push(str);
        }
      });
      chordsLines.push(chordsLine, newLineParts.join(""));
    })
    this.chordsLines = chordsLines;
  }
}
</script>

<style>
chord_tooltip {
  min-width: 64px;
  min-height: 64px;
}
</style>