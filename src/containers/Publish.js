import "../App.css";
import React from "react";
import Dropzone from "react-dropzone";

const Publish = () => {
  return (
    <div className="publish">
      <div className="publish-container">
        <h1>Vends ton article</h1>
        <form>
          <div className="publish-divs">
            <div className="dashed-preview-without">
              <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
                {({ getRootProps, getInputProps }) => (
                  <section>
                    <div {...getRootProps()} className="add-picture">
                      <input {...getInputProps()} />
                      <p>
                        <i className="fas fa-plus icon"></i> Ajoute une photo
                      </p>
                    </div>
                  </section>
                )}
              </Dropzone>
            </div>
          </div>
          <div className="publish-divs">
            <div className="publish-inputs">
              <p>Titre</p>
              <input type="text" placeholder="ex: Chemise Sézanne verte" />
            </div>
            <div className="publish-inputs">
              <p>Décris ton article</p>
              <input
                type="text"
                placeholder="Porté quelques fois, taille correctement"
              />
            </div>
          </div>
          <div className="publish-divs">
            <div className="publish-inputs">
              <p>Marque</p>
              <input type="text" placeholder="ex: Zara" />
            </div>
            <div className="publish-inputs">
              <p>Taille</p>
              <input type="text" placeholder="ex : L / 40 / 12" />
            </div>
            <div className="publish-inputs">
              <p>Couleur</p>
              <input type="text" placeholder="ex : Vert" />
            </div>
            <div className="publish-inputs">
              <p>Etat</p>
              <input type="text" placeholder="ex : Neuf avec étiquette" />
            </div>
            <div className="publish-inputs">
              <p>Lieu</p>
              <input type="text" placeholder="ex : Paris" />
            </div>
          </div>
          <div className="publish-divs">
            <div className="publish-inputs">
              <p>Prix</p>
              <input type="text" placeholder="0,00 €" />
            </div>
            <div className="publish-checkbox">
              <div></div>
              <div className="checkbox">
                <input type="checkbox" />
                <p>Je suis intéressé(e) par les échanges</p>
              </div>
            </div>
          </div>
          <div className="publish-add-button">
            <button type="submit">Ajouter</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Publish;
