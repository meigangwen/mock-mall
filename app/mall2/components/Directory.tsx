import useMallStore from '../state/mallStore';
import { useEffect } from 'react';
import { shopData } from '../data/shopData';

export default function Directory(props) {

    const {category, focusedLevel, levelNames, focusedShop} = useMallStore();
    const shops = shopData[focusedLevel-1];
    
    return (
        <div className="directory">
            <h1 className="text-white text-2xl">{levelNames[focusedLevel-1]} Directory</h1>
            <br></br>
            {
                shops.map((shop, index)=> (
                    <div 
                        className={ (focusedShop===index) || (category === shop['category']) ?"text-red-600 text-base":"text-white text-base"} 
                        key={index}
                    > 
                        {shop['number']} 
                        &nbsp;&nbsp;&nbsp;
                        {shop['name']}
                    </div>
                ))
            }
        </div>
    )
}