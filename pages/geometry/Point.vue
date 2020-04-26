<template>
  <LibraryPage
    sourceRaw="https://raw.githubusercontent.com/jellyfish26/competitive-library/master/geometry/Point.cpp"
    sourceGitHubLink="https://github.com/jellyfish26/competitive-library/blob/master/geometry/Point.cpp"
    :dependentList="dependent_list"
    :japanese="Japanese.ja"
    :english="English.en"
  />
</template>

<script>
import LibraryPage from '~/components/LibraryPage.vue'
import DependentList from '~/locales/geometry/Point/list.js'
import Japanese from '~/locales/geometry/Point/ja.json'
import English from '~/locales/geometry/Point/en.json'

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
