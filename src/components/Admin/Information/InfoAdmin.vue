<template>
  <div>
    <b-card-group deck>
      <b-card
        title="Photo du mois"
        img-src="https://yanncrochet.com/photo/adminMoisPhoto.png"
        img-alt="Image"
        img-top
      >
        <b-card-text>
          La photo du mois doit avoir:
          <ul>
            <li>Un titre: min 3 charactères, max 50</li>
            <li>Une photo max 1.5 mo: jpeg, png, gif</li>
            <li>Un texte: min 30 charactères, max 1000</li>
          </ul>
          Il ne te reste plus qu'a cliquer sur publier
        </b-card-text>
        <template #footer>
          <small class="text-muted"
            ><a href="#" @click="photoIsClick">Créer photo du mois</a></small
          >
        </template>
      </b-card>

      <b-card
        title="Caroussel - Home"
        img-src="https://yanncrochet.com/photo/adminCaroussel.png"
        img-alt="Image"
        img-top
      >
        <b-card-text>
          Permet de gérer les photo du caroussel de la page "home"
          <ul>
            <li>ajouter des photos (max 1.5 mo: jpeg, png, gif)</li>
            <li>supprimer des photos</li>
          </ul>
        </b-card-text>
        <template #footer>
          <small class="text-muted"><a href="#" @click="carousselIsClick">Gérer le caroussel</a></small>
        </template>
      </b-card>

      <b-card
        title="Information"
        img-src="https://picsum.photos/300/300/?image=41"
        img-alt="Image"
        img-top
      >
        <b-card-text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This card has even longer content than the
          first to show that equal height action.
        </b-card-text>
        <template #footer>
          <small class="text-muted"><a href="#">Info</a></small>
        </template>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  name: "InfoAdmin",
  methods: {
    photoIsClick() {
      this.$emit("photoLinkClicked", true);
    },
    carousselIsClick() {
      this.$emit("carousselLinkClicked", true);
    },
  },
};
</script>

<style>
</style>