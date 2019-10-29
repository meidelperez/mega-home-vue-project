<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <router-link to="/full-home">
          <v-list-item>
            <v-list-item-action>
              <v-icon>{{icons.fullHome}}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Full Home Inspection</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link to="/4-point">
          <v-list-item>
            <v-list-item-action>
              <v-icon>{{icons.fourPoint}}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>4 Point</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link to="/roof-certification">
          <v-list-item>
            <v-list-item-action>
              <v-icon>{{icons.roofCertification}}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Roof Certification</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link to="/windstorm-mitigation">
          <v-list-item>
            <v-list-item-action>
              <v-icon>{{icons.wind}}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Wind Mitigation</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="text-center">
            <p>{{msg}}</p>
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import { log } from "util";
import { myIcons } from "../plugins/vuetify.js";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
    source: String
  },
  data: () => ({
    icons: myIcons,
    drawer: null
  }),
  methods: {
    onClick(event) {
      event.stopPropagation();
      // debugger;
    }
  },
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
