/*
1. Crie uma classe que possua dois métodos: um para realizar pagamento e outro para consultar o último pagamento.

2. Pagamentos serão armazenados como objetos Javascript dentro de uma lista de pagamentos.

3. Cada pagamento terá as propriedades: Código de Barras, Empresa e Valor.

4. Quando um pagamento for realizado e o valor for maior que 100.00, o pagamento também terá a propriedade 'categoria' 
preenchida pela função como 'cara', caso contrário, a propriedade 'categoria' será preenchida pela função como 'padrão'.

5. O método de consultar trará apenas o último pagamento.
  
  ex. 
  const servicoDePagamento = new ServicoDePagamento();
  servicoDePagamento.pagar('0987-7656-3475's, 'Samar', 156.87);
  console.log(servicoDePagamento.consultarUltimoPagamento());
  {
     codigoBarras: '0987-7656-3475',
     empresa: 'Samar',
     valor: 56.87,
     categoria: 'cara'
  }
  
  A entregua deve ser realizada via Github e o repositório deve ter a classe a pasta src e os testes dos métodos dessa classe dentro da pasta test usando Mocha e Node Assert.
*/

export class ServicoDePagamento {

     lista = [
    ];

    Pagar(CodigoBarras, Empresa, Valor) {

        if (Valor > 100) {
            this.lista.push({CodigoBarras: CodigoBarras, Empresa: Empresa, Valor: Valor, categoria: 'cara'})
        } else {
            this.lista.push({CodigoBarras: CodigoBarras, Empresa: Empresa, Valor: Valor, categoria: 'padrão'})
        }
    }

    Consultar() {
        return this.lista[this.lista.length -1]
    }
}

const asd = new ServicoDePagamento();
asd.Pagar('55859-1111', 'Adidas', 1111)
asd.Pagar('55859-2222', 'Nike', 222)
console.log(asd.Consultar());

/*
        {CodigoBarras: '55859-1111', Empresa: 'Samar', Valor: 1111, Categoria: 'cara'},
        {CodigoBarras: '55859-2222', Empresa: 'CarretaFuracao', Valor: 222, Categoria: 'padrão'},
        {CodigoBarras: '55859-3333', Empresa: 'Item Hut', Valor: 333, Categoria: 'cara'},
*/