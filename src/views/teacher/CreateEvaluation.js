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
    Container,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Col,
  } from "reactstrap";
  import React, { useEffect, useState } from 'react'
  import { toast } from 'react-toastify';
  import axios from 'axios';
  import Header from "components/Headers/Header.js";
  import { useNavigate } from "react-router-dom";
  
  const CreateEvaluation = () => {
    const [ token, setToken ] = useState(JSON.parse(localStorage.getItem("auth")) || "");
    const [ data, setData ] = useState({});
    const [ group, setGroup ] = useState({});
    const [ groupRole, setGroupRole] = useState({});
    
    const onLoad = async () => {
      let axiosConfig = {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      };
  
      try {
        const response = await axios.get("http://localhost:3000/api/v1/allGroups", axiosConfig);
        console.log(response);
        setGroup({ msg: response.data.msg, groups: response.data.groups, len: response.data.groups.length });
      } catch (error) {
        toast.error(error.message);
      }
    }

    const onGroupChange = async(e) => {
      let groupId = e.target.value;
      let axiosConfig = {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      };
  
      try {
        const response = await axios.get("http://localhost:3000/api/v1/getGroupRole?groupId=" + groupId, axiosConfig);
        console.log(response);

        setGroupRole({ msg: response.data.msg, groupRole: response.data.groupRole });
        
      } catch (error) {
        toast.error(error.message);
      }
    };

    const onTypeChange = async(e) => {
      e.preventDefault();
      let markElement = document.getElementById('mark');
      if(e.target.value == "defense"){
        
        if(groupRole.groupRole == "External" || groupRole.groupRole == "Supervisor"){
          markElement.setAttribute('max', '60');
        }else{
          markElement.setAttribute('max', '40');
        }
      }else{
        markElement.setAttribute('max', '10');
      }
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      let groupId = e.target.groupId.value;
      let type = e.target.type.value;
      let mark = e.target.mark.value;
      let comment = e.target.comment.value;
      
  
      if (groupId.length > 0 && type.length > 0 && mark.length > 0 && comment.length > 0) {
        const formData = {
          groupId,
          type,
          mark,
          comment
        };
      let axiosConfig = {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      };
  
      try {
        const response = await axios.post("http://localhost:3000/api/v1/createEvaluation", formData, axiosConfig);
        console.log(response);
        toast.success(response.data.msg);
        navigate('/teacher/teacherEvaluation');
        // setData({ msg: response.data.msg, committees: response.data.groups });
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

    const navigate = new useNavigate();
    return (
      <>
      <Header />
      <Container className="mt--7" fluid>
        <Col lg="6" md="8">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-4">
                <strong>Create Evaluation</strong>
              </div>
              
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
             
              <Form role="form" onSubmit={(e) => handleSubmit(e)}>
              
              <FormGroup>
                  <InputGroup className="input-group-alternative">
                  <Input
                      placeholder="Select the group"
                      type="select"
                      autoComplete="new-group"
                      required
                      onChange={onGroupChange}
                      >
                        <option value="" disabled selected> Select the group  </option>
                        {group.len > 0 ? ( group.groups.map((group) => {
                return(
                    <option value={group._id}>{group.groupName}</option>
                )
            })

            ) : (<p>No group Available</p>)}
                        {/* <option defaultValue="2">Thesis</option>
                        <option defaultValue="3">Project</option> */}
                        
                     </Input>
                    
                    
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                  <Input
                      placeholder="Select The type"
                      type="select"
                      autoComplete="new-type"
                      required
                      onChange={onTypeChange}
                      >
                        <option value="" disabled selected> Select the type</option>
                        <option defaultValue="2">Proposal Report</option>
                        <option defaultValue="3">Progress Report</option>
                        <option defaultValue="4">PreDefense Report</option>
                        <option defaultValue="5">Defense Report</option>
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
                      placeholder="Mark"
                      type="number"
                      required
                      min={0} max={10}
                    //   autoComplete="new-comment"
                      
                    />
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
                      placeholder="Comment"
                      type="text"
                      required
                    //   autoComplete="new-comment"
                      
                    />
                  </InputGroup>
                </FormGroup>
                
                
                
                <div className="text-center">
                  <Button className="mt-4" color="primary" type="submit" >
                    Evaluate
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Container>
      </>
    );
  };
  
  export default CreateEvaluation;
  