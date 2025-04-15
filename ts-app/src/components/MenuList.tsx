import React from 'react';
import {Menu, MenuPrice, MenuSource} from "@interfaces/common"


// props 타입을 체크!! : property와 데이터타입이 동일 - interface, type
// interface MenuListProps {
//     menu : {
//         name:string;
//         emoji:string;
//         price?:number;
//         source?:string;
//     }
// }

// 2. props 타입을 체크!! : interface + type
// interface Menu {
//     name: string;
//     emoji: string;
//     price?: number;
//     source?: string;
// }

// 3. props 타입을 체크!! : interface(부모,자식 관계도출) + type


// 4. interface 또는 typeAlias를 별도의 파일로 저장후 import해서 사용함
// tsconfig.json 파일에 저장된 파일의 경로를 path와 별칭으로 추가한 후 import

type MenuListProps = {
    menus:( Menu | MenuPrice | MenuSource)[];
}



const MenuList: React.FC<MenuListProps> = ({ menus }) => {

    return (
        <div>
            <ul>
                {
                    menus.map((menu)=>(
                        <li>{menu.name},{menu.emoji},{menu.price}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default MenuList;