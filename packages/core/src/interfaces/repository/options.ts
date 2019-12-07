import { SortType } from '../../enums/repository/options';

export interface Options {
  id?: string;
  page?: number;
  sort?: SortType;
}