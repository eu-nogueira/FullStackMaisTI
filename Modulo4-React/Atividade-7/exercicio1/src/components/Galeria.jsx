import { useState } from "react";

function Galeria() {
  return (
    <div>
      <div className="galery" style={{marginTop: '150px'}}>
        <ul style={{display: 'flex', gap: '20px', listStyle: 'none', justifyContent: 'center'}}>
          <li><img src={AndrewG} alt="Descrição da Imagem" srcSet="" /></li>
          <li>img2</li>
          <li>img3</li>
          <li>img4</li>
        </ul>
      </div>
    </div>
  );
}

export default Galeria;