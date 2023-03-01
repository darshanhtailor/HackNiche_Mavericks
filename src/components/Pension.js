import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FormGroup, FormLabel } from 'react-bootstrap';


export default function Pension() {
    const [display,setDisplay]=React.useState(false);
    const [pension,setPension]=React.useState();

    const [formData, setFormData] = React.useState(
        {
            dob: "", 
            retirement_type:"",
            years: Number,
            last_10mon: Number,
            last_mon: Number
        }
    )

   
    function handleSubmit(e){
        e.preventDefault();
        if(formData.years<10){
            alert('Years of service should be greater than 10 years');
        }
        else{
            console.log(pension);
            setDisplay(true);
            setPension(formData.last_10mon/10 > formData.last_mon ?formData.last_10mon/20 : formData.last_mon/2);
            
        }
    }

    function handleChange(event) {
        const {name, value, type} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
      }
      console.log(formData);

    
     

  return (

    

        <div style={{ 
                    borderRadius: "5",
                        marginTop:"20px",
                      width: 700, 
                      padding: 30,marginLeft:"400px" }}>
        
          <h4 style={{marginBottom: "40px", textAlign:"center",fontSize: "40px"}} >Pensioner's Portal</h4>
          <Form >

          <Form.Group style={{marginBottom: "20px"}}>
              <Form.Label> Date of Retirement </Form.Label>
              <Form.Control type="text" 
                            placeholder="dd-mm-yyyy"
                            name="dob"
                            onChange={handleChange}
                            value={formData.dob}
                            />
            </Form.Group>
    

            <Form.Group style={{marginBottom: "20px"}}>
            <Form.Label> Type of Retirement </Form.Label>
            <Form.Select onChange={handleChange}
             value={formData.retirement_type}
             name="retirement_type"

             >
                <option >Superannuation</option>
                <option >Voluntary</option>
            </Form.Select>
            </Form.Group >
            
            <Form.Group style={{marginBottom: "20px"}}>
            <Form.Label>Total Qualifying Service in years</Form.Label>
              <Form.Control type="number" 
                            placeholder=""
                            name="years"
                            onChange={handleChange}
                            value={formData.years}
                            />
            </Form.Group>

            <Form.Group style={{marginBottom: "20px"}}>
            <Form.Label>Sum of Last 10 months Emoluments
(Basic Pay + NPA  ) (in Rs.)</Form.Label>
              <Form.Control type="number" 
                            placeholder=""
                            name="last_10mon"
                            onChange={handleChange}
                            value={formData.last_10mon}
                            />
            </Form.Group>

            <Form.Group style={{marginBottom: "20px"}}>
            <Form.Label>Sum of Last month Emoluments
(Basic Pay + NPA  ) (in Rs.)</Form.Label>
              <Form.Control type="number" 
                            placeholder=""
                            name="last_mon"
                            onChange={handleChange}
                            value={formData.last_mon}
                            />
            </Form.Group>
          
            <Button variant="primary" onClick={handleSubmit}  style={{marginTop: "10px",marginLeft: "230px",fontSize: "25px"}}>
               Calculate Pension
            </Button>
          </Form>
        <div style={{display:"block" ,marginTop: "50px",marginLeft: "150px"}}>
            
          {display &&  <h1>Pension provided: Rs.{pension} </h1> }
        
          </div>+
            <div style={{marginTop:"80px ",fontSize:"20px"}}>
           <span style={{}}> Here are the details for the various pension schemes available to armed forces personnel in India.
           </span>
            <ul style={{marginTop: "20px"}}>
                <li>
                    <h2 style={{marginTop: "10px"}}>Defence Services Pension:</h2>
                    <span>Eligibility Criteria: All commissioned officers, junior commissioned officers, and other ranks of the regular Army, Navy, Air Force, and their widows are eligible for Defence Services Pension. The minimum qualifying service is 20 years of pensionable service.</span>
                    <br></br><span style={{marginTop:"10px"}}>Application Process: The application for pension is submitted to the respective pension sanctioning authority before the retirement or discharge from service. The pension is calculated based on the last 10 months' average emoluments of the individual.</span>

                </li>
            </ul>
            <ul style={{marginTop: "20px"}}>
                <li>
                    <h2 style={{marginTop: "10px"}}>Disability Pension:</h2>
                    <span>Eligibility Criteria: Armed forces personnel who suffer from any disability due to military service are eligible for Disability Pension. The disability can be either attributable or aggravated by military service. There is no minimum qualifying service for Disability Pension.</span>
                    <br></br><span style={{marginTop:"10px"}}>Application Process: The individual must apply to the Medical Board of the respective service for a disability certificate. The Medical Board will examine and certify the disability and provide a percentage of disability. The pension is calculated based on the percentage of disability and the last 10 months' average emoluments of the individual.
.</span>

                </li>

                <li>
                    <h2 style={{marginTop: "10px"}}>Family Pension:</h2>
                    <span>Eligibility Criteria:  The family members of armed forces personnel who die while in service are eligible for Family Pension. The family members include the widow, legitimate children, and dependent parents.</span>
                    <br></br><span style={{marginTop:"10px"}}>Application Process: The application for Family Pension is submitted to the respective Record Office or Pension Disbursing Authority. The pension is calculated based on the rank, length of service, and the last pay drawn by the individual.

</span>

                </li>
            </ul>

          </div>
        </div>
         
         
      );
     


}



{/* <div id="google_translate_element"></div> */}



