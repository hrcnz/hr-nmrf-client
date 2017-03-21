import React, { PropTypes } from 'react';
import { omit } from 'lodash/object';
import { startCase } from 'lodash/string';
import { Control, Form, Errors } from 'react-redux-form/immutable';
import Grid from 'grid-styled';

import Row from 'components/basic/Row';
import FormWrapper from 'components/basic/FormWrapper';
import MultiSelect from 'components/MultiSelect';
import FormHeader from './FormHeader';
import FormBody from './FormBody';
import FormFooter from './FormFooter';
import ControlInfo from './ControlInfo';
import ControlInput from './ControlInput';
import ControlTextArea from './ControlTextArea';
import ControlSelect from './ControlSelect';
import Label from './Label';
import Field from './Field';

const controls = {
  input: ControlInput,
  textarea: ControlTextArea,
  info: ControlInfo,
  radio: Control.radio,
  checkbox: Control.checkbox,
  file: Control.file,
  select: ControlSelect,
  button: Control.button,
  multiselect: MultiSelect,
};

// These props will be omitted before being passed to the Control component
const nonControlProps = ['label', 'component', 'controlType', 'children', 'errorMessages'];

class EntityForm extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  getFieldComponent = (field) => {
    if (field.component) {
      return field.component; // Don't use this unless you really have to
    } else if (field.controlType in controls) {
      return controls[field.controlType];
    }
    return controls.input; // Default to input type if not specified
  }

  getControlProps = (field) => {
    switch (field.controlType) {
      case 'select': // we will render select options as children, so don't pass options prop directly to the control
        return omit(field, nonControlProps.concat(['options']));
      default:
        return omit(field, nonControlProps);
    }
  }

  renderField = (field) => {
    const FieldComponent = this.getFieldComponent(field);
    const { id, model, ...props } = this.getControlProps(field);
    return (
      <FieldComponent
        id={id}
        model={model || `.${id}`}
        {...props}
      >
        {this.renderFieldChildren(field)}
      </FieldComponent>
    );
  }

  renderSection = (fields) => fields.map((field, index) => (
    <Field key={index}>
      <Label htmlFor={field.id}>
        {`${field.label || startCase(field.id)} ${field.validators && field.validators.required ? '*' : ''}`}
      </Label>
      {this.renderField(field)}
      {
        field.errorMessages &&
        <Errors
          className="errors"
          model={field.model}
          show="touched"
          messages={field.errorMessages}
        />
      }
    </Field>
  ))


  renderFieldChildren = (field) => {
    if (field.controlType === 'select' && field.options) { // handle known cases here
      return field.options.map((option, i) =>
        <option key={i} value={option.value} {...option.props}>{option.label}</option>);
    }
    if (field.controlType === 'info') { // handle known cases here
      return field.displayValue;
    }
    return field.children || null; // enables passing children component, or null
  }

  render() {
    const { fields } = this.props;

    return (
      <FormWrapper>
        <Form
          model={this.props.model}
          onSubmit={this.props.handleSubmit}
        >
          {
            fields.header &&
            <FormHeader>
              <Row>
                <Grid sm={3 / 4}>
                  {
                    fields.header.main &&
                    this.renderSection(fields.header.main)
                  }
                </Grid>
                <Grid sm={1 / 4}>
                  {
                    fields.header.aside &&
                    this.renderSection(fields.header.aside)
                  }
                </Grid>
              </Row>
            </FormHeader>
          }
          { fields.body &&
            <FormBody>
              <Row>
                <Grid sm={3 / 4}>
                  {
                    fields.body.main &&
                    this.renderSection(fields.body.main)
                  }
                </Grid>
                <Grid sm={1 / 4}>
                  {
                    fields.body.aside &&
                    this.renderSection(fields.body.aside)
                  }
                </Grid>
              </Row>
            </FormBody>
          }
          <FormFooter>
            <button onClick={this.props.handleCancel}>Cancel</button>
            <button type="submit">Save</button>
          </FormFooter>
        </Form>
      </FormWrapper>
    );
  }
}

EntityForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  model: PropTypes.string,
  fields: PropTypes.object,
};

export default EntityForm;
