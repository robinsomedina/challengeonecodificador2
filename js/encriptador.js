	
	let btnE = document.getElementById("encrip");
	let btnC = document.querySelector(".cpy");
	let btnD = document.getElementById("desen");

	let txt = document.querySelector(".area");

	let entrada = document.getElementById("area_ec");
	let salida = document.querySelector(".area_desencrip");
	
	btnC.style.display= "none";

	txt.addEventListener("keyup", e => {
    	txt.style.height = "auto";

        let scHeight = e.target.scrollHeight;
        if (screen.width >= 1440)
        {
        	if (scHeight <= 450 )
        	  txt.style.height = `${scHeight}px`;
        	else
        	  txt.style.height = "550px";
        }
        else
        {
        	if (scHeight <= 250 )
        	  txt.style.height = `${scHeight}px`;
        	else
        	  txt.style.height = "400px";
				}

        });
        

	salida.addEventListener("focus", e => {
        salida.style.height = "auto";
        let scHeight = e.target.scrollHeight;
        if (screen.width >= 1440)
        {
        	if (scHeight <= 450 )
        	  salida.style.height = `${scHeight}px`;
        	else
        	  salida.style.height = "700px";
    		}
    		else
    		{
          if (scHeight <= 250 )
        		salida.style.height = `${scHeight}px`;
          else
          	salida.style.height = "300px";
    		}

        });
	
	function encriptar()
	{
		entrada.value = entrada.value.toLowerCase().replace(/á/g,"a");
		entrada.value = entrada.value.toLowerCase().replace(/é/g,"e");
		entrada.value = entrada.value.toLowerCase().replace(/í/g,"i");
		entrada.value = entrada.value.toLowerCase().replace(/ó/g,"o");
		entrada.value = entrada.value.toLowerCase().replace(/ú/g,"u");
		entrada.value = entrada.value.replace(/[^a-zñA-ZÑ ]/g,"");

		entrada.value= entrada.value.toLowerCase().replace(/e/g, "enter");	
		entrada.value= entrada.value.toLowerCase().replace(/i/g, "imes");	
		entrada.value= entrada.value.toLowerCase().replace(/a/g, "ai");	
		entrada.value= entrada.value.toLowerCase().replace(/o/g, "ober");	
		entrada.value= entrada.value.toLowerCase().replace(/u/g, "ufat");
		salida.value= entrada.value;

		document.querySelector(".subtitulo").style.display = "none";
		document.querySelector(".muneco").style.display = "none";
		btnC.style.display= "inline";//aparece lo oculto con none

	}

	function desencriptar()
	{
		entrada.value= entrada.value.replace(/enter/g, "e");
		entrada.value= entrada.value.replace(/imes/g, "i");	
		entrada.value= entrada.value.replace(/ai/g, "a");	
		entrada.value= entrada.value.replace(/ober/g, "o");	
		entrada.value= entrada.value.replace(/ufat/g, "u");
		salida.value= entrada.value;

		document.querySelector(".subtitulo").style.display = "none";
		document.querySelector(".muneco").style.display = "none";
		btnC.style.display= "inline";
	}

	function copiar()
	{
		salida.select();
		document.execCommand('copy');
	}

	
	btnE.onclick = encriptar;
	btnD.onclick = desencriptar;
	btnC.onclick = copiar;
	