<template>
  <v-card outlined class="source-card" color="#2d2d2d"> 
    <div class="source-copy">
      <v-icon
        title="Copy"
        aria-label="Copy"
        @click="copySource"
        size="25"
        color="white"
      >
        mdi-content-copy
      </v-icon>
    </div>
    <div class="source-github">
      <v-icon 
        title="View on GitHub"
        aria-label="View on GitHub"
        color="white"
        @click="openSource"
        size="25"
      > 
        mdi-github 
      </v-icon>
    </div>
    <prism language="cpp" :code="source_code"></prism>
  </v-card>
</template>

<script>
import '~/plugin/prism.js'
import 'prismjs/components/prism-c.js'
import 'prismjs/components/prism-cpp.js'
import axios from 'axios'

export default {
  props: ['src', 'link'],
  components: {
    Prism: () => import('vue-prism-component'),
  },
  data() {
    return {
      copied: false,
      source_code: ""
    }
  },
  methods: {
    copySource() {
      copyElement(this.$el.querySelector('pre'))
    },
    openSource() {
      open(this.link, "_blank")
    }
  },
  mounted() {
    axios.get(this.src)
      .then(response => this.source_code = response.data)
  },
}

export function copyElement(element) {
  element.setAttribute('contenteditable', 'true')
  element.focus()

  document.execCommand('selectAll', false)
  document.execCommand('copy')

  element.setAttribute('contenteditable', 'false')
}
</script>

<style lang="sass">
.source-copy
  .v-icon
    position: absolute
    right: 0
    z-index: 4

.source-github
  .v-icon
    position: absolute
</style>