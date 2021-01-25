import { importType } from "@angular/compiler/src/output/output_ast";

export class users{
    id:string;
    email:string;
    first_name:string;
    last_name:string;
    avatar:ImageData;

    constructor(id,email,firstname,lastname,avatar)
    {
        this.id=id;
        this.email=email;
        this.first_name=firstname;
        this.last_name=lastname;
        this.avatar=avatar;
    }
}