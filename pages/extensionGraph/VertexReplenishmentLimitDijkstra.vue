<template>
  <LibraryPage
    sourceRaw="https://raw.githubusercontent.com/jellyfish26/competitive-library/master/custom/extension_graph/VertexReplenishmentLimitDijkstra.cpp"
    sourceGitHubLink="https://github.com/jellyfish26/competitive-library/blob/master/custom/extension_graph/VertexReplenishmentLimitDijkstra.cpp"
    :dependentList="dependent_list"
    :japanese="Japanese.ja"
    :english="English.en"
  />
</template>

<script>
import LibraryPage from '~/components/LibraryPage.vue'
import DependentList from '~/locales/extensionGraph/VertexReplenishmentLimitDijkstra/list.js'
import Japanese from '~/locales/extensionGraph/VertexReplenishmentLimitDijkstra/ja.json'
import English from '~/locales/extensionGraph/VertexReplenishmentLimitDijkstra/en.json'

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
