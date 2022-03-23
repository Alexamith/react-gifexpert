import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({category}) => {
    const {loading,data} = useFetchGifs({category});
    return (
        <div className=' gif-container gif-row'>
            <div className='gif-column-title' >
                {loading && 'Cargando...'}
            </div>
            <div className='gif-container'>
                {
                    data.map(img => {
                        return <GifGridItem key = {img.id} {...img}></GifGridItem>
                    })
                }
            </div>
        </div>
    );
}
