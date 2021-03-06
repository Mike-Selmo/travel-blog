import React, { Component } from 'react'
import styled from 'styled-components'
import { Button, Modal, Form, Col, Row } from 'react-bootstrap'
import 'react-quill/dist/quill.snow.css'
import ContinentDropdown from './ContinentDropdown'
import CountryDataDropdown from './CountryDataDropdown';
import { fetchCountryList } from "../../actions/postActions";
import { connect } from "react-redux";


const StyledContainer = styled.div`
  .form-control-file {
    margin-top: 5px;
  }

  #country-image {
    border: 1px solid #CED4DA;
    border-radius: 4px;
    margin: 0;
  }

`

export class CreateCountryModal extends Component {

  // componentDidMount = () => {
  //   this.props.fetchCountryList()
  // }

  render() {
    const { handleSubmit, handleChange, handleContinentChange,
      handleCountryChange,
      handleSelectedFile, continent, ...modalProps } = this.props
    console.log(continent)

    return (
      <Modal
        {...modalProps}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Create Country
          </Modal.Title>
        </Modal.Header>

        <StyledContainer>
          <Form onSubmit={handleSubmit}>
            <Modal.Body>
              <Row>
                <Col>
                  <ContinentDropdown handleContinentChange={handleContinentChange} />
                </Col>
                {continent ? <Col>
                  <CountryDataDropdown
                    handleCountryChange={handleCountryChange} />
                </Col> : null}
              </Row>

              <Form.Group controlId="summary">
                <Form.Control type="text" placeholder="Summary" onChange={handleChange} required />
              </Form.Group>

              <Form.Group as={Row} id="country-image">
                <Form.Label column sm={4} md={4} lg={2} id="main-img-label">
                  Main Image :
                </Form.Label>
                <Col>
                  <Form.Control type='file' onChange={handleSelectedFile} />
                </Col>
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button as="input" type="submit" value="Submit"></Button>
              <Button
                variant="secondary"
                onClick={this.props.onHide}>Cancel
            </Button>
            </Modal.Footer>
          </Form>
        </StyledContainer>
      </Modal>

    )
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchCountryList: () => dispatch(fetchCountryList())
//   }
// }

// export default connect(null, mapDispatchToProps)(CreateCountryModal)

export default CreateCountryModal