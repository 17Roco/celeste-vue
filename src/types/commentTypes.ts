

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
    childrenCount:number,
    comments?:Array<Comment>,
}