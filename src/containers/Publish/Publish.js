import "./index.css";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Publish = ({ token }) => {
  const [newOffer, setNewOffer] = useState({});
  const [picture, setPicture] = useState();
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();

  const url = "https://vinted-react-by-adeline.herokuapp.com/offer/publish";

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData();
      formData.append("title", newOffer.title);
      formData.append("description", newOffer.description);
      formData.append("price", newOffer.price);
      formData.append("brand", newOffer.brand);
      formData.append("size", newOffer.size);
      formData.append("condition", newOffer.condition);
      formData.append("color", newOffer.color);
      formData.append("city", newOffer.city);
      formData.append("picture", picture);

      const response = await axios.post(url, formData, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      history.push("/");
    } catch (error) {
      console.log(error.message);
      if (error.response.status === 400) {
        setErrorMessage(error.response.data.message);
      }
    }
  };

  return (
    <div>
      {token ? (
        <div className="publish">
          <div className="publish-container">
            <h1>Vends ton article</h1>
            <form onSubmit={handleSubmit}>
              <div className="publish-divs">
                <div className="dashed-preview">
                  {picture ? (
                    <div className="preview-image">
                      <img src={URL.createObjectURL(picture)} alt="" />
                      <i
                        className="fas fa-times"
                        onClick={() => {
                          setPicture(null);
                        }}
                      ></i>
                    </div>
                  ) : (
                    <div>
                      <input
                        id="files"
                        className="input-file"
                        accept="*"
                        type="file"
                        onChange={(event) => {
                          setPicture(event.target.files[0]);
                        }}
                      />
                      <label htmlFor="files" className="add-picture">
                        <i className="fas fa-plus icon"></i> Ajoute une photo
                      </label>
                    </div>
                  )}
                </div>
              </div>
              <div className="publish-divs">
                <div className="publish-inputs">
                  <p>Titre</p>
                  <input
                    type="text"
                    placeholder="ex: Chemise Sézanne verte"
                    onChange={(event) => {
                      setNewOffer({ ...newOffer, title: event.target.value });
                    }}
                  />
                </div>
                <div className="publish-inputs">
                  <p>Décris ton article</p>
                  <input
                    type="text"
                    placeholder="Porté quelques fois, taille correctement"
                    onChange={(event) => {
                      setNewOffer({
                        ...newOffer,
                        description: event.target.value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="publish-divs">
                <div className="publish-inputs">
                  <p>Marque</p>
                  <input
                    type="text"
                    placeholder="ex: Zara"
                    onChange={(event) => {
                      setNewOffer({ ...newOffer, brand: event.target.value });
                    }}
                  />
                </div>
                <div className="publish-inputs">
                  <p>Taille</p>
                  <input
                    type="text"
                    placeholder="ex : L / 40 / 12"
                    onChange={(event) => {
                      setNewOffer({ ...newOffer, size: event.target.value });
                    }}
                  />
                </div>
                <div className="publish-inputs">
                  <p>Couleur</p>
                  <input
                    type="text"
                    placeholder="ex : Vert"
                    onChange={(event) => {
                      setNewOffer({ ...newOffer, color: event.target.value });
                    }}
                  />
                </div>
                <div className="publish-inputs">
                  <p>Etat</p>
                  <input
                    type="text"
                    placeholder="ex : Neuf avec étiquette"
                    onChange={(event) => {
                      setNewOffer({
                        ...newOffer,
                        condition: event.target.value,
                      });
                    }}
                  />
                </div>
                <div className="publish-inputs">
                  <p>Lieu</p>
                  <input
                    type="text"
                    placeholder="ex : Paris"
                    onChange={(event) => {
                      setNewOffer({ ...newOffer, city: event.target.value });
                    }}
                  />
                </div>
              </div>
              <div className="publish-divs">
                <div className="publish-inputs">
                  <p>Prix</p>
                  <input
                    type="text"
                    placeholder="0,00 €"
                    onChange={(event) => {
                      setNewOffer({ ...newOffer, price: event.target.value });
                    }}
                  />
                </div>
                <div className="publish-checkbox">
                  <div></div>
                  <div className="checkbox">
                    <input type="checkbox" />
                    <p>Je suis intéressé(e) par les échanges</p>
                  </div>
                </div>
              </div>
              <p style={{ color: "red", fontSize: "12px" }}>{errorMessage}</p>
              <div className="publish-add-button">
                <button type="submit">Ajouter</button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <Redirect to="/user/login" />
      )}
    </div>
  );
};

export default Publish;
