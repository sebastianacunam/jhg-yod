import Mentorias from "../models/mentoria.js";

// GET Todas las Mentorias
export const getMentorias = async (req, res) => {
    try {
        await Mentorias.find({}).then((results) => {
            let mentorias = results.map((result) => {
                return {
                    id: result._id,
                    name: result.name,
                    description: result.description
                };
            });

            return mentorias 
                ? res.status(200).json(mentorias)
                : res.status(404).send("Mentorias Not Found");
        });
    } catch (error) {
        console.log("GET MENTORIAS", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

// GET Mentoria por id
export const findMentoria = async (req, res) => {
    const { id } = req.params;

    try {
        const mentoriaId = await Mentorias.findById(id);
        return mentoriaId 
            ? res.status(200).send({ data: mentoriaId })
            : res.status(404).send("Mentoria Not Found")
    } catch (error) {
        console.log("GET MENTORIA", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

// POST nueva Mentoria
export const createMentoria = async (req, res) => {
    try {
        const { name, description } = req.body;
        if (!name || !description) {
            return res.status(401).send("Falta de Datos");
        }

        const newMentoria = new Mentorias(req.body);
        const savedMentoria = await newMentoria.save();

        return res.status(201).json(savedMentoria);
    } catch (error) {
        console.log("POST MENTORIA", error);
        return res.status(500).json({ message: "Internal Server Error" });  
    }
};

// PUT Mentoria
export const editMentoria = async (req, res) => {
    const data = req.body;
    const { id } = req.params;

    try {
        if (id.length === 24) {
            const mentoria = await Mentorias.findByIdAndUpdate(
                { _id: id },
                data,
                { new: true }
            )

            if (!mentoria) {
                const error = new Error("No existe la Mentoria con ese ID");
                return res.status(404).json({ msg: error.message });
            } else {
                return res.status(200).json({ msg: "Mentoria Actualizada", mentoria })
            }
        }
    } catch (error) {
        console.log("PUT MENTORIA", error);
        return res.status(500).json({ message: "Internal Server Error" }); 
    }
};

// DELETE Mentoria
export const deleteMentoria = async (req, res) => {
    try {
        const { id } = req.params
        const mentoriaId = await Mentorias.findOneAndDelete({ _id: id })
        
        return mentoriaId 
            ? res.status(200).send({ msg: "Mentoria Eliminada", dataDeleted: mentoriaId })
            : res.status(404).send("Mentoria Not Found")
    } catch (error) {
        console.log("DELETE MENTORIA", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};