export type errorMessage = {
  message: string;
  error: boolean;
  success: boolean;
};

const BASE_URL_API = process.env.NEXT_PUBLIC_BASE_URL_API;

export const homeAPI = async (
  url: string,
  params?: string | number,
  method: string = "GET",
  body?: object
) => {
  try {
    const response = await fetch(`${BASE_URL_API}/${url}${params ? `/${params}` : ""}`, {
      method,
      body: body ? JSON.stringify(body) : undefined,
      headers: body ? { "Content-Type": "application/json" } : {},
    });

    if (!response.ok) {
      const errorData: errorMessage = await response.json();
      throw new Error(errorData.message || "Beklenmedik bir hata oluştu.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return error.message;
    } else {
      return "Beklenmedik bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.";
    }
  }
};
