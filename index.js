const texto = document.querySelector('.texto')
const botonE = document.querySelector('.buttonE')
const imagen=document.querySelector('.imagen')
const botonD = document.querySelector('.buttonD')



function entrada(){
    imagen.innerHTML='';
  
    if(texto.value==''){
        const div=document.createElement('DIV');
        const textoA=`<img src="imagenes/muneco.jpg" alt="" class="muneco">`
        div.innerHTML=textoA;
        imagen.appendChild(div)
    }
    if(texto.value !=''){

        let cadena =[];
        for(let i=0; i<texto.value.length;i++){
             cadena[i]=texto.value[i]
            if(texto.value[i]=='e'){
               cadena[i]='enter'
            }
             if(texto.value[i]=='i'){
               cadena[i]='imes'
            }
             if(texto.value[i]=='a'){
               cadena[i]='ai'
            }
             if(texto.value[i]=='o'){
               cadena[i]='ober'
            }
             if(texto.value[i]=='u'){
               cadena[i]='ufat'
            }
        }

       let convertido=''
        cadena.forEach(conversion=> {
              convertido=convertido+conversion
        });

        const div=document.createElement('DIV');
        const textoA=`<div class="divArea">
            <textarea name="area_de_texto" rows="3" cols="50" class="texto2">${convertido}</textarea>
            <div class="divBoton">
            <button class="botonCopy">Copiar texto</button>
        </div>
        </div>
    
    </div>`
        div.innerHTML=textoA;
        imagen.appendChild(div)
        const texto2=document.querySelector('.texto2');
        const botonCopiar=document.querySelector('.botonCopy');
        botonCopiar.addEventListener('click',()=>{
            texto2.select()
            let copiado=document.execCommand('copy')
            div.innerHTML=`<div class="divArea">
            <textarea name="area_de_texto" rows="3" cols="50" class="texto2">Texto copiado</textarea>
            <div class="divBoton">
            <button class="botonCopy">Copiar texto</button>
        </div>
        </div>
    
    </div>`;
            imagen.appendChild(div)
            
        })

        
    }
}

function salida(){

    imagen.innerHTML='';
  //  console.log(texto.value)
    if(texto.value==''){
        console.log("no ingresaste nada")
        const div=document.createElement('DIV');
        const textoA=`<img src="imagenes/muneco.jpg" alt="" class="muneco">`
        div.innerHTML=textoA;
        imagen.appendChild(div)
       
    }
    if(texto.value !=''){
        let frase=texto.value;
        var textoE=frase.replace(/ai/img, "a");  //i mayus y minus //g toda la linea o la oracio //m tome en cuenta multiples lineas (enter)
        var textoE=textoE.replace(/enter/img, "e");
        var textoE=textoE.replace(/imes/img, "i");
        var textoE=textoE.replace(/ober/img, "o");
        var textoE=textoE.replace(/ufat/img, "u");

          const div=document.createElement('DIV');
          const textoA=`<div class="divArea">
              <textarea name="area_de_texto" rows="3" cols="50" class="texto2">${textoE}</textarea>
              <div class="divBoton">
              <button class="botonCopy">Copiar texto</button>
          </div>
          </div>
      
      </div>`
          div.innerHTML=textoA;
          imagen.appendChild(div)
          const texto2=document.querySelector('.texto2');
          const botonCopiar=document.querySelector('.botonCopy');
          botonCopiar.addEventListener('click',()=>{
              texto2.select()
              let copiado=document.execCommand('copy')
              div.innerHTML=`<div class="divArea">
              <textarea name="area_de_texto" rows="3" cols="50" class="texto2">Texto copiado</textarea>
              <div class="divBoton">
              <button class="botonCopy">Copiar texto</button>
          </div>
          </div>
      
      </div>`;
              imagen.appendChild(div)
             
              
          })
           
       }
    }

botonE.addEventListener('click',entrada)
botonD.addEventListener('click',salida)
