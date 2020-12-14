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
            <li>Un titre, min 3 charactères</li>
            <li>Une photo</li>
            <li>Un texte min 30 charactères</li>
          </ul>
          Il ne te reste pus qu'a cliquer sur publier (la date se remplie automatiquement)
        </b-card-text>
        <template #footer>
          <small class="text-muted"
            ><a href="#" @click="photoIsClick">Créer photo du mois</a></small
          >
        </template>
      </b-card>

      <b-card title="Galerie" img-src="" img-alt="Image" img-top>
        <b-card-text>
          Là tu peux manager les galeris, ainsi que les différentes photo les
          composants
        </b-card-text>
        <template #footer>
          <small class="text-muted"><a href="#">Gérer les galeries</a></small>
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
  },
};
</script>

<style>
</style>