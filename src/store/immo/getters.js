export function biens(state) {
    return state.properties;
}

/* export function getImmo(state, id){
 return state.pro.find(immo => immo.id == id)
 }*/

export const getBien = (state) => (id) => {
        return state.properties.find((immo) => immo.id === id);
    }

//export function getBien(state) {
//    return function (id) {
//        return state.properties.find((immo) => immo.id === id);
//    }
//}


