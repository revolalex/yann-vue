<template>
  <div class="container m-t-md" data-test="deckCard">
    <b-card-group deck>
      <b-card
        v-for="(card, index) in cards"
        :key="index"
        :img-src="card.src"
        img-alt="Card image"
        img-top
        :title="card.title"
      ><small class="text-muted">{{card.small}}</small><hr/>
        <b-card-text>
          {{ card.text }}
        </b-card-text>
        <template #footer>
          <em>
            <a :href="card.link">{{ card.linkText }}</a>
          </em>
        </template>
        
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
/**
 * @module component - DeckCard
 * @param {array} - cards
 */
export default {
  name: "DeckCard",
  props: {
    cards: Array,
  },
};
</script>

<style>
</style>