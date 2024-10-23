
import NProgress from 'nprogress'
export const NP = (fun:(any)=>any)=>{
    NProgress.start();
    fun()
    NProgress.done();
}