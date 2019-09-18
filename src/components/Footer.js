import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
      return (
        <section id="footer">
            <ul class="icons">
                <li>
                <a href="https://github.com/ludoviclambinon" target="_blank" rel="noopener noreferrer" class="icon brands alt fa-github fa-2x"><span class="label">GitHub</span></a>
                </li>
                <li><a href="https://www.linkedin.com/in/ludovic-lambinon-mortier/" target="_blank" rel="noopener noreferrer" class="icon brands alt fa-linkedin fa-2x"><span class="label">LinkedIn</span></a></li>
                <li><a href= "mailto: ludoviclambinon.work@gmail.com" target="_blank" rel="noopener noreferrer" class="icon fa-envelope fa-2x"><span class="label">Mail</span></a></li>
            </ul>
              </section>
      );
    }
  }