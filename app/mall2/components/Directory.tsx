import useMallStore from '../state/mallStore';
import { useEffect } from 'react'

export default function Directory(props) {

    const {focusedLevel, levelNames} = useMallStore();
    const directory = [
        [],
        [],
        [
            {'number': '02-01', 'name':'Dum Coffee', 'category':'f&b' },
            {'number': '02-02', 'name':'Cotton World', 'category':'fasion' },
            {'number': '02-03', 'name':'Ply Wood', 'category':'home' },
            {'number': '02-04', 'name':'Dum Coffee', 'category':'f&b' },
            {'number': '02-05', 'name':'Dum Coffee', 'category':'f&b' },
            {'number': '02-06', 'name':'Dum Coffee', 'category':'f&b' },
            {'number': '02-07', 'name':'Dum Coffee', 'category':'f&b' },
            {'number': '02-08', 'name':'Dum Coffee', 'category':'f&b' },
            {'number': '02-09', 'name':'Dum Coffee', 'category':'f&b' },
            {'number': '02-10', 'name':'Dum Coffee', 'category':'f&b' },
        ],
        [],
        []
    ];
    const shops = directory[focusedLevel-1];
    
    /*
    //let shops = [];
    useEffect(() => {
        shops = directory[focusedLevel-1];
    }, [focusedLevel])
    */

    return (
        <div className="directory">
            <h1 className="text-white text-2xl">{levelNames[focusedLevel-1]} Directory</h1>
            <br></br>
            {
                shops.map((shop, index)=> (
                    <div className="text-white text-xl" key={index}> {shop['number']} {shop['name']}</div>
                ))
            }
        </div>
    )
}