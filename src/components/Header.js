import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <section id="header" style={{marginTop: '0px'}}>
				<div class="inner">
					<span class="icon solid major fa-code"></span>
					<h1>Bonjour, je m'appelle <strong>Ludovic</strong><br/>
					Je suis actuellement la formation <strong>BeCode</strong><br/>
					afin de devenir <strong>Junior Web Developer</strong></h1>
					<p>Si vous souhaitez en savoir plus sur moi, n'hésitez pas à visiter cette page</p>
					<ul class="actions special">
						<li><a href="#one" class="button scrolly">En savoir plus</a></li>
					</ul>
				</div>
			</section>
    );
  }
}

