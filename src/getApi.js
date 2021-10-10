import axios from "axios";

export const getApi = async (url) => (await axios.get(url)).data;
