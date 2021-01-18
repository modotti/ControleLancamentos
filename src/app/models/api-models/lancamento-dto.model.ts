import { TotalControleLancamentoModel } from './total-controle-lancamento.model';
import { ListaControleLancamentoModel } from './lista-controle-lancamento.model';

export interface LancamentoDtoModel {
    totalControleLancamento: TotalControleLancamentoModel;
    listaControleLancamento: ListaControleLancamentoModel[];
    indice: number;
    tamanhoPagina: number;
    totalElements: number;
}
