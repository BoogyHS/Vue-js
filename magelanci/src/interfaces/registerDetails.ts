interface IRegister {
    email: string,
    password: string,
    username: string,
    tel?: number,
    returnSecureToken: boolean,
}

export default IRegister;