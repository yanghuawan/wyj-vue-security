import axios from 'axios';
import qs from 'qs';

let base = '';

export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };

//用户管理
export const getUserListPage = params => { return axios.post(`/remote/user/list`, qs.stringify(params)); };

export const removeUser = params => { return axios.post(`/remote/user/remove`, qs.stringify(params)); };

export const editUser = params => { return axios.get(`/remote/user/`+params); };

export const addUser = params => { return axios.post(`/remote/user/add`, qs.stringify(params)); };

//数据分组
export const getDataGroupListPage = params => { return axios.post(`/remote/dataGroup/list`, qs.stringify(params)); };

export const addDataGroup = params => { return axios.post(`/remote/dataGroup/add`, params); };

export const removeDataGroup = params => { return axios.post(`/remote/dataGroup/remove`, qs.stringify(params)); };


//数据字典
export const getDataDictListPage = params => { return axios.post(`/remote/dataDict/list`, qs.stringify(params)); };

export const addDataDict = params => { return axios.post(`/remote/dataDict/add`, qs.stringify(params) ); };

export const removeDataDict = params => { return axios.post(`/remote/dataDict/remove`, qs.stringify(params)); };

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//获取下拉框数据源 
export const getData = params => {return  axios.get(`/remote/dataDict/getData`, { params }); };

export const getDataStore = url => {    
	var dataStore;
    $.ajax({
        dataType : 'json',
        type : 'get',
        url : url,
        async : false,
        success : function(data) {
            dataStore = data;
        }
    });
    return dataStore;
};