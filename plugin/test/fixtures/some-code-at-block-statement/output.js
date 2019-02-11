import React from "react";
import { getComponents } from "react-overrides";

const OverridableButton = props => {
  const Container = ButtonContainer;
  const Text = Buttons;

  const Icon = () => null;

  const overridableProps = typeof props !== "undefined" ? props : this && typeof this.props !== "undefined" ? this.props : arguments[0];
  const overridableComponents = {
    Container: typeof props !== "undefined" && props.overrides && props.overrides.Container && props.overrides.Container.component || Container,
    Icon: typeof props !== "undefined" && props.overrides && props.overrides.Icon && props.overrides.Icon.component || Icon,
    Text: typeof props !== "undefined" && props.overrides && props.overrides.Text && props.overrides.Text.component || Text
  };
  return <overridableComponents.Container {...typeof overridableProps !== "undefined" && overridableProps.overrides && overridableProps.overrides.Container && overridableProps.overrides.Container.props || {}} as="button">
            <overridableComponents.Icon {...typeof overridableProps !== "undefined" && overridableProps.overrides && overridableProps.overrides.Icon && overridableProps.overrides.Icon.props || {}} />
            <overridableComponents.Text {...typeof overridableProps !== "undefined" && overridableProps.overrides && overridableProps.overrides.Text && overridableProps.overrides.Text.props || {}}>{props.children}</overridableComponents.Text>
        </overridableComponents.Container>;
};
