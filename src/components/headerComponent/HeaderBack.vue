<template>
	<div class="header blue-header">
		<a href="javascript:history.go(-1);" class="header-white-icon"></a>
		<span class="header-back-white">
			{{ header_title }}
		</span>
	</div>
</template>
<script>
	export default {
		props: ['header_title']
	}
</script>