<template>
	<div class="my-plugin-container">
		<h3>sdfdsfsdfd                    ue!</h3>
		<p>水电费水电费士大夫.</p>
		<p>The current count is: {{ count }}</p>
		<button @click="increment">Increment</button>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);

function increment() {
	count.value++;
}
</script>
