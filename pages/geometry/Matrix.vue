<template>
  <LibraryPage
    headerRaw="https://raw.githubusercontent.com/jellyfish26/competitive-library/master/geometry/Matrix.hpp"
    headerGitHubLink="https://github.com/jellyfish26/competitive-library/blob/master/geometry/Matrix.hpp"
    :dependentList="dependent_list"
    :japanese="Japanese.ja"
    :english="English.en"
  />
</template>

<script>
import LibraryPage from '~/components/LibraryPage.vue'
import DependentList from '~/locales/geometry/Matrix/list.js'
import Japanese from '~/locales/geometry/Matrix/ja.json'
import English from '~/locales/geometry/Matrix/en.json'

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
