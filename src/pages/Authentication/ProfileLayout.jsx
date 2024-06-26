import React from "react";
import {
  Card,
  Col,
  Container,
  Row,
  CardBody,
  CardTitle,
  Label,
  Button,
  Form,
  Input,
  InputGroup,
} from "reactstrap";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
const ProfileLayout = props => {

  return (
    <React.Fragment>
      <div className="page-content pt-0 ps-0">
        <Container fluid={true}>
          <Row>
            <Col sm={12}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Personal Information</CardTitle>
                   <Form>
                 <Row>
                      <Col md={6}>
                        <div className="mb-3">
                          <Label htmlFor="formrow-email-Input" className="font-size-14">Name</Label>
                          <p className="text-muted">{Cookies.get('name')}</p>
                        </div>
                      </Col>
                      <Col md={6}>
                      <div className="mb-3">
                          <Label htmlFor="formrow-email-Input" className="font-size-14">Employee ID</Label>
                          <p className="text-muted">{Cookies.get('id')}</p>
                        </div>
                      </Col>
                    </Row>


                    <Row className="mt-3">
                      <Col md={6}>
                        <div className="mb-3">
                          <Label htmlFor="formrow-email-Input" className="font-size-14">E-mail address</Label>
                          <p className="text-muted">{Cookies.get('email')}</p>
                        </div>
                      </Col>
                      <Col md={6}>
                      <div className="mb-3">
                          <Row className="d-flex justify-content-center">
                          <Col>
                          <Label htmlFor="formrow-email-Input" className="font-size-14">Password</Label>
                          </Col>
                          <Col>
                          <Link to="/forgot-password">
                          <i className="mt-3 fas fa-edit text-secondary"></i>
                          </Link>
                          </Col>
                          </Row>
                          
                          <p className="text-muted">******</p>

                        </div>
                      </Col>
                    </Row>
                   <Row className="mt-3">
                      <Col md={6}>
                        <div className="mb-3">
                          <Label htmlFor="formrow-email-Input" className="font-size-14">Phone</Label>
                          <p className="text-muted">{Cookies.get('phone')}</p>
                        </div>
                      </Col>
                      <Col md={6}>
                      <div className="mb-3">
                          <Label htmlFor="formrow-email-Input" className="font-size-14">Status</Label>
                          <p className="text-muted">{Cookies.get('status')}</p>
                        </div>
                      </Col>
                    </Row>
                    <Row className="mt-3">
                      <Col md={6}>
                        <div className="mb-3">
                          <Label htmlFor="formrow-email-Input" className="font-size-14">Team</Label>
                          <p className="text-muted">{Cookies.get('team')}</p>
                        </div>
                      </Col>
                      <Col md={6}>
                      <div className="mb-3">
                          <Label htmlFor="formrow-email-Input" className="font-size-14">Role</Label>
                          <p className="text-muted">{Cookies.get('role')}</p>
                        </div>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default ProfileLayout