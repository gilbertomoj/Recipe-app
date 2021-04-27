import {GetStaticProps} from 'next';
import React, { useState } from 'react';
import Modal from 'react-modal';
import { api } from '../services/api';
import Image from 'next';

import styles from './home.module.scss';

type Recipe = {
  id: number;
  title: string;
  time: number;
  description: string;
  sbs: string[];
  items: string[];
  level: number;
  imgUrl: string;
}

type HomeProps = {
  recipes: Recipe[];
}

Modal.setAppElement('body');

export default function Home({recipes}: HomeProps) {
  
  const[isModalOpen, setIsModalOpen] = useState(false);
  const[currentRecipe, setCurrentRecipe] = useState<Recipe>({
    id: 0,
    title: "",
    time: 0,
    description: "",
    sbs: [""],
    items: [""],
    level: 0,
    imgUrl: "",
  });

  function openModal (recipe: Recipe) {
    setIsModalOpen(true);
    setCurrentRecipe(recipe);
  }

  return (
    <div className={styles.homepage}>
      <div className={styles.recipes}>
        <h2>Receitas</h2>

        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id} onClick={() => openModal(recipe)}>
              <div className={styles.cardContainer}>
                <div>
                  <img src={recipe.imgUrl} alt=""/>
                  <h3>{recipe.title}</h3>
                </div>
                <p>Nível: {recipe.level}</p>
                <p>{recipe.description}</p>
              </div>
            </li>
          ))}
        </ul>
        <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} style={{
          overlay: {

          },
          content: {
            width: "50rem",
            height: "45rem",
            top: 32,
            left: 380, 
            borderRadius: "20px",
            backgroundColor: '#f19a52'        
          }
        }}>
          <div className={styles.modalContainer}>
            <h3>{currentRecipe.title}</h3>
            <img src={currentRecipe.imgUrl} alt=""/>
            <p>Nível: {currentRecipe.level} &nbsp;&nbsp;|&nbsp;&nbsp; Tempo: {Math.floor(currentRecipe.time/60)} horas e {(currentRecipe.time%60)} minutos</p>
            <div className={styles.information}>
              <div>
                <p>INGREDIENTES</p>
                <ul>
                {currentRecipe.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p>MODO DE PREPARO</p>
                <ul>
                  {currentRecipe.sbs.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ul>
              </div>
            </div>
            <button onClick={() => setIsModalOpen(false)}>Voltar</button>
          </div>
        </Modal>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const {data} = await api.get('/', {
    params: {

    }
  });

  const recipes = data.all.result.map((recipe => {
    return {
      id: recipe.id,
      title: recipe.title,
      time: recipe.time,
      description: recipe.description,
      sbs: recipe.sbs.split(","),
      items: recipe.items.split(","),
      level: recipe.level,
      imgUrl: recipe.img_url,
    }
  }));  

  return{
    props: {
      recipes,
    },
    revalidate: 60 * 60 * 8,
  }
} 
