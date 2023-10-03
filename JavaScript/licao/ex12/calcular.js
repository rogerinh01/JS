export function media (a, b, c){
	 
	 
    let x = (a + b + c)/3
    
    return x.toFixed(1)
}

export function situacao (a){

    let situ = ''

    if ( a >=8){

        situ = 'aprovado com sucesso'
    }

    else if ( a >= 6 && a <8 ){

        situ = 'aprovado'
    }

    else if ( a >= 3 && a <6 ){

        situ = 'recuperação'
    }

    else if ( a >= 1 && a <3 ){

        situ = 'reprovado'
    }


    else {
        situ = 'desistente'
    }

    return situ
    
}