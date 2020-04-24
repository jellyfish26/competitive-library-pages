<template>
  <div class="darken-3">
    <prism language="cpp">{{ source_code }} </prism>
  </div>
</template>

<script>
import '~/plugin/prism.js'
import 'prismjs/components/prism-c.js'
import 'prismjs/components/prism-cpp.js'
import axios from 'axios'

export default {
  props: ['src'],
  components: {
    Prism: () => import('vue-prism-component'),
  },
  data() {
    return {
      source_code: ""
    }
  },
  mounted() {
    axios.get(this.src)
      .then(response => this.source_code = response.data)
  },
}
</script>