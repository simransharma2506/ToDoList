import axios from "axios";

export interface IRegistration{
    id: string|undefined;
    name: string|undefined;
    email: string|undefined;
    password: string|undefined;
    cpassword: string|undefined
}

class RegistrationServices {
    route = `${process.env.REACT_APP_API_URL}/Registration`
    postData = (params:IRegistration) => axios.post(`${this.route}`,params);
}
export default new RegistrationServices();