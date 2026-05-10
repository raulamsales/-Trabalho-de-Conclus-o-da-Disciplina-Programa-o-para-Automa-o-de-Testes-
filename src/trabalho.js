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