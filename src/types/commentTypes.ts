

interface CommentForm {
    pid:number,
    text:string,
}
interface Comment {
    cid:number,
    likee:number,
    time:Date,
    user:UserInfo,
    text:string,
    comments?:Array<Comment>,
}