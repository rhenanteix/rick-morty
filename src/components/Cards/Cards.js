import React from "react";
import { Link } from "react-router-dom";
import styles from './cards.module.scss';

const Cards = ({ results, page }) => {
  let display;
  if (results) {
    display = results.map((teste) => {
      let { id, name, image, location, status } = teste;
      return (
        <Link style={{ textDecoration: "none" }} to={`${page}${id}`} key={id} className="col-lg-4 col-md-6 col-12 mb-4 position-relative text-dark">
         <div className={`${styles.cards} d-flex flex-column justify-content-center`}>
             <img src={image} alt="" className={`${styles.img} img-fluid`}/>
             <div style={{ padding: "10px" }} className="content">
                 <div className="fs-4 fw-bold mb-4">
                        {name}
                 </div>
                 <div className="">
                     <div className="fs-6">Localização:</div>
                     <div className="fs-6 fw-800">
                            {location.name}
                     </div>
                 </div>
             </div>
         </div>
         {(() => {
             if (status === "Dead") {
                    return(<div className={`${styles.badge} position-absolute  badge bg-danger`}>{status}</div>
                    );
             }
            else if(status === "Alive") {
                return (<div className={`${styles.badge} position-absolute  badge bg-success`}>{status}</div>
                );
            }
                 
             else {
                 return (<div className={`${styles.badge} position-absolute  badge bg-secondary`}>{status}</div>);
             }
         })()}
        </Link>
      );
    });
  } else {
    display = "Não existe isso que procurou Morty, seu burro!";
  }
  return <>{display}</>;
};

export default Cards;
