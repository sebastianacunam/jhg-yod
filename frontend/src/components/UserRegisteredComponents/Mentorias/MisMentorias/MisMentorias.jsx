import React, { useEffect } from 'react'
import Mentoria from '../Mentoria/Mentoria.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { usuarioActual } from "../../../../redux/actions/actionUser";
import { Link } from 'react-router-dom';
import LeftMenu from '../../LeftMenu/LeftMenu.jsx';
import '../../../../assets/scss/layout/_misCursos.scss'

export default function MisMentorias() {

    const dispatch = useDispatch();
    const usuarioAct = useSelector((state) => state.usuarioActual);
    const mentorias = usuarioAct.mentorias;
    const token = localStorage.getItem("token");

    useEffect(() => {
        token ? dispatch(usuarioActual()) : null;
      }, []);
    return (
        <div className='container-left-n-right'>
            <LeftMenu />
            <div className='right-section'>
                <h2>Mis mentorias</h2>
                <div className='mc-container'>

                    {mentorias?.length !== 0 ? (
                    usuarioAct.mentorias?.map((e, i) => {
                        return (
                        <div key={i}>
                            <Mentoria
                            id={e?.id}
                            name={e?.name}
                            description={e?.description}
                            />
                        </div>
                        );
                    })
                    ) : (
                    <div>
                        <p>No tienes mentorias todavía. </p>
                        <p>
                        Puedes ver nuestras mentorias &nbsp;
                        <Link to='/mentorias'>acá</Link>
                        </p>
                    </div>
                    )}

                </div>

            </div>




        </div>
    )
}
