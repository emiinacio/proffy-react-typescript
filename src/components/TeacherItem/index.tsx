import React from 'react';

import whatsapp from '../../assets/images/icons/whatsapp.svg';


function TeacherItem() {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars2.githubusercontent.com/u/55949281?s=460&u=c7ccc9a9a3f4fa17b4083c6ec7c48ad68ddc2fe5&v=4" alt="Emily Inácio"/>
                        <div>
                            <strong>Emily Inácio</strong>
                            <span>Química</span>
                        </div>
                    </header>

                    <p>
                        Entusiasta das melhores tecnologias de química avançada.
                        <br/>
                        Apaixonada por explodir coisas em laboratório e por mudar a vida das pessoas
                        através de expêriencias.
                    </p>

                    <footer>
                    <p>
                        Preço/hora
                        <strong> R$ 40,00</strong>
                    </p>

                    <button type='button'>
                        <img src={whatsapp} alt="Whatsapp"/>
                        Entar em contato
                    </button>
                    </footer>

                </article>
)
    }

export default TeacherItem;