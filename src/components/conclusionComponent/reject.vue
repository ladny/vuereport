<template>
	<div class="reject">
		<div class="pawnhead">
		</div>
		<div class="pawnreason pr">
			<div class="pawnreason-person">
				<span class="pawnreason-name">{{ rejectname}}</span>
				<span class="pawnreason-date">{{ rejecttime }}</span>
			</div>
			<div class="pawnreason-person">
				<span class="pawnreason-type">{{ typename}}</span>
			</div>
			 
			<div>
				<dl class="pawnreason-reject">
					<dt class="pawnreject-name">驳回负责人:</dt>
					<dd class="pawnreject-txt">{{ dotype }} - {{ doname }}</dd>
				</dl>
				<dl class="pawnreason-reject">
					<dt class="pawnreject-name">驳回原因：</dt>
					<dd class="pawnreject-txt">{{reason}}</dd>
				</dl>
				<dl class="pawnreason-reject">
					<dt class="pawnreject-name">核心备注:</dt>
					<dd class="pawnreject-txt">{{comment}}</dd>
				</dl>
			</div>
			<div class="squarebg bgsquare" :class="type"></div>
		</div>
		<div class="pawnreason-border"></div>
	</div>
</template>
<script>
export default {
	props: ['rejectname','rejecttime','reason','type','typename','comment','dotype','doname']
}

</script>

