import { AxiosError } from "axios";
import { format } from "util";
import { IRpcRequest } from "./client";

/**
 *
 * @param e AxiosError instance https://github.com/axios/axios#handling-errors
 * @param url request path
 * @param reqData request data
 */
export const HandleError = (
  e: AxiosError,
  url: string,
  reqData?: IRpcRequest
): string => {
  const { response, message } = e;
  const req: string = format("%s => %O", url, reqData);

  if (response !== void 0) {
    // Catch non-200 error
    const status = response.status;
    const data = format("%O", response.data);
    return `JSONRPC Response ${status} Error.\nReason: ${message}\nReqData: ${req}\nRespData: ${data}`;
  }

  return `JSONRPC Request Error: \nReason:${message}\nReqData: ${req}`;
};