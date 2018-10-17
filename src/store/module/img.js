const state = {
	imgList:[]
};
import {
	getImgList
} from '@/api/index.js';

const mutations = {	
	updateList(state,payload){
		state.imgList = payload;
		console.log(payload)
	}
};

const actions = {	
	getImgList:({commit},val)=>{
		getImgList(val).then(res=>{
			commit("updateList",res.data)
		})
	}
};

const getters = {

};

export default {
	namespaced: true,
	state,
	mutations,
	actions
};