import axios from 'axios';
import { toast } from 'react-hot-toast';

const contactsAPI = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  contactsAPI.defaults.headers.common['Authorization'] = token;
};
export const dellToken = () => {
  delete contactsAPI.defaults.headers.common['Authorization'];
};

export const getContacts = async () => {
  const res = await contactsAPI.get(`/contacts`);
  const { data } = res;
  return await data;
};

export const addContact = async data => {
  try {
    const res = await contactsAPI.post(`/contacts`, data);
    return await res;
  } catch (error) {
    return toast.error('error!', error);
  }
};

export const deleteContact = async id => {
  try {
    const res = await contactsAPI.delete(`/contacts/${id}`);
    return await res;
  } catch (error) {
    return toast.error('error!', error);
  }
};

export const signUp = async body => {
  const res = await contactsAPI.post('/users/signup', body);
  const { data } = res;
  console.log('signup', data);
  return data;
};

export const logIn = async body => {
  const res = await contactsAPI.post('/users/login', body);
  const { data } = res;
  console.log('login', data);
  setToken(`Bearer ${data.token}`);
  return data;
};

export const logOut = async () => {
  const res = await contactsAPI.post('/users/logout');
  const { data } = res;
  console.log('logOut', data);
  dellToken();

  return data;
};
