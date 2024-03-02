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

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast} from "react-toastify";

const Register = () => {
  const handleRegisterSubmit = async (e) => {
    console.log(e);
    e.preventDefault();
    let name = e.target[0].value;
    let lastname = e.target[1].value;
    let email = e.target[2].value;
    let password = e.target[3].value;
    let confirmPassword = e.target[4].value;
    let role = e.target[5].value;

    if(name.length > 0 && lastname.length > 0 && email.length > 0 && password.length > 0 && confirmPassword.length > 0 && role.length > 0){

      if(password === confirmPassword){
        const formData = {
          username: name + " " + lastname,
          email,
          password,
          role
        };
        console.log(formData);
        try{
        const response = await axios.post("http://localhost:3000/api/v1/register", formData);
        console.log(response);
         toast.success("User Created successfull");
            if(formData.role === "Student"){
              navigate("/auth/studentRegister", {state: {userId: response.data.newUser._id}});
            }else if(formData.role==="Teacher"){
              navigate("/auth/teacherRegister", {state: {userId: response.data.newUser._id}});
            }
        //  navigate("/login");
       }catch(err){
         toast.error(err.message);
       }
      }else{
        toast.error("Passwords don't match");
      }
    

    }else{
      toast.error("Please fill all inputs");
    }


  };


  const navigate = new useNavigate();
  return (
    <>
      <Col lg="6" md="8">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-5">
            <div className="text-muted text-center mt-2 mb-4">
              <small>Sign up with credentials</small>
            </div>
           
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            {/* <div className="text-center text-muted mb-4">
              <small>Or sign up with credentials</small>
            </div> */}
            <Form role="form" onSubmit={(e) =>handleRegisterSubmit(e)}>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="First Name" type="text" />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Last Name" type="text" />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                    
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Confirm Password"
                    type="password"
                    autoComplete="new-password"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                <Input
                    placeholder="Select A Role"
                    type="select"
                    autoComplete="new-role"
                    required
                    >
                      <option value="" disabled selected> Select a Role</option>
                      <option defaultValue="2">Student</option>
                      <option defaultValue="3">Teacher</option>
                   </Input>
                  
                  
                </InputGroup>
              </FormGroup>
              
              <div className="text-center">
                <Button className="mt-4" color="primary" type="submit">
                  Create account
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Register;
