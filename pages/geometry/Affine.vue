<template>
  <LibraryPage
    headerRaw="https://raw.githubusercontent.com/jellyfish26/competitive-library/master/geometry/Affine.hpp"
    headerGitHubLink="https://github.com/jellyfish26/competitive-library/blob/master/geometry/Affine.hpp"
    :dependentList="dependent_list"
    :japanese="Japanese.ja"
    :english="English.en"
  />
</template>

<script>
import LibraryPage from '~/components/LibraryPage.vue'
import DependentList from '~/locales/geometry/Affine/list.js'
import Japanese from '~/locales/geometry/Affine/ja.json'
import English from '~/locales/geometry/Affine/en.json'

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
