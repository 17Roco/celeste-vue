
import NProgress from 'nprogress'
export const NP = (fun:(args?:any)=>any)=>{
    NProgress.start();
    fun()
    NProgress.done();
}