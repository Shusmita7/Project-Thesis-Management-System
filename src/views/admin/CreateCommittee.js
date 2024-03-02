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

import { toast } from 'react-toastify';
import axios from 'axios';
  import { useNavigate } from "react-router-dom";
  
  const CreateCommittee = () => {
    const [ token, setToken ] = useState(JSON.parse(localStorage.getItem("auth")) || "");
    const [ data, setData ] = useState({});
    const [ teacher, setTeacher ] = useState({});
    const navigate = useNavigate();

    const onLoad = async () => {
      let axiosConfig = {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      };
  
      try {
        const response = await axios.get("http://localhost:3000/api/v1/teachers", axiosConfig);
        console.log(response);
        setTeacher({ msg: response.data.msg, teachers: response.data.teachers, len: response.data.teachers.length });
      } catch (error) {
        toast.error(error.message);
      }
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      let session = e.target[0].value;
      let head = e.target[1].value;
      let member1 = e.target[2].value;
      let member2 = e.target[3].value;
      let external = e.target[4].value;
  
      if (session.length > 0 && head.length > 0 && member1.length > 0 && member2.length > 0 && external.length > 0) {
        const formData = {
          session,
          head,
          member1,
          member2,
          external,
        };
      let axiosConfig = {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      };
  
      try {
        const response = await axios.post("http://localhost:3000/api/v1/createCommittee", formData, axiosConfig);
        console.log(response);
        navigate('/admin/adminCommittee');
        setData({ msg: response.data.msg, committees: response.data.committees });
      } catch (error) {
        toast.error(error.message);
      }
  }
    }
  
    useEffect(() => {
      if(teacher.len != 0){
        onLoad();
      }
      
      if(token === ""){
        navigate("/auth/login");
        toast.warn("Please login first to access dashboard");
      }
      
    });
    return (
      <>
        <Col lg="6" md="8">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-4">
                <strong>Create Committee</strong>
              </div>
              
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              {/* <div className="text-center text-muted mb-4">
                <small>Or sign up with credentials</small>
              </div> */}
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
                      <option value="2018-19">2018-19</option>
                      <option value="2019-20">2019-20</option>
                      <option value="2020-21">2020-21</option>
                      <option value="2021-22">2021-22</option>
                     </Input>
                    
                    
                  </InputGroup>
                </FormGroup>
               
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                  <Input
                     
                      type="select"
                      autoComplete="new-head"
                      required
                      >
                        <option value="" disabled selected> Select Head </option>
                {teacher.len > 0 ? (teacher.teachers.map((tec) => {
                  return(
                    <option value={tec.userId._id}>{tec.userId.name}</option>
                  )
                })):(<p>No Teacher Available</p>)}
                     </Input>
                    
                    
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                  <Input
                     
                      type="select"
                      autoComplete="new-member1"
                      required
                      >
                        <option value="" disabled selected> Select Member1 </option>
                {teacher.len > 0 ? (teacher.teachers.map((tec) => {
                  return(
                    <option value={tec.userId._id}>{tec.userId.name}</option>
                  )
                })):(<option></option>)}
                     </Input>
                    
                    
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                  <Input
                      
                      type="select"
                      autoComplete="new-member2"
                      required
                      >
                        <option value="" disabled selected> Select Member2 </option>
                {teacher.len > 0 ? (teacher.teachers.map((tec) => {
                  return(
                    <option value={tec.userId._id}>{tec.userId.name}</option>
                  )
                })):(<option></option>)}
                     </Input>
                    
                    
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                  <Input
                     
                      type="select"
                      autoComplete="new-external"
                      required
                      >
                       <option value="" disabled selected> Select External</option>
                {teacher.len > 0 ? (teacher.teachers.map((tec) => {
                      return(
                        <option value={tec.userId._id}>{tec.userId.name}</option>
                      )
                    })):(<option></option>)}
                     </Input>
                    
                    
                  </InputGroup>
                </FormGroup>
                
                <div className="text-center">
                  <Button className="mt-4" color="primary" type="submit">
                    Create Committee
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  };
  
  export default CreateCommittee;
  