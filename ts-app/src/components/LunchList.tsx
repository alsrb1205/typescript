import { Food, FoodPrice, FoodText } from '@interfaces/common';
import React from 'react';


type LunchListProps = {
    foodList: (Food | FoodPrice | FoodText)[];
}

const LunchList: React.FC<LunchListProps> = ({ foodList }) => {
    return <div>
        <h2>lunchlist</h2>
        <ul>
            {
                foodList.map((food) => (
                    <li>
                        {food.name},
                        {food.emoji},
                        {'price' in food ? food.price : 'text' in food ? food.text : ''}
                    </li>
                ))
            }
        </ul>
    </div>
}

export default LunchList;