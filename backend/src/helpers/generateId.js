//Esta función sirve para el generar el token del usuario. 
const generateId = () => {
    const random = Math.random().toString(32).substring(2);
    const fecha = Date.now().toString(32)
    return random + fecha;
};

export{
    generateId,
}