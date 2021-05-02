import React from "react";

const DropdownFixItem = ({text, icon}) => {
    const className = `nav__list__item ${icon === 'logout' ? 'color-red' : ''}`;

    return <div className={className}>
        <i className="material-icons-outlined nav__list__item--icon">
            {icon}
        </i>
        {text}
    </div>
}

export default DropdownFixItem;
