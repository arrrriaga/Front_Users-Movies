import axios from "axios";
const path = `${process.env.REACT_APP_URI_API}/v1/user`;

export const login = async (userInfo) => {
  try {
    const { data } = await axios.post(`${path}/login`, userInfo);
    return data;
  } catch (e) {
    return { error: e.response.data.detalles };
  }
};
