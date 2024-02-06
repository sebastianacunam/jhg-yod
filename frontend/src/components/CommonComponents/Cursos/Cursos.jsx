import { React, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom"
import Curso from "../../CommonComponents/Curso/Curso";
import { getCursos } from '../../../redux/actions/actionCurso';

export default function Cursos() {
    const dispatch = useDispatch();
    const cursos = useSelector((state)=>state.allCursos)

    useEffect(()=>{
        dispatch(getCursos())
    }, [])

    return (
    <div>
        <h1>Da tus primeros pasos.</h1>
        <h3>Estos son nuestros cursos.</h3>
        {cursos?.map((e,i)=>{
            return(
            <div key={i}>
            
            <Curso
                id={e?._id}
                name={e?.name}
                description={e?.description}
                />
            </div>
            )
        })}
    </div>
    )
}
