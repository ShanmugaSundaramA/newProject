import axios from "axios";
import config from "../config/Config";

const { apiBaseUrl } = config || {};

class Client {
  post(url, requestBody = null, contentType = "application/json") {
    return axios.post(apiBaseUrl + url, requestBody, {
      headers: {
        contentType: contentType,
      },
    });
  }

  get(url, params, contentType = "application/json") {
    const token = localStorage.getItem("token") || "";
    return axios.get(apiBaseUrl + url, {
      params: { ...params },
      headers: {
        Authorization: `Bearer ${token}`,
        contentType: contentType,
      },
    });
  }

  put(url, requestBody, contentType = "application/json") {
    const params = {};
    return axios.put(apiBaseUrl + url, requestBody, {
      params: { ...params },
      headers: {
        contentType: contentType,
      },
    });
  }

  delete(url, params, contentType = "application/json") {
    return axios.delete(apiBaseUrl + url, {
      params: { ...params },
      headers: {
        contentType: contentType,
      },
    });
  }
}

export default new Client();
