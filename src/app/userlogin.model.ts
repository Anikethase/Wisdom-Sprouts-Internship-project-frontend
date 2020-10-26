export class Userlogin {
    public email : string;
    public full_name : string;
    public _id : string;


constructor(user_email:string,user_id:string,user_name:string)
    {

        this.email = user_email;
        this.full_name = user_name;
        this._id = user_id;

    }


  
    // constructor(
    //   public email: string,
    //   public _id: string,
    // public name: string 
    // ) {}
  
  }
  