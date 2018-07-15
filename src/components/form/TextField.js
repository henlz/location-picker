import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  
  font-size: 15px;
`;

const StyledLabel = styled.label`
  color: #444;
  display: block;
  padding: 0 0 4px;
`;

const StyledInput = styled.input`
  width: calc(100% - 33px);
  
  font-weight: 400;
  border: 1px solid #b4b4b4;
  border-radius: 4px;
  min-width: 49px;
  padding: 14px 16px;
`;

class TextField extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      value: props.value
    };

    this.name = props.name;

    if (!this.name) {
      this.name = Math.floor((Math.random() * 5000) + 1);
    }

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    const value = event.target.value;
    this.setState({
      value
    });
    this.props.onChange(value);
  }

  render() {
    return (
      <Container>
        {
          this.props.label &&
          <StyledLabel htmlFor={this.name}>{this.props.label}</StyledLabel>
        }
        <StyledInput type={'text'}
                     value={this.state.value}
                     name={this.name}
                     placeholder={this.props.placeholder}
                     onChange={this.onInputChange}/>
      </Container>
    );
  }
}

TextField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string
};

TextField.defaultValues = {
  placeholder: '',
  label: ''
};

export default TextField;
