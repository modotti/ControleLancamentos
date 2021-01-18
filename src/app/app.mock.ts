import { Server } from 'miragejs';

export class AppMock {

    public static createServer(): void {
        // tslint:disable-next-line:no-unused-expression
        new Server({
            routes(): void {
                this.namespace = '/api';
                this.get('/entries', () => {
                    return {
                        totalControleLancamento: {
                            quantidadeLancamentos: 608,
                            quantidadeRemessas: 32,
                            valorLancamentos: 352387.64
                        },
                        listaControleLancamento: [
                            {
                                lancamentoContaCorrenteCliente: {
                                    numeroRemessaBanco: 64320236054,
                                    nomeSituacaoRemessa: 'Pago',
                                    dadosDomicilioBancario: {
                                        codigoBanco: 123,
                                        numeroAgencia: 1,
                                        numeroContaCorrente: '00000000065470'
                                    },
                                    nomeTipoOperacao: 'regular'
                                },
                                dataEfetivaLancamento: '01/06/2016',
                                dataLancamentoContaCorrenteCliente: '01/06/2016',
                                numeroEvento: 42236790,
                                descricaoGrupoPagamento: 'LA-56',
                                codigoIdentificadorUnico: '1',
                                nomeBanco: 'BANCO ABCD S.A.             ',
                                quantidadeLancamentoRemessa: 22,
                                numeroRaizCNPJ: '12996721',
                                numeroSufixoCNPJ: '1597',
                                valorLancamentoRemessa: 10528.12,
                                dateLancamentoContaCorrenteCliente: 1464922800000,
                                dateEfetivaLancamento: 1464922800000
                            },
                            {
                                lancamentoContaCorrenteCliente: {
                                    numeroRemessaBanco: 64320236054,
                                    nomeSituacaoRemessa: 'Não Pago',
                                    dadosDomicilioBancario: {
                                        codigoBanco: 123,
                                        numeroAgencia: 1,
                                        numeroContaCorrente: '00000000065470'
                                    },
                                    nomeTipoOperacao: 'regular'
                                },
                                dataEfetivaLancamento: '02/06/2016',
                                dataLancamentoContaCorrenteCliente: '02/06/2016',
                                numeroEvento: 42236790,
                                descricaoGrupoPagamento: 'LA-56',
                                codigoIdentificadorUnico: '1',
                                nomeBanco: 'BANCO ABCD S.A.             ',
                                quantidadeLancamentoRemessa: 22,
                                numeroRaizCNPJ: '12996721',
                                numeroSufixoCNPJ: '1597',
                                valorLancamentoRemessa: 13821.41,
                                dateLancamentoContaCorrenteCliente: 1464922800000,
                                dateEfetivaLancamento: 1464922800000
                            },
                            {
                                lancamentoContaCorrenteCliente: {
                                    numeroRemessaBanco: 64320236054,
                                    nomeSituacaoRemessa: 'Pago',
                                    dadosDomicilioBancario: {
                                        codigoBanco: 123,
                                        numeroAgencia: 1,
                                        numeroContaCorrente: '00000000065470'
                                    },
                                    nomeTipoOperacao: 'regular'
                                },
                                dataEfetivaLancamento: '03/06/2016',
                                dataLancamentoContaCorrenteCliente: '03/06/2016',
                                numeroEvento: 42236790,
                                descricaoGrupoPagamento: 'LA-56',
                                codigoIdentificadorUnico: '1',
                                nomeBanco: 'BANCO ABCD S.A.             ',
                                quantidadeLancamentoRemessa: 22,
                                numeroRaizCNPJ: '12996721',
                                numeroSufixoCNPJ: '1597',
                                valorLancamentoRemessa: 9457.44,
                                dateLancamentoContaCorrenteCliente: 1464922800000,
                                dateEfetivaLancamento: 1464922800000
                            },
                            {
                                lancamentoContaCorrenteCliente: {
                                    numeroRemessaBanco: 64320236054,
                                    nomeSituacaoRemessa: 'Pago',
                                    dadosDomicilioBancario: {
                                        codigoBanco: 123,
                                        numeroAgencia: 1,
                                        numeroContaCorrente: '00000000065470'
                                    },
                                    nomeTipoOperacao: 'regular'
                                },
                                dataEfetivaLancamento: '04/06/2016',
                                dataLancamentoContaCorrenteCliente: '04/06/2016',
                                numeroEvento: 42236790,
                                descricaoGrupoPagamento: 'LA-56',
                                codigoIdentificadorUnico: '1',
                                nomeBanco: 'BANCO ABCD S.A.             ',
                                quantidadeLancamentoRemessa: 22,
                                numeroRaizCNPJ: '12996721',
                                numeroSufixoCNPJ: '1597',
                                valorLancamentoRemessa: 11741.96,
                                dateLancamentoContaCorrenteCliente: 1464922800000,
                                dateEfetivaLancamento: 1464922800000
                            },
                            {
                                lancamentoContaCorrenteCliente: {
                                    numeroRemessaBanco: 64320236054,
                                    nomeSituacaoRemessa: 'Pago',
                                    dadosDomicilioBancario: {
                                        codigoBanco: 123,
                                        numeroAgencia: 1,
                                        numeroContaCorrente: '00000000065470'
                                    },
                                    nomeTipoOperacao: 'regular'
                                },
                                dataEfetivaLancamento: '05/06/2016',
                                dataLancamentoContaCorrenteCliente: '05/06/2016',
                                numeroEvento: 42236790,
                                descricaoGrupoPagamento: 'LA-56',
                                codigoIdentificadorUnico: '1',
                                nomeBanco: 'BANCO ABCD S.A.             ',
                                quantidadeLancamentoRemessa: 22,
                                numeroRaizCNPJ: '12996721',
                                numeroSufixoCNPJ: '1597',
                                valorLancamentoRemessa: 10945.75,
                                dateLancamentoContaCorrenteCliente: 1464922800000,
                                dateEfetivaLancamento: 1464922800000
                            },
                            {
                                lancamentoContaCorrenteCliente: {
                                    numeroRemessaBanco: 64320236054,
                                    nomeSituacaoRemessa: 'Não Pago',
                                    dadosDomicilioBancario: {
                                        codigoBanco: 123,
                                        numeroAgencia: 1,
                                        numeroContaCorrente: '00000000065470'
                                    },
                                    nomeTipoOperacao: 'regular'
                                },
                                dataEfetivaLancamento: '06/06/2016',
                                dataLancamentoContaCorrenteCliente: '06/06/2016',
                                numeroEvento: 42236790,
                                descricaoGrupoPagamento: 'LA-56',
                                codigoIdentificadorUnico: '1',
                                nomeBanco: 'BANCO ABCD S.A.             ',
                                quantidadeLancamentoRemessa: 22,
                                numeroRaizCNPJ: '12996721',
                                numeroSufixoCNPJ: '1597',
                                valorLancamentoRemessa: 8753.95,
                                dateLancamentoContaCorrenteCliente: 1464922800000,
                                dateEfetivaLancamento: 1464922800000
                            },
                            {
                                lancamentoContaCorrenteCliente: {
                                    numeroRemessaBanco: 64320236054,
                                    nomeSituacaoRemessa: 'Indisponível',
                                    dadosDomicilioBancario: {
                                        codigoBanco: 123,
                                        numeroAgencia: 1,
                                        numeroContaCorrente: '00000000065470'
                                    },
                                    nomeTipoOperacao: 'regular'
                                },
                                dataEfetivaLancamento: '07/06/2016',
                                dataLancamentoContaCorrenteCliente: '07/06/2016',
                                numeroEvento: 42236790,
                                descricaoGrupoPagamento: 'LA-56',
                                codigoIdentificadorUnico: '1',
                                nomeBanco: 'BANCO ABCD S.A.             ',
                                quantidadeLancamentoRemessa: 22,
                                numeroRaizCNPJ: '12996721',
                                numeroSufixoCNPJ: '1597',
                                valorLancamentoRemessa: 7541.63,
                                dateLancamentoContaCorrenteCliente: 1464922800000,
                                dateEfetivaLancamento: 1464922800000
                            },
                            {
                                lancamentoContaCorrenteCliente: {
                                    numeroRemessaBanco: 64320236054,
                                    nomeSituacaoRemessa: 'Não Pago',
                                    dadosDomicilioBancario: {
                                        codigoBanco: 123,
                                        numeroAgencia: 1,
                                        numeroContaCorrente: '00000000065470'
                                    },
                                    nomeTipoOperacao: 'regular'
                                },
                                dataEfetivaLancamento: '08/06/2016',
                                dataLancamentoContaCorrenteCliente: '08/06/2016',
                                numeroEvento: 42236790,
                                descricaoGrupoPagamento: 'LA-56',
                                codigoIdentificadorUnico: '1',
                                nomeBanco: 'BANCO ABCD S.A.             ',
                                quantidadeLancamentoRemessa: 22,
                                numeroRaizCNPJ: '12996721',
                                numeroSufixoCNPJ: '1597',
                                valorLancamentoRemessa: 10346.85,
                                dateLancamentoContaCorrenteCliente: 1464922800000,
                                dateEfetivaLancamento: 1464922800000
                            },
                            {
                                lancamentoContaCorrenteCliente: {
                                    numeroRemessaBanco: 64320236054,
                                    nomeSituacaoRemessa: 'Pago',
                                    dadosDomicilioBancario: {
                                        codigoBanco: 123,
                                        numeroAgencia: 1,
                                        numeroContaCorrente: '00000000065470'
                                    },
                                    nomeTipoOperacao: 'regular'
                                },
                                dataEfetivaLancamento: '09/06/2016',
                                dataLancamentoContaCorrenteCliente: '09/06/2016',
                                numeroEvento: 42236790,
                                descricaoGrupoPagamento: 'LA-56',
                                codigoIdentificadorUnico: '1',
                                nomeBanco: 'BANCO ABCD S.A.             ',
                                quantidadeLancamentoRemessa: 22,
                                numeroRaizCNPJ: '12996721',
                                numeroSufixoCNPJ: '1597',
                                valorLancamentoRemessa: 10877.49,
                                dateLancamentoContaCorrenteCliente: 1464922800000,
                                dateEfetivaLancamento: 1464922800000
                            },
                            {
                                lancamentoContaCorrenteCliente: {
                                    numeroRemessaBanco: 64320236054,
                                    nomeSituacaoRemessa: 'Não Pago',
                                    dadosDomicilioBancario: {
                                        codigoBanco: 123,
                                        numeroAgencia: 1,
                                        numeroContaCorrente: '00000000065470'
                                    },
                                    nomeTipoOperacao: 'regular'
                                },
                                dataEfetivaLancamento: '10/06/2016',
                                dataLancamentoContaCorrenteCliente: '10/06/2016',
                                numeroEvento: 42236790,
                                descricaoGrupoPagamento: 'LA-56',
                                codigoIdentificadorUnico: '1',
                                nomeBanco: 'BANCO ABCD S.A.             ',
                                quantidadeLancamentoRemessa: 22,
                                numeroRaizCNPJ: '12996721',
                                numeroSufixoCNPJ: '1597',
                                valorLancamentoRemessa: 12714.88,
                                dateLancamentoContaCorrenteCliente: 1464922800000,
                                dateEfetivaLancamento: 1464922800000
                            },
                            {
                                lancamentoContaCorrenteCliente: {
                                    numeroRemessaBanco: 64320236054,
                                    nomeSituacaoRemessa: 'Pago',
                                    dadosDomicilioBancario: {
                                        codigoBanco: 123,
                                        numeroAgencia: 1,
                                        numeroContaCorrente: '00000000065470'
                                    },
                                    nomeTipoOperacao: 'regular'
                                },
                                dataEfetivaLancamento: '11/06/2016',
                                dataLancamentoContaCorrenteCliente: '11/06/2016',
                                numeroEvento: 42236790,
                                descricaoGrupoPagamento: 'LA-56',
                                codigoIdentificadorUnico: '1',
                                nomeBanco: 'BANCO ABCD S.A.             ',
                                quantidadeLancamentoRemessa: 22,
                                numeroRaizCNPJ: '12996721',
                                numeroSufixoCNPJ: '1597',
                                valorLancamentoRemessa: 11456.99,
                                dateLancamentoContaCorrenteCliente: 1464922800000,
                                dateEfetivaLancamento: 1464922800000
                            },
                            {
                                lancamentoContaCorrenteCliente: {
                                    numeroRemessaBanco: 64320236054,
                                    nomeSituacaoRemessa: 'Não Pago',
                                    dadosDomicilioBancario: {
                                        codigoBanco: 123,
                                        numeroAgencia: 1,
                                        numeroContaCorrente: '00000000065470'
                                    },
                                    nomeTipoOperacao: 'regular'
                                },
                                dataEfetivaLancamento: '12/06/2016',
                                dataLancamentoContaCorrenteCliente: '12/06/2016',
                                numeroEvento: 42236790,
                                descricaoGrupoPagamento: 'LA-56',
                                codigoIdentificadorUnico: '1',
                                nomeBanco: 'BANCO ABCD S.A.             ',
                                quantidadeLancamentoRemessa: 22,
                                numeroRaizCNPJ: '12996721',
                                numeroSufixoCNPJ: '1597',
                                valorLancamentoRemessa: 14456.78,
                                dateLancamentoContaCorrenteCliente: 1464922800000,
                                dateEfetivaLancamento: 1464922800000
                            },
                            {
                                lancamentoContaCorrenteCliente: {
                                    numeroRemessaBanco: 64320236054,
                                    nomeSituacaoRemessa: 'Pago',
                                    dadosDomicilioBancario: {
                                        codigoBanco: 123,
                                        numeroAgencia: 1,
                                        numeroContaCorrente: '00000000065470'
                                    },
                                    nomeTipoOperacao: 'regular'
                                },
                                dataEfetivaLancamento: '13/06/2016',
                                dataLancamentoContaCorrenteCliente: '13/06/2016',
                                numeroEvento: 42236790,
                                descricaoGrupoPagamento: 'LA-56',
                                codigoIdentificadorUnico: '1',
                                nomeBanco: 'BANCO ABCD S.A.             ',
                                quantidadeLancamentoRemessa: 22,
                                numeroRaizCNPJ: '12996721',
                                numeroSufixoCNPJ: '1597',
                                valorLancamentoRemessa: 10001.12,
                                dateLancamentoContaCorrenteCliente: 1464922800000,
                                dateEfetivaLancamento: 1464922800000
                            },
                            {
                                lancamentoContaCorrenteCliente: {
                                    numeroRemessaBanco: 64320236054,
                                    nomeSituacaoRemessa: 'Não Pago',
                                    dadosDomicilioBancario: {
                                        codigoBanco: 123,
                                        numeroAgencia: 1,
                                        numeroContaCorrente: '00000000065470'
                                    },
                                    nomeTipoOperacao: 'regular'
                                },
                                dataEfetivaLancamento: '14/06/2016',
                                dataLancamentoContaCorrenteCliente: '14/06/2016',
                                numeroEvento: 42236790,
                                descricaoGrupoPagamento: 'LA-56',
                                codigoIdentificadorUnico: '1',
                                nomeBanco: 'BANCO ABCD S.A.             ',
                                quantidadeLancamentoRemessa: 22,
                                numeroRaizCNPJ: '12996721',
                                numeroSufixoCNPJ: '1597',
                                valorLancamentoRemessa: 13522.46,
                                dateLancamentoContaCorrenteCliente: 1464922800000,
                                dateEfetivaLancamento: 1464922800000
                            },
                            {
                                lancamentoContaCorrenteCliente: {
                                    numeroRemessaBanco: 64320236054,
                                    nomeSituacaoRemessa: 'Pago',
                                    dadosDomicilioBancario: {
                                        codigoBanco: 123,
                                        numeroAgencia: 1,
                                        numeroContaCorrente: '00000000065470'
                                    },
                                    nomeTipoOperacao: 'regular'
                                },
                                dataEfetivaLancamento: '15/06/2016',
                                dataLancamentoContaCorrenteCliente: '15/06/2016',
                                numeroEvento: 42236790,
                                descricaoGrupoPagamento: 'LA-56',
                                codigoIdentificadorUnico: '1',
                                nomeBanco: 'BANCO ABCD S.A.             ',
                                quantidadeLancamentoRemessa: 22,
                                numeroRaizCNPJ: '12996721',
                                numeroSufixoCNPJ: '1597',
                                valorLancamentoRemessa: 9457.41,
                                dateLancamentoContaCorrenteCliente: 1464922800000,
                                dateEfetivaLancamento: 1464922800000
                            },
                            {
                                lancamentoContaCorrenteCliente: {
                                    numeroRemessaBanco: 64320236054,
                                    nomeSituacaoRemessa: 'Não Pago',
                                    dadosDomicilioBancario: {
                                        codigoBanco: 123,
                                        numeroAgencia: 1,
                                        numeroContaCorrente: '00000000065470'
                                    },
                                    nomeTipoOperacao: 'regular'
                                },
                                dataEfetivaLancamento: '16/06/2016',
                                dataLancamentoContaCorrenteCliente: '16/06/2016',
                                numeroEvento: 42236790,
                                descricaoGrupoPagamento: 'LA-56',
                                codigoIdentificadorUnico: '1',
                                nomeBanco: 'BANCO ABCD S.A.             ',
                                quantidadeLancamentoRemessa: 22,
                                numeroRaizCNPJ: '12996721',
                                numeroSufixoCNPJ: '1597',
                                valorLancamentoRemessa: 10664.58,
                                dateLancamentoContaCorrenteCliente: 1464922800000,
                                dateEfetivaLancamento: 1464922800000
                            },
                            {
                                lancamentoContaCorrenteCliente: {
                                    numeroRemessaBanco: 64320236054,
                                    nomeSituacaoRemessa: 'Pago',
                                    dadosDomicilioBancario: {
                                        codigoBanco: 123,
                                        numeroAgencia: 1,
                                        numeroContaCorrente: '00000000065470'
                                    },
                                    nomeTipoOperacao: 'regular'
                                },
                                dataEfetivaLancamento: '17/06/2016',
                                dataLancamentoContaCorrenteCliente: '17/06/2016',
                                numeroEvento: 42236790,
                                descricaoGrupoPagamento: 'LA-56',
                                codigoIdentificadorUnico: '1',
                                nomeBanco: 'BANCO ABCD S.A.             ',
                                quantidadeLancamentoRemessa: 22,
                                numeroRaizCNPJ: '12996721',
                                numeroSufixoCNPJ: '1597',
                                valorLancamentoRemessa: 10528.12,
                                dateLancamentoContaCorrenteCliente: 1464922800000,
                                dateEfetivaLancamento: 1464922800000
                            },
                            {
                                lancamentoContaCorrenteCliente: {
                                    numeroRemessaBanco: 64320236054,
                                    nomeSituacaoRemessa: 'Não Pago',
                                    dadosDomicilioBancario: {
                                        codigoBanco: 123,
                                        numeroAgencia: 1,
                                        numeroContaCorrente: '00000000065470'
                                    },
                                    nomeTipoOperacao: 'regular'
                                },
                                dataEfetivaLancamento: '17/06/2016',
                                dataLancamentoContaCorrenteCliente: '17/06/2016',
                                numeroEvento: 42236790,
                                descricaoGrupoPagamento: 'LA-56',
                                codigoIdentificadorUnico: '1',
                                nomeBanco: 'BANCO ABCD S.A.             ',
                                quantidadeLancamentoRemessa: 22,
                                numeroRaizCNPJ: '12996721',
                                numeroSufixoCNPJ: '1597',
                                valorLancamentoRemessa: 13821.41,
                                dateLancamentoContaCorrenteCliente: 1464922800000,
                                dateEfetivaLancamento: 1464922800000
                            },
                            {
                                lancamentoContaCorrenteCliente: {
                                    numeroRemessaBanco: 64320236054,
                                    nomeSituacaoRemessa: 'Pago',
                                    dadosDomicilioBancario: {
                                        codigoBanco: 123,
                                        numeroAgencia: 1,
                                        numeroContaCorrente: '00000000065470'
                                    },
                                    nomeTipoOperacao: 'regular'
                                },
                                dataEfetivaLancamento: '18/06/2016',
                                dataLancamentoContaCorrenteCliente: '18/06/2016',
                                numeroEvento: 42236790,
                                descricaoGrupoPagamento: 'LA-56',
                                codigoIdentificadorUnico: '1',
                                nomeBanco: 'BANCO ABCD S.A.             ',
                                quantidadeLancamentoRemessa: 22,
                                numeroRaizCNPJ: '12996721',
                                numeroSufixoCNPJ: '1597',
                                valorLancamentoRemessa: 9457.44,
                                dateLancamentoContaCorrenteCliente: 1464922800000,
                                dateEfetivaLancamento: 1464922800000
                            },
                            {
                                lancamentoContaCorrenteCliente: {
                                    numeroRemessaBanco: 64320236054,
                                    nomeSituacaoRemessa: 'Pago',
                                    dadosDomicilioBancario: {
                                        codigoBanco: 123,
                                        numeroAgencia: 1,
                                        numeroContaCorrente: '00000000065470'
                                    },
                                    nomeTipoOperacao: 'regular'
                                },
                                dataEfetivaLancamento: '19/06/2016',
                                dataLancamentoContaCorrenteCliente: '19/06/2016',
                                numeroEvento: 42236790,
                                descricaoGrupoPagamento: 'LA-56',
                                codigoIdentificadorUnico: '1',
                                nomeBanco: 'BANCO ABCD S.A.             ',
                                quantidadeLancamentoRemessa: 22,
                                numeroRaizCNPJ: '12996721',
                                numeroSufixoCNPJ: '1597',
                                valorLancamentoRemessa: 11741.96,
                                dateLancamentoContaCorrenteCliente: 1464922800000,
                                dateEfetivaLancamento: 1464922800000
                            },
                            {
                                lancamentoContaCorrenteCliente: {
                                    numeroRemessaBanco: 64320236054,
                                    nomeSituacaoRemessa: 'Pago',
                                    dadosDomicilioBancario: {
                                        codigoBanco: 123,
                                        numeroAgencia: 1,
                                        numeroContaCorrente: '00000000065470'
                                    },
                                    nomeTipoOperacao: 'regular'
                                },
                                dataEfetivaLancamento: '20/06/2016',
                                dataLancamentoContaCorrenteCliente: '20/06/2016',
                                numeroEvento: 42236790,
                                descricaoGrupoPagamento: 'LA-56',
                                codigoIdentificadorUnico: '1',
                                nomeBanco: 'BANCO ABCD S.A.             ',
                                quantidadeLancamentoRemessa: 22,
                                numeroRaizCNPJ: '12996721',
                                numeroSufixoCNPJ: '1597',
                                valorLancamentoRemessa: 10945.75,
                                dateLancamentoContaCorrenteCliente: 1464922800000,
                                dateEfetivaLancamento: 1464922800000
                            },
                            {
                                lancamentoContaCorrenteCliente: {
                                    numeroRemessaBanco: 64320236054,
                                    nomeSituacaoRemessa: 'Não Pago',
                                    dadosDomicilioBancario: {
                                        codigoBanco: 123,
                                        numeroAgencia: 1,
                                        numeroContaCorrente: '00000000065470'
                                    },
                                    nomeTipoOperacao: 'regular'
                                },
                                dataEfetivaLancamento: '21/06/2016',
                                dataLancamentoContaCorrenteCliente: '21/06/2016',
                                numeroEvento: 42236790,
                                descricaoGrupoPagamento: 'LA-56',
                                codigoIdentificadorUnico: '1',
                                nomeBanco: 'BANCO ABCD S.A.             ',
                                quantidadeLancamentoRemessa: 22,
                                numeroRaizCNPJ: '12996721',
                                numeroSufixoCNPJ: '1597',
                                valorLancamentoRemessa: 8563.95,
                                dateLancamentoContaCorrenteCliente: 1464922800000,
                                dateEfetivaLancamento: 1464922800000
                            },
                            {
                                lancamentoContaCorrenteCliente: {
                                    numeroRemessaBanco: 64320236054,
                                    nomeSituacaoRemessa: 'Indisponível',
                                    dadosDomicilioBancario: {
                                        codigoBanco: 123,
                                        numeroAgencia: 1,
                                        numeroContaCorrente: '00000000065470'
                                    },
                                    nomeTipoOperacao: 'regular'
                                },
                                dataEfetivaLancamento: '22/06/2016',
                                dataLancamentoContaCorrenteCliente: '22/06/2016',
                                numeroEvento: 42236790,
                                descricaoGrupoPagamento: 'LA-56',
                                codigoIdentificadorUnico: '1',
                                nomeBanco: 'BANCO ABCD S.A.             ',
                                quantidadeLancamentoRemessa: 22,
                                numeroRaizCNPJ: '12996721',
                                numeroSufixoCNPJ: '1597',
                                valorLancamentoRemessa: 7541.63,
                                dateLancamentoContaCorrenteCliente: 1464922800000,
                                dateEfetivaLancamento: 1464922800000
                            },
                            {
                                lancamentoContaCorrenteCliente: {
                                    numeroRemessaBanco: 64320236054,
                                    nomeSituacaoRemessa: 'Não Pago',
                                    dadosDomicilioBancario: {
                                        codigoBanco: 123,
                                        numeroAgencia: 1,
                                        numeroContaCorrente: '00000000065470'
                                    },
                                    nomeTipoOperacao: 'regular'
                                },
                                dataEfetivaLancamento: '23/06/2016',
                                dataLancamentoContaCorrenteCliente: '23/06/2016',
                                numeroEvento: 42236790,
                                descricaoGrupoPagamento: 'LA-56',
                                codigoIdentificadorUnico: '1',
                                nomeBanco: 'BANCO ABCD S.A.             ',
                                quantidadeLancamentoRemessa: 22,
                                numeroRaizCNPJ: '12996721',
                                numeroSufixoCNPJ: '1597',
                                valorLancamentoRemessa: 10346.85,
                                dateLancamentoContaCorrenteCliente: 1464922800000,
                                dateEfetivaLancamento: 1464922800000
                            },
                            {
                                lancamentoContaCorrenteCliente: {
                                    numeroRemessaBanco: 64320236054,
                                    nomeSituacaoRemessa: 'Pago',
                                    dadosDomicilioBancario: {
                                        codigoBanco: 123,
                                        numeroAgencia: 1,
                                        numeroContaCorrente: '00000000065470'
                                    },
                                    nomeTipoOperacao: 'regular'
                                },
                                dataEfetivaLancamento: '24/06/2016',
                                dataLancamentoContaCorrenteCliente: '24/06/2016',
                                numeroEvento: 42236790,
                                descricaoGrupoPagamento: 'LA-56',
                                codigoIdentificadorUnico: '1',
                                nomeBanco: 'BANCO ABCD S.A.             ',
                                quantidadeLancamentoRemessa: 22,
                                numeroRaizCNPJ: '12996721',
                                numeroSufixoCNPJ: '1597',
                                valorLancamentoRemessa: 10877.49,
                                dateLancamentoContaCorrenteCliente: 1464922800000,
                                dateEfetivaLancamento: 1464922800000
                            },
                            {
                                lancamentoContaCorrenteCliente: {
                                    numeroRemessaBanco: 64320236054,
                                    nomeSituacaoRemessa: 'Não Pago',
                                    dadosDomicilioBancario: {
                                        codigoBanco: 123,
                                        numeroAgencia: 1,
                                        numeroContaCorrente: '00000000065470'
                                    },
                                    nomeTipoOperacao: 'regular'
                                },
                                dataEfetivaLancamento: '25/06/2016',
                                dataLancamentoContaCorrenteCliente: '25/06/2016',
                                numeroEvento: 42236790,
                                descricaoGrupoPagamento: 'LA-56',
                                codigoIdentificadorUnico: '1',
                                nomeBanco: 'BANCO ABCD S.A.             ',
                                quantidadeLancamentoRemessa: 22,
                                numeroRaizCNPJ: '12996721',
                                numeroSufixoCNPJ: '1597',
                                valorLancamentoRemessa: 12714.88,
                                dateLancamentoContaCorrenteCliente: 1464922800000,
                                dateEfetivaLancamento: 1464922800000
                            },
                            {
                                lancamentoContaCorrenteCliente: {
                                    numeroRemessaBanco: 64320236054,
                                    nomeSituacaoRemessa: 'Pago',
                                    dadosDomicilioBancario: {
                                        codigoBanco: 123,
                                        numeroAgencia: 1,
                                        numeroContaCorrente: '00000000065470'
                                    },
                                    nomeTipoOperacao: 'regular'
                                },
                                dataEfetivaLancamento: '26/06/2016',
                                dataLancamentoContaCorrenteCliente: '26/06/2016',
                                numeroEvento: 42236790,
                                descricaoGrupoPagamento: 'LA-56',
                                codigoIdentificadorUnico: '1',
                                nomeBanco: 'BANCO ABCD S.A.             ',
                                quantidadeLancamentoRemessa: 22,
                                numeroRaizCNPJ: '12996721',
                                numeroSufixoCNPJ: '1597',
                                valorLancamentoRemessa: 11456.99,
                                dateLancamentoContaCorrenteCliente: 1464922800000,
                                dateEfetivaLancamento: 1464922800000
                            },
                            {
                                lancamentoContaCorrenteCliente: {
                                    numeroRemessaBanco: 64320236054,
                                    nomeSituacaoRemessa: 'Não Pago',
                                    dadosDomicilioBancario: {
                                        codigoBanco: 123,
                                        numeroAgencia: 1,
                                        numeroContaCorrente: '00000000065470'
                                    },
                                    nomeTipoOperacao: 'regular'
                                },
                                dataEfetivaLancamento: '27/06/2016',
                                dataLancamentoContaCorrenteCliente: '27/06/2016',
                                numeroEvento: 42236790,
                                descricaoGrupoPagamento: 'LA-56',
                                codigoIdentificadorUnico: '1',
                                nomeBanco: 'BANCO ABCD S.A.             ',
                                quantidadeLancamentoRemessa: 22,
                                numeroRaizCNPJ: '12996721',
                                numeroSufixoCNPJ: '1597',
                                valorLancamentoRemessa: 14456.78,
                                dateLancamentoContaCorrenteCliente: 1464922800000,
                                dateEfetivaLancamento: 1464922800000
                            },
                            {
                                lancamentoContaCorrenteCliente: {
                                    numeroRemessaBanco: 64320236054,
                                    nomeSituacaoRemessa: 'Pago',
                                    dadosDomicilioBancario: {
                                        codigoBanco: 123,
                                        numeroAgencia: 1,
                                        numeroContaCorrente: '00000000065470'
                                    },
                                    nomeTipoOperacao: 'regular'
                                },
                                dataEfetivaLancamento: '28/06/2016',
                                dataLancamentoContaCorrenteCliente: '28/06/2016',
                                numeroEvento: 42236790,
                                descricaoGrupoPagamento: 'LA-56',
                                codigoIdentificadorUnico: '1',
                                nomeBanco: 'BANCO ABCD S.A.             ',
                                quantidadeLancamentoRemessa: 22,
                                numeroRaizCNPJ: '12996721',
                                numeroSufixoCNPJ: '1597',
                                valorLancamentoRemessa: 10001.12,
                                dateLancamentoContaCorrenteCliente: 1464922800000,
                                dateEfetivaLancamento: 1464922800000
                            },
                            {
                                lancamentoContaCorrenteCliente: {
                                    numeroRemessaBanco: 64320236054,
                                    nomeSituacaoRemessa: 'Não Pago',
                                    dadosDomicilioBancario: {
                                        codigoBanco: 123,
                                        numeroAgencia: 1,
                                        numeroContaCorrente: '00000000065470'
                                    },
                                    nomeTipoOperacao: 'regular'
                                },
                                dataEfetivaLancamento: '29/06/2016',
                                dataLancamentoContaCorrenteCliente: '29/06/2016',
                                numeroEvento: 42236790,
                                descricaoGrupoPagamento: 'LA-56',
                                codigoIdentificadorUnico: '1',
                                nomeBanco: 'BANCO ABCD S.A.             ',
                                quantidadeLancamentoRemessa: 22,
                                numeroRaizCNPJ: '12996721',
                                numeroSufixoCNPJ: '1597',
                                valorLancamentoRemessa: 13522.46,
                                dateLancamentoContaCorrenteCliente: 1464922800000,
                                dateEfetivaLancamento: 1464922800000
                            },
                            {
                                lancamentoContaCorrenteCliente: {
                                    numeroRemessaBanco: 64320236054,
                                    nomeSituacaoRemessa: 'Pago',
                                    dadosDomicilioBancario: {
                                        codigoBanco: 123,
                                        numeroAgencia: 1,
                                        numeroContaCorrente: '00000000065470'
                                    },
                                    nomeTipoOperacao: 'regular'
                                },
                                dataEfetivaLancamento: '30/06/2016',
                                dataLancamentoContaCorrenteCliente: '30/06/2016',
                                numeroEvento: 42236790,
                                descricaoGrupoPagamento: 'LA-56',
                                codigoIdentificadorUnico: '1',
                                nomeBanco: 'BANCO ABCD S.A.             ',
                                quantidadeLancamentoRemessa: 22,
                                numeroRaizCNPJ: '12996721',
                                numeroSufixoCNPJ: '1597',
                                valorLancamentoRemessa: 9457.41,
                                dateLancamentoContaCorrenteCliente: 1464922800000,
                                dateEfetivaLancamento: 1464922800000
                            },
                            {
                                lancamentoContaCorrenteCliente: {
                                    numeroRemessaBanco: 64320236054,
                                    nomeSituacaoRemessa: 'Não Pago',
                                    dadosDomicilioBancario: {
                                        codigoBanco: 123,
                                        numeroAgencia: 1,
                                        numeroContaCorrente: '00000000065470'
                                    },
                                    nomeTipoOperacao: 'regular'
                                },
                                dataEfetivaLancamento: '30/06/2016',
                                dataLancamentoContaCorrenteCliente: '30/06/2016',
                                numeroEvento: 42236790,
                                descricaoGrupoPagamento: 'LA-56',
                                codigoIdentificadorUnico: '1',
                                nomeBanco: 'BANCO ABCD S.A.             ',
                                quantidadeLancamentoRemessa: 22,
                                numeroRaizCNPJ: '12996721',
                                numeroSufixoCNPJ: '1597',
                                valorLancamentoRemessa: 10664.58,
                                dateLancamentoContaCorrenteCliente: 1464922800000,
                                dateEfetivaLancamento: 1464922800000
                            }
                        ],
                        indice: 1,
                        tamanhoPagina: 25,
                        totalElements: 39
                    };
                });
            }
        });
    }
}
