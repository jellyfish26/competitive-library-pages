<template>
  <LibraryPage
    headerRaw="https://raw.githubusercontent.com/jellyfish26/competitive-library/master/geometry/Vertex.hpp"
    headerGitHubLink="https://github.com/jellyfish26/competitive-library/blob/master/geometry/Vertex.hpp"
    :dependentList="dependent_list"
    :japanese="Japanese.ja"
    :english="English.en"
  />
</template>

<script>
import LibraryPage from '~/components/LibraryPage.vue'
import DependentList from '~/locales/geometry/Vertex/list.js'
import Japanese from '~/locales/geometry/Vertex/ja.json'
import English from '~/locales/geometry/Vertex/en.json'

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
