<template>
  <LibraryPage
    headerRaw="https://raw.githubusercontent.com/jellyfish26/competitive-library/master/datastructure/UnionFind.hpp"
    headerGitHubLink="https://github.com/jellyfish26/competitive-library/blob/master/datastructure/UnionFind.hpp"
    sourceRaw="https://raw.githubusercontent.com/jellyfish26/competitive-library/master/datastructure/UnionFind.cpp"
    sourceGitHubLink="https://github.com/jellyfish26/competitive-library/blob/master/datastructure/UnionFind.cpp"
    :dependentList="dependent_list"
    :japanese="Japanese.ja"
    :english="English.en"
  />
</template>

<script>
import LibraryPage from '~/components/LibraryPage.vue'
import DependentList from '~/locales/datastrcture/UnionFind/list.js'
import Japanese from '~/locales/datastrcture/UnionFind/ja.json'
import English from '~/locales/datastrcture/UnionFind/en.json'

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
