export default class Sorter {
  constructor() {

  }

  /**
   * Cria uma distribução de paginas em ordem de booklet
   * @param {} pageNum numero de paginas do livreto(multiplos de 4)
   */
  sortBooklet(pageNum){
    let a = 1
    let output = []
    if ((pageNum%4)==0) {
      for (let i = 1; i <= pageNum/4 ; i++) {
          output.push(pageNum-(a-1))
          output.push(a)
          output.push(a+1)
          output.push(pageNum-a)
          a+=2
      }
      return output
    }
  }

  /**
  * Cria uma distribução de paginas com as paginas duplicadas uma a uma
  * @param {} pageNum numero de páginas da distribução
  */
  sortTwoPerPage(pageNum){
    let output = []
    for (var i = 0; i < pageNum; i++) {
      output.push(i+1)
      output.push(i+1)
    }
    return output
  }

  /**
   * Cria uma distribuição de paginas para dois booklets por folha
   *
   * @param {*} pageNum numero de paginas a serem distribuídas
   */
  sortDoubleBooklet(pageNum){
    let a = 1
    let output = []
    if ((pageNum%4)==0) {
      for (let i = 1; i <= pageNum/4 ; i++) {
          output.push(pageNum-(a-1))
          output.push(a)
          output.push(pageNum-(a-1))
          output.push(a)
          output.push(a+1)
          output.push(pageNum-a)
          output.push(a+1)
          output.push(pageNum-a)
          a+=2
      }
      return output
    }
  }

}
