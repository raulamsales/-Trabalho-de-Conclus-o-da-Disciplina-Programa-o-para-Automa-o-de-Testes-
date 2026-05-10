import assert from 'assert';
import { ServicoDePagamento } from '../src/trabalho.js';

describe('Teste do serviço de pagamento', () => {
    it('Deve realizar um pagamento e consultar o último pagamento', () => {
        //arrange
        const resultadoEsperado = {CodigoBarras: '55859-2222', Empresa: 'Nike', Valor: 99, categoria: 'padrão'};
        const TesteServicoPagamento = new ServicoDePagamento()

        //act
        TesteServicoPagamento.Pagar('55859-2222', 'Nike', 99)
        const resultadoAtual = TesteServicoPagamento.Consultar()

        //assert
        assert.deepEqual(resultadoEsperado, resultadoAtual)

        })
    
    it('Deve realizar um pagamento caro e consultar o último pagamento', () => { 
        //arrange
        const resultadoEsperado = {CodigoBarras: '55859-2222', Empresa: 'Nike', Valor: 222, categoria: 'cara'};
        const TesteServicoPagamento = new ServicoDePagamento()

        //act
        TesteServicoPagamento.Pagar('55859-2222', 'Nike', 222)
        const resultadoAtual = TesteServicoPagamento.Consultar()

        //assert
        assert.deepEqual(resultadoEsperado, resultadoAtual)

        })
})