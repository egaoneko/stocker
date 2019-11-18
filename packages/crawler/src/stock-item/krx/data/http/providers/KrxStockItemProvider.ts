import { AxiosInstance } from 'axios';
import HttpProvider from '@stocker/core/lib/data/http/providers/HttpProvider';

export default class KrxStockItemProvider extends HttpProvider {

  constructor(instance: AxiosInstance) {
    super(instance);
  }
}