<template>
	<div class="img">
		<div class="img-top">
			<p>颜色</p>
			<p>车款</p>
		</div>	
	</div>
</template>

<script>
	import { mapState, mapActions } from "vuex";
	export default {
		name: 'Detail',
		data () {
			return {

			}
		},
		computed:{
			...mapState({
				imgList: (state) => state.img.imgList
			})
		},
		methods:{
			...mapActions({
				getImgList:"img/getImgList"
			})
		},
		mounted(){
			this.getImgList(this.$route.query.serialID)
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.img{
		width: 100%;
		height: .8rem;
	}
	.img-top{
		width: 100%;
		display: flex;
	}
	.img-top p{
		text-align: center;
		flex: 1;
	    display: inline-block;
	    vertical-align: middle;
	    font-size: .28rem;
		line-height: .8rem;
	}
	.img-top p:after{
		content: "";
	    display: inline-block;
	    padding-top: .16rem;
	    padding-right: .16rem;
	    border-top: 2px solid #ccc;
	    border-right: 2px solid #ccc;
	    -webkit-transform: rotate(135deg);
	    transform: rotate(135deg);
	    margin-left: .2rem;
	    vertical-align: 5%;
	}
</style>
