<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>	
		#div1{
			border:1px solid black;
			width:45%;
			height:65%;
			background-color:FloralWhite;
			position:absolute;
			left:27%;
			border-radius:5px;
		}
		
		/* corresponde ao 'converte de' */
		#div2a{
			position:relative;
			left:19%;
			top:2.5%;
			font-family:tahoma;
			font-size:15px;
		}
		
		#div3a{
			position:relative;
			left:19%;
			top:-6%;
			font-family:tahoma;
			font-size:15px;
		}
		#div2b{
			position:relative;
			left:53%;
			top:30.3%;
			font-family:tahoma;
			font-size:15px;
		}
		
		#div3b{
			position:relative
			;
			left:53%;
			top:36.3%;
			font-family:tahoma;
			font-size:15px;
		}
		
		#text3{
			font-size:12px;
		}
		
		h1{
			font-family:tahoma;
			font-size:28px;
		}
		
		#btn1{
			position:relative;
			left:32%;
			width:15%;
			height:12%;
			font-family:tahoma;			                
            border-radius:2px;
            background:#1c72dc;
			font-weight:bold;
			
		}
		
		#btn2{
			position:relative;
			left:35%;
			width:15%;
			height:12%;
			font-family:tahoma;			                
            border-radius:2px;
			background:#1c72dc;
			font-weight:bold;			
		}
		
		#btn1:hover, #btn2:hover{
			background:#1c72dc;                              
            border:1px solid black;                       
		}
		
		#div4{
			position:relative;
			left:-1%;
			top:6%;
			text-align:center;
		}
		
		#resultado{
			font-family:tahoma;
			font-size:15px;
			font-weight:bold;
		}
		
		h1{
			color:Firebrick;
		}
		
		li{
			font-size:12px;
		}
		
		#div5{
			position:relative;
			top:15%;
		}
		
	</style>
</head>
<body>	

	<form>
	
		</script>
	
		
		
		<div id="div1">
			<center><h1>Registro </center>
		
		<div id ='dvin' >
				Nome do cliente: <input type="text" name="nome" id="nome">
		
				<p></p>
		
		<div id ='dvis' >
				Sobrenome do cliente:<input type="text" name="sobre" id="sobre">

		</div>
				
				<div id = 'div0'>
					<center><p>cambio da moeda</p></center>
				<!-- abaixo colocar o nome-->
				</div>
			<!--OPÇÕES DE MOEDAS PARA CONVERTER-->
			<div id="div2a">
				<b><label id="text1">Converter de: </label></b><br />
				<select id="opções">
					<option></option>
					<option>Real BRL </option>
					<option>Dólar Americano</option>
					<option>Dólar Canadense</option>
					<option>Dólar Australiano</option>
					<option>Euro</option>
					<option>Libra</option>
					<option>Peso Argentino</option>
					<option>Peso Uruguaio</option>
							
				</select><br />
			</div>
			
			<!--ENTRADA DO VALOR A SER CONVERTIDO-->
			<div id="div3a">
				<b><label>Valor a ser convertido:</label></b><br />		
				<input type="text" id="text2" />
			</div>
				<!--OPÇÕES DE MOEDAS PARA CONVERTER-->
				<div id="div2b">
					<b><label id="text1">Converter para: </label></b><br />
					<select id="opções">
						<option></option>
						<option>Real BRL </option>
						<option>Dólar Americano</option>
						<option>Dólar Canadense</option>
						<option>Dólar Australiano</option>
						<option>Euro</option>
						<option>Libra</option>
						<option>Peso Argentino</option>
						<option>Peso Uruguaio</option>
								
					</select><br />
				</div>
				
				<!--ENTRADA DO VALOR A SER CONVERTIDO-->
				<div id="div3b">
					<b><label>Valor da conversao:</label></b><br />	
					<span id="valorFinal">	
					<input type="text" id="valorFinal" >
				</div>
			
				<p></p>
			<!--botões CONVERTER E RESETAR-->
			<input type="button" value="Converter" id="btn1" onClick="conversao()" />
			<input type="reset" value="Limpar" id="btn2" onclick="limpar()"/>
			
			<!--RESULTADO QUE SERÁ MOSTRADO NA TELA-->
			<div id="div4">
				<label id="resultado">caso de necessidade  <vg/label>
			
				
			</div>
			
			<!--OBSERVAÇÕES-->
			<div id="div5">
				<ul>
				<!--linha em branco pra qualquer coisa-->
					<li></li>				
				<li>Data da cotação: 21/05/2021 </li>
			</ul>
			</div>
		</div>	
	</form>	
    <script>	
		
		// data do dia do cambio
		now = new Date
                  document.write (`Dia do cambio:
				   ${now.getDate()} do mês ${now.getDay()} de ${now.getFullYear()} as ${now.getMonth()}  horas`)
		
		var valor;			
		
		function conversao(){
			var realBrl = 1;
			var dolarAmericano = 5.53;
			var dolarCanadense = 4.39;
			var dolarAustraliano = 4.10;
			var euro = 6.74;
			var libra = 7.50;
			var pesoArgentino = 0.05;
			var pesoUruguaio = 0.12;
	

			valor = parseFloat(document.getElementById("text2").value);			
			
			if(document.getElementById("opções").value = get.getElementById ("Dólar Americano")) {
				document.getElementById("valorFinal").innerHTML = (valor*dolarAmericano).toFixed(2);		

			} else  {
				if	(document.getElementById("opções").get.getElementById("Dólar Canadense")){
				document.getElementById("valorFinal").innerHTML = (valor*dolarCanada).toFixed(2);	

			} else {
				if(document.getElementById("opções").value="Dólar Australiano"){
				document.getElementById("valorFinal").innerHTML = (valor*dolarAustraliano).toFixed(2);
			}
		}		
		}
	}
	function limpar() {
   document.div2a.div3a.div2b.div3b = '';
   delete div2a;
   delete div3a;
   delete div2b;
   delete div3b;
}
	
</script>
</body>

</html>
