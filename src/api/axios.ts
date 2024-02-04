import axios, { AxiosError } from "axios";
import { API_URL } from "../constants.ts";

const axiosApi = axios.create({
  baseURL: API_URL, // localhost:8080
});

export default axiosApi;

async function fetchData(url: string) {
  console.log(API_URL);
  try {
    const response = await axiosApi.get(url);
    const { status, statusText, data } = response;

    if (statusText !== "OK" || status !== 200) {
      throw { message: statusText, statusCode: status };
    }

    return { status, statusText, data };
  } catch (err: unknown) {
    const error = err as AxiosError;
    console.error("Error fetching data:", error.message);
    throw error;
  }
}

const fetchWithFormSubmission = async (url: string, formData: unknown) => {
  try {
    const headers = { "Content-Type": "application/json" };
    const { status, statusText, data } = await axiosApi.post(url, formData, {
      headers,
    });

    if (statusText !== "OK" || status !== 200) {
      throw { message: statusText, statusCode: status };
    }

    return { status, statusText, data };
  } catch (err: unknown) {
    const error = err as AxiosError;
    console.error("Error fetching data:", error.message);
    throw error;
  }
};

const fetchWithAuth = async (url: string, token: string) => {
  try {
    const headers = { Authorization: `Bearer ${token}` };
    const response = await axiosApi.get(url, { headers });
    const { status, statusText, data } = response;

    if (statusText !== "OK" || status !== 200) {
      throw { message: statusText, statusCode: status };
    }

    return { status, statusText, data };
  } catch (err: unknown) {
    const error = err as AxiosError;
    console.error("Error fetching data:", error.message);
    throw error;
  }
};

async function fetchWithFormSubmissionAndAuth(
  url: string,
  formData: unknown,
  token: string,
) {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    const response = await axiosApi.post(url, JSON.stringify(formData), {
      headers,
    });
    const { status, statusText, data } = response;

    if (statusText !== "OK" || status !== 200) {
      throw { message: statusText, statusCode: status };
    }

    return { status, statusText, data };
  } catch (err: unknown) {
    const error = err as AxiosError;
    console.error("Error fetching data:", error.message);
    throw error;
  }
}

async function createData(url: string, formData: unknown, token: string) {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    const response = await axiosApi.post(url, formData, { headers });
    const { status, statusText, data } = response;

    if (statusText !== "Created" || status !== 201) {
      throw { message: statusText, statusCode: status };
    }

    return { status, statusText, data };
  } catch (err: unknown) {
    const error = err as AxiosError;
    console.error("Error fetching data:", error.message);
    throw error;
  }
}

function updateData() {}

function deleteData() {}

export {
  fetchData,
  fetchWithAuth,
  fetchWithFormSubmission,
  fetchWithFormSubmissionAndAuth,
  createData,
  updateData,
  deleteData,
};
