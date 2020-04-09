import IComment from './comment';

interface INewTheme {
    title: string;
    user: string | null;
    followers: number;
    date: string;
    comments: IComment[];
}
export default INewTheme;