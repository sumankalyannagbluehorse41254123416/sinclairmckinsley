import axios from "axios";
import crypto from "crypto";

interface FetchMenuDataParams {
  host?: string;
  [key: string]: any;
}

interface ApiResponse {
  success?: boolean;
  data?: any;
  [key: string]: any;
}

export async function fetchNavber(
  { host, ...rh }: FetchMenuDataParams,
  uid: string
): Promise<ApiResponse> {
  // const baseUrl = process.env.BASE_URL;
  const baseUrl = "https://cms.admin.tezcommerce.com:3340/api/client";
  const timeStamp = Date.now();

  // const key = process.env.API_KEY;
  // const secret = process.env.API_SECRET;
  const key = "703f8997af5111dc2d46ef10e029310aaa537cedbee3b17a";
  const secret =
    "fb01bbd83f372b8a8fa3c17526e887ae502729b78d94839d8a3fb2aa58a2965e";

  if (!key || !secret) {
    throw new Error("Missing API_KEY or API_SECRET in environment variables");
  }

  const body = { timestamp: timeStamp };
  const payload = Buffer.from(JSON.stringify(body)).toString();
  const signature = crypto
    .createHmac("sha256", secret)
    .update(payload)
    .digest("hex");

  const headers: Record<string, string> = {
    ...rh,
    "X-AUTH-APIKEY": key,
    "X-AUTH-SIGNATURE": signature,
    "X-AUTH-TIMESTAMP": timeStamp.toString(),
    "Content-Type": "application/json",
    "x-host": host || "localhost:3000",
  };

  try {
    const response = await axios.get(`${baseUrl}/menus/${uid}`, { headers });
    // console.log("API Response:", response.data);
    return response.data;
  } catch (error: any) {
    console.error("Fetch error details:", {
      message: error.message,
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data,
    });
    throw new Error("Failed to fetch menu data.");
  }
}
