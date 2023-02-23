import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { getUser, updateMyUser } from ".././../Actions/actions.js"

function Update() {

  const {user} = useAuth0();

  const dispatch = useDispatch();

  const usuario = useSelector(state => state.user.userInfo)
  const infoToken = useSelector((state) => state.token);
  const history = useHistory();

  useEffect(() => {
    if (infoToken) {
      dispatch(getUser(user))
      console.log(usuario)
    }
  }, [infoToken]);

  const handleSaveChanges = async (e) => {
     e.preventDefault();
     try {
       dispatch(updateMyUser(usuario.nickname, 'image_id acá'))
       history.push("/");
     } catch (error) {
       console.log(error);
     }
  };

  const handleCancel = (e) => {
    e.preventDefault();
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
                src={usuario?.picture}
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
                <label className="col-md-3 control-label">{usuario?.nickname}</label>
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

