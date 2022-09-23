<script setup>
const props = defineProps(["student"])
</script>
		
<template>
	<span
		class="bg-blue-100 text-blue-800 text-sm font-medium my-1 px-3 py-1.5 rounded dark:bg-blue-200 dark:text-blue-800">{{student}}</span>
</template>
