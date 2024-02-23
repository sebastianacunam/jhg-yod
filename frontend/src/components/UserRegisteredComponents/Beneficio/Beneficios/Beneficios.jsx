import React from 'react'
import benefits from '../../../../utils/helperFunction.js'
import Beneficio from '../Beneficio/Beneficio.jsx';
import LeftMenu from '../../LeftMenu/LeftMenu.jsx';
import '../../../../assets/scss/layout/_beneficio.scss'


export default function Beneficios() {
    return (
        <div className='container-left-n-right'>
                <LeftMenu/>
            <div className='right-section'>
                <h5 className='titulo-beneficio'>Accede a una lista exclusiva.</h5>
                <h3>Conoce los beneficios.</h3>
     
                <div className='cards-benefits'>

                    {benefits?.map((e, i) => {
                    return (
                        <div key={i}>
                            <Beneficio 
                                id={e?.id} 
                                // name={e?.name} 
                                description={e?.description} 
                                img={e?.img}
                                />
                        </div>
                    );
                    })}
                </div>
        </div>
        </div>
  )
}
