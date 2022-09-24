import React from 'react';
import "../ProductAccessory/Accessory.scss";

import { AccesoryItem } from './AccesoryItem';

const Accessory = () => {

    return (
        <>
            <div className='Accessory'>
                <div className='Accessory-Title ml-5 mt-5 pt-5'>
                    <h3>Các dòng xe Mercedes-Benz</h3>
                    <div className='Accessory-Control'>
                        <div className='Accessory-Control-01'>
                            {AccesoryItem.map((item, index) => {
                                return (
                                    <button type='button' className="Buton-Accessory">{item.NameButton}</button>
                                )
                            })}
                        </div>
                    </div>
                    <div className='Accessory-Body'>
                        <div className='Accessory-Category col-3'>
                            <div className='Accessory-Category-Item pl-2'>
                                <div className='Accessory-Category-Item-Type-Energy'>
                                    <div className='Accessory-Category-Item-Type-title'>
                                        <h3>Loại nhiên liệu</h3>
                                    </div>
                                    <div className='Category-Item-Type-Energy ml-3'>
                                        <input type='checkbox' className='Input-Type-Energy' />
                                        <label className='Label-Type-Energy'>Điện</label>
                                    </div>

                                </div>
                                <div className='Accessory-Category-Item-Type pt-5'>
                                    <div className='Accessory-Category-Item-Type-Title'>
                                        <h3>Loại thân xe</h3>
                                    </div>
                                    <div className='Accessory-Category-Item-Type-Button ml-3'>
                                        <button className='Accessory-Category-Item-Button' type='button'>Xe Sịn 01</button>
                                        <button className='Accessory-Category-Item-Button' type='button'>Xe Sịn 02</button>
                                        <button className='Accessory-Category-Item-Button' type='button'>Xe Sịn 03</button>
                                        <button className='Accessory-Category-Item-Button' type='button'>Xe Sịn 04</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='Accessory-Section col-9'>Body</div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Accessory;
