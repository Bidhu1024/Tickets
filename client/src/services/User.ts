import axios from "axios";
import apiPromise,{INSTANCE_CONFIG,} from "../api/axios";
const instance = axios.create(INSTANCE_CONFIG);
const baseUrl = `/api/users`;
export default class User {
    static loginUser(values: any) {
      return apiPromise(instance, () =>
        instance.post(baseUrl + "/login", values.data)
      );
    }
    static registerUser(values: any) {
      return apiPromise(instance, () =>
        instance.post(baseUrl + "/register", values.data)
      );
    }
}