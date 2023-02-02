import React from "react";
import { useState, useEffect } from "react";
// import 'swiper/css/bundle';
// import Swiper from 'swiper/bundle';

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../style/Products.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
// import { AiOutlineShoppingCart } from 'react-icons/ai';

export default function Products() {
  const [data, setData] = useState([]);
  const [fiterData , setFilterDta] = useState([])
  const [inputVal, setInputVal] = useState("");
  const getData = async () => {
    await axios
      .get("https://nagatstoredb-production-817a.up.railway.app/products")
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
        setFilterDta(res.data)
      })
      .catch((err) => console.log(err));
  };

  const filterIt = async (searchName) => {
    let filterList = data.filter((element) => {
      let lowerSearchName = searchName.toLowerCase();
      if (element.name.toLowerCase().includes(lowerSearchName)) {
        return element;
      }
    });

    if (filterList[0]) {
      return setFilterDta(filterList);
    } else{
      return setFilterDta(data)
    }
    // // const newDataFilter = newFilterdata
    // if (inputVal == "" || inputVal == undefined ) {
    //        setData(newFilterdata);
    //     } else {
    //       const newData = [...data];
    //       let filterData = newData.filter((product) => product.name.toLowerCase().includes(inputVal) );
    //       setData(filterData);
    //   }

    // ;
    // // console.log(inputVal);
    // // setData(filterData);
    // console.log(data);
  };

  const sortCategoryBtn =  ()=>{
    const strAscending = [...data].sort((a, b) =>
    a.name > b.name ? 1 : -1,
  );
  console.log(strAscending);
  console.log(data);
  }


  useEffect(() => {
    getData();
    // console.log(data);
    // console.log(fiterData);

  }, []);



  return (
    <>
    {/* Products Header Section */}
      <section class="relative bg-[url(https://fashionista.com/.image/t_share/MTY5NTU4MDA2NTk2MzgwMjUw/london-fashion-week-mens-fall-2020-street-style.png)] bg-cover bg-center bg-no-repeat">
        <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

        <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div class="max-w-xl text-center sm:text-left">
            <h1 class="text-3xl font-extrabold sm:text-5xl">
              Let us Help you find
              <strong class="block font-extrabold text-rose-700">
                Your Shirt
              </strong>
            </h1>

            <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div class="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started
              </a>

              <a
                href="#"
                class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      <div class="container">
	     <h1 className="producstitle">PRODUCTS</h1> 
      </div>
      <div className=" text-center mt-5">
      <div className="py-20   px-2">
        <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
          <div className="md:flex">
            <div className="w-full p-3">
              <div className="relative">
                <i className="absolute fa fa-search text-gray-400 top-5 left-4" />
                <input type="text"  onChange={(e) => {
            filterIt(e.target.value);
          }} className="bg-black text-white h-14 w-full px-12 rounded-lg focus:outline-none hover:cursor-pointer" name />
                <span className="absolute top-4 right-5 border-l pl-4"><i className="fa fa-microphone  hover:text-white hover:cursor-pointer" /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="d-flex justify-content-center ">
        <div className="col-11 col-md-11">
          <Row xs={2} md={3} lg={3}>
            {fiterData?.map((product, index) => {
              return (
                <Col className=" mb-2 " key={index}>
                 <div class="wrapper ">
                   <div class="card ">
                       <img src={product.backimg}/>
                           <div class="descriptions">
                             <h1>{product.name}</h1>
                               <NavLink to={`/products/${product._id}`} class="btn btn-outline-dark">
                               <button className="viewButton btn btn-outline-success">View Now</button>
                               </NavLink>
                           </div>
                       </div>
                   </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </>
  );
}
