import { LancamentoContaCorrenteClienteModel } from './lancamento-conta-corrente-cliente.model';

export interface ListaControleLancamentoModel {
    lancamentoContaCorrenteCliente: LancamentoContaCorrenteClienteModel;
    dataEfetivaLancamento: string;
    dataLancamentoContaCorrenteCliente: string;
    numeroEvento: number;
    descricaoGrupoPagamento: string;
    codigoIdentificadorUnico: string;
    nomeBanco: string;
    quantidadeLancamentoRemessa: number;
    numeroRaizCNPJ: string;
    numeroSufixoCNPJ: string;
    valorLancamentoRemessa: number;
    dateLancamentoContaCorrenteCliente: number;
    dateEfetivaLancamento: number;
}
