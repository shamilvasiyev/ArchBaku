import { get, post } from "./request";

// GET Data

console.log(import.meta.env.VITE_BASE_URL);

export const getProjects = () =>
  get(`${import.meta.env.VITE_BASE_URL}/projects`);

export const getProjectWithLimit = () =>
  get(`${import.meta.env.VITE_BASE_URL}/projects?_limit=5`);

export const getProjectDetail = (id) =>
  get(`${import.meta.env.VITE_BASE_URL}/projects/${id}`);

export const getTechnics = () =>
  get(`${import.meta.env.VITE_BASE_URL}/technics`);

export const getNews = () => get(`${import.meta.env.VITE_BASE_URL}/news`);

export const getNewsWithLimit = () =>
  get(`${import.meta.env.VITE_BASE_URL}/news?_limit=5`);

export const getNewDetail = (id) =>
  get(`${import.meta.env.VITE_BASE_URL}/news/${id}`);

export const getVacancies = () =>
  get(`${import.meta.env.VITE_BASE_URL}/vacancies`);

export const getWorkers = () => get(`${import.meta.env.VITE_BASE_URL}/workers`);

// Post Data

export const sendMessage = (data) =>
  post(`${import.meta.env.VITE_BASE_URL}/messages`, data);
