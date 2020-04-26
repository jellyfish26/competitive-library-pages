<template>
  <LibraryPage
    sourceRaw="https://raw.githubusercontent.com/jellyfish26/competitive-library/master/math/ModInt.cpp"
    sourceGitHubLink="https://github.com/jellyfish26/competitive-library/blob/master/math/ModInt.cpp"
    :dependentList="dependent_list"
    :japanese="Japanese.ja"
    :english="English.en"
  />
</template>

<script>
import LibraryPage from '~/components/LibraryPage.vue'
import DependentList from '~/locales/mathematics/ModInt/list.js'
import Japanese from '~/locales/mathematics/ModInt/ja.json'
import English from '~/locales/mathematics/ModInt/en.json'

export default {
  components: {
    LibraryPage: LibraryPage
  },
  data() {
    return {
      Japanese: Japanese,
      English: English,
      dependent_list: DependentList.data(),
    }
  },
}
</script>
