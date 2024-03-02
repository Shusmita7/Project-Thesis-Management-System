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
  import React, { useEffect, useState } from 'react'

import Header from "components/Headers/Header";
import { toast } from 'react-toastify';
import axios from 'axios';
  
  import { useNavigate } from "react-router-dom";
  
  const CreateGroup = () => {
    const [ token, setToken ] = useState(JSON.parse(localStorage.getItem("auth")) || "");
    const [ data, setData ] = useState({});
    const [ student, setStudent ] = useState({});
    const navigate = new useNavigate();

    const onLoad = async () => {
      let axiosConfig = {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      };
  
      try {
        const response = await axios.get("http://localhost:3000/api/v1/students", axiosConfig);
        console.log(response);
        setStudent({ msg: response.data.msg, students: response.data.students, len: response.data.students.length });
      } catch (error) {
        toast.error(error.message);
      }
    }
    const handleSubmit = async (e) => {
      e.preventDefault();
      let name = e.target[0].value;
      let type = e.target[1].value;
      let title = e.target[2].value;
      let studentId = e.target[3].value;
    
  
      if (name.length > 0 && type.length > 0 && title.length > 0 ) {
        const formData = {
          name,
          type,
          title,
          studentId
        };
      let axiosConfig = {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      };
  
      try {
        const response = await axios.post("http://localhost:3000/api/v1/createGroup", formData, axiosConfig);
        console.log(response);
        navigate('/teacher/teacherGroup');
        setData({ msg: response.data.msg, committees: response.data.groups });
      } catch (error) {
        toast.error(error.message);
      }
  }
    }
    useEffect(() => {
      onLoad();
      if(token === ""){
        navigate("/auth/login");
        toast.warn("Please login first to access dashboard");
      }
     
    }, [token]);
  
    return (
      <>
      <Header />
        <Col lg="6" md="8">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-4">
                <strong>Create Group</strong>
              </div>
              
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              {/* <div className="text-center text-muted mb-4">
                <small>Or sign up with credentials</small>
              </div> */}
              <Form role="form" onSubmit={(e) => handleSubmit(e)}>
              <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    {/* <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon> */}
                    <Input
                      placeholder="Group Name"
                      type="text"
                      autoComplete="new-name"
                      
                    />
                  </InputGroup>
                </FormGroup>
              <FormGroup>
                  <InputGroup className="input-group-alternative">
                  <Input
                      placeholder="Select the type"
                      type="select"
                      autoComplete="new-type"
                      required
                      >
                       <option value="" disabled selected> Select the type </option>
                        <option defaultValue="2">Thesis</option>
                        <option defaultValue="3">Project</option>
                        
                     </Input>
                    
                    
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    {/* <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon> */}
                    <Input
                      placeholder="Title"
                      type="text"
                      autoComplete="new-title"
                      
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                  <Input
                      placeholder="Select the student"
                      type="select"
                      autoComplete="new-student"
                      required
                      >
                        <option value="" disabled selected> Select the Student </option>
            {student.len > 0 ? ( student.students.map((std) => {
                return(
                    <option value={std._id}>{std.userId.name}</option>
                )
            })

            ) : (<p>No Student Available</p>)}
                        {/* <option defaultValue="2">Thesis</option>
                        <option defaultValue="3">Project</option> */}
                        
                     </Input>
                    
                    
                  </InputGroup>
                </FormGroup>
                
                <div className="text-center">
                  <Button className="mt-4" color="primary" type="submit" >
                    Create Group
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  };
  
  export default CreateGroup;
  