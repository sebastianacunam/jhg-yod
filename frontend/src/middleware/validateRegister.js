export default function validateRegister(input){
    let errors = {}
    // const onlyMail = "[^@\s]+@[^@\s]+\.[^@\s]+"
    const onlyMail = "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
    // const onlyMail = "/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/"
    if (!input.name){
        errors.name = 'Campo requerido'
    } else {
        errors.name = ''
    }
    
    if (!input.email) {
        errors.email = 'Campo requerido'
    } else if (!input.email.match(onlyMail)){
        errors.email = 'Mail inválido'
    }else {
        errors.email = ''
    }
    
    if (!input.password1){
        errors.password1 = 'Campo requerido'    
    } else {
        errors.password1 = ''    
    }

    return errors
   
}