import hmacSHA512 from "crypto-js/hmac-sha512";
import axios from "axios";
export interface Category{
    name: string,
    description: string
    gmtCreate: string
}
export default class OrganizationAdmin {
    static async getAllCategory(){
        return await axios.get("/admin/organization/category")
    }
    static async postRegister(account: string, password: string, email: string, phone: string){
        const password_encrypted = hmacSHA512(password,"XKOA");
        return await axios.post("/admin/organization/category/",{
            username: account,
            password: password_encrypted.toString(),
            email,
            phone
        })
    }
}