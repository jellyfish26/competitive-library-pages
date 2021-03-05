<template>
  <LibraryPage
    headerRaw="https://raw.githubusercontent.com/jellyfish26/competitive-library/master/graph/EulerTour.hpp"
    headerGitHubLink="https://github.com/jellyfish26/competitive-library/blob/master/graph/EulerTour.hpp"
    :dependentList="dependent_list"
    :japanese="Japanese.ja"
    :english="English.en"
  />
</template>

<script>
import LibraryPage from '~/components/LibraryPage.vue'
import DependentList from '~/locales/graph/EulerTour/list.js'
import Japanese from '~/locales/graph/EulerTour/ja.json'
import English from '~/locales/graph/EulerTour/en.json'

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
