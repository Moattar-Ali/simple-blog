// import Header from "@/components/header";
// import Footer from "@/components/footer";

"use client";
import { useRouter } from "next/navigation";

type MyData = {
  title: string;
  description: string;
}

export type Routes = '/'|'/dresses'|'/footwear'|'/bags'|'/jewelries'|'/skin-products'|'/makeup-products';

const routeMap: { [key: string]: Routes } = {
  Dresses: '/dresses',
  Footwear: '/footwear',
  Bags: '/bags',
  Jewelries: '/jewelries',
  SkinCareProducts: '/skin-products',
  MakeupProducts: '/makeup-products',
};

const data:MyData[] = [
  {title: "Dresses", description: "There are variety of dresses displayed in this section"},
  {title: "Footwear", description: "There are variety of footwears displayed in this section"},
  {title: "Bags", description: "There are variety of bags displayed in this section"},
  {title: "Jewelries", description: "There are variety of jewelries displayed in this section"},
  {title: "SkinCareProducts", description: "There are variety of skincare products displayed in this section"},
  {title: "MakeupProducts", description: "There are variety of makeup products displayed in this section"},
];

export default function Home(){

const router = useRouter();

const HandleNavigation = (title:string) =>{
  const route = routeMap[title];
  if(route){
    router.push(route);
  };
}

  return (
   <div className="parentContainer">
        {data.map((MyData)=>(
        // eslint-disable-next-line react/jsx-key
        <div className="childContainer"> 
        <div className="imaging"></div>
        <div>
        <h1 className="title">{MyData.title}</h1>
        <p className="description">{MyData.description}</p>
        <button className="readMore" onClick= {()=> HandleNavigation(MyData.title)}>Learn more...</button>
        </div>
        </div>
   ))}
   
   </div>
  )
}
