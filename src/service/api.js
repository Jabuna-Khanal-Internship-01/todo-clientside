import http from "../utils/http";
import config from "../config";

const{ api } = config;


export async function createApiCalls(){
    const url = `${api.endpoints.todo}/`;
    const response = await http.get(url);
    return response;
};

export async function deleteApiCalls(id){
    const url = `${api.endpoints.todo}/${id}`;
    const response = await http.delete(url);
    return response;
};

export async function saveTodoApiCalls(toDoText){
    const url = `${api.endpoints.todo}/`;
    const response = await http.post(url,toDoText);
    return response;
};