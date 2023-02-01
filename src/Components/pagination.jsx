import './pagination.css'
const Pagination=({currentproducts,total,perpage,paginate})=>{
    let pagenumbers=[]
    for(let i=1;i<=Math.ceil(total/perpage);i++){
        pagenumbers.push(i)
    }
   
    return (
        <div>
        {
            currentproducts?.map((item)=>{
                return (
                    
                    <img src={item.images[0]} key={item.id} className="image" style={{border:"1px solid black"}}/>
                    
                    
                )
            })
        }
        <center>
        {
            pagenumbers.map((number)=>{
                return(
                    <button key={number} style={{margin:"0.5rem"}} onClick={()=>{paginate(number)}}>{number}</button>

                )
            })
        }
        </center>
        
        </div> 
    )
}
export default Pagination