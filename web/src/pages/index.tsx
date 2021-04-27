import styles from './home.module.scss';

export default function Home() {
  return (
    <div className={styles.homepage}>
      <div className={styles.recipes}>
        <h2>Receitas</h2>

        <ul>
          <li>
            <div className={styles.cardContainer}>
              <div>
                <img src="https://i.pinimg.com/736x/b1/0b/f3/b10bf36c6d6f4cc32819803c801bbec8.jpg" alt=""/>
                <h3>Bolo de brigadeiro</h3>
              </div>
              <p>Nível: Iniciante</p>
              <p>Bolo de chocolate com recheio de beijinho e doce de leite e cobertura de creme de chocolate meio amargo, coco ralado, bala de coco e pedacinhos de doce de leite.</p>
            </div>
          </li>
          <li>
            <div className={styles.cardContainer}>
              <div>
                <img src="https://i.pinimg.com/736x/b1/0b/f3/b10bf36c6d6f4cc32819803c801bbec8.jpg" alt=""/>
                <h3>Bolo de brigadeiro</h3>
              </div>
              <p>Nível: Iniciante</p>
              <p>Bolo de chocolate com recheio de beijinho e doce de leite e cobertura de creme de chocolate meio amargo, coco ralado, bala de coco e pedacinhos de doce de leite.</p>
            </div>
          </li>
          <li>
            <div className={styles.cardContainer}>
              <div>
                <img src="https://i.pinimg.com/736x/b1/0b/f3/b10bf36c6d6f4cc32819803c801bbec8.jpg" alt=""/>
                <h3>Bolo de brigadeiro</h3>
              </div>
              <p>Nível: Iniciante</p>
              <p>Bolo de chocolate com recheio de beijinho e doce de leite e cobertura de creme de chocolate meio amargo, coco ralado, bala de coco e pedacinhos de doce de leite.</p>
            </div>
          </li>
          <li>
            <div className={styles.cardContainer}>
              <div>
                <img src="https://i.pinimg.com/736x/b1/0b/f3/b10bf36c6d6f4cc32819803c801bbec8.jpg" alt=""/>
                <h3>Bolo de brigadeiro</h3>
              </div>
              <p>Nível: Iniciante</p>
              <p>Bolo de chocolate com recheio de beijinho e doce de leite e cobertura de creme de chocolate meio amargo, coco ralado, bala de coco e pedacinhos de doce de leite.</p>
            </div>
          </li>
          <li>
            <div className={styles.cardContainer}>
              <div>
                <img src="https://i.pinimg.com/736x/b1/0b/f3/b10bf36c6d6f4cc32819803c801bbec8.jpg" alt=""/>
                <h3>Bolo de brigadeiro</h3>
              </div>
              <p>Nível: Iniciante</p>
              <p>Bolo de chocolate com recheio de beijinho e doce de leite e cobertura de creme de chocolate meio amargo, coco ralado, bala de coco e pedacinhos de doce de leite.</p>
            </div>
          </li>
          <li>
            <div className={styles.cardContainer}>
              <div>
                <img src="https://i.pinimg.com/736x/b1/0b/f3/b10bf36c6d6f4cc32819803c801bbec8.jpg" alt=""/>
                <h3>Bolo de brigadeiro</h3>
              </div>
              <p>Nível: Iniciante</p>
              <p>Bolo de chocolate com recheio de beijinho e doce de leite e cobertura de creme de chocolate meio amargo, coco ralado, bala de coco e pedacinhos de doce de leite.</p>
            </div>
          </li>
          
          
          {/* {latestEpisodes.map((episode, index) => (
            <li key={episode.id}>
              
            </li>
          ))} */}
        </ul>
      </div>
    </div>
  )
}
