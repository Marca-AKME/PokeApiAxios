export function pokeTypes(types) {
    
    const type_1 = types[0].type.name;
    const monoType = [type_1];

    if (types.length == 1) {
        
        //console.log(monoType);

        return monoType;

    }

    if (types.length > 1) {
       
        const type_2 = types[1].type.name;
        const multiType =  [type_1, type_2];
        //console.log(multiType);

        return multiType;

    }
}

// return types.length > 1 ? console.log(multiType) : console.log(monoType);
// return types.length > 1 ? console.log([types[0].type.name, types[1].type.name]) : console.log([types[0].type.name]);
