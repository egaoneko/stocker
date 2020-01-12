import { Observable } from 'rxjs';
import Repository from '../Repository';
import LastBusinessDay from '../../entities/stock/LastBusinessDay';

export default interface StockRepository extends Repository {
  crawlLastBusinessDay(): Observable<LastBusinessDay>;

  // --ADD_METHOD--
}