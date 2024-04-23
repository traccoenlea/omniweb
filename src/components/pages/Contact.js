import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export const Contact = () => {
  // Gérer les erreurs
  const [errors, setErrors] = useState({
    Nom: "",
    Prenom: "",
    Email: "",
    Message: "",
  });

  // Gérer si les cgu sont cochées
  const [isChecked, setIsChecked] = useState(false);

  // Stocker les données du formulaire
  const [userData, setUserData] = useState({
    Nom: "",
    Prenom: "",
    Email: "",
    Message: "",
  });

  // State pour compter le nombre d'envois de formulaire
  const [formSubmissions, setFormSubmissions] = useState(0);

  // Récupérer le nombre d'envois de formulaire
  useEffect(() => {
    const submissions = localStorage.getItem("formSubmissions");
    if (submissions) {
      setFormSubmissions(parseInt(submissions));
    }
  }, []);

  // Mettre à jour le nombre d'envois de formulaire
  useEffect(() => {
    localStorage.setItem("formSubmissions", formSubmissions.toString());
  }, [formSubmissions]);

  // Mettre à jour les données du formulaire
  const data = (e) => {
    const { name, value } = e.target;

    // Limiter le nombre de caractères dans message
    if (name === "Message" && value.length > 300) {
      return;
    }

    setUserData({ ...userData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  // Envoyer les données du formulaire
  const send = async (e) => {
    e.preventDefault();

    let formIsValid = true;
    const newErrors = {};

    // Vérifier les champs du formulaire
    Object.keys(userData).forEach((key) => {
      if (!userData[key]) {
        formIsValid = false;
        newErrors[key] = `${key} est requis`;
      }
    });

    setErrors(newErrors);

    if (!formIsValid) {
      return;
    }

    // Vérifier si l'utilisateur a accepté les cgu
    if (!isChecked) {
      alert("Veuillez accepter les conditions générales d'utilisation.");
      return;
    }

    // Limiter le nombre d'envois de formulaire à 2
    if (formSubmissions >= 2) {
      alert("Vous avez déjà envoyé le formulaire deux fois.");
      return;
    }

    // Config envoi des données du formulaire
    const option = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userData),
    };

    // Envoi des données du formulaire en bdd
    const res = await fetch(
      "https://omnistos-2a3a2-default-rtdb.europe-west1.firebasedatabase.app/Messages.json",
      option
    );

    // Vérifier si l'envoi a réussi
    if (res.ok) {
      alert("Votre message a été pris en compte");
      setFormSubmissions(formSubmissions + 1);

      // Réinitialiser les données du formulaire
      setUserData({
        Nom: "",
        Prenom: "",
        Email: "",
        Message: "",
      });
    }
  };

  return (
    <>
      <div className="appContainer contactContainer">
        {/* Partie gauche */}
        <div className="leftPartContact">
          <div className="TitleContainerAccent">
            <h1 className="Title">Contactez-nous</h1>
          </div>
          <div className="infosContactContainer">
            <div className="infoContact">
              <i className="fa-solid fa-phone"></i>
              <p>07 49 41 48 42</p>
            </div>
            <div className="infoContact">
              <i className="fa-solid fa-envelope"></i>
              <p>contact@omistos.fr</p>
            </div>
          </div>
        </div>
        {/* Partie droite */}
        <div className="rightPart">
          <form method="POST" className="contactForm">
            <div className="nomPrenomContainer">
              <div className="inputContainer">
                {/* INPUT nom */}
                <input
                  className="contactInputNomPrenom"
                  type="text"
                  name="Nom"
                  value={userData.Nom}
                  placeholder="Nom..."
                  autoComplete="off"
                  onChange={data}
                  maxLength={25} // Limiter le nombre de caractères
                />
                {errors.Nom && <div className="error">{errors.Nom}</div>}
              </div>
              <div className="inputContainer">
                {/* INPUT prénom */}
                <input
                  className="contactInputNomPrenom"
                  type="text"
                  name="Prenom"
                  value={userData.Prenom}
                  placeholder="Prénom..."
                  autoComplete="off"
                  onChange={data}
                  maxLength={20} // Limiter le nombre de caractères
                />
                {errors.Prenom && <div className="error">{errors.Prenom}</div>}
              </div>
            </div>

            {/* INPUT email */}
            <input
              className="contactInput"
              type="email"
              name="Email"
              value={userData.Email}
              placeholder="Adresse email..."
              autoComplete="off"
              onChange={data}
              maxLength={45} // Limiter le nombre de caractères
            />
            {errors.Email && <div className="error">{errors.Email}</div>}

            {/* INPUT message */}
            <textarea
              className="contactInputMsg"
              value={userData.Message}
              name="Message"
              placeholder="Votre message..."
              autoComplete="off"
              onChange={data}
              maxLength={300} // Limiter le nombre de caractères
            />
            {errors.Message && <div className="error">{errors.Message}</div>}

            {/* Case à cocher pour accepter les conditions générales */}
            <div className="consentContainer">
              <div className="consentCheckbox">
                <input
                  type="checkbox"
                  className="contactCheckbox"
                  id="consent"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
              </div>
              {/* Texte des conditions générales */}
              <div className="consent">
                <label htmlFor="consent">J'ai lu et j'accepte les </label>
                <NavLink
                  to="/cgu"
                  target="__blank"
                  rel="noreferrer"
                  className="cguLinks"
                >
                  Conditions Générales d'Utilisation (CGU)
                </NavLink>
              </div>
            </div>

            {/* Bouton pour envoyer le formulaire */}
            <div className="buttonFormContainer">
              <button onClick={send} className="buttonForm">
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
