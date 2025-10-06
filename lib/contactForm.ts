"use server";
// "use server";
import axios from "axios";
import crypto from "crypto";

interface FetchParams {
  host?: string;
  [key: string]: any;
}

interface ApiResponse {
  success?: boolean;
  data?: any;
  [key: string]: any;
}

const baseUrl = "https://cms.admin.tezcommerce.com:3340/api/client";
const key = "703f8997af5111dc2d46ef10e029310aaa537cedbee3b17a";
const secret =
  "fb01bbd83f372b8a8fa3c17526e887ae502729b78d94839d8a3fb2aa58a2965e";

/**
 * Generate headers with proper HMAC signature
 */
function generateHeaders(
  timeStamp: number,
  body: any = "",
  host?: string,
  extraHeaders?: Record<string, string>
) {
  // const payload =
  //   typeof body === "string" ? body : body ? JSON.stringify(body) : "";

  // Correct signature: timestamp + payload
  const dataToSign = { timestamp: timeStamp };
  const payload = Buffer.from(JSON.stringify(dataToSign)).toString();
  const signature = crypto
    .createHmac("sha256", secret)
    .update(payload)
    .digest("hex");

  return {
    ...extraHeaders,
    "X-AUTH-APIKEY": key,
    "X-AUTH-SIGNATURE": signature,
    "X-AUTH-TIMESTAMP": timeStamp,
    "Content-Type": "application/json",
    "x-host": host || "localhost:3000",
  };
}

/**
 * GET form fields
 */
export async function fetchContact(
  { host, ...rh }: FetchParams,
  uid: string
): Promise<ApiResponse> {
  const timeStamp = Math.floor(Date.now());
  const headers = generateHeaders(timeStamp, "", host, rh);

  try {
    const response = await axios.get(`${baseUrl}/form/fields/${uid}`, {
      headers,
    });
    return response.data;
  } catch (error: any) {
    console.error("Fetch form fields error:", {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
    });
    throw new Error("Failed to fetch form fields.");
  }
}

export async function submitFormData(
  { host, ...rh }: FetchParams,
  uid: string,
  formData: Record<string, any>
): Promise<ApiResponse> {
  const timeStamp = Math.floor(Date.now());
  const headers = generateHeaders(timeStamp, formData, host, rh);

  try {
    const response = await axios.post(
      `${baseUrl}/form/submit/${uid}`,
      formData,
      { headers }
    );
    return response.data;
  } catch (error: any) {
    console.error("Form submission error:", {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
    });
    throw new Error("Failed to submit form.");
  }
}
