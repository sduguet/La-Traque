const masterInput = document.querySelector('.master__input');
const masterBtn = document.querySelector('.master__btn');
const masterInfo = document.querySelector('.master__info');

masterBtn.addEventListener('click', onClickBtnMaster);
window.addEventListener('keypress', onKeyPressed);

OnInitialized();
function OnInitialized() {
    const ls = localStorage.getItem('Traque');
    if (!ls) {
        dislpayReadme();
        return;
    }

    switch (ls) {
        case 'numero-de-telephone':
            setup1Enigma();
            break;

        case 'lettre-codee':
            setup2Enigma();
            break;

        case 'gods':
            setup3Enigma();
            break;

        case 'cameras-de-surveillance':
            setup4Enigma();
            break;

        case 'triangulation':
            setup5Enigma();
            break;

        case 'ludotheque':
            setup6Enigma();
            break;

        case 'boite7':
            setup7Enigma();
            break;

        case 'le-contract':
            setup8Enigma();
            break;

        case 'message-inconnu':
            setup9Enigma();
            break;

        case 'ten':
            setup10Enigma();
            break;

        case 'yu-gi-oh':
            setup11Enigma();
            break;

        case 'organisation-redoutee':
            setup12Enigma();
            break;

        case 'en-route':
            setup13Enigma();
            break;

        case 'attaque':
            setup14Enigma();
            break;

        case 'lieu-de-rendez-vous':
            setup15Enigma();
            break;

        default:
            break;
    }
}

function onKeyPressed(e) {
    switch (e.key) {
        case 'Enter':
            onClickBtnMaster();
            break;

        default:
            break;
    }
}


function onClickBtnMaster() {
    const ls = localStorage.getItem('Traque');
    if (!ls) setup1Enigma();

    const v = masterInput.value.toUpperCase();

    switch (ls) {
        case 'numero-de-telephone':
            if (
                v === '235 22 12 65 15' ||
                v === '23522126515' ||
                v === '235.22.12.65.15' ||
                v === '235.2212.6515' ||
                v === '235 2212 6515' ||
                v === '+235 22 12 65 15' ||
                v === '+23522126515' ||
                v === '+235.22.12.65.15' ||
                v === '+235.2212.6515' ||
                v === '+235 2212 6515' ||
                v === '00235 22 12 65 15' ||
                v === '0023522126515' ||
                v === '00235.22.12.65.15' ||
                v === '00235.2212.6515' ||
                v === '00235 2212 6515'
            ) {
                setup2Enigma();
            } else {
                if (
                    v === '22 12 65 15' ||
                    v === '22126515' ||
                    v === '22.12.65.15' ||
                    v === '2212.6515' ||
                    v === '2212 6515'
                ) masterInfo.innerHTML = `Il faudrait aussi renseigner le code du pays`;
                else if (v === '') masterInfo.innerHTML = `Entrez le numéro de Mariam`;
                else masterInfo.innerHTML = `${v} : Mauvais numéro`;

                masterInfo.classList.remove('master__info--cache');
                setTimeout(() => {
                    masterInfo.classList.add('master__info--cache');
                }, 3000);
            }
            break;

        case 'lettre-codee':
            if (v === 'WWW.FRANCKCAMERAS.COM') {
                setup3Enigma();
            } else {
                if (v === '') masterInfo.innerHTML = `Trouver la signification du message codé`;
                else if (
                    v === 'VOICI LE SITE WWW FRANCKCAMERAS COM BYE' ||
                    v === 'VOICI LE SITE WWW.FRANCKCAMERAS.COM BYE'
                ) {
                    masterInfo.innerHTML = `L'adresse du site suffiera`;
                }
                else masterInfo.innerHTML = `Mauvaise réponse`;

                masterInfo.classList.remove('master__info--cache');
                setTimeout(() => {
                    masterInfo.classList.add('master__info--cache');
                }, 3000);
            }
            break;

        case 'gods':
            if (
                v === 'GAÏA 3' ||
                v === '3 GAÏA' ||
                v === 'GAIA 3' ||
                v === '3 GAIA' ||
                v === 'GAÏA3' ||
                v === '3GAÏA' ||
                v === 'GAIA3' ||
                v === '3GAIA'
            ) {
                setup4Enigma();
            } else {
                if (v === '') masterInfo.innerHTML = `Trouver la signification de la suite logique`;
                else masterInfo.innerHTML = `Mauvaise réponse`;

                masterInfo.classList.remove('master__info--cache');
                setTimeout(() => {
                    masterInfo.classList.add('master__info--cache');
                }, 3000);
            }
            break;

        case 'cameras-de-surveillance':
            if (
                v.includes('BORDEAUX') &&
                (v.includes('COULEUR') || v.includes('ROUGE')) &&
                (v.includes('MODÈlE') || v.includes('MODELE') || v.includes('208') || v.includes('PEUGEOT'))
            ) {
                setup5Enigma();
            } else {
                if (v === '') masterInfo.innerHTML = `A quelle planque ils ont bien pu aller ?`;
                else masterInfo.innerHTML = `Mauvaise réponse, ou réponse incomplète`;

                masterInfo.classList.remove('master__info--cache');
                setTimeout(() => {
                    masterInfo.classList.add('master__info--cache');
                }, 3000);
            }
            break;

        case 'triangulation':
            const a = document.querySelector('.antennes');

            if (v === '') masterInfo.innerHTML = ``;
            else masterInfo.innerHTML = `Mauvaise réponse`;

            if ((v.includes('1 PL. PIERRE RENAUDEL') || v.includes('1 PLACE PIERRE RENAUDEL')) && !a.querySelector('.antennes__txt--1')) {
                const p = document.createElement('p');
                p.classList.add('antennes__txt', 'antennes__txt--1');
                p.innerHTML = `
                    <span class="antennes__txt--title">Sainte Croix :</span><br>
                    44.83102286279114 <br>
                    -0.5612626243020682 <br>
                    3380ft
                `;
                a.appendChild(p);

                masterInfo.innerHTML = '';
            } else if (v.includes('4 RUE LEFOL') && !a.querySelector('.antennes__txt--2')) {
                const p = document.createElement('p');
                p.classList.add('antennes__txt', 'antennes__txt--2');
                p.innerHTML = `
                    <span class="antennes__txt--title">Sacré Coeur :</span><br>
                    44.82251119100553 <br>
                    -0.5638276082917373 <br>
                    3245ft
                `;
                a.appendChild(p);

                masterInfo.innerHTML = '';
            }

            if (a.querySelectorAll('.antennes__txt').length === 2 && !document.querySelector('.planque__question')) {
                const p = document.createElement('p');
                p.classList.add('planque__question');
                p.innerHTML = `
                    Le téléphone a borné à l'est de ces 2 antennes, <br>
                    entrer l'adresse où le téléphone a borné.
                `
                document.querySelector('.planque').appendChild(p);
            }

            if (v.includes('40 RUE LAFITEAU') || v.includes('LUDOLUDIK')) {
                setup6Enigma();
            } else {
                masterInfo.classList.remove('master__info--cache');
                setTimeout(() => {
                    masterInfo.classList.add('master__info--cache');
                }, 3000);
            }
            break;

        case 'ludotheque':
            if (v === 'RESAFA') {
                setup7Enigma();
            } else {
                if (v === '') masterInfo.innerHTML = `Quel est ce jeu ?`;
                else masterInfo.innerHTML = `Mauvaise réponse`;

                masterInfo.classList.remove('master__info--cache');
                setTimeout(() => {
                    masterInfo.classList.add('master__info--cache');
                }, 3000);
            }
            break;

        case 'boite7':
            if (v === 'REGARDE SOUS LE TAPIS') {
                setup8Enigma();
            } else {
                if (v === '') masterInfo.innerHTML = `C'est un message codé`;
                else masterInfo.innerHTML = `Mauvaise traduction`;

                masterInfo.classList.remove('master__info--cache');
                setTimeout(() => {
                    masterInfo.classList.add('master__info--cache');
                }, 3000);
            }
            break;

        case 'le-contract':
            if (
                v === 'JULES CESAR' ||
                v === 'JULES CÉSAR' ||
                v === 'CESAR' ||
                v === 'CÉSAR'
            ) {
                setup9Enigma();
            } else {
                if (v === '') masterInfo.innerHTML = `Qui est-ce que ça peut être ?`;
                else masterInfo.innerHTML = `Mauvaise réponse`;

                masterInfo.classList.remove('master__info--cache');
                setTimeout(() => {
                    masterInfo.classList.add('master__info--cache');
                }, 3000);
            }
            break;

        case 'message-inconnu':
            if (v.includes('TERUMI') || v.includes('TERUMÎ')) {
                setup10Enigma();
            } else {
                if (v === '') masterInfo.innerHTML = `Qui est l'expéditeur de ce message ?`;
                else masterInfo.innerHTML = `Mauvaise réponse`;

                masterInfo.classList.remove('master__info--cache');
                setTimeout(() => {
                    masterInfo.classList.add('master__info--cache');
                }, 3000);
            }
            break;

        case 'ten':
            if (
                v.includes('156-0052') &&
                v.includes('SETAGAYA CITY') &&
                v.includes('TOKYO')
            ) {
                setup11Enigma();
            } else {
                if (v === '') masterInfo.innerHTML = `Entrez l'adresse du restaurant`;
                else masterInfo.innerHTML = `Mauvaise réponse`;

                masterInfo.classList.remove('master__info--cache');
                setTimeout(() => {
                    masterInfo.classList.add('master__info--cache');
                }, 3000);
            }
            break;

        case 'yu-gi-oh':
            if (v === 'GODZILLA' || v === 'GODZILA') {
                setup12Enigma();
            } else {
                if (v === '') masterInfo.innerHTML = `A quoi ça peut bien correspondre ?`;
                else masterInfo.innerHTML = `Mauvaise réponse`;

                masterInfo.classList.remove('master__info--cache');
                setTimeout(() => {
                    masterInfo.classList.add('master__info--cache');
                }, 3000);
            }
            break;

        case 'organisation-redoutee':
            if (v === 'ONTAKE' || v === 'MONT ONTAKE') {
                setup13Enigma();
            } else {
                if (v === 'DAUPHIN') masterInfo.innerHTML = `🐬 Bien tenté 😂`;
                else if (v === '') masterInfo.innerHTML = `À quoi ça peut bien correspondre ?`;
                else masterInfo.innerHTML = `Mauvaise réponse`;

                masterInfo.classList.remove('master__info--cache');
                setTimeout(() => {
                    masterInfo.classList.add('master__info--cache');
                }, 3000);
            }
            break;

        case 'en-route':
            if (
                v.includes('Marine Corps Air Station'.toLocaleUpperCase()) ||
                v === 'VMM-262 Career Planner'.toLocaleUpperCase() ||
                v === 'MALS-36 Career Planner'.toLocaleUpperCase() ||
                (v.includes('GINOWAN') && v.includes('OKINAWA 901-2211'))
            ) {
                setup14Enigma();
            } else {
                if (v === '') masterInfo.innerHTML = `Où va se produire l'attaque ?`;
                else masterInfo.innerHTML = `Mauvaise réponse`;

                masterInfo.classList.remove('master__info--cache');
                setTimeout(() => {
                    masterInfo.classList.add('master__info--cache');
                }, 3000);
            }
            break;

        case 'attaque':
            if (v.includes('Nishikigoi Village'.toLocaleUpperCase())) {
                setup15Enigma();
            } else {
                if (v === '') masterInfo.innerHTML = `Où est le lieux de ce prochain rendez-vous ?`;
                else masterInfo.innerHTML = `Mauvaise réponse`;

                masterInfo.classList.remove('master__info--cache');
                setTimeout(() => {
                    masterInfo.classList.add('master__info--cache');
                }, 3000);
            }
            break;

        case 'lieu-de-rendez-vous':
            const img = document.querySelector('.lieurdv__img');
            const lieurdvId = localStorage.getItem('lieurdvId');
            
            switch (lieurdvId) {
                case '160487':
                    if (v.includes('Mandela'.toLocaleUpperCase())) {
                        localStorage.setItem('lieurdvId', '265778');
                        img.src = `./assets/img/lieurdv-265778.png`;

                        masterInput.value = '';
                        masterInfo.innerHTML = `Bonne réponse !`;
                        masterInfo.classList.remove('master__info--cache');
                        setTimeout(() => {
                            masterInfo.classList.add('master__info--cache');
                        }, 3000);
                    } else {
                        if (v === '') masterInfo.innerHTML = `Qui est cette personne ?`;
                        else masterInfo.innerHTML = `Ce n'est pas la bonne personne`;

                        masterInfo.classList.remove('master__info--cache');
                        setTimeout(() => {
                            masterInfo.classList.add('master__info--cache');
                        }, 3000);
                    }
                    break;

                case '265778':
                    if (
                        v.includes('Père Noël'.toLocaleUpperCase()) ||
                        v.includes('Pere Noël'.toLocaleUpperCase()) ||
                        v.includes('Père Noel'.toLocaleUpperCase()) ||
                        v.includes('Pere Noel'.toLocaleUpperCase())
                    ) {
                        localStorage.setItem('lieurdvId', '304709');
                        img.src = `./assets/img/lieurdv-304709.png`;

                        masterInput.value = '';
                        masterInfo.innerHTML = `Bonne réponse !`;
                        masterInfo.classList.remove('master__info--cache');
                        setTimeout(() => {
                            masterInfo.classList.add('master__info--cache');
                        }, 3000);
                    } else {
                        if (v === '') masterInfo.innerHTML = `Qui est cette personne ?`;
                        else masterInfo.innerHTML = `Ce n'est pas la bonne personne`;

                        masterInfo.classList.remove('master__info--cache');
                        setTimeout(() => {
                            masterInfo.classList.add('master__info--cache');
                        }, 3000);
                    }
                    break;

                case '304709':
                    if (v.includes('nintendo'.toLocaleUpperCase())) {
                        localStorage.setItem('lieurdvId', '497141');
                        img.src = `./assets/img/lieurdv-497141.png`;

                        masterInput.value = '';
                        masterInfo.innerHTML = `Bonne réponse !`;
                        masterInfo.classList.remove('master__info--cache');
                        setTimeout(() => {
                            masterInfo.classList.add('master__info--cache');
                        }, 3000);
                    } else {
                        if (v === '') masterInfo.innerHTML = `Quelle est cette société`;
                        else masterInfo.innerHTML = `Ce n'est pas la bonne société`;

                        masterInfo.classList.remove('master__info--cache');
                        setTimeout(() => {
                            masterInfo.classList.add('master__info--cache');
                        }, 3000);
                    }
                    break;

                case '497141':
                    if (v === 'papillon'.toLocaleUpperCase()) {
                        localStorage.setItem('lieurdvId', '534512');
                        img.src = `./assets/img/lieurdv-534512.png`;

                        masterInput.value = '';
                        masterInfo.innerHTML = `Bonne réponse !`;
                        masterInfo.classList.remove('master__info--cache');
                        setTimeout(() => {
                            masterInfo.classList.add('master__info--cache');
                        }, 3000);
                    } else {
                        if (v === '') masterInfo.innerHTML = `Quel est cet animal ?`;
                        else masterInfo.innerHTML = `Ce n'est pas le bon animal`;

                        masterInfo.classList.remove('master__info--cache');
                        setTimeout(() => {
                            masterInfo.classList.add('master__info--cache');
                        }, 3000);
                    }
                    break;

                case '534512':
                    if (v === 'texas'.toLocaleUpperCase()) {
                        localStorage.setItem('lieurdvId', '697444');
                        img.src = `./assets/img/lieurdv-697444.png`;

                        masterInput.value = '';
                        masterInfo.innerHTML = `Bonne réponse !`;
                        masterInfo.classList.remove('master__info--cache');
                        setTimeout(() => {
                            masterInfo.classList.add('master__info--cache');
                        }, 3000);
                    } else {
                        if (v === '') masterInfo.innerHTML = `Où est-ce ?`;
                        else masterInfo.innerHTML = `Ce n'est pas le bon endroit`;

                        masterInfo.classList.remove('master__info--cache');
                        setTimeout(() => {
                            masterInfo.classList.add('master__info--cache');
                        }, 3000);
                    }
                    break;

                case '697444':
                    if (v === 'jfk'.toLocaleUpperCase() || v.includes('Kennedy'.toLocaleUpperCase())) {
                        localStorage.setItem('lieurdvId', '732461');
                        img.src = `./assets/img/lieurdv-732461.png`;

                        masterInput.value = '';
                        masterInfo.innerHTML = `Bonne réponse !`;
                        masterInfo.classList.remove('master__info--cache');
                        setTimeout(() => {
                            masterInfo.classList.add('master__info--cache');
                        }, 3000);
                    } else {
                        if (v === '') masterInfo.innerHTML = `Quel est ce président ?`;
                        else masterInfo.innerHTML = `Mauvais président`;

                        masterInfo.classList.remove('master__info--cache');
                        setTimeout(() => {
                            masterInfo.classList.add('master__info--cache');
                        }, 3000);
                    }
                    break;

                case '732461':
                    if (v === 'atlas'.toLocaleUpperCase()) {
                        localStorage.setItem('lieurdvId', '891547');
                        img.src = `./assets/img/lieurdv-891547.png`;

                        masterInput.value = '';
                        masterInfo.innerHTML = `Bonne réponse !`;
                        masterInfo.classList.remove('master__info--cache');
                        setTimeout(() => {
                            masterInfo.classList.add('master__info--cache');
                        }, 3000);
                    } else {
                        if (v === '') masterInfo.innerHTML = `Qu'est-ce ?`;
                        else masterInfo.innerHTML = `Mauvaise réponse`;

                        masterInfo.classList.remove('master__info--cache');
                        setTimeout(() => {
                            masterInfo.classList.add('master__info--cache');
                        }, 3000);
                    }
                    break;

                case '891547':
                    if (v === 'Djebel Toubkal'.toLocaleUpperCase()) {
                        localStorage.setItem('lieurdvId', '932510');
                        img.src = `./assets/img/lieurdv-932510.png`;

                        masterInput.value = '';
                        masterInfo.innerHTML = `Bonne réponse !`;
                        masterInfo.classList.remove('master__info--cache');
                        setTimeout(() => {
                            masterInfo.classList.add('master__info--cache');
                        }, 3000);
                    } else {
                        if (v === '') masterInfo.innerHTML = `Où est-ce ?`;
                        else masterInfo.innerHTML = `Ce n'est pas le bon endroit`;

                        masterInfo.classList.remove('master__info--cache');
                        setTimeout(() => {
                            masterInfo.classList.add('master__info--cache');
                        }, 3000);
                    }
                    break;

                case '932510':
                    if (v.includes('californie'.toLocaleUpperCase())) {
                        localStorage.setItem('lieurdvId', '1065893');
                        img.src = `./assets/img/lieurdv-1065893.png`;

                        masterInput.value = '';
                        masterInfo.innerHTML = `Bonne réponse !`;
                        masterInfo.classList.remove('master__info--cache');
                        setTimeout(() => {
                            masterInfo.classList.add('master__info--cache');
                        }, 3000);
                    } else {
                        if (v === '') masterInfo.innerHTML = `À qui appartient ce drapeau ?`;
                        else if (v === '@indiceAnimal'.toLocaleUpperCase()) {
                            localStorage.setItem('lieurdvId', '932510-bis');
                            img.src = `./assets/img/lieurdv-932510-bis.png`;
                            masterInput.value = '';
                        }
                        else if (v === '@zoomFeuille'.toLocaleUpperCase()) {
                            document.querySelector('.lieurdv__zoom')?.click();
                            masterInput.value = '';
                        }
                        else masterInfo.innerHTML = `Mauvaise réponse`;

                        masterInfo.classList.remove('master__info--cache');
                        setTimeout(() => {
                            masterInfo.classList.add('master__info--cache');
                        }, 3000);
                    }
                    break;

                case '932510-bis':
                    if (v.includes('californie'.toLocaleUpperCase())) {
                        localStorage.setItem('lieurdvId', '1065893');
                        img.src = `./assets/img/lieurdv-1065893.png`;

                        masterInput.value = '';
                        masterInfo.innerHTML = `Bonne réponse !`;
                        masterInfo.classList.remove('master__info--cache');
                        setTimeout(() => {
                            masterInfo.classList.add('master__info--cache');
                        }, 3000);
                    } else {
                        if (v === '') masterInfo.innerHTML = `À qui appartient ce drapeau ?`;
                        else if (v === '@zoomFeuille'.toLocaleUpperCase()) {
                            document.querySelector('.lieurdv__zoom')?.click();
                            masterInput.value = '';
                        }
                        else if (v === '@indiceAnimal'.toLocaleUpperCase()) {
                            masterInfo.innerHTML = `Indice déjà dévoilé`;

                            masterInfo.classList.remove('master__info--cache');
                            setTimeout(() => {
                                masterInfo.classList.add('master__info--cache');
                            }, 3000);
                        }
                        else masterInfo.innerHTML = `Mauvaise réponse`;

                        masterInfo.classList.remove('master__info--cache');
                        setTimeout(() => {
                            masterInfo.classList.add('master__info--cache');
                        }, 3000);
                    }
                    break;

                case '1065893':
                    if (
                        v.includes('Sequoia Park Zoo'.toLocaleUpperCase()) ||
                        v.includes('3414 W St, Eureka, CA 95503'.toLocaleUpperCase()) 
                    ) {
                        localStorage.setItem('lieurdvId', '1134787');
                        img.src = `./assets/img/lieurdv-1134787.png`;

                        masterInput.value = '';
                        masterInfo.innerHTML = `Bonne réponse !`;
                        masterInfo.classList.remove('master__info--cache');
                        setTimeout(() => {
                            masterInfo.classList.add('master__info--cache');
                        }, 3000);
                    } else {
                        if (v === '') masterInfo.innerHTML = `Quel est cet endroit ?`;
                        else masterInfo.innerHTML = `Ce n'ai pas le bon endroit`;

                        masterInfo.classList.remove('master__info--cache');
                        setTimeout(() => {
                            masterInfo.classList.add('master__info--cache');
                        }, 3000);
                    }
                    break;

                case '1134787':
                    if (
                        v === 'épinette'.toLocaleUpperCase() ||
                        v === 'epinette'.toLocaleUpperCase() 
                    ) {
                        localStorage.setItem('lieurdvId', '1234567');
                        img.src = `./assets/img/lieurdv-1234567.png`;

                        masterInput.value = '';
                        masterInfo.innerHTML = `Bonne réponse !`;
                        masterInfo.classList.remove('master__info--cache');
                        setTimeout(() => {
                            masterInfo.classList.add('master__info--cache');
                        }, 3000);
                    } else {
                        if (v === '') masterInfo.innerHTML = `Quel est ce symbole`;
                        else masterInfo.innerHTML = `Mauvais mot de passe`;

                        masterInfo.classList.remove('master__info--cache');
                        setTimeout(() => {
                            masterInfo.classList.add('master__info--cache');
                        }, 3000);
                    }
                    break;

                case '1234567':
                    if (
                        v === 'Wachovia Center'.toLocaleUpperCase() ||
                        v === 'Wells Fargo Center'.toLocaleUpperCase() 
                    ) {
                        setup16Enigma();
                    } else {
                        if (v === '') masterInfo.innerHTML = `Quel est ce lieu ?`;
                        else masterInfo.innerHTML = `Mauvais endroit`;

                        masterInfo.classList.remove('master__info--cache');
                        setTimeout(() => {
                            masterInfo.classList.add('master__info--cache');
                        }, 3000);
                    }
                    break;

                default:
                    break;
            }
            break;

        case 'stade-us':
            localStorage.removeItem('Traque');
            localStorage.removeItem('lieurdvId');
            break;

        default:
            break;
    }
}

function setup1Enigma() {
    localStorage.setItem('Traque', 'numero-de-telephone');

    const main = document.querySelector('.main');
    main.innerHTML = `
        <div class="fiche filtre">
            <div class="fiche__img"></div>
            <div class="fiche__content">
                <p class="fiche__title">Fiche de renseignements</p>
                <p class="fiche__txt">
                    <span class="bold">Nom:</span> Mariam PEURE
                </p>
                <p class="fiche__txt">
                    <span class="bold">Age:</span> 32 ans
                </p>
                <div class="flag">
                    <span class="bold">Nationalité:</span>
                    <div class="filtre">
                        <img class="flag__img" src="./assets/img/flag.png" alt="">
                    </div>
                </div>
                <div class="phone">
                    <span class="bold">Téléphone:</span>

                    <div class="phone__content">
                        <div class="filtre">
                            <img class="phone__img" src="./assets/img/blason.png" alt="">
                        </div>
                        <div class="separator"></div>
                        <p>(scène - s) - 1</p>
                        <div class="separator"></div>
                        <p class="fiche__angle">
                            angle formé par les<br>
                            aiguilles lorsqu'il est 16h10
                        </p>
                        <div class="separator"></div>
                        <p>Math.floor((π - ϕ) * 10)</p>
                    </div>
                </div>
                <p class="fiche__txt">
                    <span class="bold">Rôle:</span>
                    Bras droit de Franck, spécialisée dans les renseignements.
                </p>
                <p class="fiche__txt fiche__desc">
                    <span class="bold">Description:</span>
                    Mariam est une experte en collecte et analyse d'informations, avec un œil aiguisé pour détecter
                    les détails clés. Toujours discrète et efficace, elle est reconnue pour sa capacité à trouver
                    des réponses même dans les situations les plus complexes. Sa fiabilité et son expertise font
                    d'elle un atout précieux pour toute mission nécessitant des renseignements précis et rapides.
                </p>
            </div>
        </div>
    `;

    masterBtn.querySelector('.text').innerHTML = 'Appeler Mariam';
    masterInput.classList.remove('hide');
}

function setup2Enigma() {
    localStorage.setItem('Traque', 'lettre-codee');

    const main = document.querySelector('.main');
    main.innerHTML = `
        <div class="msg">
            <div class="msg__history">
                <p class="msg__txt">
                    Vous composez le numéro et réussissez à contacter Mariam. D'une voix froide mais posée, elle nous dit de
                    nous méfier de ceux qui nous entourent et que Franck a sûrement dû être trahi par quelqu'un qui lui était
                    proche. Elle nous dit d'être prudent et qu'elle va nous transmettre quelque chose qui pourra nous aider.
                    <br>
                    Quelques minutes plus tard, un pigeon arrive à notre fenêtre avec un message.
                </p>
                <div class="msg__img"></div>
            </div> 
            <div class="lettre">
                <img class="lettre__img" src="./assets/img/timbre.png" alt="">
                <p class="lettre__txt">
                    <span class="lettre__txt--1">HOZKM PX HINP KJP NDMRFSCTQQVNL WBQ DJI</span>
                    <span class="lettre__txt--2">Marie et Paul ont immediatement une cle</span>
                </p>
                <p class="lettre__signature">Mariam.</p>
            </div>
        </div>
    `;

    masterBtn.querySelector('.text').innerHTML = 'Entrer';
    masterInput.classList.remove('hide');
    masterInput.value = '';
}

function setup3Enigma() {
    localStorage.setItem('Traque', 'gods');

    const main = document.querySelector('.main');
    main.innerHTML = `
        <div class="gods">
            <p class="gods__history">
                Vous avez compris que Mariam vous a transmis un site, cependant l'accès y est bloqué par un mot de
                passe. <br>
                On dirait une sorte d'énigme..
            </p>

            <div class="screen">
                <p class="screen__txt">
                    <span class="screen__txt--underline">Les voici dans le désordre:</span>
                    <br>
                    Poséidon, Arès, Ouranos, Zeus, Aphrodite, Hermès, Cronos
                    <br><br>
                    Trouver l'absent ainsi que sa position
                </p>
            </div>
        </div>
    `;

    masterBtn.querySelector('.text').innerHTML = 'Mot de passe';
    masterInput.classList.remove('hide');
    masterInput.value = '';
}

function setup4Enigma() {
    localStorage.setItem('Traque', 'cameras-de-surveillance');

    const main = document.querySelector('.main');
    main.innerHTML = `
        <div class="site">
            <ul class="site-list">
                <li class="site-list__ele">
                    <img class="site-list__img" src="./assets/img/cam-toulouse.png" alt="">
                </li>
                <li class="site-list__ele">
                    <img class="site-list__img" src="./assets/img/cam-bordeaux.png" alt="">
                </li>
                <li class="site-list__ele">
                    <img class="site-list__img" src="./assets/img/cam-lyon.png" alt="">
                </li>
                <li class="site-list__ele">
                    <img class="site-list__img" src="./assets/img/cam-montpellier.png" alt="">
                </li>
            </ul>

            <p class="site__txt">
                Le site répertorie les caméras de surveillance des 4 planques de Franck.
                Tom, un ami a interrogé des intermédiaires qui ont pu travailler avec les assassins de Franck.
                Ils ont seulement pu nous donner les différentes voitures que le gang utilise : <br>
                <span class="site__txt--left">• BH-177-RX</span><br>
                <span class="site__txt--left">• CJ-237-HH</span><br>
                <span class="site__txt--left">• GB-155-NJ</span><br>
                <span class="site__txt--left">• DX-965-MK</span><br>
                <span class="site__txt--left">• GN-736-SN </span><br><br>

                Il est sûr qu'ils ont dû passer dans une planque de Franck.<br>
                Trouver dans quelle planque, rentrer le nom de la ville et les différentes informations qui vous ont permis de trouver.
            </p>
        </div>
    `;

    masterBtn.querySelector('.text').innerHTML = 'Entrer';
    masterInput.classList.remove('hide');
    masterInput.value = '';
}

function setup5Enigma() {
    localStorage.setItem('Traque', 'triangulation');

    const main = document.querySelector('.main');
    main.innerHTML = `
        <div class="planque">
            <p class="planque__history">
                Vous partez fouiller la planque de Bordeaux pour essayer de trouver des traces qui auraient pu être
                laissées. La planque est retournée, sans dessus dessous, et au détour d'une table renversée, vous trouvez
                un téléphone prépayé avec l'écran cassé mais qui fonctionne toujours.
                Vous décidez de l'envoyer à Tom pour qu'il essaye de la tracer et voir où le téléphone a pu borner, on
                pourrait remonter vers ceux qui sont venus ici. <br>
                Tom vous renvoie les infos qui sont ressorties :
            </p>

            <div class="infos">
                <p class="infos__txt">
                    Grêce à ces 2 antennes situées sur des bâtisses divines,
                    on va pouvoir récupérer des informations sur ce téléphone.
                    Entrez les adresses de chaque antenne pour récupérer leurs informations :
                </p>

                <p class="infos__antenne infos__antenne--1">• Appelée Vraie croix, Provençal en a même eu la ferraille rouillée</p>
                <p class="infos__antenne infos__antenne--2">• <img class="infos__rebus" src="./assets/img/rebus.png" alt=""></p>
            </div>

            <div class="antennes"></div>
        </div>
    `;

    masterBtn.querySelector('.text').innerHTML = 'Entrer une adresse';
    masterInput.classList.remove('hide');
    masterInput.value = '';
}

function setup6Enigma() {
    localStorage.setItem('Traque', 'ludotheque');

    const main = document.querySelector('.main');
    main.innerHTML = `
        <div class="ludo">
            <p class="ludo__history">
                Arriver sur place, vous vous rendez compte que c'est une Ludothèque, la Ludothèque Ludoludik. <br>
                Vous entrez et une grande table de jeu attire votre attention.<br>
                5 cartes sont disposées sur la table avec cette phrase :
            </p>
            <p class="ludo__txt">
                “En passant par le plus primé grâce à ces cartes,<br>
                le jeu que vous cherchez se déroule dans le pays entre le monument de la science et celui de la richesse.
                De plus, ce jeu a été produit savoureusement.”
            </p>

            <ul class="ludo-list">
                <li class="ludo-list__ele">
                    <img class="ludo-list__img" src="./assets/img/card1.png" alt="">
                </li>
                <li class="ludo-list__ele">
                    <img class="ludo-list__img" src="./assets/img/card2.png" alt="">
                </li>
                <li class="ludo-list__ele">
                    <img class="ludo-list__img" src="./assets/img/card3.png" alt="">
                </li>
                <li class="ludo-list__ele">
                    <img class="ludo-list__img" src="./assets/img/card4.png" alt="">
                </li>
                <li class="ludo-list__ele">
                    <img class="ludo-list__img" src="./assets/img/card5.png" alt="">
                </li>
            </ul>
        </div>
    `;

    masterBtn.querySelector('.text').innerHTML = 'Valider';
    masterInput.classList.remove('hide');
    masterInput.value = '';
}

function setup7Enigma() {
    localStorage.setItem('Traque', 'boite7');

    const main = document.querySelector('.main');
    main.innerHTML = `
        <div class="boite7">
            <p class="boite7__history">
                Vous vous empressez d'aller chercher la boîte de Resafa. <br>
                Vous l'ouvrez, et vous trouvez ce mot à l'interieur :
            </p>
            <img class="boite7__img" src="./assets/img/papier.png" alt="">
        </div>
    `;

    masterBtn.querySelector('.text').innerHTML = 'Décoder';
    masterInput.classList.remove('hide');
    masterInput.value = '';
}

function setup8Enigma() {
    localStorage.setItem('Traque', 'le-contract');

    const main = document.querySelector('.main');
    main.innerHTML = `
        <div class="contrat">
            <div class="contrat__history">
                <p>
                    Après avoir regardé sous les différents tapis de la ludothèque.
                    Vous trouvez une trappe sous l'un d'entre eux, avec une boîte à l'intérieur.  
                </p>
                <img class="contrat__img" src="./assets/img/contrat.jpeg" alt="">
            </div>

            <div class="contrat__content">
                <p class="contrat__title">
                    Ordre de mission: 
                </p>
                <p class="contrat__txt">
                    M. Franck a en sa possession une personne d'une extrême importance, récupérer la quoi qu'il en coûte.<br><br>
                    Personne à récupérer : <br>
                    Présent 768 milliers de milliards de fois dans un homme lambda, j'ai une espérance de vie de 5730 ans.<br>
                    Mais l'homme que tu dois récupérer n'en possède plus que 597.910.290.000.000 <br><br>

                    Qui Franck a pu enlever ?
                </p>
            </div>
        </div>
    `;

    masterBtn.querySelector('.text').innerHTML = 'Qui est-ce ?';
    masterInput.classList.remove('hide');
    masterInput.value = '';
}

function setup9Enigma() {
    localStorage.setItem('Traque', 'message-inconnu');

    const main = document.querySelector('.main');
    main.innerHTML = `
        <div class="message">
            <p>
                Jules César ? Franck aurait-il récupéré les ossements de Jules César ? <br>
                Avec peut-être un trésor caché, ça serait pour ça qu'ils étaient après lui ?<br><br>
                Quelques heures plus tard, vous recevez un message :
            </p>

            <p class="message__msg">
                J'ai des infos qui pourraient t'être utiles.<br>
                Je ne peux pas te divulguer mon identité distinctement on est sûrement sur écoute,
                mais tu sauras la déchiffrer : <br><br>
                En mélangeant les 2 éléments bornés par ces 2 groupes stellaires,
                j'obtiens un don héréditaire maîtrisé par un maire.<br>
                Qui est ce chef ?<br>
                • (e1, c3, a6, d5, h7, h8)<br>
                • (b2, c4, a5, d7, g5, h3)<br><br>
            </p>
        </div>
    `;

    masterBtn.querySelector('.text').innerHTML = 'Qui est-ce ?';
    masterInput.classList.remove('hide');
    masterInput.value = '';
}

function setup10Enigma() {
    localStorage.setItem('Traque', 'ten');

    const main = document.querySelector('.main');
    main.innerHTML = `
        <div class="ten">
            <p class="ten__txt">
                Terumi mais bien sûr ! Non pas la Mizukage mais bien Nishio TERUMI ! C'est un très bon ami qui vit au Japon, Franck était lui aussi son mentor.
                J'ai pu le côtoyer pendant de longues années avant qu'il ne reparte dans son pays natal.
                Aux dernières nouvelles il était du côté de Tokyo, je vais faire un tour là-bas pour voir ce qu'il a à me dire.
                <br>
                <img class="ten__plane" src="./assets/img/plane.png" alt="">
                <br>
                Un enfant vous attend à la sortie de l'aéroport avec votre nom sur une pancarte.
                Vous vous avancez vers lui, et il vous tent une enveloppe.
                Vous commencez à l'ouvrir et vous constater que le petit a déjà disparu dans la foule.
            </p>

            <section class="aero">
                <div class="aero__banner"></div>
                <p class="aero__1">
                    Je suis la carte qui rassemble toutes les fondations de tout ce qui existe.<br>
                    Tantôt noble, tantôt lourd, voire même hyperactif pour les derniers, je suis une collection de diversité.<br>
                    Un espace ordonné où le chaos n'a pas sa place.
                </p>
                <p class="aero__2">
                    Formant avec les 2 grandes oubliées de <span class="aero__2--1">cette carte</span> les têtes d'un jeu.
                </p>
                <p class="aero__3">
                    L'étendue de cette image t'apportera des infos sur <span class="aero__3--2">moi</span>:
                </p>

                <img class="aero__img" src="./assets/img/image.png" alt="">

                <p class="aero__rdv">Retrouve moi à Tokyo, dans ce restaurant :</p>

                <img class="aero__rebus" src="./assets/img/rebus-2.png" alt="">
            </section>
        </div>
    `;

    masterBtn.querySelector('.text').innerHTML = "Entrer l'adresse";
    masterInput.classList.remove('hide');
    masterInput.value = '';
}

function setup11Enigma() {
    localStorage.setItem('Traque', 'yu-gi-oh');

    const main = document.querySelector('.main');
    main.innerHTML = `
        <div class="yugioh">
            <p class="yugioh__history">
                Vous entrez dans le restaurant.
                Nishio vous attend dans un coin reculé, une tasse de thé devant lui.
                Vous vous asseyez en face de lui, sentant immédiatement la tension dans son regard.
                <br><br>
                <span class="yugioh__history--i">
                    "Gabriel... ça fait plaisir de te revoir. J'ai appris pour Franck, c'est terrible."
                </span>
                <br><br>
                Il jette un coup d'oeil autour de lui, puis sort trois cartes de sa veste et les pose discrètement sur la table.
                <br><br>
                <span class="yugioh__history--i">
                    "Franck m'a contacté peu avant sa mort.
                    Il était paniqué, persuadé qu'on le traquait.
                    Il m'a donné ça, en disant que je devais te les remettre si quelque chose lui arrivait."
                </span>
                <br><br>
                <span class="yugioh__history--i">
                    "Il t'a dit qui le menaçait ?"
                </span>
                <br><br>
                Nishio fait non de la tête, le regard sombre.
                Une chose est sûre... Franck avait découvert quelque chose de dangereux.
            </p>

            <img class="yugioh__poly" src="./assets/img/yugioh.png" alt="">
        </div>
    `;

    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
    });

    masterBtn.querySelector('.text').innerHTML = "Entrer";
    masterInput.classList.remove('hide');
    masterInput.value = '';
}

function setup12Enigma() {
    localStorage.setItem('Traque', 'organisation-redoutee');

    const main = document.querySelector('.main');
    main.innerHTML = `
        <div class="guirlande">
            <p class="guirlande__history">
                Après plusieurs heures de recherche, une vérité éclate : elles sont liées au Gang des Godzilla, une organisation criminelle japonaise redoutée.
                <br><br>
                Nishio ne perd pas une seconde et compose un numéro sur son téléphone.
                L'appel dure un moment avant qu'une voix ne réponde.
                L'échange est bref, tendu. Son contact hésite, manifestement terrifié à l'idée de parler.
                Nishio insiste, rappelant une vieille dette.
                <br><br>
                Un silence s'installe. Puis un soupir à l'autre bout du fil.
                <br><br>
                L'appel se termine sans un mot de plus.
                Quelques secondes plus tard, le téléphone de Nishio vibre.

                <span class="guirlande__history--split">___</span>
            </p>

            <div class="guirlande__group">
                <img src="./assets/img/red.png" alt="">
                <img src="./assets/img/green.png" alt="">
            </div>

            <div class="guirlande__block">
                <article class="guirlande__1">
                    <p class="guirlande__phrase">
                        “ Entre <span class="guirlande__phrase--red">.....</span> et <span class="guirlande__phrase--green">.....</span> ”
                    </p>
                    <p class="guirlande__txt">
                        Ne te perds pas dans le voyage, <br>
                        seul le dernier mot de l'intitulé importe.
                    </p>
                </article>
                <article class="guirlande__2">
                    <p class="guirlande__txt">
                        Opposé mais néanmoins complémentaire, <br>
                        L'un est gouverné par celui qui brille en empruntant la lumière d'un autre, <br>
                        L'autre est régi par celui qui admire l'aube avec un retard d'une heure et dix-neuf minutes.
                    </p>
                </article>
            </div>

            <p class="guirlande__final">
                Au centre de ces parallèles, les diagonales sur ses couleurs t'indiquent un de mes frères. <br>
                Parmi les géants du Japon, je suis le dauphin.
            </p>
        </div>
    `;

    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
    });

    masterBtn.querySelector('.text').innerHTML = "Entrer";
    masterInput.classList.remove('hide');
    masterInput.value = '';
}

function setup13Enigma() {
    localStorage.setItem('Traque', 'en-route');

    const main = document.querySelector('.main');
    main.innerHTML = `
        <div class="route">
            <p class="route__history">
                Tard dans la soirée du 22, vous arrivez à décoder les informations transmises par le contact de Nishio.
                Épuisé, vous décidez de faire une petite sieste et d'y aller demain à la première heure.
                <br><br>
                <span class="route__history--bold">
                    En route pour le Mont Ontake !<br>
                </span>
                Arrivé sur place, vous arrivez à trouver l'endroit où se cache le Gang des Godzilla.
                Un grand entrepôt, mais à votre grand étonnant, l'entrepôt est vide.
                On dirait qu'il a été quitté précipitamment et surtout récemment.
                Comme s'ils étaient au courant qu'on allait venir.
                <br><br>
                Vous rentrez dans le premier bureau du hangar que vous voyez, et vous trouvez ce plan :
            </p>

            <img class="route__img" src="./assets/img/en-route.png" alt="">

            <p class="route__question">
                <span class="route__question--bold">
                    On attaquera l'endroit entre ces 2 lieux le 23 mars à 16h !
                </span><br><br>
                "Mais..<br>
                le 23,..<br><br>
                C'EST AUJOURD'HUI !"
            </p>
        </div>
    `;

    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
    });

    masterBtn.querySelector('.text').innerHTML = "Entrez le lieu de l'attaque";
    masterInput.classList.remove('hide');
    masterInput.value = '';
}

function setup14Enigma() {
    localStorage.setItem('Traque', 'attaque');

    const main = document.querySelector('.main');
    main.innerHTML = `
        <div class="attaque">
            <p class="attaque__history">
                Bordel ! Il est déjà 13h30 !!<br><br>
                Vous sautez dans le jet et foncez vers Okinawa.
                Les Godzillas n'ont pas fui l'entrepôt : ils préparent une attaque contre la Marine Corps Air Station.
                Il faut les arrêter.
                <br><br>
                À peine atterri, vous infiltrez un vieux hangar.
                À l'intérieur, une dizaine d'hommes chargent des caisses dans des véhicules.
                Pas le temps d'hésiter. Vous ouvrez le feu. La première rafale abat un ennemi.
                Les autres ripostent aussitôt, les balles sifflent autour de vous.
                Nishio plonge derrière des caisses et élimine un tireur d'une balle nette.
                <br><br>
                Alors que vous rechargez, un des Godzillas vous met en joue.
                Trop tard pour esquiver. Un coup de feu éclate… mais ce n'est pas le sien.
                Il s'effondre, une balle en plein crâne. Derrière lui, un autre membre du gang,
                arme encore fumante. Il vous fixe un instant et vous dit de fuir !
                Vous repartez tous les 3 dans le jet. Et vous lui demandez pourquoi il a fait ça.
                <br><br>
                Après de longues explications, vous comprenez que c'est un agent infiltré,
                et qu'il connaît très bien Franck. Il vous donne un plan qu'il a pris en photo,
                qui donne un rendez-vous entre le gang de Godzilla et un de leurs informateurs.
            </p>

            <img class="attaque__img" src="./assets/img/attaque.png" alt="">

            <p class="attaque__question">
                Trouver le lieu du prochain rendez-vous.
            </p>
        </div>
    `;

    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
    });

    masterBtn.querySelector('.text').innerHTML = "Entrez le lieu";
    masterInput.classList.remove('hide');
    masterInput.value = '';
}

function setup15Enigma() {
    localStorage.setItem('Traque', 'lieu-de-rendez-vous');

    const main = document.querySelector('.main');
    main.innerHTML = `
        <div class="lieurdv">
            <p class="lieurdv__history">
                Vous vous dirigez vers le village des carpes Koï pour y retrouver un des informateurs du gang des Godzilla.
            </p>

            <img class="lieurdv__img" src="./assets/img/lieurdv-160487.png" alt="">

            <a class="lieurdv__zoom" href="./assets/img/zoomFeuille.png" target="_blank"></a>
        </div>
    `;

    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
    });

    masterBtn.querySelector('.text').innerHTML = "Entrer";
    masterInput.classList.remove('hide');
    masterInput.value = '';

    const lieurdvId = localStorage.getItem('lieurdvId')
    if (lieurdvId) {
        const img = document.querySelector('.lieurdv__img');
        img.src = `./assets/img/lieurdv-${lieurdvId}.png`;
    } else {
        localStorage.setItem('lieurdvId', '160487');
    }
}

function setup16Enigma() {
    localStorage.setItem('Traque', 'stade-us');

    const main = document.querySelector('.main');
    main.innerHTML = `
        <div class="stade">
            <p class="stade__history">
                Bravo !!!
            </p>
            <p class="stade__history">
                Tu as résolu toutes les énigmes, merci d'avoir joué !
            </p>
        </div>
    `;

    masterBtn.querySelector('.text').innerHTML = "♥ GG ♥";
    masterInput.classList.add('hide');
    masterInput.value = '';
}

function dislpayReadme() {
    const readme = document.querySelector('.readme');
    readme.classList.remove('hide');
    readme.addEventListener('click', closeReadme);
}

function closeReadme(e) {
    if (!e.target.classList.contains('readme')) return;

    const readme = document.querySelector('.readme');
    readme.classList.add('hide');
}