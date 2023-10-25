import Anuncio from "../models/anuncio.js"

/*************************************************************************/

//Traer todos los anuncios
export const anuncios = async (req, res) => {
  const body = req.body;
  try {
    const destinies = await Anuncio.find({ body });
    res.send({ data: destinies });
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
}

/*************************************************************************/

//Encontrar un anuncio por id
export const findAnuncio = async (req, res, next) => {
  const id = req.params.id;
  try {
    const anuncioId = await  Anuncio.findById(id)
    res.send({data: anuncioId})
  } catch (error) {
    res.status(404).json({ msg: error.message })
  }
}

/*************************************************************************/

// Crear un anuncio nuevo
export const createAnuncio = async (req, res) => {
  const anuncio = new Anuncio(req.body)
  try {
    const anuncioAlmacenado = await anuncio.save();
    res.status(201).json(anuncioAlmacenado)
  } catch (error) {
    console.log(error)
  }
}

/*************************************************************************/

//Eliminar un anuncio nuevo
export const deleteAnuncio = async (req, res) => {
  try {
    const id = req.params.id
    const anuncioId = await Anuncio.findOneAndDelete({ _id: id})
    res.json({data: anuncioId}).status(201)
  } catch (error) {
    console.log(error)
  }
}
  
/*************************************************************************/

//Modificar un anuncio
export const editAnuncio = async (req, res, next) => {
  const data = req.body   
  const id = req.params.id

  try {
    if(id.length == 24){
      const anuncio = await Anuncio.findByIdAndUpdate(
        { _id: id },
        data,
        { new: true }
      )
      if (!anuncio) {
        const error = new Error("No existe el anuncio con ese id.");
        return res.status(404).json({ msg: error.message });
      }
      res.json(anuncio)
    } else {
        return res.send('El id es incorrecto').status(500)
    } 

  } catch (error) {
    console.log(error)
  }
}

/*************************************************************************/




