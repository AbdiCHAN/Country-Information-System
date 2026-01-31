import React, { useState } from "react";
import styles from "./Home.module.css"
import SearchBar from "../components/SearchBar";
import Featured from "../components/Featured";
import Footer from "../components/Footer";


//import Featured from "../components/Featured";

export default function Home({}) {
   const[search, setSearch]= useState("")
  return (
   <>
   <div className={styles.Homee}>
    <h1>Welcome to Aloo world viewer</h1>
    <p>explore where you will never visit <br /> 
    i doubt you did geography</p>
    < div className={styles.pri}>
    <button>Get Started</button>
    <button>Learn here</button>
    </div>
  
    </div>
    <SearchBar onSearch={setSearch} />
    <Featured search={search} />



    <Footer/>
   </>
  );
}
