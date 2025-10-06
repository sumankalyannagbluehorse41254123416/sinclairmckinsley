import axios from "axios";
import crypto from "crypto";

interface FetchAboutDataParams {
  host?: string;
  [key: string]: any;
}

interface ApiResponse {
  success?: boolean;
  data?: any;
  [key: string]: any;
}

export async function aboutFetchData(uid: string): Promise<ApiResponse> {
  const baseUrl = "https://cms.admin.tezcommerce.com:3340/api/client";
  const timeStamp = Date.now();

  const key = process.env.API_KEY;
  const secret = process.env.API_SECRET;

  if (!key || !secret) {
    throw new Error("Missing API_KEY or API_SECRET");
  }

  const body = { timestamp: timeStamp };
  const payload = Buffer.from(JSON.stringify(body)).toString();
  const signature = crypto
    .createHmac("sha256", secret)
    .update(payload)
    .digest("hex");

  const headers = {
    "X-AUTH-APIKEY": key,
    "X-AUTH-SIGNATURE": signature,
    "X-AUTH-TIMESTAMP": timeStamp.toString(),
    "Content-Type": "application/json",
    "x-host": "localhost:3000",
  };

  const response = await axios.get(`${baseUrl}/page/fetch-single-page/${uid}`, {
    headers,
  });
  return response.data;
}
