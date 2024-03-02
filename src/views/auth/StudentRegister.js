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
  
  import { useLocation,useNavigate } from "react-router-dom";
  import axios from "axios";
  import {toast} from "react-toastify";
  
  const StudentRegister = () => {
  
    const navigate = new useNavigate();
    const { state } = useLocation();
    const handleStudentRegisterSubmit = async (e) => {
      e.preventDefault();
      let roll = e.target[0].value;
      let registration = e.target[1].value;
      let session = e.target[2].value;
      let userId = state.userId;
  
      
  
      if(roll.length > 0 && registration.length > 0 && session.length > 0){
  
          const formData = {
            roll,
            registration,
            session,
            userId,
          };
          console.log(formData);
          try{
          const response = await axios.post("http://localhost:3000/api/v1/studentRegister", formData);
           toast.success("Registration successfull");
           navigate("/auth/login");
         }catch(err){
           toast.error(err.message);
         }
      }else{
      toast.error("Please fill all inputs");
      }
      
   }
    return (
      <>
        <Col lg="6" md="8">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-4">
                <small>Sign up as a student</small>
              </div>
              
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              {/* <div className="text-center text-muted mb-4">
                <small>Or sign up with credentials</small>
              </div> */}
              <Form role="form" onSubmit={(e) =>handleStudentRegisterSubmit(e)}>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Roll No" type="number" />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Registration No" type="number" />
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
                      placeholder="Session"
                      type="text"
                      autoComplete="new-session"
                      
                    />
                  </InputGroup>
                </FormGroup>
                
                <div className="text-center">
                  <Button className="mt-4" color="primary" type="submit">
                    Submit
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  };
  
  export default StudentRegister;
  