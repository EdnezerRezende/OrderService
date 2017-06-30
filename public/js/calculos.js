			function informeQuantidade()
			{
				var x;
				var r=confirm("Deseja informar a quantidade?");
				if (r==true)
				{
					quantidade();
				}
				
			}

			function quantidade()
			{
				var qtd=prompt("Informe a quantidade:");
				if (qtd!=null)
				{
					alert("A quantidade solicitada é "+qtd);
				}
			}
