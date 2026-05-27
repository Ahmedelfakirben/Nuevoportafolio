<script setup lang="ts">
import Button from "./Button.vue";
import { locale } from "../i18n/store";
import { changeLocale } from "../i18n/utils/locale";
import { LOCALES } from "../i18n/constants";
import type { Locale } from "../i18n/types";

const handleLangSwitch = () => {
  const localesKeys = Object.keys(LOCALES) as Locale[];
  const currentIndex = localesKeys.indexOf(locale.value || "en");
  const nextIndex = (currentIndex + 1) % localesKeys.length;
  changeLocale(localesKeys[nextIndex] as Locale);
};
</script>

<template>
  <Button
    variant="border"
    size="sm"
    @click="handleLangSwitch"
    data-cursor="circle-white"
    data-sound="click"
    data-hoversound="hover"
    >{{ locale ? locale.toUpperCase() : "EN" }}</Button
  >
</template>
