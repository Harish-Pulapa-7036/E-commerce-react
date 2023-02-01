import { useState ,useEffect} from "react";
import Pagination from "./pagination";

const Product=()=>{
    const [data,setdata]=useState([]);
    const [data1,setdata1]=useState([]);

    const [prod,setprod]=useState([]);
    const [perpage]=useState(10);
    const [currpage,setcurrpage]=useState(1);
    const [style,setstyle]=useState({display:"none"})
    const [page,setpage]=useState(true)
    
    useEffect(()=>{
        fetch('https://dummyjson.com/products')
          .then(response => response.json())
          .then(response => {setdata(response.products.sort((a, b) => b.rating - a.rating));console.log(response.products);})
          .catch(err => console.error(err));
      },[])
      const paginate=(number)=>{
        setcurrpage(number)
      }
   const selected=(e)=>{
    
        setpage(!page)
        console.log(e.target.value);
      let  text=e.target.value;
      setdata1(data)
     let category=data1?.filter(item=> item.category.toLowerCase().includes(text))
     setprod(category)
   
    }
    let indexlast=currpage*perpage;
    let indexfirst=indexlast-perpage;
    let currentproducts=data.slice(indexfirst,indexlast) 
    return (
        <div id="product-contain">
            <div>
            <select onClick={selected}>
                <option value="groceries">groceris</option>
                <option value="home-decoration">home-decoration</option>
                <option value="skincare">skincare</option>
                <option value="fragrances">fragrances</option>
                <option value="smartphones">smartphones</option>
                <option value="laptops">laptops</option>
                
            </select>
           
            </div>
             <Pagination currentproducts={currentproducts} total={data.length} perpage={perpage} paginate={paginate}/>
             {prod.length ? (<h1>selected category</h1> ):(null) }
             { 
                
                prod.length ?(
                    prod?.map((item)=>{
                    return (
                        
                        <span key={item.id}>
                        <img src={item.images[0]} key={item.id} className="image" style={{border:"1px solid black"}} onMouseOver={()=>{setstyle({display:"block"})}} onMouseOut={()=>{setstyle({display:"none"})}}/>
                        <div style={style}>
                                Description : {item.description}
                        </div>
                        </span>
                        
                    )
                      })):( null)
                
            }
        </div>
        
    )
}
export default Product;
