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
            {{$t('Navbar.Biographie.Text')}}
          </router-link>
          <router-link
            v-on:click.prevent
            :to="{ name: 'Actualites' }"
            class="nav-item nav-link"
            active-class="active"
            exact
          >
            {{$t('Navbar.Actualites.Text')}}
          </router-link>
          <router-link
            v-on:click.prevent
            :to="{ name: 'Galeries' }"
            class="nav-item nav-link"
            active-class="active"
            exact
          >
            {{$t('Navbar.Galerie.Text')}}
          </router-link>
          <b-nav-item-dropdown
            :text="$t('Navbar.Galeries.Text')"
            right
            data-test="navbar-dropdown"
          >
            <b-dropdown-item v-on:click.prevent :to="{ name: 'Foret' }"
              >{{$t('Titre.Galerie.Foret')}}</b-dropdown-item
            >
            <b-dropdown-item v-on:click.prevent :to="{ name: 'Microcosmos' }"
              >{{$t('Titre.Galerie.Micro')}}</b-dropdown-item
            >
            <b-dropdown-item v-on:click.prevent :to="{ name: 'Vegetale' }"
              >{{$t('Titre.Galerie.Vegetale')}}</b-dropdown-item
            >
            <b-dropdown-item v-on:click.prevent :to="{ name: 'Eau' }"
              >{{$t('Titre.Galerie.Eau')}}</b-dropdown-item
            >
            <b-dropdown-item v-on:click.prevent :to="{ name: 'Jardin' }"
              >{{$t('Titre.Galerie.Jardin')}}</b-dropdown-item
            >
            <b-dropdown-item v-on:click.prevent :to="{ name: 'Noir' }"
              >{{$t('Titre.Galerie.Noir')}}</b-dropdown-item
            >
          </b-nav-item-dropdown>
          <router-link
            v-on:click.prevent
            :to="{ name: 'Contact' }"
            class="nav-item nav-link"
            active-class="active"
          >Contact 
          </router-link>
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