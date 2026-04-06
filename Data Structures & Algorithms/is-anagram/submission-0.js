class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false

        const map = new Map()

        for (const char of s) {
            //se hace el set del caracter y conteo de veces que aparece. 
            //Si al hacer el get, aun no existe, se macra con 0
            //si el char ya esxistia en el array se le suma con +1
            map.set(char, (map.get(char) || 0) + 1);
        }

        //Aca se hace una iteracion del map creado con `s` en el cual se van a restar el conteo de chars
        for (const char of t){
            //primero se verifica si el char ya esta en el mapa
            //si no esta se regresa false inmediatamente ya que esto significa que 
            //los strings son diferentes
            if (!map.has(char)) return false

            //en caso de que si exista, se empieza a hacer la resta.
            map.set(char, map.get(char)-1)

//si char ya esta en 0 se elimina del map
            if (map.get(char)===0){
                map.delete(char)
            }
        }

        //se verifica si el size es de 0 significa que ambos strings tenian la misma cantidad y frecuencia de elementos
        return map.size === 0
    }
}
