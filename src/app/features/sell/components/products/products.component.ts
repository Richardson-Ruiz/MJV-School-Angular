import { Component, OnInit } from '@angular/core';
import { products } from '../../models/products.models';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  titulo = "Consoles";
  exibirProdutos = true;

  produto = {
    descricao: "Playstation 5",
    preco: 4600,
    quantidade: 135,
    imagem: "https://s03.video.glbimg.com/x720/8619970.jpg",
    disponivel: true,
  };

  produtos: Array<products> = [
    {
      descricao: "Playstation 4",
      preco: 2500,
      quantidade: 197,
      imagem: "https://i.zst.com.br/thumbs/12/2c/3f/165939772.jpg",
      disponivel: true 
    },
    {
      descricao: "Xbox One",
      preco: 2000,
      quantidade: 265,
      imagem: "https://http2.mlstatic.com/D_NQ_NP_677402-MLA32731813547_112019-O.jpg",
      disponivel: true 
    },
    {
      descricao: "Xbox Series S",
      preco: 4200,
      quantidade: 159,
      imagem: "https://compass-ssl.xbox.com/assets/2b/ba/2bbae9c6-b091-49f2-96b3-a8f0fa65eb86.png?n=0202999-ReadyForAction_Console-D.png",
      disponivel:true,
    },
    {
      descricao: "Nintendo Switch",
      preco: 2200,
      quantidade: 0,
      imagem: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_400/ncom/en_US/switch/system/three-modes-in-one",
      disponivel:false,
    },

  ]
  constructor() { }

  ngOnInit(): void {
    console.log("teste");
  }

  precoComDesconto (preco: number) {
    return preco * 0.90;
  }

  obterPrecoDesconto() {
    this.produto.preco = this.produto.preco * 0.90;
  }

  comprar() {
    alert("Produto comprado com sucesso!");
    
  }

  clicouTag() {
    alert("Você clicou em uma tag");
  }

  passouMouse() {
    alert("Você passou o mouse em cima de uma tag");
  }

  pressinouTecla(event: any) {
    console.log(event.target.value);
  }

  exibirProdutosSimNao(){
    this.exibirProdutos = !this.exibirProdutos
  }

  }


