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
  
  const TeacherRegister = () => {
  
    const navigate = new useNavigate();
    const { state } = useLocation();
    const handleTeacherRegisterSubmit = async (e) => {
        e.preventDefault();
        let designation = e.target[0].value;
        let userId = state.userId;
        
    
        if(designation.length > 0 ){
    
            const formData = {
              designation,
              userId,
            };
            try{
            const response = await axios.post("http://localhost:3000/api/v1/TeacherRegister", formData);
             toast.success("Registration successfull");
             navigate("/login");
           }catch(err){
             toast.error(err.message);
           }
        }else{
        toast.error("Please fill all inputs");
        }
        
     };
    return (
      <>
        <Col lg="6" md="8">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-4">
                <small>Sign up as a teacher</small>
              </div>
              
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              {/* <div className="text-center text-muted mb-4">
                <small>Or sign up with credentials</small>
              </div> */}
              <Form role="form" onSubmit={(e) =>handleTeacherRegisterSubmit(e)}>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                    placeholder="Select A Designation"
                    type="select"
                    autoComplete="new-designation"
                    required
                    >
                      <option value="" disabled selected> Select the designation</option>
                      
                      <option defaultValue="2">Professor</option>
                      <option defaultValue="3">Assistant Professor</option>
                      <option defaultValue="4">Associate Professor</option>
                      <option defaultValue="5">Lecturer</option>
                      <option defaultValue="6">External</option>
                   </Input>
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
  
  export default TeacherRegister;
  