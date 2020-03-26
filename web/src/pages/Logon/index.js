import React from 'react'
import { FiLogIn } from 'react-icons/fi'
import { Link } from 'react-router-dom';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

const Logon = () => {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="logo" />
                <form>
                    <h1>Faça seu logon</h1>
                    <input placeholder="Sua Id" />
                    <button className="button" type="submit">Entrar</button>
                    
                    <Link to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="imagem" />
        </div>
    )
}

export default Logon;