<template>
  <LibraryPage
    headerRaw="https://raw.githubusercontent.com/jellyfish26/competitive-library/master/datastructure/BinaryIndexedTree.hpp"
    headerGitHubLink="https://github.com/jellyfish26/competitive-library/blob/master/datastructure/BinaryIndexedTree.hpp"
    :dependentList="dependent_list"
    :japanese="Japanese.ja"
    :english="English.en"
  />
</template>

<script>
import LibraryPage from '~/components/LibraryPage.vue'
import DependentList from '~/locales/datastructure/BinaryIndexedTree/list.js'
import Japanese from '~/locales/datastructure/BinaryIndexedTree/ja.json'
import English from '~/locales/datastructure/BinaryIndexedTree/en.json'

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
