<template>
  <div id="Portfolio">
    <section id="MonPotfolio">
      <div class="MonPotfolioContenue">
        <h1>Mes <br>Projets</h1>
        <div class="CarteVerte CartePassion">
          <h3>Mes projets</h3>
          <p>Découvrez une sélection de projets variés auxquels j'ai contribué, que ce soit lors de ma formation ou en milieu professionnel. <br>Vous trouverez également mes réalisations personnelles, conçues pour approfondir mes compétences et explorer de nouvelles technologies.</p>        
        </div>
      </div>
      <div class="MonPotfolioIllustrations">
        <img :src="ImagesRando.MontCharvin01" alt="">
      </div>
    </section>
    <section id="MesProjetsPro">
      <div class="MesProjetsProContenue">
        <Carousel :images="carouselImages1"/>
        <div class="MesProjetsProTexte">
          <h2>#1</h2>
          <h3>Tout pour la Chanson</h3>
          <p>Tout pour la Chanson, fondée en 1970, réunit une centaine de bénévoles – musiciens et choristes – qui se produisent régulièrement en Champagne-Ardenne. L’association met également à disposition un espace membre pour préparer ses concerts et enrichir son répertoire.<br>Le projet visait à moderniser le site en harmonisant son identité visuelle, en améliorant son référencement et en mettant en avant partenariats, dons et recrutement. Face à une maquette statique (format laptop), il a fallu repenser l’ensemble des pages en combinant contenu existant et nouveautés pour répondre aux exigences graphique.<br>Arrivé en début de projet, j’ai contribué majoritairement sur le front-end. Le site a été réalisé sous Joomla 4 avec SP Page Builder, en PHP, avec un CSS écrit manuellement et des éléments dynamiques en jQuery, le tout soutenu par une base de données MySQL. </p>
          <button class="Bouton">Voir le site</button>
          <div class="CartoucheLogo">
            <svg class="LogoTechno" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 85.5 85.5">
              <rect class="st1" width="85.5" height="85.5" rx="15.7" ry="15.7"/>
              <g class="st2">
                <g id="_x33_ZnMpl.tif">
                  <g>
                    <path class="st0" d="M64.9,23.7v.2l-4,45.2-18.1,5h-.2l-18-5-4.1-45.3h44.4ZM30.3,49.8h19.2l-.6,7.2-6.1,1.7h-.1l-6.2-1.6-.4-4.4h-5.6c.2,2.7.5,5.4.7,8,0,.1,0,.6,0,.6l11.4,3.2,11.3-3.1,1.6-17.1h-20.2l-.5-5.7h21.2s.5-5.5.5-5.5h-27.8s1.5,16.8,1.5,16.8Z"/>
                    <polygon class="st0" points="52.7 11.4 52.7 19.8 49.9 19.8 49.9 15.7 47.9 18.7 45.9 15.7 45.9 19.8 43.2 19.8 43.2 11.4 46.1 11.4 47.9 14.3 49.7 11.4 52.7 11.4"/>
                    <polygon class="st0" points="27.5 11.4 27.5 14.2 30.1 14.2 30.1 11.4 32.9 11.4 32.9 19.8 30.1 19.8 30.1 17 27.5 17 27.5 19.8 24.7 19.8 24.7 11.4 27.5 11.4"/>
                    <polygon class="st0" points="41.9 11.4 41.9 14.2 39.4 14.2 39.4 19.8 36.6 19.8 36.6 14.2 34.1 14.2 34.1 11.4 41.9 11.4"/>
                    <polygon class="st0" points="56.9 11.4 56.9 17 60.9 17 60.9 17.1 60.9 19.8 54 19.8 54 11.4 56.9 11.4"/>
                  </g>
                </g>
              </g>
            </svg>
            <svg class="LogoTechno" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 85.5 85.5">
              <rect class="st1" width="85.5" height="85.5" rx="15.7" ry="15.7"/>
              <g class="st2">
                <g id="xAcIV7.tif">
                  <g>
                    <path class="st0" d="M64.9,23.7c0,.3,0,.7,0,1s-.1.1-.1.3c-.8,13.4-2.3,27.2-3.5,40.6-.1,1.1-.2,2.3-.4,3.4l-18.2,5-18-4.9-4-44.7v-.6c0,0,44.3,0,44.3,0ZM56.5,33h-27.6l.5,5.5h21.2l-.5,5.7h-20.3l.5,5.5h19.2l-.6,7.2-6.1,1.7-6.3-1.6-.4-4.2c0,0-.1-.3-.2-.3h-5.3l.7,8.4.2.3,11.2,3.1,11.3-3.1,2.5-28.3Z"/>
                    <path class="st0" d="M45.9,11.4c0,.3.1,2.5-.2,2.5h-3.8v.3h3.8s.2.2.2.2v5.6h-6.9v-2.6h3.9s0-.5,0-.5h-3.9v-5.5h6.9Z"/>
                    <path class="st0" d="M53.9,11.4v2.5h-3.9v.3h3.9v5.7h-6.8v-2.6h3.9s0-.5,0-.5h-3.9v-5.5h6.8Z"/>
                    <polygon class="st0" points="37.7 11.4 37.7 14.3 33.8 14.3 33.8 17.1 37.7 17.1 37.7 19.9 31 19.9 31 11.4 37.7 11.4"/>
                  </g>
                </g>
              </g>
            </svg>
            <svg class="LogoTechno" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 85.5 85.5">
              <rect class="st1" width="85.5" height="85.5" rx="15.7" ry="15.7"/>
              <g class="st2">
                <g id="m3fKXb.tif">
                  <g>
                    <path class="st0" d="M65,23.6c0,.4,0,.7,0,1.1-.3,3.8-.7,7.6-1,11.4-.8,8.6-1.5,17.2-2.3,25.9-.2,2.2-.4,4.4-.6,6.5s0,.5-.2.6c-.7.4-2.5.9-3.4,1.1-4.9,1.4-9.9,2.8-14.9,4-6-1.6-12-3.3-18.1-5h0s-3.4-38.2-3.4-38.2c-.1-2.2-.5-4.4-.6-6.6,0-.3,0-.5,0-.8h44.5ZM30.4,49.9h19.1l-.8,7.1c-.7.3-1.5.5-2.3.7s-1.4.4-2.2.6-1.1.3-1.5.4-1.2-.2-1.7-.3c-1.6-.4-3.1-.9-4.6-1.3l-.4-4.4h-5.6c0,.5,0,.9,0,1.4.1,2.2.3,4.6.7,6.7,0,.1,0,.6.1.7s0,0,0,0c.3.1.9.3,1.3.4,3.3,1,6.7,1.9,10,2.8,3.9-1,7.7-2,11.5-3.3,0,0,0-.5.1-.6.1-1,.2-2,.3-3,.4-4.5.8-8.9,1.2-13.4-.1,0-.3,0-.4,0-.4,0-1,0-1.4,0-5.8-.1-11.4,0-17.2,0h-.1s.8-8.7.8-8.7c1.7,0,3.5-.1,5.2-.2,2,.2,4,0,6,.3s.6,0,.7.1.1.3.1.4c0,.4.1.9.2,1.3.1,1.3.3,2.6.3,3.8,0,0,0,0,0,0,0,0,.5.1.6.1h5.2l-1.1-12.1h-17.6c-1.4,0-2.8,0-4.2,0s-.5,0-.7,0,0,.2,0,.3c-.2,1.6-.3,3.2-.5,4.9-.5,5-.9,10.1-1.3,15.1,0,0,0,0,0,.1Z"/>
                    <path class="st0" d="M50.7,11.2v2.3h-3.6c0,.1,3.8,4.2,3.8,4.2v2h-8v-2.3c1,0,2.1,0,3.2,0s.6,0,.6,0c-1.2-1.4-2.5-2.8-3.7-4.1v-2h7.8Z"/>
                    <polygon class="st0" points="41.5 11.2 41.5 19.7 34.6 19.7 34.6 16.8 38.7 16.8 38.7 11.2 41.5 11.2"/>
                  </g>
                </g>
              </g>
            </svg>

            <div class="LogoBreak"></div>

            <svg class="LogoTechno" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 85.5 85.5">
              <rect class="st1" width="85.5" height="85.5" rx="15.7" ry="15.7"/>
              <g class="st2">
                <g id="atToJv.tif">
                  <g>
                    <path class="st0" d="M8.4,59.3l5.2-26.2h12.3c4.2.3,7.3,2.4,7.5,6.9.3,6.7-4.6,12.6-11.5,12.6-.1,0-.2,0-.3,0-1.9,0-3.8,0-5.7,0l-1.3,6.8h-6.1ZM17.2,47.6c1.2,0,2.5,0,3.8,0,4-.2,5.7-2.7,5.9-6.5.1-2.5-1.8-3.1-3.9-3.2-1.4,0-2.8,0-4.2,0l-1.6,9.7Z"/>
                    <path class="st0" d="M58,59.3h-6.2l5.2-26.2h12.3c4,.3,7.2,2.4,7.5,6.7.3,5.2-2.3,10-7.1,12-1.7.7-2.9.8-4.6.8s-3.8,0-5.7,0l-1.3,6.8ZM60.6,47.6c1.2,0,2.5,0,3.8,0,3.8-.2,5.5-2.3,5.9-6s-1.3-3.7-3.9-3.8c-1.4,0-2.8,0-4.1,0l-1.6,9.7Z"/>
                    <path class="st0" d="M43.5,26.2l-1.3,6.8h6.1c3.3.3,6.7,1.8,6.2,5.7l-2.4,13.8h-6.5l2.4-12.4c.1-.9.2-1.7-.8-2s-.9-.2-1.3-.2c-1.6,0-3.2,0-4.8,0l-2.9,14.6h-6.2l5.2-26.2h6.1Z"/>
                  </g>
                </g>
              </g>
            </svg>
            <svg class="LogoTechno" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 85.5 85.5">
              <rect class="st1" width="85.5" height="85.5" rx="15.7" ry="15.7"/>
              <g class="st2">
                <g id="KpCypn.tif">
                  <g>
                    <path class="st0" d="M70.4,60.5l-8.5,1.8c.9,1.7,3,2.4,4.5,3.5,1.7,1.2,4.2,3.5,5.3,5.2s.4.9.7,1.4c-.2,0-.4,0-.5-.2-1-.7-2-1.7-3.1-2.4-3.4-2.2-7.2-2.9-9.6-6.6-.2-.3-.9-1.5-.8-1.8.2-.6,2.4-1.2,3.1-1.4,2-.5,4.1-.6,6.1-.7-.3-.5-.7-.8-1.2-1.2-1.7-1.3-4.6-3.3-6.5-4.1-1.6-.7-4.7-1.2-5.8-2.5-.7-.8-1.3-2.2-1.8-3.2-2.5-5.1-4.3-10.8-7.7-15.4-3.2-4.4-10.2-10.6-15.7-11.5s-3,0-4.2-.4c-.4-.1-2.8-2-3.7-2.5s-5.1-2.5-5.1-.2,3.2,4.9,4.1,6.5c1.7,3,2,7.1,4.1,9.9.4.6,1.1,1.1,1.5,1.7.8,1.4-.4,3.2-.8,4.6-.9,3.2-1,7,.1,10.2s1.1,3.1,2.5,3.1c.3-2.3.3-4.9,1.6-6.9l1.5-1.8c.4.1.6,1.4.8,1.8,1.2,2.8,2.7,5.7,4.3,8.3s2.8,4.1,4.8,5.5c0,.3-.3.1-.4,0-.7-.3-3.5-2.9-4.2-3.5-2.3-2.1-4-4.3-5.1-7.3-.2,0-.2.4-.2.5-.3,1.6-.3,4.7-1.9,5.4-2.3,1.1-4.2-1.7-5-3.6-2.2-4.8-1.3-10.4.4-15.2-1-1.2-1.8-2.3-2.5-3.7-1.6-3.3-1.9-6.6-4.1-9.6s-4.3-4.5-3-7.4,7.5-.9,9.9.7c.6.4,1.1,1.1,1.7,1.3s2.3,0,3.3.3c6.8,1.1,14.7,8.4,18.5,13.8,2.7,3.9,4,8.2,6.1,12.4s1.8,3.9,2.4,4.5,3.9,1.7,4.9,2.3c2.1,1.1,8.3,5.7,9.3,7.7s.1.3,0,.5Z"/>
                    <path class="st0" d="M25.6,25c1.2-.3,2-.2,2.8.8s.6,1.4.1,2.2c-.8,1.5-1.1-.3-1.5-1.1-.4-.7-1.1-1.2-1.4-1.9Z"/>
                  </g>
                </g>
              </g>
            </svg>
            <svg class="LogoTechno" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 85.5 85.5">
              <rect class="st1" width="85.5" height="85.5" rx="15.7" ry="15.7"/>
              <g class="st2">
                <g id="_x37_6zXH7.tif">
                  <g>
                    <path class="st0" d="M62.7,71.4c-2.1-.2-4.2-1.5-5.4-3.2s-1.2-2.2-1.3-3.4c-4.5,1.9-9.3-.2-12.5-3.4l5.3-5.5s0,0,.1,0c0,0,.4.3.5.4,1.9,1.3,4,1.7,5.8.1,4.6-4-.4-8.1-3.2-11-1.8-1.8-3.6-3.7-5.4-5.5-1.1-1.1-2.2-2.1-3.2-3.2l5.3-5.4,13.9,13.8c2.6,3.1,3.8,7.5,2,11.3,5.6.8,8.4,7.4,4.9,12s-3.2,2.8-5.2,3c-.4,0-1.2,0-1.6,0Z"/>
                    <path class="st0" d="M21.8,13.9c.4,0,1,.1,1.5.2,3,.7,5.5,3.3,5.8,6.4,1.7-.7,3.5-.9,5.3-.6,2.8.5,5.3,2.2,7.3,4l-5.3,5.5s0,0-.1,0c0,0-.4-.4-.6-.5-1.9-1.3-4-1.6-5.9,0-3.8,3.3-.7,7,2,9.6l9.9,10-5.2,5.5-13.8-13.8c-2.4-2.8-3.7-6.6-2.5-10.2.1-.4.3-.8.4-1.2-5.4-.8-8.2-6.9-5.3-11.5,1.3-2.1,3.7-3.4,6.1-3.5.1,0,.3,0,.4,0Z"/>
                    <path class="st0" d="M14,63c0,0,0-.1,0-.2.5-3.5,2.7-5.8,6.2-6.6s.3,0,.3,0c-.9-2.3-.9-4.8,0-7.1s2.1-3.9,3.5-5.5l5.6,5.3c-1.7,2-2.4,4.5-.4,6.6,3.6,4,7.3.2,10.1-2.6l9.5-9.4,5.5,5.2-13.9,13.9c-3.1,2.6-7.5,3.8-11.3,2-.4,2.7-2.3,5.1-4.8,6-4.3,1.6-9-1-10-5.4s0-.7-.2-1.1v-1.2Z"/>
                    <path class="st0" d="M56.1,20.7c.6-4.5,5.2-7.4,9.6-6.2,7.4,2.2,7.1,13-.6,14.6-.1,0-.6,0-.6.1.3.7.5,1.5.6,2.3.5,3.9-1.5,7.5-4.1,10.2l-5.6-5.3s0,0,0,0c0-.2.4-.5.6-.8,1.2-1.8,1.5-3.9,0-5.7-3.9-4.5-8,.3-10.9,3.1-.9.9-1.8,1.8-2.7,2.6-2.1,2-4.1,4.1-6.1,6l-5.4-5.2h0c0,0,13.7-13.9,13.7-13.9,3.1-2.7,7.6-3.9,11.4-2.1Z"/>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>

      <div class="MesProjetsProContenue Orange">
        <Carousel :images="carouselImages1"/>
        <div class="MesProjetsProTexte">
          <h2>#2</h2>
          <h3>Nexus Gathering</h3>
          <p>Nexus Gathering est le projet fil rouge réalisé en groupe de quatre, combinant l’ensemble des compétences acquises durant la formation de développeur web et web mobile que j'ai suivi avec l'AFPA. Destiné aux joueurs, le site propose une ludothèque générale recensant un maximum de jeux vidéo, une ludothèque personnalisée pour les titres possédés, ainsi qu’une section quiz communautaire.<br>Ma contribution principale a été la plateforme de mise en relation des joueurs, intégrant une messagerie instantanée. Les utilisateurs peuvent rechercher rapidement des partenaires par jeu ou créer des annonces personnalisées pour rejoindre des groupes.<br>Le projet, maquetté sur Figma et géré via GitHub, Trello et Discord, a été développé en HTML5, CSS3 (avec Tailwind), JavaScript, PHP et MySQL sous MariaDB. Malgré des délais contraints et quelques défis liés au modèle MVC, cette expérience m'a permis de réaliser une première solution cohérente, fonctionnelle et d'explorer le développement en équipe.</p>
          <div class="CartoucheLogo">
            <svg class="LogoTechno" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 85.5 85.5">
              <rect class="st1" width="85.5" height="85.5" rx="15.7" ry="15.7"/>
              <g class="st2">
                <g id="_x33_ZnMpl.tif">
                  <g>
                    <path class="st0" d="M64.9,23.7v.2l-4,45.2-18.1,5h-.2l-18-5-4.1-45.3h44.4ZM30.3,49.8h19.2l-.6,7.2-6.1,1.7h-.1l-6.2-1.6-.4-4.4h-5.6c.2,2.7.5,5.4.7,8,0,.1,0,.6,0,.6l11.4,3.2,11.3-3.1,1.6-17.1h-20.2l-.5-5.7h21.2s.5-5.5.5-5.5h-27.8s1.5,16.8,1.5,16.8Z"/>
                    <polygon class="st0" points="52.7 11.4 52.7 19.8 49.9 19.8 49.9 15.7 47.9 18.7 45.9 15.7 45.9 19.8 43.2 19.8 43.2 11.4 46.1 11.4 47.9 14.3 49.7 11.4 52.7 11.4"/>
                    <polygon class="st0" points="27.5 11.4 27.5 14.2 30.1 14.2 30.1 11.4 32.9 11.4 32.9 19.8 30.1 19.8 30.1 17 27.5 17 27.5 19.8 24.7 19.8 24.7 11.4 27.5 11.4"/>
                    <polygon class="st0" points="41.9 11.4 41.9 14.2 39.4 14.2 39.4 19.8 36.6 19.8 36.6 14.2 34.1 14.2 34.1 11.4 41.9 11.4"/>
                    <polygon class="st0" points="56.9 11.4 56.9 17 60.9 17 60.9 17.1 60.9 19.8 54 19.8 54 11.4 56.9 11.4"/>
                  </g>
                </g>
              </g>
            </svg>
            <svg class="LogoTechno" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 85.5 85.5">
              <rect class="st1" width="85.5" height="85.5" rx="15.7" ry="15.7"/>
              <g class="st2">
                <g id="xAcIV7.tif">
                  <g>
                    <path class="st0" d="M64.9,23.7c0,.3,0,.7,0,1s-.1.1-.1.3c-.8,13.4-2.3,27.2-3.5,40.6-.1,1.1-.2,2.3-.4,3.4l-18.2,5-18-4.9-4-44.7v-.6c0,0,44.3,0,44.3,0ZM56.5,33h-27.6l.5,5.5h21.2l-.5,5.7h-20.3l.5,5.5h19.2l-.6,7.2-6.1,1.7-6.3-1.6-.4-4.2c0,0-.1-.3-.2-.3h-5.3l.7,8.4.2.3,11.2,3.1,11.3-3.1,2.5-28.3Z"/>
                    <path class="st0" d="M45.9,11.4c0,.3.1,2.5-.2,2.5h-3.8v.3h3.8s.2.2.2.2v5.6h-6.9v-2.6h3.9s0-.5,0-.5h-3.9v-5.5h6.9Z"/>
                    <path class="st0" d="M53.9,11.4v2.5h-3.9v.3h3.9v5.7h-6.8v-2.6h3.9s0-.5,0-.5h-3.9v-5.5h6.8Z"/>
                    <polygon class="st0" points="37.7 11.4 37.7 14.3 33.8 14.3 33.8 17.1 37.7 17.1 37.7 19.9 31 19.9 31 11.4 37.7 11.4"/>
                  </g>
                </g>
              </g>
            </svg>
            <svg class="LogoTechno" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 85.5 85.5">
              <rect class="st1" width="85.5" height="85.5" rx="15.7" ry="15.7"/>
              <g class="st2">
                <g id="m3fKXb.tif">
                  <g>
                    <path class="st0" d="M65,23.6c0,.4,0,.7,0,1.1-.3,3.8-.7,7.6-1,11.4-.8,8.6-1.5,17.2-2.3,25.9-.2,2.2-.4,4.4-.6,6.5s0,.5-.2.6c-.7.4-2.5.9-3.4,1.1-4.9,1.4-9.9,2.8-14.9,4-6-1.6-12-3.3-18.1-5h0s-3.4-38.2-3.4-38.2c-.1-2.2-.5-4.4-.6-6.6,0-.3,0-.5,0-.8h44.5ZM30.4,49.9h19.1l-.8,7.1c-.7.3-1.5.5-2.3.7s-1.4.4-2.2.6-1.1.3-1.5.4-1.2-.2-1.7-.3c-1.6-.4-3.1-.9-4.6-1.3l-.4-4.4h-5.6c0,.5,0,.9,0,1.4.1,2.2.3,4.6.7,6.7,0,.1,0,.6.1.7s0,0,0,0c.3.1.9.3,1.3.4,3.3,1,6.7,1.9,10,2.8,3.9-1,7.7-2,11.5-3.3,0,0,0-.5.1-.6.1-1,.2-2,.3-3,.4-4.5.8-8.9,1.2-13.4-.1,0-.3,0-.4,0-.4,0-1,0-1.4,0-5.8-.1-11.4,0-17.2,0h-.1s.8-8.7.8-8.7c1.7,0,3.5-.1,5.2-.2,2,.2,4,0,6,.3s.6,0,.7.1.1.3.1.4c0,.4.1.9.2,1.3.1,1.3.3,2.6.3,3.8,0,0,0,0,0,0,0,0,.5.1.6.1h5.2l-1.1-12.1h-17.6c-1.4,0-2.8,0-4.2,0s-.5,0-.7,0,0,.2,0,.3c-.2,1.6-.3,3.2-.5,4.9-.5,5-.9,10.1-1.3,15.1,0,0,0,0,0,.1Z"/>
                    <path class="st0" d="M50.7,11.2v2.3h-3.6c0,.1,3.8,4.2,3.8,4.2v2h-8v-2.3c1,0,2.1,0,3.2,0s.6,0,.6,0c-1.2-1.4-2.5-2.8-3.7-4.1v-2h7.8Z"/>
                    <polygon class="st0" points="41.5 11.2 41.5 19.7 34.6 19.7 34.6 16.8 38.7 16.8 38.7 11.2 41.5 11.2"/>
                  </g>
                </g>
              </g>
            </svg>

            <div class="LogoBreak"></div>

            <svg class="LogoTechno" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 85.5 85.5">
              <rect class="st1" width="85.5" height="85.5" rx="15.7" ry="15.7"/>
              <g class="st2">
                <path class="st0" d="M42.7,26.6c-7.1,0-11.6,3.6-13.4,10.7,2.7-3.6,5.8-4.9,9.4-4,2,.5,3.5,2,5.1,3.6,2.6,2.7,5.7,5.8,12.3,5.8s11.6-3.6,13.4-10.7c-2.7,3.6-5.8,4.9-9.4,4-2-.5-3.5-2-5.1-3.6-2.6-2.7-5.7-5.8-12.3-5.8ZM29.3,42.7c-7.1,0-11.6,3.6-13.4,10.7,2.7-3.6,5.8-4.9,9.4-4,2,.5,3.5,2,5.1,3.6,2.6,2.7,5.7,5.8,12.3,5.8s11.6-3.6,13.4-10.7c-2.7,3.6-5.8,4.9-9.4,4-2-.5-3.5-2-5.1-3.6-2.6-2.7-5.7-5.8-12.3-5.8Z"/>
              </g>
            </svg>
            <svg class="LogoTechno" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 85.5 85.5">
              <rect class="st1" width="85.5" height="85.5" rx="15.7" ry="15.7"/>
              <g class="st2">
                <g id="atToJv.tif">
                  <g>
                    <path class="st0" d="M8.4,59.3l5.2-26.2h12.3c4.2.3,7.3,2.4,7.5,6.9.3,6.7-4.6,12.6-11.5,12.6-.1,0-.2,0-.3,0-1.9,0-3.8,0-5.7,0l-1.3,6.8h-6.1ZM17.2,47.6c1.2,0,2.5,0,3.8,0,4-.2,5.7-2.7,5.9-6.5.1-2.5-1.8-3.1-3.9-3.2-1.4,0-2.8,0-4.2,0l-1.6,9.7Z"/>
                    <path class="st0" d="M58,59.3h-6.2l5.2-26.2h12.3c4,.3,7.2,2.4,7.5,6.7.3,5.2-2.3,10-7.1,12-1.7.7-2.9.8-4.6.8s-3.8,0-5.7,0l-1.3,6.8ZM60.6,47.6c1.2,0,2.5,0,3.8,0,3.8-.2,5.5-2.3,5.9-6s-1.3-3.7-3.9-3.8c-1.4,0-2.8,0-4.1,0l-1.6,9.7Z"/>
                    <path class="st0" d="M43.5,26.2l-1.3,6.8h6.1c3.3.3,6.7,1.8,6.2,5.7l-2.4,13.8h-6.5l2.4-12.4c.1-.9.2-1.7-.8-2s-.9-.2-1.3-.2c-1.6,0-3.2,0-4.8,0l-2.9,14.6h-6.2l5.2-26.2h6.1Z"/>
                  </g>
                </g>
              </g>
            </svg>
            <svg class="LogoTechno" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 85.5 85.5">
              <rect class="st1" width="85.5" height="85.5" rx="15.7" ry="15.7"/>
              <g class="st2">
                <g id="KpCypn.tif">
                  <g>
                    <path class="st0" d="M70.4,60.5l-8.5,1.8c.9,1.7,3,2.4,4.5,3.5,1.7,1.2,4.2,3.5,5.3,5.2s.4.9.7,1.4c-.2,0-.4,0-.5-.2-1-.7-2-1.7-3.1-2.4-3.4-2.2-7.2-2.9-9.6-6.6-.2-.3-.9-1.5-.8-1.8.2-.6,2.4-1.2,3.1-1.4,2-.5,4.1-.6,6.1-.7-.3-.5-.7-.8-1.2-1.2-1.7-1.3-4.6-3.3-6.5-4.1-1.6-.7-4.7-1.2-5.8-2.5-.7-.8-1.3-2.2-1.8-3.2-2.5-5.1-4.3-10.8-7.7-15.4-3.2-4.4-10.2-10.6-15.7-11.5s-3,0-4.2-.4c-.4-.1-2.8-2-3.7-2.5s-5.1-2.5-5.1-.2,3.2,4.9,4.1,6.5c1.7,3,2,7.1,4.1,9.9.4.6,1.1,1.1,1.5,1.7.8,1.4-.4,3.2-.8,4.6-.9,3.2-1,7,.1,10.2s1.1,3.1,2.5,3.1c.3-2.3.3-4.9,1.6-6.9l1.5-1.8c.4.1.6,1.4.8,1.8,1.2,2.8,2.7,5.7,4.3,8.3s2.8,4.1,4.8,5.5c0,.3-.3.1-.4,0-.7-.3-3.5-2.9-4.2-3.5-2.3-2.1-4-4.3-5.1-7.3-.2,0-.2.4-.2.5-.3,1.6-.3,4.7-1.9,5.4-2.3,1.1-4.2-1.7-5-3.6-2.2-4.8-1.3-10.4.4-15.2-1-1.2-1.8-2.3-2.5-3.7-1.6-3.3-1.9-6.6-4.1-9.6s-4.3-4.5-3-7.4,7.5-.9,9.9.7c.6.4,1.1,1.1,1.7,1.3s2.3,0,3.3.3c6.8,1.1,14.7,8.4,18.5,13.8,2.7,3.9,4,8.2,6.1,12.4s1.8,3.9,2.4,4.5,3.9,1.7,4.9,2.3c2.1,1.1,8.3,5.7,9.3,7.7s.1.3,0,.5Z"/>
                    <path class="st0" d="M25.6,25c1.2-.3,2-.2,2.8.8s.6,1.4.1,2.2c-.8,1.5-1.1-.3-1.5-1.1-.4-.7-1.1-1.2-1.4-1.9Z"/>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div class="MesProjetsProContenue">
        <Carousel :images="carouselImages1"/>
        <div class="MesProjetsProTexte">
          <h2>#3</h2>
          <h3>Provaé</h3>
          <p>Provaé, issue du GISMA fondé en 1945 et transformée en 2023, se spécialise dans la prévention en santé au travail. L'association propose divers services, des visites médicales aux actions de sensibilisation, garantissant un suivi complet tout au long du parcours professionnel des salariés.<br>Le projet actuel est la refonte du site internet pour refléter la nouvelle identité de Provaé et améliorer l'accès à une information dense et utile, que ce soit pour la prévention ou la localisation des centres. Arrivé en fin de projet, j’ai apporté mon soutien en finalisant le style de certaines pages et en participant à une réunion de présentation pour ajuster le parcours utilisateur avant la mise en ligne. Le site, développé sous Joomla 4 avec SP Page Builder, combine une personnalisation en CSS et jQuery pour répondre aux contraintes graphiques et techniques du client.</p>
          <button class="Bouton">Voir le site</button>
          <div class="CartoucheLogo">
            <svg class="LogoTechno" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 85.5 85.5">
              <rect class="st1" width="85.5" height="85.5" rx="15.7" ry="15.7"/>
              <g class="st2">
                <g id="_x33_ZnMpl.tif">
                  <g>
                    <path class="st0" d="M64.9,23.7v.2l-4,45.2-18.1,5h-.2l-18-5-4.1-45.3h44.4ZM30.3,49.8h19.2l-.6,7.2-6.1,1.7h-.1l-6.2-1.6-.4-4.4h-5.6c.2,2.7.5,5.4.7,8,0,.1,0,.6,0,.6l11.4,3.2,11.3-3.1,1.6-17.1h-20.2l-.5-5.7h21.2s.5-5.5.5-5.5h-27.8s1.5,16.8,1.5,16.8Z"/>
                    <polygon class="st0" points="52.7 11.4 52.7 19.8 49.9 19.8 49.9 15.7 47.9 18.7 45.9 15.7 45.9 19.8 43.2 19.8 43.2 11.4 46.1 11.4 47.9 14.3 49.7 11.4 52.7 11.4"/>
                    <polygon class="st0" points="27.5 11.4 27.5 14.2 30.1 14.2 30.1 11.4 32.9 11.4 32.9 19.8 30.1 19.8 30.1 17 27.5 17 27.5 19.8 24.7 19.8 24.7 11.4 27.5 11.4"/>
                    <polygon class="st0" points="41.9 11.4 41.9 14.2 39.4 14.2 39.4 19.8 36.6 19.8 36.6 14.2 34.1 14.2 34.1 11.4 41.9 11.4"/>
                    <polygon class="st0" points="56.9 11.4 56.9 17 60.9 17 60.9 17.1 60.9 19.8 54 19.8 54 11.4 56.9 11.4"/>
                  </g>
                </g>
              </g>
            </svg>
            <svg class="LogoTechno" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 85.5 85.5">
              <rect class="st1" width="85.5" height="85.5" rx="15.7" ry="15.7"/>
              <g class="st2">
                <g id="xAcIV7.tif">
                  <g>
                    <path class="st0" d="M64.9,23.7c0,.3,0,.7,0,1s-.1.1-.1.3c-.8,13.4-2.3,27.2-3.5,40.6-.1,1.1-.2,2.3-.4,3.4l-18.2,5-18-4.9-4-44.7v-.6c0,0,44.3,0,44.3,0ZM56.5,33h-27.6l.5,5.5h21.2l-.5,5.7h-20.3l.5,5.5h19.2l-.6,7.2-6.1,1.7-6.3-1.6-.4-4.2c0,0-.1-.3-.2-.3h-5.3l.7,8.4.2.3,11.2,3.1,11.3-3.1,2.5-28.3Z"/>
                    <path class="st0" d="M45.9,11.4c0,.3.1,2.5-.2,2.5h-3.8v.3h3.8s.2.2.2.2v5.6h-6.9v-2.6h3.9s0-.5,0-.5h-3.9v-5.5h6.9Z"/>
                    <path class="st0" d="M53.9,11.4v2.5h-3.9v.3h3.9v5.7h-6.8v-2.6h3.9s0-.5,0-.5h-3.9v-5.5h6.8Z"/>
                    <polygon class="st0" points="37.7 11.4 37.7 14.3 33.8 14.3 33.8 17.1 37.7 17.1 37.7 19.9 31 19.9 31 11.4 37.7 11.4"/>
                  </g>
                </g>
              </g>
            </svg>
            <svg class="LogoTechno" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 85.5 85.5">
              <rect class="st1" width="85.5" height="85.5" rx="15.7" ry="15.7"/>
              <g class="st2">
                <g id="m3fKXb.tif">
                  <g>
                    <path class="st0" d="M65,23.6c0,.4,0,.7,0,1.1-.3,3.8-.7,7.6-1,11.4-.8,8.6-1.5,17.2-2.3,25.9-.2,2.2-.4,4.4-.6,6.5s0,.5-.2.6c-.7.4-2.5.9-3.4,1.1-4.9,1.4-9.9,2.8-14.9,4-6-1.6-12-3.3-18.1-5h0s-3.4-38.2-3.4-38.2c-.1-2.2-.5-4.4-.6-6.6,0-.3,0-.5,0-.8h44.5ZM30.4,49.9h19.1l-.8,7.1c-.7.3-1.5.5-2.3.7s-1.4.4-2.2.6-1.1.3-1.5.4-1.2-.2-1.7-.3c-1.6-.4-3.1-.9-4.6-1.3l-.4-4.4h-5.6c0,.5,0,.9,0,1.4.1,2.2.3,4.6.7,6.7,0,.1,0,.6.1.7s0,0,0,0c.3.1.9.3,1.3.4,3.3,1,6.7,1.9,10,2.8,3.9-1,7.7-2,11.5-3.3,0,0,0-.5.1-.6.1-1,.2-2,.3-3,.4-4.5.8-8.9,1.2-13.4-.1,0-.3,0-.4,0-.4,0-1,0-1.4,0-5.8-.1-11.4,0-17.2,0h-.1s.8-8.7.8-8.7c1.7,0,3.5-.1,5.2-.2,2,.2,4,0,6,.3s.6,0,.7.1.1.3.1.4c0,.4.1.9.2,1.3.1,1.3.3,2.6.3,3.8,0,0,0,0,0,0,0,0,.5.1.6.1h5.2l-1.1-12.1h-17.6c-1.4,0-2.8,0-4.2,0s-.5,0-.7,0,0,.2,0,.3c-.2,1.6-.3,3.2-.5,4.9-.5,5-.9,10.1-1.3,15.1,0,0,0,0,0,.1Z"/>
                    <path class="st0" d="M50.7,11.2v2.3h-3.6c0,.1,3.8,4.2,3.8,4.2v2h-8v-2.3c1,0,2.1,0,3.2,0s.6,0,.6,0c-1.2-1.4-2.5-2.8-3.7-4.1v-2h7.8Z"/>
                    <polygon class="st0" points="41.5 11.2 41.5 19.7 34.6 19.7 34.6 16.8 38.7 16.8 38.7 11.2 41.5 11.2"/>
                  </g>
                </g>
              </g>
            </svg>

            <div class="LogoBreak"></div>

            <svg class="LogoTechno" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 85.5 85.5">
              <rect class="st1" width="85.5" height="85.5" rx="15.7" ry="15.7"/>
              <g class="st2">
                <g id="_x37_6zXH7.tif">
                  <g>
                    <path class="st0" d="M62.7,71.4c-2.1-.2-4.2-1.5-5.4-3.2s-1.2-2.2-1.3-3.4c-4.5,1.9-9.3-.2-12.5-3.4l5.3-5.5s0,0,.1,0c0,0,.4.3.5.4,1.9,1.3,4,1.7,5.8.1,4.6-4-.4-8.1-3.2-11-1.8-1.8-3.6-3.7-5.4-5.5-1.1-1.1-2.2-2.1-3.2-3.2l5.3-5.4,13.9,13.8c2.6,3.1,3.8,7.5,2,11.3,5.6.8,8.4,7.4,4.9,12s-3.2,2.8-5.2,3c-.4,0-1.2,0-1.6,0Z"/>
                    <path class="st0" d="M21.8,13.9c.4,0,1,.1,1.5.2,3,.7,5.5,3.3,5.8,6.4,1.7-.7,3.5-.9,5.3-.6,2.8.5,5.3,2.2,7.3,4l-5.3,5.5s0,0-.1,0c0,0-.4-.4-.6-.5-1.9-1.3-4-1.6-5.9,0-3.8,3.3-.7,7,2,9.6l9.9,10-5.2,5.5-13.8-13.8c-2.4-2.8-3.7-6.6-2.5-10.2.1-.4.3-.8.4-1.2-5.4-.8-8.2-6.9-5.3-11.5,1.3-2.1,3.7-3.4,6.1-3.5.1,0,.3,0,.4,0Z"/>
                    <path class="st0" d="M14,63c0,0,0-.1,0-.2.5-3.5,2.7-5.8,6.2-6.6s.3,0,.3,0c-.9-2.3-.9-4.8,0-7.1s2.1-3.9,3.5-5.5l5.6,5.3c-1.7,2-2.4,4.5-.4,6.6,3.6,4,7.3.2,10.1-2.6l9.5-9.4,5.5,5.2-13.9,13.9c-3.1,2.6-7.5,3.8-11.3,2-.4,2.7-2.3,5.1-4.8,6-4.3,1.6-9-1-10-5.4s0-.7-.2-1.1v-1.2Z"/>
                    <path class="st0" d="M56.1,20.7c.6-4.5,5.2-7.4,9.6-6.2,7.4,2.2,7.1,13-.6,14.6-.1,0-.6,0-.6.1.3.7.5,1.5.6,2.3.5,3.9-1.5,7.5-4.1,10.2l-5.6-5.3s0,0,0,0c0-.2.4-.5.6-.8,1.2-1.8,1.5-3.9,0-5.7-3.9-4.5-8,.3-10.9,3.1-.9.9-1.8,1.8-2.7,2.6-2.1,2-4.1,4.1-6.1,6l-5.4-5.2h0c0,0,13.7-13.9,13.7-13.9,3.1-2.7,7.6-3.9,11.4-2.1Z"/>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div class="MesProjetsProContenue Orange">
        <Carousel :images="carouselImages1"/>
        <div class="MesProjetsProTexte">
          <h2>#4</h2>
          <h3>Actual Agence Web</h3>
          <p>Actual, fort de 30 ans d’expérience, a évolué de la cartographie vers le web en proposant aujourd’hui des sites vitrines, e-commerce et des services de webmarketing, design, et même des projets éditoriaux (Actual Kids). L’entreprise combine innovation et expertise traditionnelle pour répondre aux besoins techniques et créatifs de ses clients.<br>Pour le site d’Actual Agence Web, j’ai assuré la migration vers un nouveau serveur et la mise à jour vers Joomla 4 et PHP 8. Le projet, structuré en une page unique divisée en plusieurs sections (bandeau, carrousel, récapitulatif, prestations et galerie), a nécessité la custumisation du module OWL Carousel, afin de corriger des problèmes d’animation et de synchronisation. En autonomie, et en collaboration avec mes collègues, j’ai finalisé les sections via du style en CSS, garantissant un rendu moderne et fidèle à l’identité d’Actual.</p>
          <button class="Bouton">Voir le site</button>
          <div class="CartoucheLogo">
            <svg class="LogoTechno" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 85.5 85.5">
              <rect class="st1" width="85.5" height="85.5" rx="15.7" ry="15.7"/>
              <g class="st2">
                <g id="_x33_ZnMpl.tif">
                  <g>
                    <path class="st0" d="M64.9,23.7v.2l-4,45.2-18.1,5h-.2l-18-5-4.1-45.3h44.4ZM30.3,49.8h19.2l-.6,7.2-6.1,1.7h-.1l-6.2-1.6-.4-4.4h-5.6c.2,2.7.5,5.4.7,8,0,.1,0,.6,0,.6l11.4,3.2,11.3-3.1,1.6-17.1h-20.2l-.5-5.7h21.2s.5-5.5.5-5.5h-27.8s1.5,16.8,1.5,16.8Z"/>
                    <polygon class="st0" points="52.7 11.4 52.7 19.8 49.9 19.8 49.9 15.7 47.9 18.7 45.9 15.7 45.9 19.8 43.2 19.8 43.2 11.4 46.1 11.4 47.9 14.3 49.7 11.4 52.7 11.4"/>
                    <polygon class="st0" points="27.5 11.4 27.5 14.2 30.1 14.2 30.1 11.4 32.9 11.4 32.9 19.8 30.1 19.8 30.1 17 27.5 17 27.5 19.8 24.7 19.8 24.7 11.4 27.5 11.4"/>
                    <polygon class="st0" points="41.9 11.4 41.9 14.2 39.4 14.2 39.4 19.8 36.6 19.8 36.6 14.2 34.1 14.2 34.1 11.4 41.9 11.4"/>
                    <polygon class="st0" points="56.9 11.4 56.9 17 60.9 17 60.9 17.1 60.9 19.8 54 19.8 54 11.4 56.9 11.4"/>
                  </g>
                </g>
              </g>
            </svg>
            <svg class="LogoTechno" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 85.5 85.5">
              <rect class="st1" width="85.5" height="85.5" rx="15.7" ry="15.7"/>
              <g class="st2">
                <g id="xAcIV7.tif">
                  <g>
                    <path class="st0" d="M64.9,23.7c0,.3,0,.7,0,1s-.1.1-.1.3c-.8,13.4-2.3,27.2-3.5,40.6-.1,1.1-.2,2.3-.4,3.4l-18.2,5-18-4.9-4-44.7v-.6c0,0,44.3,0,44.3,0ZM56.5,33h-27.6l.5,5.5h21.2l-.5,5.7h-20.3l.5,5.5h19.2l-.6,7.2-6.1,1.7-6.3-1.6-.4-4.2c0,0-.1-.3-.2-.3h-5.3l.7,8.4.2.3,11.2,3.1,11.3-3.1,2.5-28.3Z"/>
                    <path class="st0" d="M45.9,11.4c0,.3.1,2.5-.2,2.5h-3.8v.3h3.8s.2.2.2.2v5.6h-6.9v-2.6h3.9s0-.5,0-.5h-3.9v-5.5h6.9Z"/>
                    <path class="st0" d="M53.9,11.4v2.5h-3.9v.3h3.9v5.7h-6.8v-2.6h3.9s0-.5,0-.5h-3.9v-5.5h6.8Z"/>
                    <polygon class="st0" points="37.7 11.4 37.7 14.3 33.8 14.3 33.8 17.1 37.7 17.1 37.7 19.9 31 19.9 31 11.4 37.7 11.4"/>
                  </g>
                </g>
              </g>
            </svg>
            <svg class="LogoTechno" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 85.5 85.5">
              <rect class="st1" width="85.5" height="85.5" rx="15.7" ry="15.7"/>
              <g class="st2">
                <g id="m3fKXb.tif">
                  <g>
                    <path class="st0" d="M65,23.6c0,.4,0,.7,0,1.1-.3,3.8-.7,7.6-1,11.4-.8,8.6-1.5,17.2-2.3,25.9-.2,2.2-.4,4.4-.6,6.5s0,.5-.2.6c-.7.4-2.5.9-3.4,1.1-4.9,1.4-9.9,2.8-14.9,4-6-1.6-12-3.3-18.1-5h0s-3.4-38.2-3.4-38.2c-.1-2.2-.5-4.4-.6-6.6,0-.3,0-.5,0-.8h44.5ZM30.4,49.9h19.1l-.8,7.1c-.7.3-1.5.5-2.3.7s-1.4.4-2.2.6-1.1.3-1.5.4-1.2-.2-1.7-.3c-1.6-.4-3.1-.9-4.6-1.3l-.4-4.4h-5.6c0,.5,0,.9,0,1.4.1,2.2.3,4.6.7,6.7,0,.1,0,.6.1.7s0,0,0,0c.3.1.9.3,1.3.4,3.3,1,6.7,1.9,10,2.8,3.9-1,7.7-2,11.5-3.3,0,0,0-.5.1-.6.1-1,.2-2,.3-3,.4-4.5.8-8.9,1.2-13.4-.1,0-.3,0-.4,0-.4,0-1,0-1.4,0-5.8-.1-11.4,0-17.2,0h-.1s.8-8.7.8-8.7c1.7,0,3.5-.1,5.2-.2,2,.2,4,0,6,.3s.6,0,.7.1.1.3.1.4c0,.4.1.9.2,1.3.1,1.3.3,2.6.3,3.8,0,0,0,0,0,0,0,0,.5.1.6.1h5.2l-1.1-12.1h-17.6c-1.4,0-2.8,0-4.2,0s-.5,0-.7,0,0,.2,0,.3c-.2,1.6-.3,3.2-.5,4.9-.5,5-.9,10.1-1.3,15.1,0,0,0,0,0,.1Z"/>
                    <path class="st0" d="M50.7,11.2v2.3h-3.6c0,.1,3.8,4.2,3.8,4.2v2h-8v-2.3c1,0,2.1,0,3.2,0s.6,0,.6,0c-1.2-1.4-2.5-2.8-3.7-4.1v-2h7.8Z"/>
                    <polygon class="st0" points="41.5 11.2 41.5 19.7 34.6 19.7 34.6 16.8 38.7 16.8 38.7 11.2 41.5 11.2"/>
                  </g>
                </g>
              </g>
            </svg>

            <div class="LogoBreak"></div>

            <svg class="LogoTechno" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 85.5 85.5">
              <rect class="st1" width="85.5" height="85.5" rx="15.7" ry="15.7"/>
              <g class="st2">
                <g id="atToJv.tif">
                  <g>
                    <path class="st0" d="M8.4,59.3l5.2-26.2h12.3c4.2.3,7.3,2.4,7.5,6.9.3,6.7-4.6,12.6-11.5,12.6-.1,0-.2,0-.3,0-1.9,0-3.8,0-5.7,0l-1.3,6.8h-6.1ZM17.2,47.6c1.2,0,2.5,0,3.8,0,4-.2,5.7-2.7,5.9-6.5.1-2.5-1.8-3.1-3.9-3.2-1.4,0-2.8,0-4.2,0l-1.6,9.7Z"/>
                    <path class="st0" d="M58,59.3h-6.2l5.2-26.2h12.3c4,.3,7.2,2.4,7.5,6.7.3,5.2-2.3,10-7.1,12-1.7.7-2.9.8-4.6.8s-3.8,0-5.7,0l-1.3,6.8ZM60.6,47.6c1.2,0,2.5,0,3.8,0,3.8-.2,5.5-2.3,5.9-6s-1.3-3.7-3.9-3.8c-1.4,0-2.8,0-4.1,0l-1.6,9.7Z"/>
                    <path class="st0" d="M43.5,26.2l-1.3,6.8h6.1c3.3.3,6.7,1.8,6.2,5.7l-2.4,13.8h-6.5l2.4-12.4c.1-.9.2-1.7-.8-2s-.9-.2-1.3-.2c-1.6,0-3.2,0-4.8,0l-2.9,14.6h-6.2l5.2-26.2h6.1Z"/>
                  </g>
                </g>
              </g>
            </svg>
            <svg class="LogoTechno" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 85.5 85.5">
              <rect class="st1" width="85.5" height="85.5" rx="15.7" ry="15.7"/>
              <g class="st2">
                <g id="KpCypn.tif">
                  <g>
                    <path class="st0" d="M70.4,60.5l-8.5,1.8c.9,1.7,3,2.4,4.5,3.5,1.7,1.2,4.2,3.5,5.3,5.2s.4.9.7,1.4c-.2,0-.4,0-.5-.2-1-.7-2-1.7-3.1-2.4-3.4-2.2-7.2-2.9-9.6-6.6-.2-.3-.9-1.5-.8-1.8.2-.6,2.4-1.2,3.1-1.4,2-.5,4.1-.6,6.1-.7-.3-.5-.7-.8-1.2-1.2-1.7-1.3-4.6-3.3-6.5-4.1-1.6-.7-4.7-1.2-5.8-2.5-.7-.8-1.3-2.2-1.8-3.2-2.5-5.1-4.3-10.8-7.7-15.4-3.2-4.4-10.2-10.6-15.7-11.5s-3,0-4.2-.4c-.4-.1-2.8-2-3.7-2.5s-5.1-2.5-5.1-.2,3.2,4.9,4.1,6.5c1.7,3,2,7.1,4.1,9.9.4.6,1.1,1.1,1.5,1.7.8,1.4-.4,3.2-.8,4.6-.9,3.2-1,7,.1,10.2s1.1,3.1,2.5,3.1c.3-2.3.3-4.9,1.6-6.9l1.5-1.8c.4.1.6,1.4.8,1.8,1.2,2.8,2.7,5.7,4.3,8.3s2.8,4.1,4.8,5.5c0,.3-.3.1-.4,0-.7-.3-3.5-2.9-4.2-3.5-2.3-2.1-4-4.3-5.1-7.3-.2,0-.2.4-.2.5-.3,1.6-.3,4.7-1.9,5.4-2.3,1.1-4.2-1.7-5-3.6-2.2-4.8-1.3-10.4.4-15.2-1-1.2-1.8-2.3-2.5-3.7-1.6-3.3-1.9-6.6-4.1-9.6s-4.3-4.5-3-7.4,7.5-.9,9.9.7c.6.4,1.1,1.1,1.7,1.3s2.3,0,3.3.3c6.8,1.1,14.7,8.4,18.5,13.8,2.7,3.9,4,8.2,6.1,12.4s1.8,3.9,2.4,4.5,3.9,1.7,4.9,2.3c2.1,1.1,8.3,5.7,9.3,7.7s.1.3,0,.5Z"/>
                    <path class="st0" d="M25.6,25c1.2-.3,2-.2,2.8.8s.6,1.4.1,2.2c-.8,1.5-1.1-.3-1.5-1.1-.4-.7-1.1-1.2-1.4-1.9Z"/>
                  </g>
                </g>
              </g>
            </svg>
            <svg class="LogoTechno" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 85.5 85.5">
              <rect class="st1" width="85.5" height="85.5" rx="15.7" ry="15.7"/>
              <g class="st2">
                <g id="_x37_6zXH7.tif">
                  <g>
                    <path class="st0" d="M62.7,71.4c-2.1-.2-4.2-1.5-5.4-3.2s-1.2-2.2-1.3-3.4c-4.5,1.9-9.3-.2-12.5-3.4l5.3-5.5s0,0,.1,0c0,0,.4.3.5.4,1.9,1.3,4,1.7,5.8.1,4.6-4-.4-8.1-3.2-11-1.8-1.8-3.6-3.7-5.4-5.5-1.1-1.1-2.2-2.1-3.2-3.2l5.3-5.4,13.9,13.8c2.6,3.1,3.8,7.5,2,11.3,5.6.8,8.4,7.4,4.9,12s-3.2,2.8-5.2,3c-.4,0-1.2,0-1.6,0Z"/>
                    <path class="st0" d="M21.8,13.9c.4,0,1,.1,1.5.2,3,.7,5.5,3.3,5.8,6.4,1.7-.7,3.5-.9,5.3-.6,2.8.5,5.3,2.2,7.3,4l-5.3,5.5s0,0-.1,0c0,0-.4-.4-.6-.5-1.9-1.3-4-1.6-5.9,0-3.8,3.3-.7,7,2,9.6l9.9,10-5.2,5.5-13.8-13.8c-2.4-2.8-3.7-6.6-2.5-10.2.1-.4.3-.8.4-1.2-5.4-.8-8.2-6.9-5.3-11.5,1.3-2.1,3.7-3.4,6.1-3.5.1,0,.3,0,.4,0Z"/>
                    <path class="st0" d="M14,63c0,0,0-.1,0-.2.5-3.5,2.7-5.8,6.2-6.6s.3,0,.3,0c-.9-2.3-.9-4.8,0-7.1s2.1-3.9,3.5-5.5l5.6,5.3c-1.7,2-2.4,4.5-.4,6.6,3.6,4,7.3.2,10.1-2.6l9.5-9.4,5.5,5.2-13.9,13.9c-3.1,2.6-7.5,3.8-11.3,2-.4,2.7-2.3,5.1-4.8,6-4.3,1.6-9-1-10-5.4s0-.7-.2-1.1v-1.2Z"/>
                    <path class="st0" d="M56.1,20.7c.6-4.5,5.2-7.4,9.6-6.2,7.4,2.2,7.1,13-.6,14.6-.1,0-.6,0-.6.1.3.7.5,1.5.6,2.3.5,3.9-1.5,7.5-4.1,10.2l-5.6-5.3s0,0,0,0c0-.2.4-.5.6-.8,1.2-1.8,1.5-3.9,0-5.7-3.9-4.5-8,.3-10.9,3.1-.9.9-1.8,1.8-2.7,2.6-2.1,2-4.1,4.1-6.1,6l-5.4-5.2h0c0,0,13.7-13.9,13.7-13.9,3.1-2.7,7.6-3.9,11.4-2.1Z"/>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div class="MesProjetsProContenue">
        <Carousel :images="carouselImages1"/>
        <div class="MesProjetsProTexte">
          <h2>#5</h2>
          <h3>Portfolio Lucas Legendre</h3>
          <p>Actuellement, je développe mon portfolio en Vue.js et Node.js, suivant les conseils de ma formatrice pour étendre mes compétences en JavaScript. Pour la stylisation, j'ai adopté SCSS avec enthousiasme, et pour les animations, j'explore GSAP afin d'apporter une touche dynamique à l'ensemble.<br>Haut en couleurs et fidèle à ma personnalité, ce site sert à présenter mes projets et à refléter ma passion pour le développement, tout en me permettant d'apprendre de nouvelles méthodes de création de code.</p>
          <button class="Bouton">Voir le site</button>
          <div class="CartoucheLogo">
            <svg class="LogoTechno" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 85.5 85.5">
              <rect class="st1" width="85.5" height="85.5" rx="15.7" ry="15.7"/>
              <g class="st2">
                <g id="_x33_ZnMpl.tif">
                  <g>
                    <path class="st0" d="M64.9,23.7v.2l-4,45.2-18.1,5h-.2l-18-5-4.1-45.3h44.4ZM30.3,49.8h19.2l-.6,7.2-6.1,1.7h-.1l-6.2-1.6-.4-4.4h-5.6c.2,2.7.5,5.4.7,8,0,.1,0,.6,0,.6l11.4,3.2,11.3-3.1,1.6-17.1h-20.2l-.5-5.7h21.2s.5-5.5.5-5.5h-27.8s1.5,16.8,1.5,16.8Z"/>
                    <polygon class="st0" points="52.7 11.4 52.7 19.8 49.9 19.8 49.9 15.7 47.9 18.7 45.9 15.7 45.9 19.8 43.2 19.8 43.2 11.4 46.1 11.4 47.9 14.3 49.7 11.4 52.7 11.4"/>
                    <polygon class="st0" points="27.5 11.4 27.5 14.2 30.1 14.2 30.1 11.4 32.9 11.4 32.9 19.8 30.1 19.8 30.1 17 27.5 17 27.5 19.8 24.7 19.8 24.7 11.4 27.5 11.4"/>
                    <polygon class="st0" points="41.9 11.4 41.9 14.2 39.4 14.2 39.4 19.8 36.6 19.8 36.6 14.2 34.1 14.2 34.1 11.4 41.9 11.4"/>
                    <polygon class="st0" points="56.9 11.4 56.9 17 60.9 17 60.9 17.1 60.9 19.8 54 19.8 54 11.4 56.9 11.4"/>
                  </g>
                </g>
              </g>
            </svg>

            <svg class="LogoTechno" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 85.5 85.5">
              <rect class="st1" width="85.5" height="85.5" rx="15.7" ry="15.7"/>
              <g class="st2">
                <g id="J2zicK.tif">
                  <path class="st0" d="M11.5,38c.6-4.6,6.5-9.5,10.2-11.8,6-3.7,14.4-7.1,21.6-5.5,10.5,2.3,7.7,12.8.8,17.5-4,2.8-13,5-17.1,1.6-.4-.4-2.2-2.5-1-2.7s1.3,1.1,1.7,1.3c6.1,3.4,20.1-3.4,19.1-11.2-.2-1.8-2.8-2.8-4.4-3.1-3.5-.5-7.6.3-10.8,1.6-5.9,2.2-20,10-13.7,17.8,2.1,2.6,5.7,4.4,8.1,6.9l5.9-3.2c2-3,8.4-6.5,7.5,0,1.4-.6,2.2,0,2,1.5s-1.1,3.5-1.4,5.1c-.1.7-.3,1.5-.1,2.2,1.3-2.1,2.3-4.4,3.3-6.6.8-1.8,1.8-3.8,2.5-5.7s.4-1.8.7-2.1c.5-.4,4-.8,3.7.6-.9,2.1-1.1,4.8.3,6.7,1.1-2.1,2.7-4.4,3.5-6.6.6-1.7,0-2.6,2.2-2.8,3.6-.3,1.9,1.1,1.6,2.9s.1,3.8,1.3,5.5c3.7-1.5,8.6-1.8,11.9.9,2.1,1.8,3.3,5.5,1,7.6-.3.3-1.6,1.2-2.1.9s.9-1.2,1.2-1.5c.8-.9.9-2,.5-3.1-1.4-4.1-8.3-4.5-11.8-3.1.5,1.6.8,2.6,0,4.1-1.4,2.5-7.9,5.7-6.7.5s2-3.6,3.4-4.6c-.2-.9-.7-1.7-1-2.6s-.3-1.2-.4-1.9,0-.4-.3-.2c-.5,1.2-1.1,2.3-1.8,3.3s-1.6,2.2-1.6,2.5.6,1.8.6,2.3c.3,2.7-1.4,4.5-3.8,5.4s-4.4,1.2-4.3-.8,2.6-3.4,3.3-4.3,1.1-1.4,1.1-1.6c-.7-1.6-1.4-3.2-1.8-4.9-1.2,2.6-2.3,5.2-3.6,7.8-.7,1.3-2.5,5.2-4.2,5.3s-1.8-1.2-1.8-2.1v-2.2l-1.2,2.6c-1.3,3.2-4,3.5-5.4,0-1.1-2.6-.7-5.2,0-7.8-.1-.1-3.1,1.6-3.1,1.8s.5,1.2.5,1.6c1.1,5.4-2.5,11.8-8.2,12.4h-2.9c-1.3-.3-2.3-1-2.7-2.2-2.2-5.8,5.1-9.9,9.3-12l.2-.3c-4.3-3.4-10-6-11.8-11.6,0-.7,0-1.5,0-2.2ZM37.5,46.1c-1.8.1-3,2.1-3.6,3.6-.8,1.8-1.3,3.7-1.1,5.7s.3,2.1,1.1,1.3,1.7-3.5,2.1-4.5,2.1-5.6,1.6-6.1ZM54.9,55c1.8-.5,2.8-2.3,2.3-4-1.2.9-2.2,2.5-2.3,4ZM25,53.2c-2.7,1.5-8.4,4.9-7.6,8.7s3.8.3,4.8-.5c2.4-2,3.7-5.1,2.8-8.2Z"/>
                </g>
              </g>
            </svg>

            <svg class="LogoTechno" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 85.5 85.5">
              <rect class="st1" width="85.5" height="85.5" rx="15.7" ry="15.7"/>
              <g class="st3">
                <g>
                  <polygon class="st0" points="12.4 16.4 42.7 69.1 73.1 16.4 61 16.4 42.7 47.6 24.5 16.4 12.4 16.4"/>
                  <g class="st2">
                    <polygon class="st0" points="24.5 16.4 42.7 47.6 61 16.4 49.8 16.4 42.7 28.9 35.9 16.4 24.5 16.4"/>
                  </g>
                </g>
              </g>
            </svg>

            <div class="LogoBreak"></div>

            <svg class="LogoTechno" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 85.5 85.5">
              <rect class="st1" width="85.5" height="85.5" rx="15.7" ry="15.7"/>
              <g class="st2">
                <g id="h6lICz.tif">
                  <g>
                    <path class="st0" d="M22.1,29.9c2.8.5,4.5,2,5.2,4.7.2.7.9,3.6-.2,3.6h-4.9c-.6-.7,0-2.4-1.2-2.9-2.8-1.3-4.9,5.3-5.1,7.1s-.2,3.9.3,4.9c1.3,2.4,4.7-.3,4.8-2.3-.5,0-1.8.1-1.9-.5s.9-4.2,1.3-4.2h8.2c.1,0,.5.4.5.7s-.8,3.5-1,3.7c-.5.5-1.2.2-1.5.3s-1,2.8-1.3,3.3c-1.9,3.8-5.1,5.4-9.4,5-3.3-.3-5-3.2-5.7-6.2,0-1.4-.1-2.9,0-4.3.5-5.3,3.9-12.3,9.9-13h1.9Z"/>
                    <path class="st0" d="M38.4,29.9c2.2.6,3.9,1.9,4.5,4.2s.7,2.9-.3,3.1-3.7.1-4.3,0c-1.4-.3,0-2.9-2.6-2.3-1.9.4-.5,2.9.2,3.8,2.6,3.3,5,4,4.4,9.1-.8,7.3-12.9,7.9-13.7.6,0-.4-.1-1.7,0-2s5.2-.3,5.4,0,0,1,.1,1.4c.4,1.5,2.6,1,2.5-.8-.1-2.6-5.2-5.2-5.6-8.8s1.5-7,5.6-8.2h3.7Z"/>
                    <path class="st0" d="M56.9,30.3v22.5s-.3.3-.3.3h-5.2c-.8,0,.2-3-.4-3h-4.7c-.6.4-1,2.6-1.4,2.8s-4.8.2-5.3,0-.4-.3-.4-.4l10.4-22.3h7.4ZM48.3,45.3c.7-.1,3,.3,3.2-.3l.2-8.2-3.4,8.5Z"/>
                    <path class="st0" d="M61.2,48.5c.2.6,2.3,1.1,2.4,1.4.1.4-.6,3.3-1,3.3h-4.7c0,0-.5-.4-.4-.7l5.3-22.1c6.7-.6,12.6,0,12,8.1-.3,4.5-4.5,9.9-9.3,9.9h-4.2ZM67.9,35.2c-1-.2-2.7.2-3.8,0l2.4,1.4-1.2,6.7c3.3.4,5.2-7.6,2.6-8.1Z"/>
                  </g>
                </g>
              </g>
            </svg>
            <svg class="LogoTechno" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 85.5 85.5">
              <rect class="st1" width="85.5" height="85.5" rx="15.7" ry="15.7"/>
              <g class="st2">
                <g id="Yy4rdl.tif">
                  <g>
                    <path class="st0" d="M5.6,34.9l.4-.5,7-4c.5-.3.8-.1,1.3.1,2.3,1.2,4.6,2.8,6.9,4,.2.1.3.5.3.7,0,3.7,0,7.5,0,11.2,0,.2-.4.3-.6.2l-4.5-2.6c-.1-.2-.2-.4-.2-.6v-5.4c0-.1-.1-.2-.2-.3-.2-.2-1.7-1.1-2-1.2-.4-.2-.5-.1-.9,0s-1.9,1-2,1.2-.2.4-.2.6c-.1,1.6.2,3.6,0,5.2s-.4.6-.8.8c-1.3.8-2.7,1.4-3.9,2.3-.3,0-.5,0-.6-.3v-11.4Z"/>
                    <path class="st0" d="M42.6,65.5h-.7c-.8-.5-1.6-.9-2.4-1.4s-.4-.3-.3-.4c.3,0,1-.5,1.2-.5.3,0,1.4.9,1.8,1h.2s6.6-3.8,6.6-3.8h.1c0-.1,0-.4,0-.4v-7.5s-.2-.2-.2-.2l-6.7-3.8h-.2s-6.7,3.9-6.7,3.9v7.9c0,.1.2.2.3.3.4.3,1.6,1,2,1.1s.9-.1,1.1-.6v-7.9s.1-.2.2-.2h1.1s0,0,0,0v8.2c0,0-.1.5-.2.6-.5,1.1-1.6,1.3-2.7,1s-2.1-1-2.6-1.4-.5-.5-.5-.9c-.2-2.6.2-5.5,0-8.1,0-.8.8-1.1,1.4-1.5,2.1-1.3,4.3-2.5,6.5-3.6.3,0,.7,0,.9.1,2.1,1.3,4.4,2.4,6.5,3.7s.8.5.9,1c0,2.5.3,5.4,0,7.9s-.3,1.1-1,1.6l-6.8,3.9Z"/>
                    <path class="st0" d="M55.4,20c.3,0,.5,0,.7.2,1.3.6,2.5,1.5,3.9,2.1.2.2.4.3.5.6v20.8c0,.3-.3.5-.5.6-2.3,1.2-4.5,2.8-6.8,3.9s-.7.4-1.3,0c-2.3-1.1-4.6-2.8-6.9-4-.2-.2-.5-.4-.5-.8v-8.4c0-.4.3-.5.6-.7,2.2-1.5,4.8-2.6,7.1-4.1h.6s2,1.1,2,1.1c.2,0,.4-.2.4-.4v-10.8c0-.2,0-.3.3-.4ZM52.3,36.5l-2.6,1.5v3c.9.5,1.7,1.1,2.7,1.5.9-.5,1.7-.9,2.5-1.5v-3s-2.4-1.5-2.4-1.5c0,0-.1,0-.2,0Z"/>
                    <path class="st0" d="M32.7,30.4h.5c2.3,1.3,4.6,2.5,6.9,3.9.4.2.8.4.9.9-.2,2.7.2,5.7,0,8.4,0,.4-.2.5-.5.7-2.3,1.1-4.6,2.9-6.9,4s-.7.2-1.2,0c-2.3-1.2-4.5-2.8-6.8-3.9-.4-.2-.5-.6-.5-1,.2-2.5-.2-5.3,0-7.8,0-.9.6-1,1.3-1.4,2.1-1.3,4.3-2.4,6.5-3.7Z"/>
                    <path class="st0" d="M74.4,37.9l-2.3-1.3c-.3-.1-.4,0-.7.1-.4.2-1.7.9-2,1.2s-.2.2-.2.4c0,.4,0,2.1,0,2.5s.2.3.3.3l7.1,4.1c.4.3.3.6,0,.8-1.2.9-3,1.5-4.3,2.4h-.6s-7.4-4.1-7.4-4.1l-.3-.4c-.1-2.9,0-5.8,0-8.7,0-.5.4-.6.8-.8,2.2-1.4,4.6-2.5,6.8-3.9.2,0,.4-.1.6,0l7.1,4.1c.2.1.5.3.6.6s0,1.9,0,2.3-.2.6-.6.8c-1.3.9-2.8,1.5-4.1,2.4-.3.2-.6,0-.6-.4,0-.5.1-2.1,0-2.3Z"/>
                    <path class="st0" d="M46.3,55.3c-.1,0-.3-.7-.5-.9-.5-.6-2.5-.6-3.1-.2s-.5.9,0,1.1c1.4.8,4.9,0,5.1,2.3.2,2.7-3.7,2.9-5.5,2.2s-1.6-1.2-1.5-2.1,1-.3,1.2-.2.2.8.5,1.1c.6.5,2.5.5,3.2.2s1-1.2.1-1.6c-1.3-.5-4.5,0-4.7-2-.3-2.5,2.5-2.9,4.4-2.5s1.7.8,1.9,1.8.1.6,0,.6-.9,0-1.1,0Z"/>
                    <path class="st0" d="M73.4,38.5c.1.1.1,1.6,0,1.8s-1.4.9-1.5.9l-1.5-.8c0,0,0-1.8,0-1.9l1.5-.8c0,0,1.4.8,1.5.8Z"/>
                    <path class="st0" d="M52.4,50.8c2.2-.4,2.1,2.9,0,2.6-1.4-.2-1.4-2.3,0-2.6ZM52.4,51c-.8.2-1,1.5-.3,1.9s2.1-.6,1.4-1.6-.7-.5-1.2-.4Z"/>
                    <path class="st0" d="M52.2,51.3c.4,0,1.1-.1,1,.4s-.1.2-.1.3.2.5.2.7c-.5.2-.3-.4-.4-.5s-.3,0-.4,0v.6s-.3,0-.3,0v-1.5Z"/>
                  </g>
                </g>
              </g>
            </svg>
            <svg class="LogoTechno" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 85.5 85.5">
              <rect class="st1" width="85.5" height="85.5" rx="15.7" ry="15.7"/>
              <g class="st2">
                <g id="KpCypn.tif">
                  <g>
                    <path class="st0" d="M70.4,60.5l-8.5,1.8c.9,1.7,3,2.4,4.5,3.5,1.7,1.2,4.2,3.5,5.3,5.2s.4.9.7,1.4c-.2,0-.4,0-.5-.2-1-.7-2-1.7-3.1-2.4-3.4-2.2-7.2-2.9-9.6-6.6-.2-.3-.9-1.5-.8-1.8.2-.6,2.4-1.2,3.1-1.4,2-.5,4.1-.6,6.1-.7-.3-.5-.7-.8-1.2-1.2-1.7-1.3-4.6-3.3-6.5-4.1-1.6-.7-4.7-1.2-5.8-2.5-.7-.8-1.3-2.2-1.8-3.2-2.5-5.1-4.3-10.8-7.7-15.4-3.2-4.4-10.2-10.6-15.7-11.5s-3,0-4.2-.4c-.4-.1-2.8-2-3.7-2.5s-5.1-2.5-5.1-.2,3.2,4.9,4.1,6.5c1.7,3,2,7.1,4.1,9.9.4.6,1.1,1.1,1.5,1.7.8,1.4-.4,3.2-.8,4.6-.9,3.2-1,7,.1,10.2s1.1,3.1,2.5,3.1c.3-2.3.3-4.9,1.6-6.9l1.5-1.8c.4.1.6,1.4.8,1.8,1.2,2.8,2.7,5.7,4.3,8.3s2.8,4.1,4.8,5.5c0,.3-.3.1-.4,0-.7-.3-3.5-2.9-4.2-3.5-2.3-2.1-4-4.3-5.1-7.3-.2,0-.2.4-.2.5-.3,1.6-.3,4.7-1.9,5.4-2.3,1.1-4.2-1.7-5-3.6-2.2-4.8-1.3-10.4.4-15.2-1-1.2-1.8-2.3-2.5-3.7-1.6-3.3-1.9-6.6-4.1-9.6s-4.3-4.5-3-7.4,7.5-.9,9.9.7c.6.4,1.1,1.1,1.7,1.3s2.3,0,3.3.3c6.8,1.1,14.7,8.4,18.5,13.8,2.7,3.9,4,8.2,6.1,12.4s1.8,3.9,2.4,4.5,3.9,1.7,4.9,2.3c2.1,1.1,8.3,5.7,9.3,7.7s.1.3,0,.5Z"/>
                    <path class="st0" d="M25.6,25c1.2-.3,2-.2,2.8.8s.6,1.4.1,2.2c-.8,1.5-1.1-.3-1.5-1.1-.4-.7-1.1-1.2-1.4-1.9Z"/>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  </div>
  <Footer />
  </template>
<script>
import {ImagesRando, carouselImages} from '@/data/images';

import Footer from '@/components/FooterGlobal.vue';
import Carousel from "@/components/CarouselGlobal.vue";

export default {
  name: "MonPortfolio",
  components: {
    Footer,
    Carousel,
  },
  data() {
    return {
      ImagesRando,
      carouselImages1: carouselImages.slice(0, 5),
    };
  }
};
</script>
<style lang="scss">
  @use '@/assets/scss/pages/portfolio' as *;

</style>