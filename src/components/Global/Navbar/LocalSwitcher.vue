<template>
  <div class="locale-switcher">
    <select v-model="$i18n.locale">
      <option value="fr">🇫🇷</option>
      <option value="en">🇬🇧</option>
      <option value="es">🇪🇸</option>
      <option value="de">🇩🇪</option>
      <option value="zh_CN">🇨🇳</option>
      <option value="ru">🇷🇺</option>
      <option value="ja">🇯🇵</option>
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