"use client"
import { useFormik } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';

import Modal from '../components/ui/modal';
import postLogin from "../libs/api/post/postLogin";

export default function LoginForm() {

  const [modalType, setModalType] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [statusNumber, setStatusNumber] = useState(0)
  
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .email('Email valide requis')
        .required('Email requis'),
      password: yup
        .string()
        .required('Mot de passe requis'),
    }),
    onSubmit: async (values) => {
      setLoadingSubmit(true);
      const response = await postLogin(values);
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

  const closeModal = () => {
    setShowModal(false);
    setModalType("");
  };

  return (
    <main>
      <form onSubmit={formik.handleSubmit} className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <label htmlFor="email" className="text-lg font-bold">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="rounded-md shadow-md p-2 m-2"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="flex flex-col items-center justify-center">
          <label htmlFor="password" className="text-lg font-bold">Mot de passe</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className="rounded-md shadow-md p-2 m-2"
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500">{formik.errors.password}</div>
          ) : null}
        </div>
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
