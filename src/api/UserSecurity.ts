import axios from "axios";
import hmacSHA512 from 'crypto-js/hmac-sha512';
export default class UserSecurity {
    static async postRegister(account: string, password: string, email: string, phone: string){
        const password_encrypted = hmacSHA512(password,"XKOA");
        return await axios.post("/user/register",{
            username: account,
            password: password_encrypted.toString(),
            email,
            phone
        })
    }
    static async postLogin(account: string, password: string){
        const password_encrypted = hmacSHA512(password,"XKOA");
        return await axios.post("/user/login",{
            username: account,
            password: password_encrypted.toString(),
        })
    }
}