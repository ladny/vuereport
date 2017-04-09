<template>
	<div class="pawnhost">
		
		<span class="pawnhostname" :class="{ pawnhostnamered: type }">{{hostname}}</span>
		<span class="pawnhostdate">{{update}}</span>
	</div>
</template>
<script>
	export default {
		props: ['hostname','update','type']
	}
</script>