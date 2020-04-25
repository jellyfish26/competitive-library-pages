<template>
  <v-responsive class="mx-auto" max-width=1024>
  　<section class="mb-12">
      <h1 class="display-1 font-weight-bold mb-2"> {{ $t('library_name') }} </h1>
      <p class="font-weight-right title"> 
        <MathJax2 :formula="$t('overview')"/>
      </p>
    </section>
    <section class="mb-12">
      <h2> {{ $t('explanation') }} </h2>
      <p> <MathJax2 :formula="$t('explanation_content')"/></p>
    </section>

    <section class="mb-12" v-if="dependent_libraries">
      <h2> {{ $t('dependent_library') }} </h2>
      <ul v-for="depend in dependent_libraries">
        <li><a :href="localePath(depend.link)"> {{ $t(depend.name) }} </a></li>
      </ul>
    </section>

    <section class="mb-12" v-if="func_reference">
      <h2> {{ $t('reference') }} </h2>
      <p v-if="reference_about"> <MathJax2 :formula="$t(reference_about)"/> </p>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <th width="300sp"> {{ $t('function')}} </th>
            <th width="300sp"> {{ $t('explanation') }} </th>
            <th> {{ $t('calc_amount') }} </th>
            <th> {{ $t('constant_multiple') }} </th>
          </thead>
          <tbody>
            <tr v-for="now_func in func_reference" :key="now_func.function">
              <td> <MathJax2 :formula="now_func.function"/> </td>
              <td> <MathJax2 :formula="$t(now_func.explanation)"/> </td>
              <td> <MathJax2 :formula="now_func.amount"/> </td>
              <td> <MathJax2 :formula="$t(now_func.constant_times)"/> </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </section>

    <section class="mb-12">
      <h2> {{$t('source_code') }} </h2>
      <SourceView 
        src="https://raw.githubusercontent.com/jellyfish26/competitive-library/master/datastructure/BinaryIndexedTree.cpp"
        link="https://github.com/jellyfish26/competitive-library/blob/master/datastructure/BinaryIndexedTree.cpp"
      />
    </section>
  </v-responsive>
</template>

<i18n src="~/locales/datastrcture/BinaryIndexedTree/ja.json"></i18n>
<i18n src="~/locales/datastrcture/BinaryIndexedTree/en.json"></i18n>
<i18n src="~/locales/template/ja.json"></i18n>
<i18n src="~/locales/template/en.json"></i18n>

<script>
import SourceView from '~/components/SourceView.vue'
import MathJax2 from '~/components/MathJax2.vue'
import DependentList from '~/locales/datastrcture/BinaryIndexedTree/list.js'

export default {
  components: {
    SourceView: SourceView,
    MathJax2: MathJax2
  },
  data() {
    return {
      dependent_libraries: DependentList.data().dependent_libraries,
      reference_about: DependentList.data().reference_about,
      func_reference: DependentList.data().func_reference
    }
  },
  head() {
    return {
      title: this.$t('library_name'),
    }
  }
}
</script>
