'use strict';

import React from 'react';

export default class OptionsGroup extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            groupName: props.groupName,
            options: props.options,
            className: props.className,
            checkedValue: props.checkedValue,
            groupType: props.groupType

        };
    }

    render(){
        let state = this.state;
        let classes = state.className;

        var optionElements = [];

        var groupTypeClass = OptionsGroup.GroupTypes[state.groupType];

        for(var i=0; i<state.options.length;i++)
            {
                var id = state.groupName+"_"+i;
                var option = state.options[i];
                var checked = state.checkedValue === option.value ;
                optionElements.push(<input type="radio" value={option.value}  defaultChecked={checked} name={state.groupName} id={id} />);
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