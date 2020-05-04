<template>
  <LibraryPage
    sourceRaw="https://raw.githubusercontent.com/jellyfish26/competitive-library/master/custom/extension_algorithm/UndoableLongestIncreaseingSubsequence.cpp"
    sourceGitHubLink="https://github.com/jellyfish26/competitive-library/blob/master/custom/extension_algorithm/UndoableLongestIncreaseingSubsequence.cpp"
    :dependentList="dependent_list"
    :japanese="Japanese.ja"
    :english="English.en"
  />
</template>

<script>
import LibraryPage from '~/components/LibraryPage.vue'
import DependentList from '~/locales/custom/extensionAlgorithm/list.js'
import Japanese from '~/locales/custom/extensionAlgorithm/ja.json'
import English from '~/locales/custom/extensionAlgorithm/en.json'

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
