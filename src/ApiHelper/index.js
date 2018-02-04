import Api from "./Api";
import { BASE_URL, TOKEN } from "../Constants";

const searchUrl = `${BASE_URL}/v2/mf/search/`;

export default class ApiHelper {
  static search(params) {
    return Api.post(searchUrl, TOKEN, params).then(res => {
      console.log(res);
      return res;
    });
  }
}
