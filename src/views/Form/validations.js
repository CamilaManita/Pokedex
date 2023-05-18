const validation = (form) => {
    
    let errors = {};

    //name

    if(!form.name) errors.name = "Por favor completa este campo";

    if (form.name.length > 25) errors.name = "Debe tener menos de 25 caracteres";

    if(!/^[a-zA-Z ]*$/.test(form.name)) errors.name = "Solo se admiten letras";

    //image

    if(!form.image) errors.image = 'Por favor completa este campo';

    if(!/(https?:\/\/.*\.(?:png|jpg))/i.test(form.image)) errors.image = 'Solo se permiten fotos png o jpg'
    
    //hp
    if(!form.hp) errors.hp = "Por favor completa este campo";
    
    if(!/^[0-9]*$/.test(form.hp)) errors.hp = "Solo se admiten números";

    //attack
    if(!form.attack) errors.attack = "Por favor completa este campo";
    
    if(!/^[0-9]*$/.test(form.attack)) errors.attack = "Solo se admiten números";
    
    //defense
    if(!form.defense) errors.defense = "Por favor completa este campo";
    
    if(!/^[0-9]*$/.test(form.defense)) errors.defense = "Solo se admiten números";
    
    //speed
    if(!form.speed) errors.speed = "Por favor completa este campo";
    
    if(!/^[0-9]*$/.test(form.speed)) errors.speed = "Solo se admiten números";
    
    //height
    if(!form.height) errors.height = "Por favor completa este campo";
    
    if(!/^[0-9]*$/.test(form.height)) errors.height= "Solo se admiten números";
    
    //weight
    if(!form.weight) errors.weight = "Por favor completa este campo";
    
    if(!/^[0-9]*$/.test(form.weight)) errors.weight= "Solo se admiten números";


    return errors;
}

export default validation; 