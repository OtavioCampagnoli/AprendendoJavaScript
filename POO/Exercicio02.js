class Carrinho {
    constructor(itens, quantidade, valorTotal) {
        this.itens = itens;
        this.quantidade = quantidade;
        this.valorTotal = valorTotal;
    }

    AdicionarItemNoCarrinho(item) {
        let contador = 0;

        for (let itemCarrinho in this.itens) {
            if (this.itens[itemCarrinho].id == item.id) {
                this.itens[itemCarrinho].quantidade += item.id
                contador = 1;
            }
        }

        if (contador == 0) {
            this.itens.push(item);
        }

        this.quantidade += item.quantidade;
        this.valorTotal += item.valor * item.quantidade;
    }

    RemoverItemDoCarrinho(item) {

        for (let itemCarrinho in this.itens) {
            if (this.itens[itemCarrinho].id == item.id) {

                let obj = this.itens[itemCarrinho];
                let index = this.itens.findIndex(function (obj) { return obj.id == item.id });

                this.quantidade -= this.itens[itemCarrinho].quantidade;
                this.valorTotal -= this.itens[itemCarrinho].valor * this.itens[itemCarrinho].quantidade;

                this.itens.splice(index, 1);

            }
        }
    }
}

let carrinho = new Carrinho([
    {
        id: 01,
        nome: 'Camisa',
        quantidade: 2,
        valor: 20.00
    },

    {
        id: 02,
        nome: 'Calça',
        quantidade: 1,
        valor: 50.00
    }

], 3, 90.00);

console.log(carrinho);

carrinho.AdicionarItemNoCarrinho({ id: 01, nome: 'Camisa', quantidade: 2, valor: 20.00 });

carrinho.RemoverItemDoCarrinho({ id: 02, nome: 'Calça', quantidade: 1, valor: 20.00 })


console.log(carrinho);