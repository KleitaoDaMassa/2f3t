 mensagem = (msg) => alert(msg);
 soma = (a,b) => a + b;
 sub = (a,b) => a - b;
 mult = (a,b) => a * b;
 div = (a,b) => a / b;
 raiz = x => Math.sqrt(x);
 let a = "";
 let b = "";
 let valor = "";
 let temPonto = false;

 // mensagem( soma ( 10, soma(8,2) ) );
 // mensagem (soma ( 2,div(2,2) ) );
 
 //funções para mostrar númeroas no display
  function escrever_display(num){
    document.getElementById("resultado").value = num;

  }

  //função para receber as teclas numericas e o ponto
  function digitando(tecla){
    valor += tecla;
    escrever_display(valor);

  }

