
"use client";
import React, { useState, useEffect } from 'react';
import styles from "./Modal.module.css";
export default function RegistrationModel({ show, onClose, onNext }) {
    const [phone, setPhone] = useState("");
    const [showPassword, setPassword] = useState(false);
    useEffect(() => {
        if (show) {
            setPhone("");
        }
    }, [show]);
    if (!show) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (phone.trim().length >= 6) {
            onNext(); // Show OTP modal
        } else {
            alert("Veuillez entrer un numéro valide.");
        }
    };
    return (
        <>
            <style>
                {`
             .selection-box{
               border: 1px solid #ccc;
                border-radius: 5px;
                padding: 3px;
              }

             .input-form-one {
                border: 0;
                border-bottom: 1px solid #ccc !important;
                border-radius: 0;
              }

            .form-contol-css {
               border: 0;
            }
                
            .form-contol-css:focus {
               outline: none;
               box-shadow: none 
            }

            .input-group {
                   position:relative;
            }
                   .form-control:focus {
                    border:none;
                     outline: none;
                    box-shadow: none 
                   }
       `}
            </style>
            <div className="modal d-block" tabIndex="-1" style={{ background: 'rgba(0,0,0,0.5)' }}>
                <div className={`modal-dialog modal-dialog-centered modal-fullscreen-sm-down ${styles["modal-top-spacing"]}`}>


                    <div className="modal-content rounded-4 shadow">
                        <div className="modal-header">
                            <button type="button" className="btn-close" onClick={onClose}></button>
                            <h5 className="modal-title w-100 text-center fw-bold">Connexion</h5>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="modal-body">


                                <button className="btn btn-outline-secondary w-100 mb-2 d-flex justify-content-between align-items-center">
                                    <i className="bi bi-facebook"></i>
                                    <span className="flex-grow-1 text-center">Continuer avec Facebook</span>
                                    <span style={{ width: '1.5rem' }}></span>
                                </button>
                                <button className="btn btn-outline-secondary w-100 mb-2 d-flex justify-content-between align-items-center">
                                    <i className="bi bi-google me-2"></i>
                                    <span className="flex-grow-1 text-center">Continuer avec Facebook</span>
                                    <span style={{ width: '1.5rem' }}></span>
                                </button>
                                <div className="d-flex align-items-center my-3">
                                    <hr className="flex-grow-1" />
                                    <span className="mx-2 text-muted">ou</span>
                                    <hr className="flex-grow-1" />
                                </div>

                                <h6 className="mb-3">Nom Officail</h6>

                                <div className="mb-3">
                                    <div className="border rounded overflow-hidden">
                                        <label className="d-block p-2">
                                            <span className="d-block mb-1">Nom dutilisateur</span>
                                            <input
                                                type="text"
                                                className="form-control border-0 p-0"
                                                placeholder="Entrez le nom"
                                            />
                                        </label>

                                        <div style={{ height: '1px', backgroundColor: '#ccc', margin: 0 }}></div>

                                        <label className="d-block p-2">
                                            <span className="d-block mb-1">Mot de passe</span>
                                            <input
                                                type="password"
                                                className="form-control border-0 p-0"
                                                placeholder="Entrez le mot de passe"
                                            />
                                        </label>
                                    </div>
                                </div>


                                <h6 className="mb-3">Nom Officail</h6>
                                <div className="d-flex align-items-center gap-3 my-3">
                                    <select className="form-select mb-2">
                                        <option>Mois</option>
                                        <option>India (+91)</option>
                                        <option>USA (+1)</option>
                                    </select>
                                    <select className="form-select mb-2">
                                        <option>Jour</option>
                                        <option>India (+91)</option>
                                        <option>USA (+1)</option>
                                    </select>
                                    <select className="form-select mb-2">
                                        <option>Annee</option>
                                        <option>India (+91)</option>
                                        <option>USA (+1)</option>
                                    </select>

                                </div>
                                <h6 className="mb-3">Coordonness</h6>

                              

                                <div className="mb-3">
                                    <div className="border rounded" style={{background:'#ededed'}}>
                                        <label className="d-block p-2">
                                            <span className="d-block mb-1">Address mail</span>
                                            <input
                                                type="text"
                                                style={{background:'#ededed'}}
                                                className="form-control border-0 p-0"
                                                placeholder="E.example@gmail.com"
                                            />
                                        </label>
                                    </div>
                                </div>




                                <div className='mb-3'>
                                    <label className='form-label'> hello </label>
                                    <div className='input-group border rounded'  >
                                        <input type={showPassword ? 'text' : 'password'} style={{paddingRight: '80px', width: '100%' }} className='form-control ' placeholder='Mot de passe' />

                                        <button style={{ position: 'absolute', right: ' 0', top: '0', height: '100%', border: 'none', background: 'transparent', zIndex: 999 }} type='buton' className=' btn btn-link' onClick={() => setPassword(!showPassword)} >
                                            {showPassword ? 'cacher' : 'Afficher'}
                                        </button>
                                    </div>
                                </div>

                                <p className='text-muted small'>
                                    En cliquant sur <strong>Accepter  et continuer</strong>, Jaccepte les
                                    <a href='#'>Constions generaless</a>, et je reconnais avoir pris connaissance default
                                    <a href='#'>Politique de confidentialiated</a> de Turismo
                                </p>

                                <button className="btn btn-primary w-100 mb-3">Suivant</button>


                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}