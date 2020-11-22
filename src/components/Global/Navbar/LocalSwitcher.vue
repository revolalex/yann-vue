<template>
  <!-- <div class="locale-switcher">🌐 {{$i18n.locale}}</div> -->
  <div class="locale-switcher">🌐 {{$i18n.locale}}
    <select v-model="$i18n.locale">
      <option value="en"><img id="langFlag" src="@/assets/gb.png"/>GB</option>
      <option value="fr"><img src="@/assets/fr.png"/>FR</option>
    </select>
  </div>

</template>


<script>
export default {
    name:"LocaleSwitcher"
}
</script>

<style>
#langFlag{
  width:50px;
}

</style>