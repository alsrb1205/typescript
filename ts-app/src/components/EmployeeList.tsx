import { Employee, EmployeeEmoji } from '@interfaces/common';
import React from 'react';

type EmployeeProps = {
    employees:( Employee | EmployeeEmoji)[];
}

const EmployeeList: React.FC<EmployeeProps> = ({ employees }) => {
    return <div>
        <ul>
            {
                employees.map((emp)=>(
                    
                    <li>{emp.name},{emp.age},{emp.department}</li>
                ))
            }
        </ul>
    </div>
}

export default EmployeeList;