import React from 'react';

function EmployeeSelector({ onSelectEmployee }) {
    const employees = ["Employee 1", "Employee 2", "Employee 3"]; // Replace with actual employees

    return (
        <div className="employee-selector">
            <select onChange={(e) => onSelectEmployee(e.target.value)}>
                <option value="">Geen medewerkervoorkeur</option>
                {employees.map((employee, index) => (
                    <option key={index} value={employee}>{employee}</option>
                ))}
            </select>
        </div>
    );
}

export default EmployeeSelector;
