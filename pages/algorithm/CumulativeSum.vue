<template>
  <LibraryPage
    headerRaw="https://raw.githubusercontent.com/jellyfish26/competitive-library/master/algorithm/CumulativeSum.hpp"
    headerGitHubLink="https://github.com/jellyfish26/competitive-library/blob/master/algorithm/CumulativeSum.hpp"
    :dependentList="dependent_list"
    :japanese="Japanese.ja"
    :english="English.en"
  />
</template>

<script>
import LibraryPage from '~/components/LibraryPage.vue'
import DependentList from '~/locales/algorithm/CumulativeSum/list.js'
import Japanese from '~/locales/algorithm/CumulativeSum/ja.json'
import English from '~/locales/algorithm/CumulativeSum/en.json'

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
