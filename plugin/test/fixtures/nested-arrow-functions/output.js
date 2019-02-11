import React from "react";

const Select = props => {
  const overridableProps = typeof props !== "undefined" ? props : this && typeof this.props !== "undefined" ? this.props : arguments[0];
  const overridableComponents = {
    Container: typeof props !== "undefined" && props.overrides && props.overrides.Container && props.overrides.Container.component || Container,
    Option: typeof props !== "undefined" && props.overrides && props.overrides.Option && props.overrides.Option.component || Option
  };
  return <overridableComponents.Container {...typeof overridableProps !== "undefined" && overridableProps.overrides && overridableProps.overrides.Container && overridableProps.overrides.Container.props || {}}>
            {props.options.map((option, key) => <overridableComponents.Option {...typeof overridableProps !== "undefined" && overridableProps.overrides && overridableProps.overrides.Option && overridableProps.overrides.Option.props || {}} key={key} title={option.title} />)}
        </overridableComponents.Container>;
};
