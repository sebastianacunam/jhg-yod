import React, { useEffect } from 'react'
import Curso from '../Curso/Curso.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { usuarioActual } from "../../../../redux/actions/actionUser";

export default function MisCursos() {

    const dispatch = useDispatch();
    const usuarioAct = useSelector((state) => state.usuarioActual);
    const cursos = usuarioAct.cursos;
    const token = localStorage.getItem("token");

    useEffect(() => {
        token ? dispatch(usuarioActual()) : null;
      }, []);
    return (
        <div>
            <h4>cursos</h4>

            {cursos?.length !== 0 ? (
            usuarioAct.cursos?.map((e, i) => {
                return (
                <div key={i}>
                    <Curso
                    id={e?.id}
                    name={e?.name}
                    description={e?.description}
                    />
                </div>
                );
            })
            ) : (
            <div>
                <p>No tienes cursos todavía. </p>
                <p>
                Puedes ver nuestros cursos &nbsp;
                <Link to='/cursos'>acá</Link>
                </p>
            </div>
            )}
        </div>
    )
}
