function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('verifique os dados ')
    } else {
        //window.alert('okay')
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
var gênero = ''  
var img = document.createElement('img')
img.setAttribute('id', 'foto')
if (fsex[0].checked) {
    gênero = 'homem' 
    if (idade >=0 && idade < 10) {
        //criança
        img.setAttribute('src', 'foto-bb-m.png')
    } else  if (idade < 21) {
        // jovem
        img.setAttribute('src', 'foto-jovem-m.png')
    } else if (idade < 50) {
        //adulto
        img.setAttribute('src', 'foto-adulto-m.png')
    } else {
        //idoso
        img.setAttribute('src', 'foto-idoso-m.png' )
       }
    } else if (fsex[1].checked) {
        gênero = 'mulher'
        if (idade >=0 && idade < 10) {
            //criança
            img.setAttribute('src','foto-bb-f.png')
        } else  if (idade < 21) {
            // jovem
            img.setAttribute('src','foto-jovem-f.png')
      } else if (idade < 50) {
            //adulto
            img.setAttribute('src','foto-adulta-f.png')
        }else {
            //idoso
            img.setAttribute('src','foto-idosa-f.png')
           }
    }
    res.style.textAling = 'center'
    res.innerHTML =  `detectamos ${gênero} com ${idade} anos. `
     res.appendChild(img)
     
     }

  }
    
    

