import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Update() {
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");
  const infoToken = useSelector((state) => state.token);
  const history = useHistory();

  useEffect(() => {
    if (infoToken) {
      axios.get("http://localhost:3001/api/user").then((res) => {
        setUsername(res.data.username);
        setAvatar(res.data.avatar);
      });
    }
  }, [infoToken]);

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:3001/api/user", { username, avatar });
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setUsername("");
    setAvatar("");
  };

  return (
    <>
      <div className="container">
        <h1>Edit Profile</h1>
        <hr />
        <div className="row">
          <div className="col-md-3">
            <div className="text-center">
              <img
                src={avatar || "//placehold.it/100"}
                className="avatar img-circle"
                alt="avatar"
              />
              <h6>Cargar Nueva Foto de Perfil</h6>

              <input type="file" className="form-control" />
            </div>
          </div>

          <div className="col-md-9 personal-info">
            <h3>Personal info</h3>

            <form className="form-horizontal">
              <div className="form-group">
                <label className="col-md-3 control-label">Username:</label>
                <div className="col-md-8">
                  <input
                    className="form-control"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="col-md-3 control-label"></label>
                <div className="col-md-8">
                  <button className="btn btn-primary" onClick={handleSaveChanges}>
                    Save Changes
                  </button>
                  <span></span>
                  <button className="btn btn-default" onClick={handleCancel}>
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Update;

