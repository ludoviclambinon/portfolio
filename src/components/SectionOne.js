import React, {Component} from 'react';

export default class Text extends Component {
    render() {
        return (
            <section id="one" class="main style2">
            <div class="container">
                <div class="row gtr-150">
                    <div class="col-6 col-12-medium">
                        <ul class="major-icons">
                            <li><i class="style1 fab fa-html5 fa-5x"></i></li>
                            <li><i class="style2 fab fa-css3-alt fa-5x"></i></li>
                            <li><i class="style3 fab fa-bootstrap fa-5x"></i></li>
                            <li><i class="style4 fab fa-react fa-5x"></i></li>
                            <li><i class="style5 fab fa-php fa-5x"></i></li>
                            <li><i class="style6 fab fa-laravel fa-5x"></i></li>
							<li><i class="style7 fab fa-wordpress fa-5x"></i></li>
							<li><i class="style8 fab fa-adobe fa-5x"></i></li>
                        </ul>
                    </div>
                    <div class="col-6 col-12-medium">
                        <header class="major">
                            <h2>À propos</h2>
                        </header>
                        <p>Je m'appelle Ludovic Lambinon-Mortier, j'ai 27 ans et je suis en formation afin de devenir Junior Web Developer. Ayant toujours été intéressé par l'informatique, j'ai découvert le métier de développeur en 2018 grâce à une formation de base. Suite à cette formation j'ai décidé de me lancer pleinement dans ce domaine.</p>
                        <p>Durant cette formation de 7 mois chez BeCode, j'ai appris divers langages de programmation qui m'ont permis de développer certaines de mes connaissances déjà acquises. Attiré par le <strong><i>Web Design</i></strong>, j'ai évidemment travaillé avec du <i>HTML</i> et du <i>CSS</i>, mais aussi <i>Bootstrap</i>. De plus, j'ai découvert <i>React</i> et <i>React Native</i>, langages sur lesquels je souhaite me concentrer.</p>
                        <p>Actuellement en train de découvrir <i>PHP</i>, <i>MySQL</i> et <i>Wordpress</i>, je souhaite, d'ici la fin de la formation, me concentrer aussi sur ces langages, ainsi que sur le Framework <i>Laravel</i>.</p>
						<header class="major">
                            <h2>Soft Skills</h2>
                        </header>
						<ul>
								<li>
									Résolution de problèmes
								</li>
								<li>
									Gestion du temps
								</li>
								<li>Créativité</li>
								<li>
									Motivation
								</li>
								<li>
									Curiosité
								</li>
							</ul>
                    </div>
            </div>
        </div>
    </section>
        );
    }
}