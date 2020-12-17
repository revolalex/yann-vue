<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="secondary"
      position="top"
      data-test="navbar"
    >
      <b-navbar-brand
        id="ycLogo"
        :to="{ name: 'Home' }"
        data-test="navbar-brand"
        >{{ $t("Photographer.Name") }}</b-navbar-brand
      >
      <b-navbar-toggle
        target="nav-collapse"
        data-test="navbar-collapse"
      ></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link
            v-on:click.prevent
            :to="{ name: 'Biographie' }"
            class="nav-item nav-link"
            active-class="active"
            exact
          >
            {{ $t("Navbar.Biographie.Text") }}
          </router-link>
          <router-link
            v-on:click.prevent
            :to="{ name: 'Actualites' }"
            class="nav-item nav-link"
            active-class="active"
            exact
          >
            {{ $t("Navbar.Actualites.Text") }}
          </router-link>
          <!-- ATTENTION ICI I18N A FAIRE -->
          <router-link
            v-on:click.prevent
            :to="{ name: 'Photo' }"
            class="nav-item nav-link"
            active-class="active"
            exact
          >
            Photo du mois
          </router-link>
          <router-link
            v-on:click.prevent
            :to="{ name: 'Galeries' }"
            class="nav-item nav-link"
            active-class="active"
            exact
          >
            {{ $t("Navbar.Galerie.Text") }}
          </router-link>
          <router-link
            v-on:click.prevent
            :to="{ name: 'Contact' }"
            class="nav-item nav-link"
            active-class="active"
            >{{ $t("Footer.Link.Contact") }}
          </router-link>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown v-if="isAdminConnect" right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em><b-icon icon="person" variant="info"></b-icon>Admin</em>
            </template>
            <b-dropdown-item href="/admin/dashboard">Dashboard</b-dropdown-item>
            <b-dropdown-item href="#" @click="effacer"
              >Sign Out</b-dropdown-item
            >
          </b-nav-item-dropdown>
          <b-nav-item right>
            <LocalSwitcher />
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import LocalSwitcher from "./LocalSwitcher";
export default {
  name: "NavBar",
  components: {
    LocalSwitcher,
  },
  computed: {
    isAdminConnect() {
      if (this.$store.state.auth === true) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    effacer() {
      this.$store.dispatch("RESET_TOKEN");
      this.$router.push("/");
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Handlee&display=swap");
#ycLogo {
  font-family: "Handlee", cursive;
  font-size: 1.3em;
}
.navbar {
  font: normal 18px sans-serif;
  font-weight: bold;
}
.dropdown-menu {
  opacity: 0.9;
  font-weight: bold;
}

</style>