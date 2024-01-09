import Curso from "../models/cursos.js"

/*************************************************************************/

//Traer todos los cursos
export const cursos = async (req, res) => {
  const body = req.body;
  try {
    const cursos = await Curso.find({ body });
    res.send({ data: cursos });
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
}

/*************************************************************************/

//Encontrar un cursos por id
export const findCurso = async (req, res) => {
  const id = req.params.id;
  try {
    const cursoId = await Curso.findById(id)
    res.send({data: cursoId})
  } catch (error) {
    res.status(404).json({ msg: error.message })
  }
}

/*************************************************************************/

// Crear un bootcamp nuevo
export const createCurso = async (req, res) => {
  const curso = new Curso(req.body)
  try {
    const savedCurso = await curso.save();
    res.status(201).json(savedCurso)
  } catch (error) {
    console.log(error)
  }
}

/*************************************************************************/

//Eliminar un curso
export const deleteCurso = async (req, res) => {
  try {
    const id = req.params.id
    const cursoId = await Curso.findOneAndDelete({ _id: id})
    res.json({data: cursoId}).status(201)
  } catch (error) {
    console.log(error)
  }
}
  
/*************************************************************************/

//Modificar un bootcamp
export const editCurso = async (req, res) => {
  const data = req.body   
  const id = req.params.id

  try {
    if(id.length == 24){
      const curso = await Curso.findByIdAndUpdate(
        { _id: id },
        data,
        { new: true }
      )
      if (!curso) {
        const error = new Error("No existe el curso con ese id.");
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




