import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

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
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm({
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      message: "",
    },
    resolver: yupResolver(yupSchema),
  });

  const submit = handleSubmit(async (values) => {
    try {
      alert("form submitted");
      console.log(values);
    } catch (error) {
      console.error(error);
    }
  });
  return (
    <div className="appContainer flex jcb">
      <div>
        <h1>Contactez-nous</h1>
        <p>
          Lorem ipsum machin chouette c'est vraiment{" "}
          <span className="color">trop cool</span>
        </p>
      </div>
      <form onSubmit={submit} className="formContainer">
        <div className="flex jcb">
          <div className="inputContainer">
            {/* <label htmlFor="surname">Nom</label> */}
            <input
              type="text"
              id="surname"
              {...register("surname")}
              placeholder="Nom..."
              className="smallInput"
            />
          </div>
          {errors?.surname && <p className="error">{errors.surname.message}</p>}

          <div className="inputContainer flex jcfe">
            {/* <label htmlFor="name">Prénom</label> */}
            <input
              type="text"
              id="name"
              {...register("name")}
              placeholder="Prénom..."
              className="smallInput"
            />
          </div>
          {errors?.name && <p className="error">{errors.name.message}</p>}
        </div>

        <div className="inputContainer">
          {/* <label htmlFor="email">Mail</label> */}
          <input
            type="mail"
            id="email"
            {...register("email")}
            placeholder="Email..."
            className="bigInput"
          />
        </div>
        {errors?.email && <p className="error">{errors.email.message}</p>}

        <div className="inputContainer">
          {/* <label htmlFor="message">Message</label> */}
          <textarea
            id="message"
            {...register("message")}
            placeholder="Message..."
            className="bigInput textareaInput"
          />
        </div>
        {errors?.message && <p className="error">{errors.message.message}</p>}

        <button>Envoyer</button>
      </form>
    </div>
  );
};
