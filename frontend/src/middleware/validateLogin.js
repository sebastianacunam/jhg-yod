export default function validateLogin(input){
    let errors = {}

    const onlyMail = "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
    
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