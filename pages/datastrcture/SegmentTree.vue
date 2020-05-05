<template>
  <LibraryPage
    sourceRaw="https://raw.githubusercontent.com/jellyfish26/competitive-library/master/datastructure/SegmentTree.cpp"
    sourceGitHubLink="https://github.com/jellyfish26/competitive-library/blob/master/datastructure/SegmentTree.cpp"
    :dependentList="dependent_list"
    :japanese="Japanese.ja"
    :english="English.en"
  />
</template>

<script>
import LibraryPage from '~/components/LibraryPage.vue'
import DependentList from '~/locales/datastrcture/SegmentTree/list.js'
import Japanese from '~/locales/datastrcture/SegmentTree/ja.json'
import English from '~/locales/datastrcture/SegmentTree/en.json'

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
