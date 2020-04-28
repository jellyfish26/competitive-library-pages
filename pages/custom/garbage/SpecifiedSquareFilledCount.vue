<template>
  <LibraryPage
    sourceRaw="https://raw.githubusercontent.com/jellyfish26/competitive-library/master/custom/garbage/SpecifiedSquareFilledCount.cpp"
    sourceGitHubLink="https://github.com/jellyfish26/competitive-library/blob/master/custom/garbage/SpecifiedSquareFilledCount.cpp"
    :dependentList="dependent_list"
    :japanese="Japanese.ja"
    :english="English.en"
  />
</template>

<script>
import LibraryPage from '~/components/LibraryPage.vue'
import DependentList from '~/locales/custom/garbage/SpecifiedSquareFilledCount/list.js'
import Japanese from '~/locales/custom/garbage/SpecifiedSquareFilledCount/ja.json'
import English from '~/locales/custom/garbage/SpecifiedSquareFilledCount/en.json'

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
