import styles from '@/styles/Home.module.css';


export default function Card( {dataco} ) {
  return(
    <div className={`${styles.card}`}>
      <div className="card">

          
          <img src={dataco.imagen} />
          <h2>{ dataco.titulo}</h2>
          <h3>{dataco.instruccion} </h3>
          <span>
              { dataco.text }
          </span>

      </div>
      <br></br>

      <button> Enviar a Carrito </button>
      <br></br>
    </div>
      );
}
