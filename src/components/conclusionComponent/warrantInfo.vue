<template>
	<div class="pawnmain">
		<dl>
			<dt>权证下发人:</dt>
			<dd>{{warrant_user_name}}</dd>
		</dl>
		<dl>
			<dt>核心备注：</dt>
			<dd>{{warrant_comment}}</dd>
		</dl>
	</div>
</template>
<script>
export default {
	props: ['warrant_user_name','warrant_comment']
}
</script>