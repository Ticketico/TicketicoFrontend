<template>
	<ManageMyProductTab v-if="role == 'admin'" />
	<RegisterNewProductTab v-else-if="role == 'user'" />
</template>

<script setup>
import ManageMyProductTab from "@/components/RegisterOrManageProductTab/ManageMyProductTab.vue";
import RegisterNewProductTab from "@/components/RegisterOrManageProductTab/RegisterNewProductTab.vue";

import { computed } from "vue";

const role = computed(() => {
	return localStorage.getItem("myRole");
});
</script>
