import {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios';
import { fromPromise } from 'rxjs/internal-compatibility';
import { map } from 'rxjs/operators';

export default abstract class HttpProvider {
  private httpInstance: AxiosInstance;

  protected constructor(instance: AxiosInstance) {
    this.httpInstance = instance;
  }

  protected request<T>(config: AxiosRequestConfig) {
    return fromPromise(this.httpInstance(config))
      .pipe(
        map((response: AxiosResponse<T>) => response.data)
      );
  }
}