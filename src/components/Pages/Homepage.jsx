import { useState, useEffect } from "react"
import { client, urlFor } from "../../../sanity-client/client"
import { reviews } from './../../data/Reviews'

export default function Homepage() {

  const [bannerData, setBannerData] = useState([]);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    client.fetch(`*[_type == "banner"]`)
    .then((data) => setBannerData(data))
    .catch(console.error);

  }, []);

  useEffect(() => {
    client.fetch(`*[_type == "product"]`)
    .then((data) => setProductData(data))
    .catch(console.error);

  }, []);

  return (
    <div>
      <div className="relative">
        <div className="relative w-full h-screen">
          {bannerData && bannerData.length > 0 && (
            <img src={urlFor(bannerData[0].image).url()} alt="banner-image" 
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {bannerData && bannerData.length > 0 && (
          <div className="absolute bottom-0 px-6 md:px-12 text-white">
            <div>
              <h1 className="text-[2rem] md:text-[3rem] font-voces">{bannerData[0].title1}</h1>
            </div>
            <div className="py-8">
              <p className="text-[1rem] md:text-[1.5rem] font-light">{bannerData[0].title2}</p>
            </div>
            <div className="py-20">
              <button className="bg-white text-black py-3 md:py-4 px-10 md:px-20 rounded-lg font-bold">{bannerData[0].button}</button>
            </div>
          </div>
        )}
      </div>

      <div className="px-6 md:px-12">
        <div className="w-full max-w-[110rem] mx-auto py-12">
          <h2 className="py-24 text-[1rem] md:text-[1.5rem] font-voces">Best Selling</h2>
          <ul className="flex flex-row justify-start items-start gap-[1rem] md:gap-[3rem] flex-wrap">
            { productData.map(product => (
              <li key={product._id} className="w-[10rem] md:w-[20rem]">
              <div className="h-[15rem] md:h-[25rem] overflow-hidden">
                <img src={urlFor(product.image[0]).url()} alt={product.name} className="object-cover h-full" />
              </div>
              <div className="bg-black text-white text-xs md:text-base px-6 py-3 h-[5rem]">
                <div>
                  <p className="font-voces">{product.name}</p>
                </div>
                <div>
                  <p>${product.price}</p>
                </div>
              </div>
            </li>
            )) }
          </ul>
        </div>
      </div>

      <div className="bg-green-200 px-12 py-24">
        <ul className="flex flex-row justify-center items-center md:gap-x-[10rem]">
          {reviews.map((review) => (
            <li key={review.id}>
              <img src={review.logo} alt="Logo" className="w-full md:h-20" />
            </li>
          ))}
        </ul>

        <div className="flex flex-row justify-center items-center py-14">
          <p className="text-[1rem] md:text-[1.5rem] text-white">&apos;Lorem Ipsum is simply dummy text of the printing and typesetting industry&apos;</p>
        </div>
      </div>
    </div>
  )
}
