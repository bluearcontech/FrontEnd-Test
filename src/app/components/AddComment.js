import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Form = styled.form`
  padding: 0 30px;
`;

class AddComment extends Component {

  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    submitDisabled: PropTypes.bool.isRequired
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { submit } = this.props
    const { handleSubmit, handleChange, submitDisabled, loading, input } = this.props;
    const disable = submitDisabled || loading
    return (
      <Form
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="Add comment"
            onChange={handleChange}
            value={input}
          />
        </div>

        <div className="">
          <button type="submit"
            className="btn btn-primary"
            disabled={disable}
          >
            Submit comment
          </button>
        </div>
      </Form>
    )
  }
}

export default AddComment