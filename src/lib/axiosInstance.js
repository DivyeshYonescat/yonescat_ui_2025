import axios from "axios";
import use from "./use";
import { collectErrors } from "@/api/base";

const axiosInstance = axios.create({
  baseURL: process.env.PUBLIC_BACKEND_URL,
  timeout: 300000, // 5 minutes in milliseconds
});

function normalizeStrapiErrors(error) {
  if (!error.response || !error.response.data) {
    // General error or network issue
    return {
      message: error.message || "An unknown error occurred.",
      status: error.response?.status || null,
    };
  }
  const { status, data } = error.response;
  if (data.error) {
    // Handle Strapi v4+ error structure
    return {
      message: data?.error?.message || "An error occurred.",
      details: data?.error?.details || null,
      status: status,
    };
  } else if (data.message) {
    // Handle Strapi v3 error structure
    const errorDetails = Array.isArray(data.message)
      ? data.message.map((msg) => msg.messages.map((m) => m.message)).flat()
      : [data.message];
    return {
      message: errorDetails.join(", "),
      details: errorDetails,
      status: status,
    };
  } // Fallback for unexpected structures
  return { message: "An error occurred.", status: status };
}

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    if( config.url.includes("auth/local") || config.url.includes("auth/local/register")){
    }else{  
      const token = process.env.AUTH_TOKEN;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }  
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response.config.method === "get"
      ? response.data
      : use.normalize(response.data);
  },
  function (error) {
    const _error = normalizeStrapiErrors(error);
    return Promise.reject(
      collectErrors(_error)
    );
  }
);

export default axiosInstance;
