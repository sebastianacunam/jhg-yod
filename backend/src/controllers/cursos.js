import Curso from "../models/cursos.js"
import Usuario from "../models/usuario.js";

/*************************************************************************/

//Traer todos los cursos
export const cursos = async (req, res) => {
  try {
    await Curso.find({}).then((results)=>{
      let prueba = results.map((e)=>{
        return{
          id: e._id,
          name: e.name,
          description: e.description
        };
      });
      return res.json(prueba)
    })
  } catch (error) {
    console.log(error)
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
//Relación entre el curso y el usuario que lo solicita/compra. 

export const comprarCurso = async (req, res) => {
  const cursoId = req.params.id;
  const usuarioId = req.usuario._id
  
  try {
      const usuario = await Usuario.findById(usuarioId)
      const curso = await Curso.findById(cursoId).populate("_id")
      
      const cursoExistente = usuario.cursos.find(c => c.id.toString() === cursoId);

      if (!usuario || !curso) return res.status(404).json({ msg: 'Usuario o curso no encontrado' });

      if (!cursoExistente) {
        usuario.cursos.push({
            id: cursoId,
            name: curso.name,
            description: curso.description
        });
        await usuario.save();
      }else{
        return res.status(409).json({msg:"Ya posees este curso"})
      }

      res.json({ msg: 'Curso comprado exitosamente', usuario: usuario });
  } catch (error) {
      console.error(error);
      res.status(500).json({ msg: 'Error al comprar el curso' });
  }
};

