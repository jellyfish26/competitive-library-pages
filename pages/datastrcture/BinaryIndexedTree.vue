<template>
  <LibraryPage
    sourceRaw="https://raw.githubusercontent.com/jellyfish26/competitive-library/master/datastructure/BinaryIndexedTree.cpp"
    sourceGitHubLink="https://github.com/jellyfish26/competitive-library/blob/master/datastructure/BinaryIndexedTree.cpp"
    :dependentList="dependent_list"
    :japanese="Japanese.ja"
    :english="English.en"
  />
</template>

<script>
import LibraryPage from '~/components/LibraryPage.vue'
import DependentList from '~/locales/datastrcture/BinaryIndexedTree/list.js'
import Japanese from '~/locales/datastrcture/BinaryIndexedTree/ja.json'
import English from '~/locales/datastrcture/BinaryIndexedTree/en.json'

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
