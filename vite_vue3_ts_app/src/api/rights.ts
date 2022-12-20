import request from '../utils/request';

let getRights = (type: string) => request(`rights/${type}`, 'GET');

export {
    getRights,
}
