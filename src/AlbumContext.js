import { createContext,useContext } from "react";
import { useEffect,useState } from "react";

const AlbumContext=createContext();

const useValue=()=>{
const value=useContext(AlbumContext);
return value;
}

const AlbumsContext=({children})=>{
    const [albums, setAlbums] = useState([]);



    //===============rendering the data from api===============
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
          .then(response => response.json())
          .then(data => {
            setAlbums(data); // Update the state with the fetched data
          })
          .catch(error => {
            console.error('Error fetching albums:', error);
          });
      }, []);

      //============Remove an Album==================
      function removeAlbum(id) {
        setAlbums(prevAlbums => prevAlbums.filter(album => album.id !== id));
        alert("Album Removed from the List");
      }

    //==================  Add a new Album  ==================
    function addNewAlbum(title, userId,id) {
        // const newAlbum = ;
        setAlbums(prevAlbums => [...prevAlbums, {
            userId,
            id,
            title,
        }]);
        alert("New Album Added to the list")
    }

    //================  Updating the albums  ================
    function updateAlbum(title, userId, id) {
        setAlbums(prevAlbums => {
            return prevAlbums.map(album => {
            if (album.id === id) {
                // Update title and userId if the id matches
                alert("UPDATED SUCCESSFULLY")
                return { ...album, title, userId };
            }
            return album;
            });
        });
    }

    return(
        <AlbumContext.Provider value={{
            albums,
            removeAlbum,
            addNewAlbum,
            updateAlbum,
        }}>
            {children}
        </AlbumContext.Provider>
    )
}

export {useValue};
export default AlbumsContext;