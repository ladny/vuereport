<template>	
	<div id="mortsuc">
		<div v-title>提交成功</div>
		<resultSuc result_text="抵押通过已领取受理单！" number="4"></resultSuc>
	</div>
</template>
<script type="text/ecmascript-6">
	import resultSuc from '../resultComponent/resultSuc'
	export default {
    	components: {
	      resultSuc
	    }
  }
</script>
