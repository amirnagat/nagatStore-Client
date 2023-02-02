import React from 'react'
import Form from 'react-bootstrap/Form';
import { useEffect ,useState} from 'react';
// import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router';
import {useDispatch,useSelector} from 'react-redux';
import axios from "axios";

// import axios from'axios';
// import Marquee from 'react-fast-marquee';
import '../style/Product.css'
import Skeleton from 'react-loading-skeleton';
import {MDBCarousel,MDBCarouselItem,} from 'mdb-react-ui-kit';

export default function Product() {
    const {id} = useParams();
    const cart = useSelector((state)=> state);
    // console.log(cart);
    const dispatch = useDispatch();
    // const productList = useSelector((state)=>state.products.value)
    const [product, setProduct] = useState([]);
    const [size, setSize] = useState("");
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            await axios
            .get(`https://nagatstoredb-production-817a.up.railway.app/products/${id}`)
            .then((res) => {
              setProduct([res.data]);
              setLoading(false);
            })
            .catch((err) => console.log(err)); 
        }
        getProduct();
    }, []);
    const Loading = () => {
        return(
            <>
                <div className="col-md-6">
                    <Skeleton height={400}/>
                </div>
                <div className="col-md-6" style={{lineHeight:2}}>
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <Skeleton height={50} width={100} />
                    <Skeleton height={50} width={100} style={{marginLeft:6}} />
                </div>
            </>
        )
    }
    
const ShowProduct = () => {
    return(
     <>
     
{product?.map((product,index)=>{
   product.quantity = 1;
    return(
    <div className='  d-md-flex ' key={index}>
        <div className='leftsSlide imgSlider border border-0 col-md-7'> 
     <MDBCarousel  showControls showIndicators dark fade >
      <MDBCarouselItem
        className='w-100 d-block img-fluid img'
        itemId={1}
        src={product.frontimg}
        alt='...'
      >
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block img-fluid img'
        itemId={2}
        src={product.backimg}
        alt='cart'
      >

      </MDBCarouselItem>
    </MDBCarousel>
     </div>
        <div className='rightSide  col-md-5'>
            <h2 className='productName text-center mt-md-2'>{product.name}</h2>    
              <p className='productDesc text-center p-3'>{product.desc}, Lorem etur adipisicing elit. Animi, eaque voluptatem suscipit veritatis, eos, velit perspiciatis corporis harum officiis doloribus fugiat provident inventore iste? Nemo esse recusandae modi id sequi? </p>       
           {/* color's Picker */}
            {/* <fieldset>
            <legend class="text-lg font-bold ms-1">Colors :</legend>
            <div class=" flex gap-1 ms-1">
              <label  for="color_green" class="cursor-pointer">
                <input
                  type="radio"
                  id="color_green"
                  name="color"
                  class="peer sr-only"
                  checked
                />

                <span
                  class="block h-6 w-6 rounded-full border border-gray-200 bg-green-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"
                ></span>
              </label>

              <label for="color_blue" class="cursor-pointer">
                <input
                  type="radio"
                  id="color_blue"
                  name="color"
                  class="peer sr-only"
                />

                <span
                  class="block h-6 w-6 rounded-full border border-gray-200 bg-blue-600 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"
                ></span>
              </label>

              <label for="color_pink" class="cursor-pointer">
                <input
                  type="radio"
                  id="color_pink"
                  name="color"
                  class="peer sr-only"
                />

                <span
                  class="block h-6 w-6 rounded-full border border-gray-200 bg-blue-900 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"
                ></span>
              </label>

              <label for="color_red" class="cursor-pointer">
                <input
                  type="radio"
                  id="color_red"
                  name="color"
                  class="peer sr-only"
                />

                <span
                  class="block h-6 w-6 rounded-full border border-gray-200 bg-red-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"
                ></span>
              </label>
              <label for="color_white" class="cursor-pointer">
                <input
                  type="radio"
                  id="color_white"
                  name="color"
                  class="peer sr-only"
                />

                <span
                  class="block h-6 w-6 rounded-full border border-black bg-white ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"
                ></span>
              </label>

              <label for="color_indigo" class="cursor-pointer">
                <input
                  type="radio"
                  id="color_indigo"
                  name="color"
                  class="peer sr-only"
                />

                <span
                  class="block h-6 w-6 rounded-full border border-gray-200 bg-black ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"
                ></span>
              </label>
            </div>
          </fieldset> */}
          {/* Size's Pick */}
         <fieldset className="mt-md-5 mb-md-4">
            <div className="flow-root">
              <div className="-m-0.5 flex flex-wrap ">
             <span>size:</span><select  onClick={(e)=>setSize(e.target.value)}  ClassName=" cursor-pointer p-0.5">
                   <option value="s">S</option>
                   <option value="m">M</option>
                   <option value="l">L</option>
                   <option value="xl">XL</option>
                   <option value="xxl">XXL</option>
                </select>
                
              </div>
            </div>
          </fieldset>
          <h2 className='ms-1'>{product.price}₪</h2>
             <button onClick={()=>dispatch({type:"ADD",payload:{...product,size}})} className='addBtn rounded text-center ms-1 addProduct '>ADD To Cart</button>
        </div>
    </div>
                )
            })}
               
            </>
        )
    }

  return (
    <div>
            <div className=" py-3">
                <div className="row py-4">
                    {loading ? <Loading/> : <ShowProduct/>}
                </div>
            </div>
        </div>
  )
}
