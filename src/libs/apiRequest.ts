import toast from "react-hot-toast";
import api from "./api";

/* eslint-disable @typescript-eslint/no-explicit-any */
type ApiRequestParams = {
  method: "get" | "post" | "put" | "delete";
  url: string;
  data?: any;
  config?: any;
  showSuccessToast?: boolean;
  showErrorToast?: boolean;
};

export const apiRequest = async <T = any>({
  method,
  url,
  data,
  config,
  showSuccessToast = false,
  showErrorToast = true,
}: ApiRequestParams): Promise<{
  data: T;
  success: boolean;
  message: string;
}> => {
  try {
    const response = await api.request({
      method,
      url,
      data,
      ...config,
    });

    const { data: resData, success, message } = response.data;

    if (success && showSuccessToast) {
      toast.success(message || "Success");
    }

    return { data: resData, success, message };
  } catch (error: any) {
    console.log("cstching stuff", error?.Response);
    const errorMessage =
      error.response?.data?.message || error.message || "Something went wrong";
    if (showErrorToast) {
      toast.error(errorMessage);
    }
    throw error.response?.data || error;
  }
};
