import React from "react";
import styled from "styled-components";
import { Input, Row, Col, Select, Button, Affix, message, Upload } from "antd"
class ProfileEdit extends React.Component {
    state = {
        tempUser: {},
        editing: true,
        file: null,
        firstNameEmpty: true,
        lastNameEmpty: true,
        titleEmpty: true,
        contactEmailEmpty: true,
        loading: true,
        avatarLink: "",
        avatar: null,
        loadingAvatar: false,
        USstates: [
          "AL",
          "AK",
          "AZ",
          "AR",
          "CA",
          "CO",
          "CT",
          "DC",
          "DE",
          "FL",
          "GA",
          "HI",
          "ID",
          "IL",
          "IN",
          "IA",
          "KS",
          "KY",
          "LA",
          "ME",
          "MD",
          "MA",
          "MI",
          "MN",
          "MS",
          "MO",
          "MT",
          "NE",
          "NV",
          "NH",
          "NJ",
          "NM",
          "NY",
          "NC",
          "ND",
          "OH",
          "OK",
          "OR",
          "PA",
          "RI",
          "SC",
          "SD",
          "TN",
          "TX",
          "UT",
          "VT",
          "VA",
          "WA",
          "WV",
          "WI",
          "WY",
        ],
      };
    
  render(){
      return (
        <div>
        <Row>
        <SettingsTitle>
          {/* <img
            src={lineIcon}
            style={{
              width: "5px",
              height: "30px",
            }}
          /> */}
          Basic Information
        </SettingsTitle>
      </Row>
      <Row type="flex" justify="start" gutter={[24, 40]}>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={6}
          xl={6}
          style={{ maxHeight: "90px" }}
        >
          <InputLabel>
            First name
            <ErrorLabel>{"\u00A0"}*</ErrorLabel>
            {/* {this.state.firstName.length > 20 ? (
              <ErrorLabel>*Too Long</ErrorLabel>
            ) : null} */}
          </InputLabel>

          <Input
            style={{ height: "80%" }}
            placeholder={this.state.firstName}
            value={this.state.firstName}
            onChange={(e) => {
              // change the value of the tempUser
              this.setState({
                tempUser: {
                  ...this.state.tempUser,
                  firstName: e.target.value,
                },
                firstNameEmpty: e.target.value === "",
              });
            }}
          />
        </Col>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={6}
          xl={6}
          style={{ maxHeight: "90px" }}
        >
          <InputLabel>
            Last name
            {/* <ErrorLabel>{"\u00A0"}*</ErrorLabel>
            {this.state.lastName.length > 20 ? (
              <ErrorLabel>*Too Long</ErrorLabel>
            ) : null} */}
          </InputLabel>

          <Input
            style={{ height: "80%" }}
            placeholder={this.state.lastName}
            value={this.state.lastName}
            onChange={(e) => {
              this.setState({
                tempUser: {
                  ...this.state.tempUser,
                  lastName: e.target.value,
                },
                lastNameEmpty: e.target.value === "",
              });
            }}
          />
        </Col>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={3}
          xl={3}
          style={{ maxHeight: "90px" }}
        >
          <InputLabel>Avatar</InputLabel>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={6}
          xl={6}
          style={{ maxHeight: "90px", padding: "0px" }}
        >
         
        </Col>
      </Row>
     </div>)
  }
}
const SettingsTitle = styled.div`
  color: #545871;
  font-family: BasicSans;
  font-size: 20px;
  font-weight: Bold;
  margin-top: 40px;
  margin-bottom: 15px;
`;
const InputLabel = styled.div`
  font-family: BasicSans;
  font-size: 20px;
  color: #545870;
`;

const ErrorLabel = styled.div`
  height: 24px;
  font-family: BasicSans;
  font-size: 13px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.6;
  letter-spacing: normal;
  text-align: left;
  color: #ff5c5c;
  display: inline-block;
  vertical-align: top;
`;

export default ProfileEdit;
