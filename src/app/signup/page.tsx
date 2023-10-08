"use client"
import { useFormik } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';

import Modal from '../components/ui/modal';
import postNewUser from '../libs/api/post/postNewUser';

export default function Signup() {

  const [modalType, setModalType] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [statusNumber, setStatusNumber] = useState(0);
  
  const closeModal = () => {
    setShowModal(false);
    setModalType("");
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .email('Email valide requis')
        .required('Email requis'),
      password: yup
        .string()
        .min(12, 'min 12 caractères')
        .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{12,}$/, 'min : 12 caractères, 1 majuscule, 1 minuscule, 1 nombre et un caractère spécial #?!@$%^&*-')
        .required('Mot de passe requis'),
      confirmPassword: yup
        .string()
        .min(12, 'min 12 caractères')
        .oneOf([yup.ref('password')], 'Les mots de passe doivent correspondre')
        .required('Confirmer le mot de passe'),
      firstName: yup
        .string()
        .min(2, 'min 2 caractères, max 20 caractères')
        .max(20, 'min 2 caractères, max 20 caractères')
        .matches(/^[A-Za-z -éèâëê]+[^0-9]+$/, 'Prénom invalide')
        .required('Prénom requis'),
      lastName: yup
        .string()
        .min(2, 'min 2 caractères, max 20 caractères')
        .max(20, 'min 2 caractères, max 20 caractères')
        .matches(/^[A-Za-z -éèâëê]+[^0-9]+$/, 'Nom invalide')
        .required('Nom requis'),
      phone: yup
        .number()
        .min(10, '10 chiffres requis')
        .required('Téléphone requis'),
    }),
    onSubmit: async (values) => {
      setLoadingSubmit(true);
      const response = await postNewUser(values);
      console.log(response);

      if (response === 200 || response === 201) {
        setModalType("success");
        setStatusNumber(response);
        setLoadingSubmit(false);
        setShowModal(true);
        formik.resetForm();
      } 
      if (response >= 400) {
        setLoadingSubmit(false);
        setModalType("error");
        setStatusNumber(response);
        setShowModal(true);
      }

    },
  });
  return (
    <main>
      <form onSubmit={formik.handleSubmit} className="flex flex-col items-center justify-center h-screen">
        <label htmlFor="firstName">Prénom</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div>{formik.errors.firstName}</div>
        ) : null}

        <label htmlFor="lastName">Nom</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div>{formik.errors.lastName}</div>
        ) : null}

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}

        <label htmlFor="phone">Téléphone</label>
        <input
          id="phone"
          name="phone"
          type="phone"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />
        {formik.touched.phone && formik.errors.phone ? (
          <div>{formik.errors.phone}</div>
        ) : null}

        <label htmlFor="password">Mot de passe</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          autoComplete="on"
        />
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}

        <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
          autoComplete="on"
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <div>{formik.errors.confirmPassword}</div>
        ) : null}

        <button 
          type="submit"
          className="w-[100px] flex justify-center items-center bg-primary px-4 py-2 rounded-md shadow-md text-white hover:opacity-80 transition-colors"
          disabled={loadingSubmit}
        >
          {loadingSubmit ?
            <span className="loading loading-spinner loading-sm"></span>
            : 
            "Enregistrer"
          }
        </button>
      </form>

      {showModal && (
        <Modal type={modalType} onClose={closeModal} statusNumber={statusNumber} />
      )}

    </main>

    


  );
}