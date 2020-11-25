<template>
    <div class="container m-t-md">
      <b-card-group deck>
        <b-card
          v-for="(card, index) in cards"
          :key="index"
          :img-src="card.src"
          img-alt="Card image"
          img-top
        >
          <b-card-text>
            {{ card.text }}
            <br/><br/>
            <h5 class="card-title">{{ card.title }}</h5>
          </b-card-text>
          <template #footer>
            <em
              ><a :href="card.link">
                {{ card.linkText }}
              </a></em
            >
          </template>
        </b-card>
      </b-card-group>
    </div>
</template>

<script>
export default {
    name:'CalendrierDeckCard',
    props:{
      cards: Object

    }
}
</script>

<style>

</style>