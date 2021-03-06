<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Bretagne tourisme voyage" />
    <link
      rel="stylesheet"
      href="https://cdn.datatables.net/1.11.1/css/jquery.dataTables.min.css"
    />
    <link rel="stylesheet" href="./css/style.css" />
    <link rel="stylesheet" href="./css/table.css" />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
    />
    <link rel="icon" type="image/png" href="./img/logo/favicon.png" />
    <title>Tableau - La Bretagne</title>
  </head>
  <body>
    <header>
      <nav>
        <div class="hamburg">
          <i class="hambicon fa fa-bars fa-2x"></i>
        </div>
        <div class="symbole">
          <img class="imgLogo" src="./img/logo/logo_slogan.png" alt="" />
        </div>
        <div class="menu groupmenu">
          <ul>
            <li><a href="./index.html">Accueil</a></li>
            <li><a href="./a_visiter.html">A Visiter</a></li>
            <li><a href="./market.html">Marchés</a></li>
            <li><a href="./actuality.html">Actualités</a></li>
            <li><a href="./contact.html">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
    <section class="tableSection">
    <?php
      include('fetchTable.php');
    ?>
    </section>
    <footer>
      <div class="social">
        <a class="facebook" href="#"><i class="fab fa-facebook"></i></a>
        <a class="twitter" href="#"><i class="fab fa-twitter"></i></a>
        <a class="instagram" href="#"><i class="fab fa-instagram"></i></a>
      </div>
      <p class="copyright">
        &copy; Copyright 2021-2021 - Tout droits réservés.
      </p>
    </footer>
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <script src="https://cdn.datatables.net/1.11.1/js/jquery.dataTables.min.js"></script>
    <script src="./js/table.js"></script>
    <script src="./js/app.js"></script>
    <script src="/tarteaucitron.js-1.9.3/tarteaucitron.js"></script>
    <script src="./js/cookietarte.js"></script>
  </body>
</html>
