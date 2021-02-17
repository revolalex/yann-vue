<template>
  <div class="portraitTexte">
    <h3>{{ $t("Biographie.Second_Title") }}</h3>

    <p>
      {{ $t("Biographie.Portrait.First_paragraph_part1") }}
      {{ $t("Biographie.Portrait.First_paragraph_part2") }}
      {{ $t("Biographie.Portrait.First_paragraph_part3") }}
      {{ $t("Biographie.Portrait.First_paragraph_part4") }}
      {{ $t("Biographie.Portrait.First_paragraph_part5") }}
    </p>

    <p>
      {{ $t("Biographie.Portrait.Second_paragraph_part1") }}
      {{ $t("Biographie.Portrait.Second_paragraph_part2") }}
    </p>

    <p>
      {{ $t("Biographie.Portrait.Third_paragraph") }}
    </p>

    <p>
      {{ $t("Biographie.Portrait.Fourth_paragraph") }}
    </p>
    <div id="quote">
      <p>{{ $t("Biographie.author") }}</p>
    </div>
  </div>
</template>

<script>
/**
 * @module component - PortraitBiographie
 */
export default {
  name: "PortraitBiographie",
};
</script>


<style>
.portraitTexte {
  max-width: 700px;
  padding: 16px;
  margin: 6px;
}
#quote {
  text-align: right;
  font-style: italic;
  font-size: 12px;
}
@media screen and (max-width: 600px) {
  .portraitTexte {
    padding-right: 5vh;
    padding-left: 5vh;
  }
}
</style>