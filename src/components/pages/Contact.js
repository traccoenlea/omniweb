import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addContactToDb, sendingEmail } from "../../apis/contact";

export const Contact = () => {
  const yupSchema = yup.object({
    name: yup.string().required("Ce champ doit être renseigné"),
    surname: yup.string().required("Ce champ doit être renseigné"),
    email: yup
      .string()
      .email("L'email doit être valide")
      .required("Ce champ doit être renseigné"),
    message: yup
      .string()
      .required("Ce champ doit être renseigné")
      .min(10, "Votre message doit faire minimum 10 caractères.")
      .max(500, "Votre message doit faire maximum 500 caractères."),
    // consent: yup
    //   .boolean(true)
    //   .required("Vous ne pouvez pas nous contacter sans cocher cette case."),
    consent: yup
      .bool()
      .oneOf(
        [true],
        "Vous ne pouvez pas nous contacter sans cocher cette case."
      )
      .required("Vous ne pouvez pas nous contacter sans cocher cette case."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      message: "",
      consent: false,
    },
    resolver: yupResolver(yupSchema),
  });

  const submit = handleSubmit(async (values) => {
    try {
      let today = new Date();

      today =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate() +
        " " +
        today.getHours() +
        ":" +
        today.getMinutes() +
        ":00";

      const email = values.email;
      const name = values.name;
      const surname = values.surname;
      const message = values.message;

      const data = [
        {
          email: email,
          name: name,
          surname: surname,
          message: message,
          date: today,
        },
      ];

      const contactDB = await addContactToDb(data);
      if (contactDB !== false) {
        await sendingEmail(data);
        alert("Nous avons bien reçu votre demande de contact !");
        reset();
      }
    } catch (error) {
      console.error(error);
    }
  });
  return (
    <div className="appContainer">
      <div className="mt60 mb60 flex jcb hfc contactContainer">
        <div className="contactPresentation">
          <div className="TitleContainerAccent">
            <h1 className="Title">Contactez-nous</h1>
          </div>

          <p>
            Lorem ipsum machin chouette c'est vraiment{" "}
            <span className="color">trop cool</span>
          </p>
        </div>
        <div className="bb"></div>
        <form onSubmit={submit} className="formContainer jcc aic">
          <div className="flex jcb">
            <div className="flex flexc inputContainer">
              <div className="">
                {/* <label htmlFor="surname">Nom</label> */}
                <input
                  type="text"
                  id="surname"
                  {...register("surname")}
                  placeholder="Nom..."
                  className="smallInput"
                />
              </div>
              {errors?.surname && (
                <p className="error">{errors.surname.message}</p>
              )}
            </div>

            <div className="flex flexc inputContainer">
              <div className=" flex jcfe">
                {/* <label htmlFor="name">Prénom</label> */}
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  placeholder="Prénom..."
                  className="smallInput"
                />
              </div>
              {errors?.name && <p className="error ">{errors.name.message}</p>}
            </div>
          </div>

          <div className="inputContainer">
            {/* <label htmlFor="email">Mail</label> */}
            <input
              type="mail"
              id="email"
              {...register("email")}
              placeholder="Email..."
              className="bigInput mt30"
            />
          </div>
          {errors?.email && <p className="error">{errors.email.message}</p>}

          <div className="inputContainer ">
            {/* <label htmlFor="message">Message</label> */}
            <textarea
              id="message"
              {...register("message")}
              placeholder="Message..."
              className="bigInput textareaInput mt30"
            />
          </div>
          {errors?.message && <p className="error">{errors.message.message}</p>}
          <div className="flex jce consentContainer mt20">
            <div className="flex flexc mb5">
              <input
                type="checkbox"
                className="flex flexc"
                id="consent"
                {...register("consent")}
              />
            </div>
            <div className="consent">
              <label htmlFor="consent" className="flex flexc jcfe ">
                J'accepte que mes informations soient enregistrées afin d'être
                recontacté(e) par l'entreprise Omni Web .
              </label>
              {errors?.consent && (
                <p className="error">{errors.consent.message}</p>
              )}
            </div>
          </div>
          <div className="buttonFormContainer">
            <button className="buttonForm">Envoyer</button>
          </div>
        </form>
      </div>
    </div>
  );
};
