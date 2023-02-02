import React,{useState ,useEffect} from "react";
import "../style/Home.css";
import Reviews from "./Reviews";
import Header from "./header";
import { NavLink } from 'react-router-dom';
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home() {
  const [data, setData] = useState([]);

//  Get Data Func
  const getData = async () => {
    const { data } = await axios.get("https://nagatstoredb-production-817a.up.railway.app/products");
   const newDrop =  data.slice(0,4);
        setData(newDrop);
    };

  useEffect(() => {
    getData();
  }, []);
 
  return (
    <>
{/* Header Section */}
  <Header/>
{/* New Drops Section */}
  <div>
      <span className="inline-block h-1 w-12 bg-red-700"></span>

      <h2 className="mt-1 text-2xl font-extrabold uppercase tracking-wide lg:text-3xl">
        New Drops
      </h2>
  </div>
  <div className="d-flex justify-content-center ">
        <div className="col-11 col-md-11">
          <Row xs={2} md={2} lg={4}>
            {data?.map((product, index) => {
              return (
                <Col className=" mb-2 " key={index}>
                  <div key={index}>
        <button type="button" className="absolute right-4 top-4 rounded-full bg-black p-2 text-white">     
        </button>
        <img alt="hoodie"  src={index == 2 || index == 3 ? product.frontimg : product.backimg} className="h-56 w-full object-contain lg:h-72" />
        <div className="p-6">
          <strong className="inline-block bg-black text-white px-3 py-1 text-xs font-medium">
            New
          </strong>
          <h3 className="mt-4 text-lg font-bold text-black ">{product.name} </h3>
          <p className="mt-2 text-sm text-gray-700"> {product.price}₪ </p>
          <NavLink to={`/products/${product._id}`}  class="btn btn-outline-dark">
                    <button className="viewButton btn btn-outline-dark w-100 ">View Now</button>
          </NavLink>
        </div>
             </div>
                  </Col>
              );
            })}
             </Row>
        </div>
  </div>
     
{/* Three Cards   */}
  <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3">
              <div class="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                <img class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src="https://i.postimg.cc/pX9dyj2h/nagat-13.png" alt="blog"/>
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY-1</h2>
                  <h1 class="title-font text-lg font-medium text-gray-600 mb-3">Custom Shirt's</h1>
                  <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                  <div class="flex items-center flex-wrap ">
                   
                  </div>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
                <div class="h-full rounded-xl shadow-cla-violate bg-gradient-to-r from-pink-50 to-red-50 overflow-hidden">
                  <img class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8g5L8ZFBhxfnxYAOqw_U23BJfFKVVhTyP2A&usqp=CAU" alt="blog"/>
                  <div class="p-6">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY-2</h2>
                    <h1 class="title-font text-lg font-medium text-gray-600 mb-3">embroidery Shirt's</h1>
                    <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    <div class="flex items-center flex-wrap ">
                     
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-4 md:w-1/3">
                <div class="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
                  <img class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAABU1BMVEX///8mJiYAAAAByub+/v7w8PD9AC75+fkiIiL///0oKCj39/cAyOYhISHy8vIAyuUXFxcBrcURERFsbGwcHBzGxsYWFhbj4+M2NjZnZ2cMDAwyMjLq6urT09OxsbGAgIClpaWNjY3X19dBQUFTU1NeXl7BwcGurq6ZmZlxcXGKiopHR0d6enq5ubkAtc1FRUXF7/Lt+vvV8/SL4Oz8ABIJGBgDwdpS1Oi47O8Ap8Rz3OsAzOKr5/AmGBHU9fU+0+eq3OJi2exEuc725+r41Nr2x8p5x9bvPVP1ACHyjZVR0uuV4+j1ETb1Xm/zfo201dj1pK7zs7wANUT13N8Nipv0LkeiIDd5AABTAAANjZpN1OA1AAANQEj0dX/hCDAcAADKDC8Ke4K3DSp9ESJhFx0OcYVJFBsJT1sjFxwJKTAHmrIXAAAIZWyK0dtNnacgOj4aY3SRAMMoAAAZvElEQVR4nO1d+X/j1nEHQNAgQIIgIfAmxZuiJFKrw6uLymrX62NtOUnTOmmzdZukrevN2m78///UmXkPJ8EToFbGx+NDIgQ+Yr5v5jvHewAF4QmJDBJ1BPhPiDjIUxKGyPYK4fsTBAcJqhRJJ1mIbGhPTKKbvRwZ1Scn0ckkYb4TxxxHBuVpISoziTxMHNfyVIQmOGFcEFl+hcMvyQsXEUUWfkUkKHFQ61OS6PkAGyFBqMjREwI5aeGGaRTl/ezdScJEiFhzyVEHeHoSi+ckDZKopX0CG0AxRJ1EQcKrtg99ERElWoiYGywJASPeWU2Ckdg9mzj0kBPU+IxtamOh1ycgMVafyfAbHvRiUiTGoT6kxDezcnLK2HgIwF6nSwIkckyGkpzCPj5NEkKusYaJZEQcOd5cIhmYJCNuOhJPAzhRmPy6aWdO5OgN4Kj7fp6iRG0AJ4IRvRKZCZK3aSei4wjJqehdiTzHcVbCT0LiUShJiCTR7qPKL7Db2SvtdvxfGiS9zlCSpIPdfUDU/X+VGK9lnY87qNUlksHOPiOyjRz3m3FdyyppTg8LkitK2DnRm3KyEHlHZFuaRruGdaVSl/zSCjlpjbRxlbIxLEuNpR2znS1HAUikcchJUbchxVOzHYTO1w5kGsSkH3ZWHFsPIsebUrhfxy/pICZSdu6cyOse8aRpvYz927Q3f5FxSiOISW/+nPEkGuPHs8bdrPFfjsJZLz5pByA5DJ4gCyM43I1oJ3EswXCqa0nSKPpoy2TkwaNemzcSmOJC3YQ/RgqEsWyE4Bf3TOrEMNoyyXM8TK16PJyEXInQBbDwjOMQr/oAUpKOdv4ZA4g1e41nx8eDWm0YZHac36pjR5PdUtt60tjb5ehNUlEu5QWlAYjs1YbH7fawr4ladTgZTyt8X1fL412PXHOESCk0WYhLxp5cZDgYPtOCKa006BAGsmspnV1e0FoyjNLvDz3aG5X4VKf7Hg2zNXMuT5FMxEgbp4XRcCjyY/ntLygeaW2dFYTnSEqX9MpgPwAcQrMdoXI4DwhGoXJdQqgOh7Xa3sB8GmbiSnPa3SgUhm7xqoBS/cmhJUmNHqT0e/zvzb1QRFDK3Ju0IXANACrGpM76ooLIsirjT3hx5uhUwmZPWH65UMJqtqYkDcnwWkQPdq3X9YJQ3RsflFq9Vmm/M3nm+8NwLOQPPoDnqIJwdvbi9O7i9tW9YVyygxW4aA0yh+5mudu88/QlJ/s4cDKwluWorR+V/JFYaXU1F5WNPl5u9koH4/awaq49k1Q7kzGQdchn56fXgMTVzEjlUAwjlTKu2IX10htXg6HLBfuS5b7I83ph7Kh86K8g7CZSz039V2dK6Upr2unuDdwwJa3d8lDJOxAJNImvjFmOoEj55XbN0UIkhGJl+/I89q8M7CvvUqbihH7W76hQH1JxcHu2MGPLjie1vtfVCv3B4bgzalXm51NFciCGEMgz4NPOzmyTuGQ4gE3kUsbMMAwyD1debg1IWFesLQ3p54STCkje9owJxynvNCgI0w5PGLO2rRQWxcEO+7vV32uPp6Vefpllq8wiVAVN4uHi1f1sZpBnzBnFvFyebowG1yfMcyDmMH516bXJUxLRdfmCz4GOnVBXsRsKC9JY5WDaqqQDlwGmwFxQZeZA/0eWeACTAL4klgAPITAAlSAAcwdSxsnZVogs2NxxLHXpJzMNBMVuJnnLvnbbq6g3QTtaDkqYYAwlAd9gLIEmEcYS8wJmY4RhskEO63WV0F4FpCP0kxs5JG2K7vzqSsUbJfKdwAgkAWtYLKodOJAX0BYMmvl5TcMxIQke/URd88Nd+pAXbu3goTTLyVJAwyEJ9qtk+fWnn3322aev5wbpsTc0Qi4AKRNRACchk3i45SyxjkmEI5JKwfv9mBi5y8/XxsTxFHnRmn2XL2XxHH4wtbtrwezh9RdvPmby5osvP/VTZYW9pSYERVU5S3wFrmEQR9B/65mEXxjJzGb3969uH+5nPkxSJy/Xx8S5W2tBh0/mPMCnWq8Nh7aV9Pwlg/zmI1vevPn46y9fuxBXbFAOeOhQiSUgcBjMJGwKYDa/0kBmhJyLG7zt/ur24u769PyMpfDqlW8QY1Y8XZdP3Kb4oqWpEjcTnks9q9XYL1OMQz5Q5N+6oIB8/PHv8nzEwyqOQ/L7lz9h4Lg0WMiYbWMPqVnOmN27/jHLnQqspEFSZhejBnzHuDnbzHeWLUt1WPTd54ww2GOhlRLTnh+Uf/r4I5+8efMHQvxQUwSbov/55OTkEmIpsiamVSu0Z8h59YP3vb07owz+9JaflAN9Zf5EGYpYEMP9JGtcFjfodHspNhyTDv7g8bQ/ZOkrT1p7vpWkfwlgArbyWxh0orGR2Tu/AVCMtc0DMzIwCu+B+3OVz7iqntM4OcMxASp7qO4L2MnJJ8K6dmIPtbg3PmVJiEIuMxoPWN0XlpTK8tdBTD5688fXQpPjxhraz8lQ/MbgJBS8ZLMJxTCuXgBBPOTcM3Nvsf4nWyD1Z/iee1WgmKVAGLsjgqJBvXLz+cbt/8XnNyWJ/bFVxbAxdfK2kEH+4808KH9yhz5wDcVPgJSDYIpORHl3ev5gG8kLeLf6wjkTiASNRAZTODsj7jhF9SmJgX8Rpotwd7x5uSkiy5aVBjyLZftaKDWpLxgmSCgg/1ry2CxRUf1yzlCMt9fXL0hLrPXhnweyFMCIcYR7du4B+eL0CmG8xQij3hOoxNb3iNarEECM1OXNptXOUvqpeLuGvfn81SOv5zD5Nx8Js9jzZzAU/yXn7gIDMfLM5a7xherqaeTO0W6YmYEbwQtuF5jQv0JM7kMxObnZstpZIOAuA7tUocTNWtgy+6Mfka//PeBkFNC/BUPx+w7T3SNXjIRnZGKqepdzzvTCkEM9rx3uSV1A9FF9qZptXaliMUZAUHB629T/UBibLOyF+AnlP/8SXBpkEf0GnMcbX9nsY0rLy5xXhms+aMPn9tkIg6pe55jixun59cMVhWeK7Bdw+lkYnRhG8ZOYMaGWGpEKY9jmQjv5g9d5/jqfysv0/r+B8+S8SShoKqvX2BXi+TkzeIPwQNJwojFkZ3gqOwPDNOsisewXrE0+D8Xksrh2tbO+HLPqhrr0Q2UhJl5C+a96yKLbxHaemffaZ8wjHGbgNvFA/IAJ6quUHatfYbBRhfMLtAwM2iz3w4icOldZHJrH5OTmp9ghyfJ2AU3zfnZRK0yVXUL503MxBDrGspiieMwEMIHE8zagjZGDjwGTwJz8zjEr45pxjKCe3vKDdm+AzrwOxaS4cdhZLT1W9LCoU0lPRuGMogq/swnlv5+H5HVNmaH63oMJJviv0E6umIngvJOn5C5Q+6sUguB6BJAMRGNiH1W+IGszbFOR4ehDCCSIyXnsvrMvURONkq6Gku5WpUZY00yWP+PO8z/Pg60EedTW4Rgl+N+duJGHMg3EBGsg1jhi3kPTfj7DdrssO9EEbOMrntxjGutaCnggIhW0NpLLYlHdNItdKUcsJaHGySSbzwr5aSinqK/JTr7+3+dzSzpytdtS+CrZ9040Zmb/gItTs6tXWO1DLq+iA+RuMU+9hUxM9WUoiMo9FoEC5fYUghiIV9i+vQqzkxMIO7FjUmM9NUpiO9l0evEHfIEx+N3zhYvDFLn+fulkbVQcX1O+rjq13QXma+e4UIHdaAxKHkIx0FigNmZnX7gB7JbK4TBMboqfb1oBrpYq6ytRk3qUTy9ZSfvyzUd/ff588RpXxSbZnGMmKapqWFlHsy9jGnuFOf4tlDL355i55AxmI7O3VwyYnHEnkHPZzpJ7IA8MAcW4Kf4Uv++w9jLL2HqAycKkbdqQ/vK8IC3eDZT2Bh7eS86xvJuvdsP8v4UgewqTLkNFw7tEzDyuwWacpBZPEc6cchLJVzgLaVrmgE7iDzsC20mf5RlbOr0oQdmXhp1DyVxyLwLDtUhloMFbjYaCvsNz2Nt7CDvUEqDQYpenyJ25yzM44GKCae6Zq/opYPIirJF7clM8jx0SgaUnrAGSBkwWLUqQgXSXLuQ4wZinWogJEuAtz2GZtaeuqfXH10Hh1zs8imrLPHufAUKU9juYsETG5zQ0/qwIYSd2SOYxCSeUJi0rV5aufZsuJnbK+hW6x5Wv9zbDJAQbRedgOy9UVscYkLIA49zx/jzahXDhFE45fMuF1054zg+uE3+1E4JJuPMoFG5GSzcq152kzabD3C2u7sy8fSZ0C0jruelgbcfqXWoyqmd3FxcP1+hcslvyzVL4lluf0ziYfB43IAJigk7t8glE4zAe70j1kdCylu5IghHMH4qXyLE84YLZB1Vz3iKfkv1Te87vEQhKxgge2lWgEs+oXzmtXba95MrHJ+z3k2Ix/moHFUHDYPxYIUzCIs+BZKJn6MvoBG2t/oO3J4stAZxwr9EjSupbJ9WFDE2+Zon/tcpSe1q4OH/rLvLk7p0mg09yRrG4ceNxHdFY8UL96RJhEs6yfbF0sHwjTZNhcunptNHqjLfGNwzsQp7bFpBLXWMHFg0J/rs9U3mn6ezCY1tsu0XY2jm4zs0Owo4wZNVLn5XFyCfh20TaKzdbQmFcrxcgj/X0WM+p/vU0VG4xDt86R4BwwDKwMkTOyd1f3N1dP0DMtuOWx0/mxQDXuTmLPWNz7qajzuMR1DtKr7P2HgFbGIgdu4Hi0QY94cHLsGdIpJ4DM8xcnEYrlQPrr69DJC7u4j7tDmuzdfCGgoFS2cMO7Ybb55u4sVpmXakfvZgYKUzovUsQt9iF9B5gC8qeSnoW1nV1tljkcp5MBxL74ueBzD6WB1uU2OatFmBiSvnmuJVX8ptuH0zv14CpnSUeV5d7pMu3HuXe4sL6ss0mRsgfaRsbkg+Z0SUIfMhJkeSngJ3EcudYniUoMgSWOpBsNk85yubjyi0ntXeN4Or64sIXMNg2g3nvMOy9B3SO3zwMjkIxRG5eqr48NvKjdphoLF8fAEFK7Wyayca7gOUs7YN8jqterk6p9XbfcEOgkIxlsReFmzAoXEzmws4KO1kPrjY2lWQgFExAFI7J4vJ4wUfls7QS+CNoEkYIyxFxbSHcGhZDUvSvd8XzLT+cUGTe/ZjmtwMlny/ZFeBJCFvQ3jXDNgTmRH5eWCUnNmA3N+/fv//mm2+++7+fXr58eR0AIKZnByl4m6yMt9OBDBxD2QgUYGXanPD3+Z0FqRRfk5jNVqJwwv61z3jPtf/uux9//P77b//xj39oYkZ/9xuSHzoCNSn9iMT1OKUay1DYQl4rvzkocj6dZ2aGHWrD3sbo8YjgnKPu7Dj+76bIlP8bKs+1F/XfuPJO1/VMRsyIHoEK3W1pssuI6dFB6H0j6Zh+lwKGsi7R4juUPR51iifBIME1Z4bPlAftf/yZKa9lrHfvbNVRQHkQcaXMr6fIMd3DTabGt/qxDfQl11CWNWddoXqABeLvQWcbivfv/8zs/ueff7YNX/dN/Xq6L5L5TSGxPlm4y5Z42IpvJstAyS6skX2i0GkKu9Pg2++//RbnHnz+nav+OtprqyAInqAf7xARmZrLpDvbqtcm71E6texqUzlKM0iYiZn6O2u7ud8YEtHy3hfPNnbG9vQhAuWQL1CwOx5LWYSEmvjMYhZ9lqzURASFe460tTNsDonoW2WK7+H+9oDU+XDvzsDWEiSlvaxLK2HdAxmdSznUmvl8k90euJ2NaGJj8zeJmq8xHEc6Pydtvp+EbS3X0tmxFxKCJas4HyvLCicdSEvG2TwjE1PcBpNGVauuRC0Mk4p7NTFVfgFR7Lu92D0rz/LZfDpE8iQBrLKDCJ6jASTV6jJL0bRQz5JsQOSdfWfYvlSnUZtMv75f81CAbJg4JPqW7FoFS1l6Qigoln0fyI7wIBnwB5xwStEqXjqp+EDwQpRv8vv9rO0ItgGQNJZhonkx0S2LfYbmPI5ll8+fz0vSPv3Cd99LJcVRXfFl/N22C5fS4jfKFbaEpAHOswgSNp5u1k1+oDA8POpnGCZjG5JdPiZyZN/AdsBBObI5BUKtx5XyI81O//POvaNbQqKhmTgQZMAMCjgKhbE6cK9UEPXa/rQj0QnY06hwfJw9MLt9iG7XvoHNvp1N46aSHde8RVCTLwPllVY1GiSNRjXTKOsipkVlsdEf1CbdQUbUS70K2waTntRFvMthaMHZFvZIqzphaXnWrXf6oMihpLE8xHmwybCHqGSrB74aqLGPeRq1szfmkrJZFrUyMDK+qDYyh53pULcqTScxHOj6M8811azyES5Tw9kmlKRdZiaa+ViPHxP6UoN9VNO5Y3xYymbzlaYXk3wLcjqlVLNPkcLLGXIFOJypgw04kIw740K5U0kPdEavmAZYQ8811EULUqXKdL/Tbe/j9IhoEkdl7A0IPeZEQCfVR4JEgEquwfsD7q33ereVhRSNMwr8hFfeBxaYc5AgGZQz6Art40ymWmp1TAco1KsAMz8uQxBulMf4WwEq0N5+Z9xt1wZ9XcSDbck0ywXw5bxEPpO1zDbum9Ptj9jpc4L8oFQlkztqS5dctWvjUS9NFJ/vjcY176MxrYzztIcC17vnusLQwlnftzGhF/UMTHKr0IBczcwKSkE0O7hj2SyXC5YO4Nb3GYFoIlSmaYm6R0D8MOARHwfoJPyOmt3IwH1QRUdaLeVMxhoABlhWV47IsnXvTiaIn13QhaMlooV0y9gOUrSGqOHfwIbqI6QR5m9oAy1BsMyyWcfkYFSHow18uBP5EcekvOsHsfml7T6own1Kg1fquObhcRvTvUe9hBeNnlApTZkrWDTrNYsrYx7Qi/oULKHREDHOgWUAYWDrpl4QG88a1EBTDo/GnRFGwWeIVZ2sQtZsD9Xqj/xMK8jZqvYnKgfVOUxMk2NSYF3COujZmx50cOaQOJgn1IEOLEtns+4og17Q1xv6BE/VEL19sINyXlBa4G/I75CSSe615IfMwihJaDtUnZGkucverVSq3meaVMZ9PyR1E6RepvibwVlGPXF3CvoMGEodXh8zLiRPaNJRjklTkIFIGg0KITjZjQy5hiOSp4EmTyRuYIWJx3OQTkLuet+xQPZm7rsv86Xu0H1sjmnpGrMQFm5QM5pB9PE9y/YECD06FjISzy4YxypCswyVMBK5XtjD9FBjcaXSao0OOuN2gRpo+1ADTbkvenjIxsQMuel951IBqs0E7kRPNyuSZUGeBTWKbSN0vSw4gAt0MbCKdYglI6Bd7EP1M5mqRzV6kYGAIyLJ4L4XCL0aKYwgYvgVWSg2MzpibeOA/nhoOZgsupFzx1JCjxkHlguOAZIMlGy6AwjTk5k10kPHzHiyKblMs97xhuIDTF8beHTA0ULi3XMUZgRssSa0bFc34I9Vh2HFiM/d3F5KuAP/+MALy1FZQythePBqFi0fiZIZ+NjE13K60kNX6BbIeJxQjC+6IjZMyviUPM47jHipACyAXaD5aHZMHjNQ0GacQAx08uEepVihZLbRntpXMAWGCPbEuMeILNdqW7YnoCsU3FkX7TOGlgY0g6Qjc/sC4s1KZuN4uDc5GsNJaUj3bbSzzHkkbHY5mJgLHqL+SFKaMHItUCBqWtg99bc7XMvH/ZOQrnS8rk+TTVZPIcp+QQRhgyV5+h+IhkPKaA1jsrFM6eDIHlMDOrHCr3YtiaOMruxPGhBtaLDMfOeUWT4awRGr2EpU0KMrWAXKLBS0Gb066OOLbMFhFq667r21sCdljps9TkCZ6rH9eXXThVkPe9bK2hJfZ6FJOw+8BuBgAlkn5CoWpSeQobNQbFXRFbrAC7KgVNi62Z5lunG5INjmpQ8h64UKsH0IFSBT2eZkl8k9ohUk5+75bSTWbovsiSCu1HHnil6tYT6D/TAJV374O5S6dwWzYQ1Y/UKYtI/sWKPjFlKW9q7ThMEnt0YIOzEujbGlRzeXdAy5j0vGjPKmkuhPSiGhOcxiCAIzOJpgx0R0DM0qBGwuvD8fItJmj7gM6sG/ZCCG7QcM3+ycnVhOI6MyQcD0YbPluAIk7kTRzAxEUVxmB+tigj2MCGFHjucbBD2jHOuBK7TaFcDgYNx+xtsnurTAFVYpvCYmSCfa1ppwPaJ+DaHgXWhz0i8XFA5BEKw5XVZrux4mQCfDVRe9UBlnC2A0S/GZmk2RH1CkrcOOo0b0PV7ehbbmHMnuUrSgiGSX0v7S612oh3fXTiRIAs+707ZYJl/lE3Oq4xugzNQp74MiqIx9rLrT3tsm7PiXxuL9HsK9+axtndmmn/hPYNZxewZqDrqj5k4Pb7lsHnb8X0Qa82JqSNa2etY13NYanPU1dF8guLuvudk3usi+HSoxf8ecP2tbYu9mwN63F1MKDIJhZ7xJW0mOHQafKNF1jCxYox+uvZqxw007tmRXiLJ7Qe0aa7eVEvfFrAtl/dWM0K85+GVL+L7Xyvr5vZ3LJ0cWGH5p/qu0lozweL6z/HO6tb0wqXU2/IiAPukaSX+jsPNEzGRxfNpomLnbtkr2MI+6iB6TVEoBaZGUNki15LD90T02TuspfFvWB5D47rRIhuxkB/0vXeK+0+KDS2wN4KRIdGXkuO7seyoStb7w9pETI1HNXhYSx6+R745/XLd5jE+KTI4xPXHgCUn02zd/DcKhgyQKksirjsmTpE1wDJI4cowq8q9uMycJCxcxbdpJkpXEQAM7Xmj7ABJ1hp09YkmSGDftJESillxy8oJwZG5MVvtHiOXBIYkKOEJci+7J8pxEZFqx0tmjLi/vTOQ4ST4pHa3YCq3d72h6LInvyWxynA95+5CyuR7/D3Wti8uESnvfAAAAAElFTkSuQmCC" alt="blog"/>
                  <div class="p-6">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY-1</h2>
                    <h1 class="title-font text-lg font-medium text-gray-600 mb-3">Fast Delivery</h1>
                    <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    <div class="flex items-center flex-wrap ">
                     
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
  </section>


{/* Join The Family Section */}
  <section>
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div
        class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
      >
        <img
          alt="joinToTheFamilyImg"
          src="https://i.postimg.cc/4dqMVHHF/the-Street-brand-18.png"
          class="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div class="lg:py-24">
        <h2 class="text-3xl font-bold sm:text-4xl">Join Us</h2>

        <p class="mt-4 text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic
          atque tenetur quis eius quos ea neque sunt, accusantium soluta minus
          veniam tempora deserunt? Molestiae eius quidem quam repellat.
        </p>

        <a
          href="#"
          class="mt-8 inline-flex items-center rounded border border-black bg-indigo-600 px-8 py-3 text-white hover:bg-black hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
        >
    <NavLink  className='text-black fs-5 nav-link active navList ' to='/login'><span class="text-sm font-medium text-white">Sign UP</span></NavLink>

          

          <svg
            class="ml-3 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
  </section>

{/* Reviews Section */}
  <Reviews/>



    </>
  );
}
