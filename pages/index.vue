<template>
  <v-responsive class="mx-auto" max-width=1024>
  　<section class="mb-12">
      <h1 class="display-1 font-weight-bold"> {{ $t('welcome') }} </h1>
      <p class="font-weight-right title"> {{ $t('first_description') }} </p>
    </section>
    <section class="mb-12">
      <h2> {{ $t('use_site') }} </h2>
      <p> {{ $t('use_site_description') }} </p>
      <p> {{ $t('use_site_description_2') }} </P>
    </section>
    <section class="mb-12">
      <h2> {{ $t('index_classification') }} </h2>
      <div
        v-for="now_algorithm in $t('algorithms')"
        class="mx-auto"
      >
        <h3> {{ now_algorithm.classification_name }} </h3>
        <p> {{ now_algorithm.description }} </p>
      </div>
    </section>
    <section class="mb-12">
      <h2> {{ $t('information') }} </h2>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <v-row
              align="center"
              justify="space-around"
              style="height: auto"
            >
              <v-btn
                href="https://twitter.com/jellyfish_26"
                target="_blank"
                class="ma-3 pa-6"
                color="light-blue lighten-2"
                rounded
              >
                <v-icon> mdi-twitter </v-icon>
                {{ $t('my_twitter') }}
              </v-btn>
              <v-btn
                href="https://github.com/jellyfish26/competitive-library-pages"
                target="_blank"
                class="ma-3 pa-6"
                color="amber darken-2"
                rounded
              >
                <v-icon> mdi-github </v-icon>
                {{ $t('page_repo') }}
              </v-btn>
              <v-btn
                href="https://github.com/jellyfish26/competitive-library"
                target="_blank"
                class="ma-3 pa-6"
                color="light-green lighten-1"
                rounded
              >
                <v-icon> mdi-github </v-icon>
                {{ $t('lib_repo') }}
              </v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="mb-12">
      <h2> {{ $t('license') }} </h2>
      <h3> {{ $t('aboue_page') }} </h3>
      <p> {{ $t('page_license_description') }} </p>
      <h3> {{ $t('about_library') }} </h3>
      <p> {{ $t('library_license_description') }} </p>
      <SourceView 
        src="https://raw.githubusercontent.com/jellyfish26/competitive-library/master/copyright_notice.cpp"
        link="https://github.com/jellyfish26/competitive-library/blob/master/copyright_notice.cpp"
      >
      </SourceView>
    </section>
  </v-responsive>
</template>

<i18n src="~/locales/index/ja.json"></i18n>
<i18n src="~/locales/index/en.json"></i18n>

<script>
import SourceView from '~/components/SourceView.vue'

export default {
  components: {
    SourceView: SourceView
  },
  head() {
    return {
      title: this.$t('welcome'),
    }
  }
}
</script>
