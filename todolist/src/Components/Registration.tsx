import { Formik, FormikProps } from "formik";
import { PrimaryButton, Stack, TextField } from "@fluentui/react";
import React from "react";
import RegistrationServices from "../Services/RegistrationServices";

const Registration = () =>{
    
    const [isSignup,setIsSignup] = React.useState(false);

    return(
        <>
            <Formik 
                initialValues={{
                    id: "",
                    name: "",
                    email: "",
                    password: "",
                    cpassword: ""
                }}
                enableReinitialize={true}
                onSubmit={(values) => {
                    RegistrationServices.postData(values).then((res)=>{
                        if(res){
                        }
                    })
                }}>
                {({values, setValues, handleSubmit}:FormikProps<any>) => {
                    return(
                        <form onSubmit={handleSubmit}>
                            <Stack style={{width:'100%', height:'100vh',justifyContent:'center'}}>
                                <div style={{display:'flex', justifyContent:'center'}}>
                                <Stack tokens={{ childrenGap:15 }} style={{height: 400, width: 300, borderRadius: 10,padding:30, boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px',backgroundColor:'white'}}>
                                <label style={{display: 'flex', justifyContent:'center', fontWeight:'bolder', fontSize: 20}}>{isSignup ? "Signup Form" : "Login Form"}</label>
                                <div style={{display:'flex', borderRadius:8, border:'1px solid grey',height:40 }}>
                                    <div style={{background: isSignup ? 'white' : '#0078D4', padding:10, color:isSignup ? 'black' : 'white', borderRadius:7, width:100, textAlign:'center'}} onClick={()=>{setIsSignup(false)}}>Login</div>
                                    <div style={{background: isSignup ? '#0078D4' : 'white', padding:10, color:isSignup ? 'white' : 'black', borderRadius:7, width:100, textAlign:'center'}} onClick={()=>{setIsSignup(true)}}>Signup</div>
                                </div>
                                {!isSignup && (
                                    <>
                                      <Stack tokens={{ childrenGap:20 }}>                                   
                                            <TextField
                                             placeholder="Email Address"
                                             onChange={(e,value)=>{ setValues({...values,email:value})}}/>
                                            <TextField placeholder="Password" onChange={(e,value)=>{setValues({...values,password:value})}}/>
                                            <div style={{ display:'flex', justifyContent:'center'}}>
                                                <PrimaryButton text="Login" onClick={() => handleSubmit()}/>
                                            </div>
                                        </Stack>
                                    </>
                                )}
                                {isSignup && (
                                    <>
                                     <Stack tokens={{ childrenGap: 20}}>
                                        <TextField placeholder="Email Address" onChange={(e,value)=>{setValues({...values,email:value})}}/>
                                        <TextField placeholder="Password" onChange={(e,value)=>{setValues({...values,password:value})}}/>
                                        <TextField placeholder="Confirm password" onChange={(e,value)=>{setValues({...values,cpassword:value})}}/>
                                        <div style={{ display:'flex', justifyContent:'center'}}>
                                            <PrimaryButton text="Signup" onClick={()=>handleSubmit()}/>
                                        </div>
                                    </Stack>
                                    </>
                                )}
                                </Stack>
                                </div>
                            </Stack>
                        </form>
                    )
                }}
            </Formik>
        </>
    )
}
export default Registration;