<script setup>
import { ref, watch } from 'vue';
import data from '../assets/data/data.json'
import { getGroup } from '../utils/groupParsers';
import Student from './Student.vue';

const props = defineProps(["groupName"])
const group = ref(getGroup(data, props.groupName))

watch(() => props.groupName, (newGroupName) => {
	group.value = getGroup(data, newGroupName)
})

</script>
	
<template>


	<div class="flex flex-col p-5">

		<p class="text-center text-lg">Assistant</p>
		<hr class="dark:border-gray-500">

		<span
			class="bg-red-100 text-red-800 font-medium px-3 py-2 my-2 rounded dark:bg-red-200 dark:text-red-900">{{group.assistant}}</span>

		<p class="text-center text-lg">Students</p>
		<hr class="mb-1 dark:border-gray-500">

		<div class="flex flex-col">
			<Student v-for="student in group.students" :student="student" />
		</div>

	</div>
</template>
	
	