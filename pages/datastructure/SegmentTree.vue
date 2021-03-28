<template>
  <LibraryPage
    headerRaw="https://raw.githubusercontent.com/jellyfish26/competitive-library/master/datastructure/SegmentTree.hpp"
    headerGitHubLink="https://github.com/jellyfish26/competitive-library/blob/master/datastructure/SegmentTree.hpp"
    :dependentList="dependent_list"
    :japanese="Japanese.ja"
    :english="English.en"
  />
</template>

<script>
import LibraryPage from '~/components/LibraryPage.vue'
import DependentList from '~/locales/datastructure/SegmentTree/list.js'
import Japanese from '~/locales/datastructure/SegmentTree/ja.json'
import English from '~/locales/datastructure/SegmentTree/en.json'

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
