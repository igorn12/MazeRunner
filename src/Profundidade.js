import Estado from './Estado'
class BuscaEmProfundidade {

    constructor() {
        this.visitados = []
    }

    busca(estado_inicial, estado_final, lab) {

        if(this.visitados.filter( (visitou) => {
            if((visitou.getX() === estado_inicial.getX()) && (visitou.getY() === estado_inicial.getY())) {
                return true
            }
        }).length > 0) {
            return
        }

        this.visitados.push(new Estado(estado_inicial.getX(), estado_inicial.getY()))
    
        if(estado_inicial.getX() === estado_final.getX() && estado_inicial.getY() === estado_final.getY()) {
            console.log('Achei')
            return
        }
        this.busca(this.mover_baixo(estado_inicial,lab),estado_final,lab)
        this.busca(this.mover_cima(estado_inicial,lab),estado_final,lab)
        this.busca(this.mover_esquerda(estado_inicial,lab) ,estado_final,lab)
        this.busca(this.mover_direita(estado_inicial,lab) ,estado_final,lab)
    }

    mover_cima(estado, lab) {
        if(lab[estado.getX()-1][estado.getY()] !== '#') {
            lab[estado.getX()-1][estado.getY()] = '2'
            return new Estado(estado.getX()-1, estado.getY())
        } else {
            return estado
        }
    }

    mover_baixo(estado, lab) {
        if(lab[estado.getX()+1][estado.getY()] !== '#') {
            lab[estado.getX()+1][estado.getY()] = '2'
            return new Estado(estado.getX()+1, estado.getY())
        } else {
            return estado
        }
    }

    mover_esquerda(estado, lab) {
        if(lab[estado.getX()][estado.getY()-1] !== '#') {
            lab[estado.getX()][estado.getY()-1] = '2'
            return new Estado(estado.getX(), estado.getY()-1)
        } else {
            return estado
        }
    }

    mover_direita(estado, lab) {
        if(lab[estado.getX()][estado.getY()+1] !== '#') {
            lab[estado.getX()][estado.getY()+1] = '2'
            return new Estado(estado.getX(), estado.getY()+1)
        } else {
            return estado
        }
    }
}
export default BuscaEmProfundidade