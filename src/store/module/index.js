const state = {
	bandList: [],
	letters: [],
	carList: [],
	brandId:"",
	brandCar:[],
	isShowList:false
};
import {
	getBrandList,
	getMakeList
} from '@/api/index.js';

import {
	mergeCar,
	sortCar,
	filter
}from '@/utils/index.js'

const mutations = {
	updataBand(state, payload){
		state.bandList = payload;
	},
	updataMake(state, payload) {
		state.makeList = payload;
	},
	initState: (state, payload)=>{
        // 把车型数据处理一下
        let letters = [];
        payload.forEach((item)=>{
        	let spell = item.Spelling[0];
            if (letters.indexOf(spell) === -1){
                letters.push(spell);
            }
        });
        state.letters = letters;
    },
    updataCar:(state,payload)=>{
    	state.brandId = payload.id;
    	state.carList = payload.data;
    	state.isShowList = true
    },
    updataCarShow:(state,payload)=>{
    	state.isShowList = false
    }
};

const actions = {
	getBand({commit}){
		getBrandList().then(res => {
			commit('updataBand', res.data);
		});
	},
	getMake({commit}){
		getMakeList().then(res => {
			commit('updataMake', res.data);
		});
	},
	initState: ({commit}, payload)=>{
		getBrandList().then(body=>{
			if (body.code == 1){
				commit('initState', body.data);
			}else{
				alert(body.msg);
			}
		})
	},
	getCar({commit, state},payload){
		getMakeList(payload).then(res => {
			commit('updataCar', {
				id:payload,
				data:res.data
			});
		});
	},
	getShow({commit}){
		commit('updataCarShow');
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