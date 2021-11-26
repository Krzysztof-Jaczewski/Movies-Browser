import axios from "axios";

export const getAPI = async (url) => (await axios.get(url)).data;
