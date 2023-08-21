import { client } from '../utils/client';
import { userQueryByEmail, userQueryByMobile } from "./clientQuery";


export const getUserByEmail = async (email) => {
    let result
    const query = userQueryByEmail(email);
    
    await client.fetch(query)
    .then((data) => {
        result = data[0];
    })
    return result;
}

export const getUserByMobile = async (mobile) => {
    let result
    const query = userQueryByMobile(mobile);
    
    await client.fetch(query)
    .then((data) => {
        result = data[0];
    })
    return result;
}