import React, { Component } from 'react'
import { Button, Container, Form, Col, Alert, Card, DropdownButton, Dropdown } from 'react-bootstrap';
import '../Styles/AccountProfile.css'
import FormValidator from './FormValidator';
import ValidationMessages from './ValidationMessages';


export default class AccountProfile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            email: '',
            telephone: '',
            // terms: ''

        }
        this.rules = {
            firstName: { required: true, minLength: 3, alpha: true },
            email: { required: true, email: true },
            telephone: { required: true, isNumeric: true },
            // terms: { true: true }
        }
    }
    handleInputChange = (e) => {
        const { value, name } = e.target;
        this.setState({ [name]: value })
    };
    // updateCheck = (e) => {
    //     const { name, checked } = e.target;
    //     const profileValuesCopy = { ...profileValues };
    //     profileValuesCopy[name] = profileValuesCopy[name] === 'false' ? 'true' : 'false'
    //     setProfileValues(profileValuesCopy);
    // }
    updateCheck = (e) => {
        this.setState({ [e.target.name]: this.state.terms === 'false' ? 'true' : 'false' })
    }
    render() {
        return (
            <div>
                <FormValidator onSubmit={this.props.onSubmit} data={this.state} rules={this.rules}>
                    <Container className="container-profile">
                        <Card border="light">
                            <Card.Header as="h2" className="text-center card-title-header-profile"><span className="boldening">Agent's Profile</span></Card.Header>
                            <Card.Body className="flex-internal-general">
                                <Col xs={12}>
                                    <input type="file" id="actual-btn" hidden />
                                    {/* <label for="actual-btn"><div className="default-img-circle"> <img src={DefaultImg} className="default-img" alt="" /></div></label> */}
                                    <div className="upload-image-label">Upload Profile Image</div>
                                    {/* <input type="checkbox" name="terms" id="" onChange={(e) => this.updateCheck(e)} /> */}
                                    {/* <ValidationMessages field="terms" /> */}
                                </Col>
                                <Card.Text>
                                    {/* {error && <Alert variant="danger">{error}</Alert>} */}
                                    <Form onSubmit={e => this.submitProfile(e)}>
                                        <Form.Row>
                                            <Col xs={12} md={6} lg={3}>
                                                <Form.Label></Form.Label>
                                                <Form.Control placeholder="First name" name="firstName"
                                                    onChange={this.handleInputChange} required />
                                                <ValidationMessages field='firstName' />
                                            </Col>
                                            <Col xs={12} md={6} lg={3}>
                                                <Form.Label></Form.Label>
                                                <Form.Control placeholder="Last name" name="lastName"
                                                    onChange={this.handleInputChange} required />
                                            </Col>
                                            <Col >
                                                <Form.Label></Form.Label>
                                                <Form.Control placeholder="Telephone" name="telephone"
                                                    onChange={this.handleInputChange} />
                                                <ValidationMessages field='telephone' />

                                            </Col>
                                            <Col>
                                                <Form.Label></Form.Label>
                                                <Form.Group controlId="exampleForm.ControlSelect1">
                                                    <Form.Control as="select" onChange={this.handleInputChange} name="gender">
                                                        <option value="">Gender</option>
                                                        <option value='male'>Male</option>
                                                        <option value='female'>Female</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Col>
                                        </Form.Row>
                                        <Form.Row >
                                            <Col xs={12} md={5} lg={3}>
                                                <Form.Group controlId="formGroupEmail">
                                                    <Form.Label></Form.Label>
                                                    <Form.Control placeholder="Email" name="email"
                                                        onChange={this.handleInputChange} />
                                                </Form.Group>
                                                <ValidationMessages field='email' />

                                            </Col>
                                            <Col xs={7} md={5} lg={3}>
                                                <Form.Label></Form.Label>
                                                <Form.Control name="website" placeholder="Agent's Website" onChange={this.handleInputChange}></Form.Control>
                                            </Col>
                                            <Col xs={5} md={2} lg={3}>
                                                <div className="date-label">Date of Birth:
                                        <input type="date" onChange={this.handleInputChange} name="dateOfBirth" id="birthDate" className="date-input" />
                                                </div>
                                            </Col>
                                            <Col xs={12} md={5} lg={3}>
                                                <Form.Label></Form.Label>
                                            </Col>
                                        </Form.Row>
                                        <Form.Row>
                                            <Col xs={12} md={6} lg={4}>
                                                <Form.Group controlId="formGroupPassword">
                                                    <Form.Label></Form.Label>
                                                    <Form.Control type="password" name="password1" placeholder="Old Password" onChange={this.handleInputChange}></Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={12} md={6} lg={4}>
                                                <Form.Group controlId="formGroupPassword">
                                                    <Form.Label></Form.Label>
                                                    <Form.Control type="password" name="password2" placeholder="New Password" onChange={this.handleInputChange}></Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={12} md={6} lg={4}>
                                                <Form.Group controlId="formGroupPassword">
                                                    <Form.Label></Form.Label>
                                                    <Form.Control type="password" name="password2" placeholder="Confirm New Password" onChange={this.handleInputChange}></Form.Control>
                                                </Form.Group>
                                            </Col>
                                        </Form.Row>
                                        <Form.Row>
                                            <Col xs={12} md={6} lg={3}>
                                                <Form.Label></Form.Label>
                                            </Col>
                                            <Col xs={12} md={6} lg={3}>
                                                <Form.Label></Form.Label>
                                                <Form.Control name="agencyName" placeholder="Agency Name" onChange={this.handleInputChange}></Form.Control>
                                            </Col>
                                            <Col xs={12} md={6} lg={3}>
                                                <Form.Group controlId="exampleForm.ControlSelect1">
                                                    <Form.Label></Form.Label>
                                                    <Form.Control as="select" onChange={this.handleInputChange} name="aar">
                                                        <option value="">-- AAR Member? --</option>
                                                        <option value='member'>Yes</option>
                                                        <option value='nonMember'>No</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={12} md={6} lg={3}>
                                                <Form.Group controlId="exampleForm.ControlSelect1">
                                                    <Form.Label></Form.Label>
                                                    <Form.Control as="select" onChange={this.handleInputChange} name="status">
                                                        <option value="">-- Current Status --</option>
                                                        <option value='available'>Available</option>
                                                        <option value='notavailable'>Not Available</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Col>
                                        </Form.Row>
                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Label></Form.Label>
                                            <Form.Control as="textarea" rows={3} placeholder="About Me"
                                                name="personalBio" onChange={this.handleInputChange} />
                                        </Form.Group>
                                        <Button className="w-100 mt-4" variant="success" type="submit"
                                        >
                                            Submit Changes
                                </Button>
                                    </Form>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Container>
                </FormValidator>
            </div>
        )
    }
}
