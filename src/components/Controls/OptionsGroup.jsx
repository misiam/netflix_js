'use strict';

import React from 'react';

export default class OptionsGroup extends React.Component {

    render(){
        let props = this.props;
        let classes = props.className;

        var optionElements = [];

        var groupTypeClass = OptionsGroup.GroupTypes[props.groupType];

        for(var i=0; i<props.options.length;i++)
            {
                var id = props.groupName+"_"+i;
                var option = props.options[i];
                var checked = props.checkedValue === option.value ;
                optionElements.push(<input type="radio" value={option.value}  defaultChecked={checked} name={props.groupName} id={id} />);
                optionElements.push(<label className={"center  " + groupTypeClass} htmlFor={id}>{option.label}</label> );
            }

        return(
            <div className={"options-group " + classes}>
                {optionElements}
            </div>
        );
    };
}

OptionsGroup.GroupTypes = {button: "button", label: "label"}