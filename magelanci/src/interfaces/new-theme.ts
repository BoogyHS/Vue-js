interface INewTheme {
    title: string;
    content: string;
    user: string | null;
    followers: number;
    date: string;
    comments?: {}[];
}
export default INewTheme;