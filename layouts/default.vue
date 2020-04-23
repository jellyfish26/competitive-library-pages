<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      width=320
      clipped
      fixed
      app
    >
      <v-container>
        <v-list nav dense>
          <template v-for="now_list in navigation_list">
            <v-list-group
              v-if="now_list.list"
              no-action
              :key="now_list.name"
              :prepend-icon="now_list.icon"
              v-model="now_list.active"
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title> {{ $t(now_list.name)}} </v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item
                v-for="inside_list in now_list.list"
                :key="inside_list.name"
                :to="inside_list.to"
              >
                <v-list-item-title> {{ $t(inside_list.name) }} </v-list-item-title>
              </v-list-item>
            </v-list-group>
            <v-list-item
              v-else 
              :key="now_list.name"
              :to="now_list.to"
              @click="all_list_close"
            >
              <v-list-item-icon>
                <v-icon> {{ now_list.icon}} </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title> {{ $t(now_list.name) }} </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-container>
    </v-navigation-drawer>
    <v-app-bar
      clipped-left
      clipped-right
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="$t('title')" />
      <v-spacer />
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      clipped
      fixed
      app
    >
      <v-list>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<i18n src="~/locales/default/ja.json"></i18n>
<i18n src="~/locales/default/en.json"></i18n>

<script>
import navigation from './navigation-lists.js'

export default {
  methods: {
    all_list_close() {
      this.navigation_list.forEach( now_list => now_list.open = false)
    }
  },
  data () {
    return {
      navigation_list: navigation.data().navigation_list,
      clipped: true,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
    }
  }
}
</script>
