<template>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="secondary">
        <b-navbar-brand id="ycLogo" href="/">Yann Crochet</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="/biographie">Biographie</b-nav-item>
            <b-nav-item href="/actualites">Actualités</b-nav-item>
            <b-nav-item href="/galeries">Galeries</b-nav-item>
            <b-nav-item-dropdown text="Galeries" right>
              <b-dropdown-item href="/galeries/foret">L'appel de la forêt</b-dropdown-item>
              <b-dropdown-item href="/galeries/microcosmos">Microcosmos</b-dropdown-item>
              <b-dropdown-item href="/galeries/vegetale">Féérie végétale</b-dropdown-item>
              <b-dropdown-item href="/galeries/eau">Au fil de l'eau</b-dropdown-item>
              <b-dropdown-item href="#">Jardin d'Eden</b-dropdown-item>
              <b-dropdown-item href="#">Noir et blanc</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item href="#">Contact</b-nav-item>
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