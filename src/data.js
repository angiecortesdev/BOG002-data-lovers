 // estas funciones son de ejemplo

 //  export const example = () => {
 //      return 'example';
 //  };

 //  export const anotherExample = () => {
 //      return 'OMG';
 //  };


 //esta parte es de filtrar tipo de pokemon



 export const pokego = {
     filterData: (data, condition) => {
         let tiposDePokemon;
         if (typeof(condition) === "string") {
             tiposDePokemon = data.filter(tipos => {
                 return tipos.type.indexOf(condition) !== -1;
             })
         } else {
             return tiposDePokemon;
         }

     },

 }

 //  export const pokegOrdenar = {
 //      sortData: (data, sortBy, sortOrder) => {
 //          if (sortBy === "name" && sortOrder === "A-Z") {
 //              data.sort((prev, next) => {
 //                  if (prev.name < next.name) {
 //                      return -1;
 //                  }
 //                  if (prev.name > next.name) {
 //                      return 1;
 //                  }
 //                  //prev debe ser igual next
 //                  return 0;
 //              })
 //              return data;
 //          }
 //          if (sortBy === "name" && sortOrder === "Z-A") {
 //              data.sort((prev, next) => {
 //                  if (prev.name > next.name) {
 //                      return -1;
 //                  }
 //                  if (prev.name < next.name) {
 //                      return 1;
 //                  }
 //                  //prev debe ser igual next
 //                  return 0;

 //              })
 //              return data;

 //          }

 //          if (sortBy === "num" && sortOrder === "1-251") {
 //              data.sort((prev, next) => {
 //                  if (prev.id < next.id) {
 //                      return -1;
 //                  }
 //                  if (prev.id > next.id) {
 //                      return 1;
 //                  }
 //                  return 0;
 //              })
 //              return data
 //          }


 //      }

 //  }