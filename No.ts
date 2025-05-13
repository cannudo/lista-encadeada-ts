export class No<TipoGenerico> {
    private dado: TipoGenerico;
    private proximoNo: No<TipoGenerico> | null;

    constructor(dado: TipoGenerico) {
        this.dado = dado;
        this.proximoNo = null;
    }

    getDado(): TipoGenerico {
        return this.dado;
    }

    setDado(novoDado: TipoGenerico) {
        this.dado = novoDado;
    }

    getProximoNo(): No<TipoGenerico> | null {
        return this.proximoNo;
    }

    setProximoNo(novoNo: No<TipoGenerico> | null) {
        this.proximoNo = novoNo;
    }

    toString(): string {
        let retorno = `${this.getDado()} ➞ `;
        if (this.proximoNo === null) {
            retorno += '∅';
        } else {
            retorno += this.proximoNo.getDado();
        }
        return retorno;
  }

}