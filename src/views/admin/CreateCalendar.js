/*!

=========================================================
* Argon Dashboard React - v1.2.4
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Col,
  } from "reactstrap";
  import Header from "components/Headers/Header";
  import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
  const CreateCalendar = () => {
  
    const [ token, setToken ] = useState(JSON.parse(localStorage.getItem("auth")) || "");
  const [ data, setData ] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let session = e.target[0].value;
    let proposalDate = e.target[1].value;
    let progressDate = e.target[2].value;
    let predefenseDate = e.target[3].value;
    let defenseDate = e.target[4].value;
    

    if (session.length > 0 && proposalDate.length > 0 && progressDate.length > 0 && predefenseDate.length > 0 && defenseDate.length > 0) {
      const formData = {
        proposalDate,
        progressDate,
        predefenseDate,
        defenseDate,
        session
      };
      let axiosConfig = {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      };

      try {
        const response = await axios.post("http://localhost:3000/api/v1/createCalendar", formData, axiosConfig);
        toast.success(response.data.msg);
        navigate('/admin/adminCalendar');
        // setData({ msg: response.data.msg, calendars: response.data.calendars });
      } catch (error) {
        toast.error(error.message);
      }
    }
  }

  useEffect(() => {
    if(token === ""){
      navigate("/auth/login");
      toast.warn("Please login first to access dashboard");
    }
    // else if(localStorage.getItem('role') == "Teacher"){
    //     toast.warn("unauthorized");
    //     navigate("/teacherDashboard");
    //   }
  });
    return (
      <>
      <Header />
        <Col lg="6" md="8">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-4">
                <strong>Create Calendar</strong>
              </div>
              
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              
              <Form role="form" onSubmit={(e) => handleSubmit(e)}>
              <FormGroup>
                  <InputGroup className="input-group-alternative">
                  <Input
                      placeholder="Select The Session"
                      type="select"
                      autoComplete="new-session"
                      required
                      >
                        <option value="" disabled selected> Select the session</option>
                        <option defaultValue="2">2018-19</option>
                        <option defaultValue="3">2019-20</option>
                        <option defaultValue="4">2020-21</option>
                        <option defaultValue="5">2021-22</option>
                     </Input>
                    
                    
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input 
                      placeholder="Select the Proposal Date" 
                      type="date" />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input 
                      placeholder="Select the Progress Date" 
                      type="date" />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input 
                      placeholder="Select the Predefense Date" 
                      type="date" />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input 
                      placeholder="Select the Defense Date" 
                      type="date" />
                  </InputGroup>
                </FormGroup>
               
                <div className="text-center">
                  <Button className="mt-4" color="primary" type="submit">
                    Create Calendar
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  };
  
  export default CreateCalendar;
  