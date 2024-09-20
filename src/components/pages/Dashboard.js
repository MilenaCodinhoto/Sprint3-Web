<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Links CSS -->
    <link rel="stylesheet" href="../css/dashboard.css">
    <link rel="stylesheet" href="../css/menu.css">
    <link rel="stylesheet" href="../css/style.css">

    <!-- Imports -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Georama:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet">
    <script src="https://kit.fontawesome.com/cb4f3aa626.js" crossorigin="anonymous"></script>

    <title>Formula E - Dashboard</title>
</head>

<body>
    <header>
        <img src="../assets/formulae-logo.png" alt="Logo da FormulaE">
        <nav>
            <div class="menuToggle" id="menuToggle">
                <span class="menu-span unclicked"></span>
                <span class="menu-span unclicked"></span>
                <span class="menu-span unclicked"></span>
            </div>
            <ul class="menu" id="menu">
                <li class="item-menu"><a href="../../index.html" class="link-menu">Home</a></li>
                <li class="item-menu"><a href="../pages/sobre.html" class="link-menu">Sobre</a></li>
                <li class="item-menu"><a href="../pages/circuitos.html" class="link-menu">Circuitos</a></li>
                <li class="item-menu"><a href="../pages/desenvolvedores.html" class="link-menu">Desenvolvedores</a></li>
                <li id="link-login">
                    <a href="../pages/login.html" id="btn-login">
                        <div class="icone">
                            <img src="../assets/icon-user.svg" alt="Icone de usuário">
                        </div>
                        Login
                    </a>
                </li>
            </ul>
        </nav>
    </header>
    <main>
        <h1 class="titulo">Dashboard</h1>
        <div class="container">
            <section class="corrida">
                <h2>Corrida</h2>
                <div class="prox-corrida" id="prox-corrida" onclick="verCorrida()">
                    <div class="box-corrida">
                        <div class="info-corrida">
                            <img src="../imgs-dashboard/próx-corrida.png" alt="Bandeira do pais do mapa">
                        </div>
                    </div>
                </div>
                <section class="colocacao">
                    <h2>Carros</h2>
                    <div class="carros">
                        <img src="../imgs-dashboard/carro1.png" onclick="verCarro(this)" data-id="1" alt="carro 1">
                        <img src="../imgs-dashboard/carro2.png" onclick="verCarro(this)" data-id="2" alt="carro 2">
                        <img src="../imgs-dashboard/carro3.png" onclick="verCarro(this)" data-id="3" alt="carro 3">
                        <img src="../imgs-dashboard/carro4.png" onclick="verCarro(this)" data-id="4" alt="carro 4">
                        <img src="../imgs-dashboard/carro5.png" onclick="verCarro(this)" data-id="5" alt="carro 5">
                    </div>
                </section>
            </section>
        </div>
    </main>
    <footer>
        <div class="contt-email">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path
                    d="M20.3794 11.1836C20.757 10.882 20.8186 10.3314 20.517 9.95384C20.2154 9.57625 19.6649 9.51464 19.2873 9.81623L15.6367 12.732L15.6359 12.7326C14.7534 13.4345 13.2352 13.4346 12.3526 12.7328L12.3516 12.732L8.71381 9.81709C8.33669 9.51491 7.78602 9.57566 7.48384 9.95278C7.18166 10.3299 7.24241 10.8806 7.61953 11.1828L11.2595 14.0994L11.2617 14.1011C12.7823 15.3117 15.206 15.3117 16.7266 14.1011L16.7277 14.1003L20.3794 11.1836Z"
                    fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M8.16667 3.20825C6.28254 3.20825 4.57876 3.67916 3.34211 4.82747C2.09372 5.98669 1.45834 7.70814 1.45834 9.91658V18.0833C1.45834 20.2917 2.09372 22.0131 3.34211 23.1724C4.57876 24.3207 6.28254 24.7916 8.16667 24.7916H19.8333C21.7175 24.7916 23.4212 24.3207 24.6579 23.1724C25.9063 22.0131 26.5417 20.2917 26.5417 18.0833V9.91658C26.5417 7.70814 25.9063 5.98669 24.6579 4.82747C23.4212 3.67916 21.7175 3.20825 19.8333 3.20825H8.16667ZM3.20834 9.91658C3.20834 8.04169 3.73962 6.84648 4.5329 6.10986C5.33792 5.36235 6.5508 4.95825 8.16667 4.95825H19.8333C21.4492 4.95825 22.6621 5.36235 23.4671 6.10986C24.2604 6.84648 24.7917 8.04169 24.7917 9.91658V18.0833C24.7917 19.9581 24.2604 21.1534 23.4671 21.89C22.6621 22.6375 21.4492 23.0416 19.8333 23.0416H8.16667C6.5508 23.0416 5.33792 22.6375 4.5329 21.89C3.73962 21.1534 3.20834 19.9581 3.20834 18.0833V9.91658Z"
                    fill="white" />
                <path
                    d="M20.3794 11.1836C20.757 10.882 20.8186 10.3314 20.517 9.95384C20.2154 9.57625 19.6649 9.51464 19.2873 9.81623L15.6367 12.732L15.6359 12.7326C14.7534 13.4345 13.2352 13.4346 12.3526 12.7328L12.3516 12.732L8.71381 9.81709C8.33669 9.51491 7.78602 9.57566 7.48384 9.95278C7.18166 10.3299 7.24241 10.8806 7.61953 11.1828L11.2595 14.0994L11.2617 14.1011C12.7823 15.3117 15.206 15.3117 16.7266 14.1011L16.7277 14.1003L20.3794 11.1836Z"
                    stroke="white" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M8.16667 3.20825C6.28254 3.20825 4.57876 3.67916 3.34211 4.82747C2.09372 5.98669 1.45834 7.70814 1.45834 9.91658V18.0833C1.45834 20.2917 2.09372 22.0131 3.34211 23.1724C4.57876 24.3207 6.28254 24.7916 8.16667 24.7916H19.8333C21.7175 24.7916 23.4212 24.3207 24.6579 23.1724C25.9063 22.0131 26.5417 20.2917 26.5417 18.0833V9.91658C26.5417 7.70814 25.9063 5.98669 24.6579 4.82747C23.4212 3.67916 21.7175 3.20825 19.8333 3.20825H8.16667ZM3.20834 9.91658C3.20834 8.04169 3.73962 6.84648 4.5329 6.10986C5.33792 5.36235 6.5508 4.95825 8.16667 4.95825H19.8333C21.4492 4.95825 22.6621 5.36235 23.4671 6.10986C24.2604 6.84648 24.7917 8.04169 24.7917 9.91658V18.0833C24.7917 19.9581 24.2604 21.1534 23.4671 21.89C22.6621 22.6375 21.4492 23.0416 19.8333 23.0416H8.16667C6.5508 23.0416 5.33792 22.6375 4.5329 21.89C3.73962 21.1534 3.20834 19.9581 3.20834 18.0833V9.91658Z"
                    stroke="white" />
            </svg>
            <p>support@lemmatech.com</p>
        </div>
        <p class="copyright">© 2024 LemmaTech Solutions</p>
        <div class="social-media">
            <a href="#" class="icon-media"><i class="fa-brands fa-whatsapp"></i></a>
            <a href="#" class="icon-media"><i class="fa-brands fa-instagram"></i></a>
            <a href="#" class="icon-media"><i class="fa-brands fa-linkedin-in"></i></a>
        </div>
    </footer>

    <script src="../js/comum.js"></script>
    <script src="../js/dashboard.js"></script>
</body>

</html>