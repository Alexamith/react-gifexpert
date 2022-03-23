import React,{useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';



export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['cars']);

    return (
            <div className="title-page">
                <h2 >GifExpertApp</h2>   
            <div >

            </div>
            <AddCategory setCategories={setCategories} />
            <hr />
                {
                    categories.map(category => {
                        return <GifGrid key={category} category={category}></GifGrid>
                    })
                }

        </div>
    )
    
}
