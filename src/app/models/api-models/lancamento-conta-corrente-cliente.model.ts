import { DadoDomicilioBancarioModel } from './dado-domicilio-bancario.models';

export interface LancamentoContaCorrenteClienteModel {
    numeroRemessaBanco: number;
    nomeSituacaoRemessa: string;
    dadosDomicilioBancario: DadoDomicilioBancarioModel;
    nomeTipoOperacao: string;
}
