export type error = {
  message: string;
  error: boolean;
  success: boolean;
};
export type success = {
  data: string;
  error: boolean;
  success: boolean;
};

const BASE_URL_API = process.env.NEXT_PUBLIC_BASE_URL_API;

export const fetchApi = async (
  url: string,
  params?: string | number,
  method: string = "GET",
  cache?: "force-cache" | "no-cache" | "no-store",
  body?: object
) => {
  try {
    const response = await fetch(`${BASE_URL_API}/${url}${params ? `/${params}` : ""}`, {
      method,
      cache,
      body: body ? JSON.stringify(body) : undefined,
      headers: body ? { "Content-Type": "application/json" } : {},
    });

    if (!response.ok) {
      const responseData: error = await response.json();
      throw new Error(responseData.message || "Beklenmedik bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.");
    }
    const responseData: success = await response.json();
    if (responseData.error) {
      throw new Error("Beklenmedik bir hata oluştu. Lütfen daha sonra tekrar deneyiniz veya yöneticiye başvurunuz.");
    }
    return responseData.data;
  } catch (error) {
    if (error instanceof Error) {
      return error.message;
    } else {
      return "Beklenmedik bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.";
    }
  }
};
