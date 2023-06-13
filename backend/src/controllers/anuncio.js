import Anuncio from "../models/anuncio.js"

/*************************************************************************/

//Traer todos los anuncios

export const anuncios = async (req, res, next) => {
  const body = req.body;
  try {
    const destinies = await Anuncio.find({ body });
    res.send({ data: destinies });
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

/*************************************************************************/


//Crear un anuncio nuevo

// export const createAnuncio = async (req, res, next) => {
//   const body = req.body;
//   
// };


/*************************************************************************/

//Eliminar un anuncio nuevo

// export const deleteAnuncio = async (req, res) => {
//   const id = req.params.id
//   try {

//   } catch (error) {

//   }
// }
  
/*************************************************************************/

//Modificar un anuncio nuevo

// export const updatedAnuncio = async (req, res, next) => {
//   const data = req.body   
//   const id = req.params.id
  
//   try {
//     const Chars = await Destiny.findByIdAndUpdate(id)
//     Object.assign(Chars,data)
//     Chars.save()
//     res.send({data:Chars})
//   } catch (error) {
//     res.status(404).send({error:"chars is not found"})
//   }
// }

/*************************************************************************/

//Encontrar un anuncio por id

// export const findAnuncio = async (req, res, next) => {
//   const id = req.params.id;
//   try {
//     const destinyId = await  Destiny.findById(id)
//     res.send({data: destinyId})
//   } catch (error) {
//     res.status(404).json({ msg: error.message })
//   }
// }

/*************************************************************************/




