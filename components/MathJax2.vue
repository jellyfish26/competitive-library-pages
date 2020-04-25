<template>
  <span ref="mathJaxElement">{{ formula }}</span>
</template>

<script>
export default {
  props: ['formula'],
  watch: {
    formula() {
      this.renderMathJax()
    }
  },
  mounted() {
    this.renderMathJax()
  },
  methods: {
    renderMathJax() {
      this.$refs.mathJaxElement.innerHTML = this.formula
      if (window.MathJax) {
        window.MathJax.Hub.Config({
          tex2jax: {
            inlineMath: [['$', '$']],
            displayMath: [['$$', '$$']],
            processEscapes: true,
            processEnvironments: true
          },
          displayAlign: 'center',
          "HTML-CSS": { fonts: ["TeX"] },
        })
        window.MathJax.Hub.Queue([
          'Typeset',
          window.MathJax.Hub,
          this.$refs.mathJaxElement,
        ])
      }
    }
  }
}
</script>