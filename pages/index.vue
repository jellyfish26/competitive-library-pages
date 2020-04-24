<template>
  <v-responsive class="mx-auto" max-width=1024>
  　<section class="mb-12">
      <h1> {{ $t('welcome') }} </h1>
      <p class="font-weight-right title"> {{ $t('first_description') }} </p>
    </section>
    <section class="mb-12">
      <h2> {{ $t('use_site') }} </h2>
      <p> {{ $t('use_site_description') }} </p>
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
                class="ma-3 pa-6"
                color="light-blue lighten-2"
                rounded
              >
                <v-avater size="80">
                  <v-icon> mdi-twitter </v-icon>
                </v-avater>
                {{ $t('my_twitter') }}
              </v-btn>
              <v-btn
                href="https://github.com/jellyfish26/competitive-library-pages"
                class="ma-3 pa-6"
                color="amber darken-2"
                rounded
              >
                <v-avater size="80">
                  <v-icon> mdi-github </v-icon>
                </v-avater>
                {{ $t('page_repo') }}
              </v-btn>
              <v-btn
                href="https://github.com/jellyfish26/competitive-library"
                class="ma-3 pa-6"
                color="light-green lighten-1"
                rounded
              >
                <v-avater size="80">
                  <v-icon> mdi-github </v-icon>
                </v-avater>
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
    </section>
  </v-responsive>
</template>

<i18n src="~/locales/index/ja.json"></i18n>
<i18n src="~/locales/index/en.json"></i18n>

<script>
export default {
  head() {
    return {
      title: this.$t('welcome'),
    }
  }
}
</script>
