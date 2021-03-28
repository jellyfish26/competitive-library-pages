<template>
  <LibraryPage
    headerRaw="https://raw.githubusercontent.com/jellyfish26/competitive-library/master/graph/ReRooting.hpp"
    headerGitHubLink="https://github.com/jellyfish26/competitive-library/blob/master/graph/ReRooting.hpp"
    :dependentList="dependent_list"
    :japanese="Japanese.ja"
    :english="English.en"
  />
</template>

<script>
import LibraryPage from '~/components/LibraryPage.vue'
import DependentList from '~/locales/graph/ReRooting/list.js'
import Japanese from '~/locales/graph/ReRooting/ja.json'
import English from '~/locales/graph/ReRooting/en.json'

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
