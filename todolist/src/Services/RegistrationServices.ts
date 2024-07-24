import axios from "axios";

export interface IRegistration{
    id: string|undefined;
    name: string|undefined;
    email: string|undefined;
    password: string|undefined;
    cpassword: string|undefined
}

class RegistrationServices {

    route = '/Registration'
    postData = () => axios.post('/Registration');
}
export default new RegistrationServices();