const validation = (form) => {
    
    let errors = {};

    //name

    if(!form.name) errors.name = "please complete this field";
    if (form.name.length > 12) errors.name = "must be less than 12 characters";
    if(!/^[a-zA-Z ]*$/.test(form.name)) errors.name = "only letters are allowed";
    
    //image
    
    if(!form.image) errors.image = 'please complete this field';
    if(!/\.(jpg|png)$/i.test(form.image)) errors.image = "the URL must end in .jpg or .png";
    
    // types
    if (form.types.length === 0) errors.types = "you must select at least one type";
    if (form.types.length > 2) errors.types = 'Puedes seleccionar hasta 2 tipos' 
    
    //hp
    if(!form.hp) errors.hp = "please complete this field";
    if(form.hp > 100 || form.hp < 1) errors.hp = 'no puede ser mayor a 100 o mejor a 1' 
    if(!/^[0-9]*$/.test(form.hp)) errors.hp = "only numbers are allowed";

    //attack
    if(!form.attack) errors.attack = "please complete this field";
    
    if(!/^[0-9]*$/.test(form.attack)) errors.attack = "only numbers are allowed";
    
    //defense
    if(!form.defense) errors.defense = "please complete this field";
    
    if(!/^[0-9]*$/.test(form.defense)) errors.defense = "only numbers are allowed";
    
    //speed
    if(!form.speed) errors.speed = "please complete this field";
    
    if(!/^[0-9]*$/.test(form.speed)) errors.speed = "only numbers are allowed";
    
    //height
    if(!form.height) errors.height = "please complete this field";
    
    if(!/^[0-9]*$/.test(form.height)) errors.height= "only numbers are allowed";
    
    //weight
    if(!form.weight) errors.weight = "please complete this field";
    
    if(!/^[0-9]*$/.test(form.weight)) errors.weight= "only numbers are allowed";


    return errors;
}

export default validation; 