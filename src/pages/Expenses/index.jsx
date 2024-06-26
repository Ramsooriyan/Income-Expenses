import React, {useRef} from 'react'
import PropTypes from "prop-types";

import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardBody,
} from "reactstrap";

import Breadcrumbs from "../../components/Common/Breadcrumb";

import { withTranslation } from "react-i18next";
import Layout from './Layout';

const Expenses = (props) => {
  //meta title
  document.title =
  "Expenses ";
  return (
    <React.Fragment>
        <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs
            title={props.t("Expenses")}
            breadcrumbItem={props.t("Expenses Form")}
          />
        </Container>

          <Container fluid>
            <Layout />
          </Container>


        </div>
    </React.Fragment>
  )
}
Expenses.propTypes = {
  t: PropTypes.any,
  chartsData: PropTypes.any,
  onGetChartsData: PropTypes.func,
};


export default withTranslation()(Expenses);