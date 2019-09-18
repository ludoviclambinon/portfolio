import React, { Component } from 'react';

export default class Text extends Component {
    render() {
        return (
            <section id="three" class="main style1 special">
            <div class="container">
                <header class="major">
                    <h2>Portfolio</h2>
                </header>
                <p>Voici quelques réalisations personnelles</p>
                <div class="row gtr-150">
                    <div class="col-4 col-12-medium">
                        <img src="img/pic01.jpg" class="img" alt="Image illustrative du projet AllezCiné"></img>
                        <h3>Projet AllezCiné</h3>
                        <p>Réalisation d'une page d'actualité cinéma où j'ai réalisé le header.</p>
                        <ul class="actions special">
                            <li><a href="https://maximlopez.github.io/frontend-AllezCine/" target="_blank" rel="noopener noreferrer" style={{color: 'black'}} class="button">Lien vers le projet</a></li>
                        </ul>
                    </div>
                    <div class="col-4 col-12-medium">
                    <img src="img/pic02.jpg" class="img" alt="Image illustrative de ma page 404"></img>
                        <h3>Page 404</h3>
                        <p>Création d'une page d'erreur 404 avec un effet "hover".</p>
                        <ul class="actions special">
                            <li><a href="https://ludoviclambinon.github.io/page-404/" target="_blank" rel="noopener noreferrer" class="button">Lien vers le projet</a></li>
                        </ul>
                    </div>
                    <div class="col-4 col-12-medium">
                    <img src="img/pic03.jpg" class="img" alt="Image illustrative du projet restaurant Bootstrap"></img>
                        <h3>Projet restaurant Bootstrap</h3>
                        <p>Il s'agit d'un projet de restaurant fictif réalisé en Bootstrap.</p>
                        <ul class="actions special">
                            <li><a href="https://ludoviclambinon.github.io/restaurant-bootstrap/index.html" target="_blank" rel="noopener noreferrer" class="button">Lien vers le projet</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}