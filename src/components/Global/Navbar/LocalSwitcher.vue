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
export default {
  name: "LocaleSwitcher",
};
</script>

<style>
</style>