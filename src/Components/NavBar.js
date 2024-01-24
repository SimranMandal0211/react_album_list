import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { useValue } from "../AlbumContext";

export default function NavBar() {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [titlee,setTitlee]=useState("");
    const [userIds,setUserIds]=useState(null);
    const [ids,setIds]=useState(null);
    const {addNewAlbum}=useValue();
  
    //=============  Form visibility setUp  ===============
    const toggleFormVisibility = () => {
      setIsFormVisible(!isFormVisible);
    };

    //==============  addNewAlbum    (function calling)  ==============
    const handleSubmits=(e)=>{
        e.preventDefault();
        addNewAlbum(titlee,userIds,ids);

        setTitlee("")
        setUserIds("");
        setIds("");
    }

    return (
        <div className={styles.Nav}>
            <div className={styles.PageTitle}>Albums List</div>
            <div
            className={`${styles.addForm} ${isFormVisible && styles.visible}`}
            onMouseEnter={toggleFormVisibility}
            onMouseLeave={toggleFormVisibility}
            >
                <h1 className={styles.h1s}>AddAlbum</h1>
                {/* <div className={styles.formBox}> */}
                    <form onSubmit={handleSubmits} className={styles.addAlbumForm}>
                        <input className={styles.titleInp} 
                            placeholder="Name" 
                            onChange={(e)=>setTitlee(e.target.value)} 
                            value={titlee} 
                            required
                        />
                        <input className={styles.AlbumId} 
                            placeholder="User Id" 
                            type="number" 
                            onChange={(e)=>setUserIds(e.target.value)} 
                            value={userIds} 
                            required
                        />
                        <input className={styles.AlbumId} 
                            placeholder="Id" 
                            type="number" 
                            onChange={(e)=>setIds(e.target.value)} 
                            value={ids} 
                            required
                        />
                        <button className={styles.submit}>Submit</button>
                    </form>
                {/* </div> */}
            </div>
        </div>
    );
}