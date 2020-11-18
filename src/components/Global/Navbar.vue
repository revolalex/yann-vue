<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="secondary">
      <b-navbar-brand id="ycLogo" :to="{ name: 'Home' }"
        >Yann Crochet</b-navbar-brand
      >
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link
            to="Biographie"
            class="nav-item nav-link"
            active-class="active"
            exact
          >
            Biographie
          </router-link>
          <router-link
            to="Actualites"
            class="nav-item nav-link"
            active-class="active"
            exact
          >
            Actualites
          </router-link>
          <router-link
            to="Galeries"
            class="nav-item nav-link"
            active-class="active"
            exact
          >
            Galeries
          </router-link>
          <b-nav-item-dropdown text="Galeries" right>
            <b-dropdown-item :to="{ name: 'Foret' }"
              >L'appel de la forêt</b-dropdown-item
            >
            <b-dropdown-item :to="{ name: 'Microcosmos' }"
              >Microcosmos</b-dropdown-item
            >
            <b-dropdown-item :to="{ name: 'Vegetale' }"
              >Féérie végétale</b-dropdown-item
            >
            <b-dropdown-item :to="{ name: 'Eau' }"
              >Au fil de l'eau</b-dropdown-item
            >
            <b-dropdown-item :to="{ name: 'Jardin' }"
              >Jardin d'Eden</b-dropdown-item
            >
            <b-dropdown-item :to="{ name: 'Noir' }"
              >Noir et blanc</b-dropdown-item
            >
          </b-nav-item-dropdown>
          <router-link
            to="Contact"
            class="nav-item nav-link"
            active-class="active"
            exact
          >
            Contact
          </router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
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