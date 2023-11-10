import React, { useState } from "react";
import styles from "./Albums.module.css"; // Import your CSS styles
import { useValue } from "../AlbumContext";

export default function Albums() {
    const { albums, removeAlbum, updateAlbum } = useValue();

    const [titlee, setTitlee] = useState("");
    const [userIds, setUserIds] = useState(null);
    const [editingAlbumId, setEditingAlbumId] = useState(null);
    const [isFormVisible, setIsFormVisible] = useState(false);

  //===================  Form visibility setup  ====================
  const handleUpdateClick = (albumId) => {
    setEditingAlbumId(albumId);
    setIsFormVisible(true);
  };


  //===========  updateAlbum   (function calling)  ==============
  const handleSubmit = (e, albumId) => {
    e.preventDefault();
    updateAlbum(titlee, userIds, albumId);
    setTitlee("");
    setUserIds("");
    setEditingAlbumId(null);
    setIsFormVisible(false);
  };

  return (
    <div className={styles.Album}>
      <div className={styles.empty}></div>
      <div className={styles.albumContainer}>
        {albums.map((album) => (
          <div key={album.id} className={styles.album}>
            <div className={styles.titles}>
              <div className={styles.title}>{album.title}</div>
              <div className={styles.ids}>
                <span>UserId {album.userId}</span>
                <span>Id {album.id} </span>
              </div>
            </div>
            <div className={styles.btns}>
              <button
                className={styles.update}
                onClick={() => handleUpdateClick(album.id)}
              >
                Update
              </button>
              <button
                className={styles.delete}
                onClick={() => removeAlbum(album.id)}
              >
                Delete
              </button>
            </div>
            {editingAlbumId === album.id && isFormVisible && (
              <div className={styles.formPopup}>
                <form onSubmit={(e) => handleSubmit(e, album.id)}>
                  <input
                    className={styles.titleInp}
                    placeholder="Name"
                    onChange={(e) => setTitlee(e.target.value)}
                    value={titlee}
                    required
                  />
                  <input
                    className={styles.AlbumId}
                    placeholder="AlbumId"
                    type="number"
                    onChange={(e) => setUserIds(e.target.value)}
                    value={userIds}
                    required
                  />
                  <input
                    className={styles.AlbumId}
                    type="hidden"
                    value={album.id}
                  />
                  <button className={styles.submit}>Submit</button>
                </form>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}