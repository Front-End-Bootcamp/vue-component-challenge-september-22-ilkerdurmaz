<script setup>
import { ref } from 'vue';
import data from '../assets/data/data.json'
import { getGroupNames } from '../utils/groupParsers'
import GroupDetails from './GroupDetails.vue';

const groupNames = getGroupNames(data)
const selectedGroupName = ref('Orchid')

function clickHandler(groupName) {
	selectedGroupName.value = groupName
}

</script>
	
<template>

	<div class="flex flex-col">
		<div
			class="font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
			<ul class="flex flex-wrap -mb-px">
				<li class="mr-2" v-for="groupName in groupNames">
					<span class="tab" @click="clickHandler(groupName)"
						:class="[selectedGroupName===groupName?'tabActive':'tabPassive']">
						{{groupName}}</span>
				</li>
			</ul>
		</div>
		<div class="w-auto border border-t-0 border-gray-200 dark:border-gray-700">
			<GroupDetails :groupName='selectedGroupName' />
		</div>
	</div>

</template>
	
<style scoped lang="postcss">
.tab {
	@apply inline-block p-4 rounded-t-lg border-b-2 border-transparent
}

.tabActive {
	@apply border-blue-600 text-blue-500
}

.tabPassive {
	@apply hover:text-gray-600 hover:text-gray-300 hover:border-gray-300 cursor-pointer
}
</style>
	