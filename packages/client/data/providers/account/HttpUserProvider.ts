import { AxiosInstance } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import User from '@stocker/core/lib/domain/entities/account/User';
import HttpProvider from '@stocker/core/lib/data/providers/HttpProvider';
import { API_SEVER } from '../../../constant/common';

export default class HttpUserProvider extends HttpProvider {

  constructor(instance: AxiosInstance) {
    super(instance);
  }

  public createUser(user: User): Observable<boolean> {
    return this.request<{ created: boolean }>({
      method: 'POST',
      url: API_SEVER + '/accounts/users',
      data: {
        id: user.id,
      },
    })
      .pipe(
        map(({ created }: { created: boolean }): boolean => {
          return created;
        })
      );
  }
}
