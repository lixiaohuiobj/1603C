const state = {
	cityList:[],
	cityTwoList:[]
};
import {
	getCityList,
	getCitySecondList
} from '@/api/index.js';

const mutations = {
	updateCity(state,payload){
		state.cityList = payload;
	},
	updateSecondCity(state,payload){
		state.cityTwoList = payload;
		console.log(payload)
	}
};

const actions = {
	getCity:({commit,state})=>{
		getCityList().then(res=>{
			commit("updateCity",res.data)
		})
	},
	getSecondCity:({commit,state},id)=>{
		//console.log(id)
		getCitySecondList(id+1).then(res=>{
			commit("updateSecondCity",res.data)
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