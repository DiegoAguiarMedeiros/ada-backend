export default class User {
    public _id?: string;
  
    public login: string;
    
    public password: string;
    
    constructor(props: User) {
      const {
        login,
        
        password,
        _id,
      } = props;
  
  
      if (!login || login.length === 0) {
        throw new Error('User: user login is invalid.');
      }
  
      if (!_id && (!password || password.length === 0)) {
        throw new Error('User: password is invalid.');
      }
  
      Object.assign(this, props);
    }
  }