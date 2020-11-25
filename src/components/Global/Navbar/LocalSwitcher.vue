<template>
  <!-- <div class="locale-switcher">🌐 {{$i18n.locale}}</div> -->
  <div class="locale-switcher">
    <select v-model="$i18n.locale">
      <option value="fr">🇫🇷 FR</option>
      <option value="en">🇬🇧 GB</option>
      <option value="es">🇪🇸 ES</option>
      <option value="de">🇩🇪 DE</option>
      <option value="zh_CN">🇨🇳 CN</option>
      <option value="ru">🇷🇺 RU</option>
    </select>
  </div>
</template>


<script>
/**
 * @module component - LocalSwitcher
 */
export default {
  name: "LocalSwitcher",
};
</script>

<style>
</style>