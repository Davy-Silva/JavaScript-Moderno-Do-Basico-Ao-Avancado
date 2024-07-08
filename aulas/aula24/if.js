const hora = 12

if(hora >= 0 && hora < 12)
{   console.log("Bom Dia") }
else if(hora >= 12 && hora < 18)
{   console.log("Boa Tarde") }
else if(hora >= 18 && hora < 24)
{   console.log("Boa Noite") }
else
{   console.log("Hora Não Identificada") }

/*  IF pode ser usado sozinho.
 *  ElSE IF e ELSE não pode ser usado sem o IF.
 *  Posso ter quantos ELSE IF eu quiser.
 *  Só posso ter um ELSE no final.
 *  Posso usar só o IF e ElSE.
 *  O IF checa de cima para baixo, da esquerda para direita, até achar uma coisa verdadeira para        *  executar.
 */
