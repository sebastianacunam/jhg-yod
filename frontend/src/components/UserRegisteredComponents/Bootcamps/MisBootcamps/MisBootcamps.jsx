import React, { useEffect } from 'react'
import Bootcamp from '../Bootcamp/Bootcamp.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { usuarioActual } from "../../../../redux/actions/actionUser";
import { Link } from 'react-router-dom';
import LeftMenu from '../../LeftMenu/LeftMenu.jsx';
import '../../../../assets/scss/layout/_misProductos.scss'

export default function MisBootcamps() {

    const dispatch = useDispatch();
    const usuarioAct = useSelector((state) => state.usuarioActual);
    const bootcamps = usuarioAct.bootcamps;
    const token = localStorage.getItem("token");

    useEffect(() => {
        token ? dispatch(usuarioActual()) : null;
      }, []);
    return (
        <div className='container-left-n-right'>
            <LeftMenu />
            <div className='right-section'>
                <h2>Mis bootcamps</h2>
                <div className='mc-container'>

                    {bootcamps?.length !== 0 ? (
                    usuarioAct.bootcamps?.map((e, i) => {
                        return (
                        <div key={i}>
                            <Bootcamp
                            id={e?.id}
                            name={e?.name}
                            description={e?.description}
                            />
                        </div>
                        );
                    })
                    ) : (
                    <div className='no-producto'>
                        <p>No tienes bootcamps todavía. </p>
                        <p>
                        Puedes ver nuestros bootcamps &nbsp;
                        <Link to='/bootcamps'>acá</Link>
                        </p>
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
}
