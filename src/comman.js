import axios from 'axios';
const DEV_URL = process.env.REACT_APP_DEV_URL;

import { notification } from 'antd';

export const openNofi = (type, message, description) => {
   notification[type]({
      message: `${message}`,
      description: `${description}`
   });
};

export async function Get(url, config) {
   return new Promise((resolve, reject) => {
      axios
         .get(DEV_URL + url, config)
         .then((response) => {
            console.log(response);
            if (response.status === 200 && response.data.result !== null) {
               toastt('success');
               return resolve(response.data);
            } else {
               toastt('error');
            }
         })
         .catch((error) => {
            reject(error);
         });
   });
}
export async function Post(url, data, config) {
   return new Promise((resolve, reject) => {
      axios
         .post(DEV_URL + url, data, config)
         .then((response) => {
            return resolve(response);
         })
         .catch((error) => {
            reject(error);
         });
   });
}
