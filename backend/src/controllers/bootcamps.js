import Bootcamp from "../models/bootcamp.js"

/*************************************************************************/

//Traer todos los bootcamps
export const bootcamps = async (req, res) => {
  const body = req.body;
  try {
    const bootcamps = await Bootcamp.find({ body });
    res.send({ data: bootcamps });
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
}

/*************************************************************************/

//Encontrar un bootcamp por id
export const findBootcamp = async (req, res) => {
  const id = req.params.id;
  try {
    const bootcampId = await  Bootcamp.findById(id)
    res.send({data: bootcampId})
  } catch (error) {
    res.status(404).json({ msg: error.message })
  }
}

/*************************************************************************/

// Crear un bootcamp nuevo
export const createBootcamp = async (req, res) => {
  const bootcamp = new Bootcamp(req.body)
  try {
    const savedBootcamp = await bootcamp.save();
    res.status(201).json(savedBootcamp)
  } catch (error) {
    console.log(error)
  }
}

/*************************************************************************/

//Eliminar un bootcamp
export const deleteBootcamp = async (req, res) => {
  try {
    const id = req.params.id
    const bootcampId = await Bootcamp.findOneAndDelete({ _id: id})
    res.json({data: bootcampId}).status(201)
  } catch (error) {
    console.log(error)
  }
}

/*************************************************************************/

//Modificar un bootcamp
export const editBootcamp = async (req, res) => {
  const data = req.body   
  const id = req.params.id

  try {
    if(id.length == 24){
      const bootcamp = await Bootcamp.findByIdAndUpdate(
        { _id: id },
        data,
        { new: true }
      )
      if (!bootcamp) {
        const error = new Error("No existe el bootcamp con ese id.");
        return res.status(404).json({ msg: error.message });
      }
    } else {
        return res.send('El id es incorrecto').status(500)
    } 

  } catch (error) {
    console.log(error)
  }
}

/*************************************************************************/




