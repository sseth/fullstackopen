import axios from 'axios';

const baseUrl = '/api/persons';

const create = (newEntry) => {
  return axios.post(baseUrl, newEntry).then((res) => res.data);
};

const getAll = () => {
  return axios.get(baseUrl).then((res) => res.data);
};

const remove = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

const update = (id, number) => {
  return axios.patch(`${baseUrl}/${id}`, { number });
};

const phonebookService = { create, getAll, remove, update };
export default phonebookService;
