<template>
  <LibraryPage
    sourceRaw="https://raw.githubusercontent.com/jellyfish26/competitive-library/master/math/Combination.cpp"
    sourceGitHubLink="https://github.com/jellyfish26/competitive-library/blob/master/math/Combination.cpp"
    :dependentList="dependent_list"
    :japanese="Japanese.ja"
    :english="English.en"
  />
</template>

<script>
import LibraryPage from '~/components/LibraryPage.vue'
import DependentList from '~/locales/mathematics/Combination/list.js'
import Japanese from '~/locales/mathematics/Combination/ja.json'
import English from '~/locales/mathematics/Combination/en.json'

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
