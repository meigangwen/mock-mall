import useMallStore from '../state/mallStore';
import { useEffect } from 'react'

export default function Directory(props) {

    const {focusedLevel, levelNames, focusedShop} = useMallStore();
    const directory = [
        [],
        [
            {'number': '02-01', 'name':'Dum Coffee', 'category':'f&b' },
            {'number': '02-02', 'name':'Cotton World', 'category':'fasion' },
            {'number': '02-03', 'name':'Ply Wood', 'category':'home' },
            {'number': '02-04', 'name':'Puppy Paw', 'category':'pet' },
            {'number': '02-05', 'name':'Highlander', 'category':'fasion' },
            {'number': '02-06', 'name':'Dim Sum Sum', 'category':'f&b' },
            {'number': '02-07', 'name':'Toy Wrangle', 'category':'kids' },
            {'number': '02-08', 'name':'Cotton Candy', 'category':'f&b' },
            {'number': '02-09', 'name':'Go Running', 'category':'sports' },
            {'number': '02-10', 'name':'Bookworm', 'category':'book' },
            {'number': '02-11', 'name':'Dum Coffee', 'category':'f&b' },
            {'number': '02-12', 'name':'Cotton World', 'category':'fasion' },
            {'number': '02-13', 'name':'Ply Wood', 'category':'home' },
            {'number': '02-14', 'name':'Puppy Paw', 'category':'pet' },
            {'number': '02-15', 'name':'Highlander', 'category':'fasion' },
            {'number': '02-16', 'name':'Dim Sum Sum', 'category':'f&b' },
            {'number': '02-17', 'name':'Toy Wrangle', 'category':'kids' },
            {'number': '02-18', 'name':'Cotton Candy', 'category':'f&b' },
            {'number': '02-19', 'name':'Go Running', 'category':'sports' },
            {'number': '02-20', 'name':'Bookworm', 'category':'book' },
        ],
        [
            {'number': '02-01', 'name':'Dum Coffee', 'category':'f&b' },
            {'number': '02-02', 'name':'Cotton World', 'category':'fasion' },
            {'number': '02-03', 'name':'Ply Wood', 'category':'home' },
            {'number': '02-04', 'name':'Puppy Paw', 'category':'pet' },
            {'number': '02-05', 'name':'Highlander', 'category':'fasion' },
            {'number': '02-06', 'name':'Dim Sum Sum', 'category':'f&b' },
            {'number': '02-07', 'name':'Toy Wrangle', 'category':'kids' },
            {'number': '02-08', 'name':'Cotton Candy', 'category':'f&b' },
            {'number': '02-09', 'name':'Go Running', 'category':'sports' },
            {'number': '02-10', 'name':'Bookworm', 'category':'book' },
            {'number': '02-11', 'name':'Dum Coffee', 'category':'f&b' },
            {'number': '02-12', 'name':'Cotton World', 'category':'fasion' },
            {'number': '02-13', 'name':'Ply Wood', 'category':'home' },
            {'number': '02-14', 'name':'Puppy Paw', 'category':'pet' },
            {'number': '02-15', 'name':'Highlander', 'category':'fasion' },
            {'number': '02-16', 'name':'Dim Sum Sum', 'category':'f&b' },
            {'number': '02-17', 'name':'Toy Wrangle', 'category':'kids' },
            {'number': '02-18', 'name':'Cotton Candy', 'category':'f&b' },
            {'number': '02-19', 'name':'Go Running', 'category':'sports' },
            {'number': '02-20', 'name':'Bookworm', 'category':'book' },
        ],
        [
            {'number': '02-01', 'name':'Dum Coffee', 'category':'f&b' },
            {'number': '02-02', 'name':'Cotton World', 'category':'fasion' },
            {'number': '02-03', 'name':'Ply Wood', 'category':'home' },
            {'number': '02-04', 'name':'Puppy Paw', 'category':'pet' },
            {'number': '02-05', 'name':'Highlander', 'category':'fasion' },
            {'number': '02-06', 'name':'Dim Sum Sum', 'category':'f&b' },
            {'number': '02-07', 'name':'Toy Wrangle', 'category':'kids' },
            {'number': '02-08', 'name':'Cotton Candy', 'category':'f&b' },
            {'number': '02-09', 'name':'Go Running', 'category':'sports' },
            {'number': '02-10', 'name':'Bookworm', 'category':'book' },
            {'number': '02-11', 'name':'Dum Coffee', 'category':'f&b' },
            {'number': '02-12', 'name':'Cotton World', 'category':'fasion' },
            {'number': '02-13', 'name':'Ply Wood', 'category':'home' },
            {'number': '02-14', 'name':'Puppy Paw', 'category':'pet' },
            {'number': '02-15', 'name':'Highlander', 'category':'fasion' },
            {'number': '02-16', 'name':'Dim Sum Sum', 'category':'f&b' },
            {'number': '02-17', 'name':'Toy Wrangle', 'category':'kids' },
            {'number': '02-18', 'name':'Cotton Candy', 'category':'f&b' },
            {'number': '02-19', 'name':'Go Running', 'category':'sports' },
            {'number': '02-20', 'name':'Bookworm', 'category':'book' },
        ],
        [
            {'number': '02-01', 'name':'Dum Coffee', 'category':'f&b' },
            {'number': '02-02', 'name':'Cotton World', 'category':'fasion' },
            {'number': '02-03', 'name':'Ply Wood', 'category':'home' },
            {'number': '02-04', 'name':'Puppy Paw', 'category':'pet' },
            {'number': '02-05', 'name':'Highlander', 'category':'fasion' },
            {'number': '02-06', 'name':'Dim Sum Sum', 'category':'f&b' },
            {'number': '02-07', 'name':'Toy Wrangle', 'category':'kids' },
            {'number': '02-08', 'name':'Cotton Candy', 'category':'f&b' },
            {'number': '02-09', 'name':'Go Running', 'category':'sports' },
            {'number': '02-10', 'name':'Bookworm', 'category':'book' },
            {'number': '02-11', 'name':'Dum Coffee', 'category':'f&b' },
            {'number': '02-12', 'name':'Cotton World', 'category':'fasion' },
            {'number': '02-13', 'name':'Ply Wood', 'category':'home' },
            {'number': '02-14', 'name':'Puppy Paw', 'category':'pet' },
            {'number': '02-15', 'name':'Highlander', 'category':'fasion' },
            {'number': '02-16', 'name':'Dim Sum Sum', 'category':'f&b' },
            {'number': '02-17', 'name':'Toy Wrangle', 'category':'kids' },
            {'number': '02-18', 'name':'Cotton Candy', 'category':'f&b' },
            {'number': '02-19', 'name':'Go Running', 'category':'sports' },
            {'number': '02-20', 'name':'Bookworm', 'category':'book' },
        ]
    ];
    const shops = directory[focusedLevel-1];
    
    return (
        <div className="directory">
            <h1 className="text-white text-2xl">{levelNames[focusedLevel-1]} Directory</h1>
            <br></br>
            {
                shops.map((shop, index)=> (
                    <div className={focusedShop===index?"text-red-600 text-xl":"text-white text-xl"} key={index}> {shop['number']} {shop['name']}</div>
                ))
            }
        </div>
    )
}