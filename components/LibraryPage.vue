<template>
  <v-responsive class="mx-auto" max-width="1024">
  　<section class="mb-12">
      <h1 class="display-1 font-weight-bold mb-2"> {{ $t('library_name') }} </h1>
      <p class="font-weight-right title"> 
        {{ $t('overview') }}
      </p>
    </section>
    <section class="mb-12">
      <h2> {{ $t('explanation') }} </h2>
      <p> {{ $t('explanation_content') }}</p>
    </section>
    <section class="mb-12" v-if="dependent_libraries">
      <h2> {{ $t('dependent_library') }} </h2>
      <ul v-for="depend in dependent_libraries" :key=depend>
        <li><nuxt-link :to="localePath(depend.link)"> {{ $t(depend.name) }} </nuxt-link></li>
      </ul>
    </section>

    <section class="mb-12" v-if="func_reference">
      <h2> {{ $t('reference') }} </h2>
      <p v-if="reference_about"> {{ $t('reference_about') }} </p>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <th width="350sp"> {{ $t('function')}} </th>
            <th width="350sp"> {{ $t('explanation') }} </th>
            <th> {{ $t('calc_amount') }} </th>
          </thead>
          <tbody>
            <tr v-for="now_func in func_reference" :key="now_func.function">
              <td> {{ now_func.function }} </td>
              <td> {{ $t(now_func.explanation) }} </td>
              <td> {{ now_func.amount }} </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </section>

    <section class="mb-12">
      <h2> {{$t('header_file') }} </h2>
      <SourceView
        :src="headerRaw"
        :link="headerGitHubLink"
      />
    </section>
    <section class="mb-12" v-if="sourceRaw">
      <h2> {{$t('source_file') }} </h2>
      <SourceView
        :src="sourceRaw"
        :link="sourceGitHubLink"
      />
    </section>
  </v-responsive>
</template>

<i18n src="~/locales/template/ja.json"></i18n>
<i18n src="~/locales/template/en.json"></i18n>
<i18n src="~/locales/names/ja.json"></i18n>
<i18n src="~/locales/names/en.json"></i18n>

<script>
import SourceView from '~/components/SourceView.vue'

export default {
  props: [
    'headerRaw',
    'headerGitHubLink',
    'sourceRaw',
    'sourceGitHubLink',
    'dependentList',
    'japanese',
    'english'
  ],
  components: {
    SourceView: SourceView,
  },
  data() {
    return {
      dependent_libraries: "",
      reference_about: "",
      func_reference: "",
    }
  },
  created() {
      this.$i18n.mergeLocaleMessage('ja', this.japanese)
      this.$i18n.mergeLocaleMessage('en', this.english)
      this.dependent_libraries = this.dependentList.dependent_libraries
      this.reference_about = this.dependentList.reference_about
      this.func_reference = this.dependentList.func_reference
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
        window.MathJax.Hub.Rerender([
          'Typeset',
          window.MathJax.Hub,
        ])
      }
  },
  head() {
    return {
      title: this.$t('library_name'),
    }
  }
}
</script>
