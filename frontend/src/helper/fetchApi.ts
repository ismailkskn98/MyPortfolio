import type { ErrorResponse, SuccessResponse } from "@/types";

const BASE_URL_API = process.env.NEXT_PUBLIC_BASE_URL_API;

export const fetchApi = async <T>(url: string, cache: "force-cache" | "no-cache" = "force-cache", method: string = "GET"): Promise<T | string> => {
  try {
    const response = await fetch(`${BASE_URL_API}/${url}`, { method, cache });

    if (!response.ok) {
      const responseData: ErrorResponse = await response.json();
      console.log(responseData);
      return `Beklenmedik bir hata oluştu. Lütfen daha sonra tekrar deneyiniz veya yöneticiye başvurunuz. ${responseData.message}`;
    }
    const responseData: SuccessResponse<T> = await response.json();
    if (responseData.error) {
      console.log(responseData);
      return "Beklenmedik bir hata oluştu. Lütfen daha sonra tekrar deneyiniz veya yöneticiye başvurunuz.";
    }
    return responseData.data;
  } catch (error) {
    return "Beklenmedik bir hata oluştu. Lütfen daha sonra tekrar deneyiniz veya yöneticiye başvurunuz.";
  }
};
