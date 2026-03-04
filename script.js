const sectionsData = {
    // 1ere LSG
    "LSG_S1": {
        subjects: [
            { name: "Comptabilité", coeff: 2.5, id: "compta" },
            { name: "Microéconomie", coeff: 2.5, id: "micro" },
            { name: "Mathématiques", coeff: 2.5, id: "math" },
            { name: "Principes de Gestion (PG)", coeff: 2.5, id: "pg" },
            { name: "Mathématiques Financières", coeff: 1.5, id: "math_fi" },
            { name: "C2I", coeff: 1.5, id: "c2i" },
            { name: "Anglais", coeff: 1, id: "anglais" },
            { name: "Droit", coeff: 1, id: "droit" }
        ],
        totalCoeff: 15
    },
    "LSG_S2": {
        subjects: [
            { name: "Principes de Gestion II", coeff: 2.5, id: "pg2" },
            { name: "Statistique & Proba", coeff: 2.5, id: "stat_lsg" },
            { name: "Mathématiques II", coeff: 2.5, id: "math2_lsg" },
            { name: "Comptabilité Financière II", coeff: 2.5, id: "compta_fin2" },
            { name: "Macroéconomie", coeff: 1.5, id: "macro" },
            { name: "Création & Gestion Site Web", coeff: 1.5, id: "web_lsg" },
            { name: "Droit des Sociétés Comm.", coeff: 1, id: "droit_soc_lsg" },
            { name: "Anglais II", coeff: 1, id: "eng2_lsg" }
        ],
        totalCoeff: 15
    },

    // 1ere BI
    "BI_S1": {
        subjects: [
            { name: "Algo & Struct. Données", coeff: 3, id: "algo" },
            { name: "Système d'Exploitation", coeff: 1, id: "os" },
            { name: "Système Logique & Arch.", coeff: 1, id: "arch" },
            { name: "Analyse", coeff: 1, id: "analyse" },
            { name: "Statistique & Proba", coeff: 1, id: "stat" },
            { name: "Comptabilité", coeff: 1, id: "compta_bi" },
            { name: "Principe de Gestion", coeff: 1, id: "pg_bi" },
            { name: "Compétences Numériques", coeff: 1, id: "comp_num", type: "ds" },
            { name: "Anglais", coeff: 1, id: "bus_comm", type: "ds" },
            { name: "Développement Personnel", coeff: 1, id: "dev_pers", type: "ds" },

            { name: "Bases de Données", coeff: 1.5, id: "db", type: "ds" }
        ],
        totalCoeff: 15
    },
    "BI_S2": {
        subjects: [
            { name: "Algo & Struct. Données", coeff: 3, id: "algo_s2" },
            { name: "Fondamentaux Réseaux", coeff: 1, id: "reseaux" },
            { name: "Système d'Information", coeff: 1, id: "si_bi" },
            { name: "Algèbre", coeff: 1, id: "algebre" },
            { name: "Logique Mathématique", coeff: 1, id: "logique" },
            { name: "Gestion Financière", coeff: 1, id: "gest_fin" },
            { name: "Système d'Info Comptable", coeff: 1, id: "sic" },
            { name: "Business Communication II", coeff: 1.5, id: "bus_comm2", type: "ds" },
            { name: "Travail Collaboratif", coeff: 1.5, id: "collab", type: "ds" },
            { name: "Compilation", coeff: 1.5, id: "compil", type: "ds" },
            { name: "Programmation Événementielle", coeff: 1.5, id: "prog_event", type: "ds" }
        ],
        totalCoeff: 15
    },

    // 2eme LSG
    "2LSG_S1": {
        subjects: [
            { name: "Management", coeff: 2.5, id: "mgmt" },
            { name: "Comptabilité de Gestion", coeff: 2.5, id: "compta_g" },
            { name: "Marketing", coeff: 2.5, id: "mkt" },
            { name: "Culture Entrepreneuriale", coeff: 1.5, id: "cult_ent" },
            { name: "Statistiques Inférentielles", coeff: 1.5, id: "stat_inf" },
            { name: "Anglais III", coeff: 1, id: "eng3" },
            { name: "Économie Monétaire", coeff: 1, id: "eco_mon" },
            { name: "Conférence", coeff: 2.5, id: "conf", type: "ds" }
        ],
        totalCoeff: 15
    },
    "2LSG_S2": {
        subjects: [
            { name: "Gestion de la Production", coeff: 2.5, id: "gest_prod" },
            { name: "Diagnostic Financier", coeff: 2.5, id: "diag_fin" },
            { name: "GRH", coeff: 2.5, id: "grh" },
            { name: "Business Economics", coeff: 1.5, id: "bus_eco" },
            { name: "Culture Entrepreneuriale II", coeff: 1.5, id: "cult_ent2" },
            { name: "Anglais IV", coeff: 1, id: "eng4" },
            { name: "Droit/Eco Internationale", coeff: 1, id: "droit_eco" },
            { name: "Rapport de Stage", coeff: 2.5, id: "stage", type: "ds" }
        ],
        totalCoeff: 15
    },

    // 2eme LSC
    "2LSC_S1": {
        subjects: [
            { name: "Comptabilité Intermédiaire I", coeff: 2.5, id: "compta_int1" },
            { name: "Comptabilité de Gestion", coeff: 2.5, id: "compta_g_lsc" },
            { name: "TVA", coeff: 2.5, id: "tva" },
            { name: "Finance d'Entreprise", coeff: 1.5, id: "fin_ent" },
            { name: "Droit Sociétés Comm. II", coeff: 1, id: "droit_soc" },
            { name: "Anglais des Affaires I", coeff: 1, id: "eng_aff1" },
            { name: "Projet Professionnel", coeff: 1.5, id: "proj_prof" },
            { name: "Statistiques", coeff: 2.5, id: "stat_lsc", type: "ds" }
        ],
        totalCoeff: 15
    },
    "2LSC_S2": {
        subjects: [
            { name: "Comptabilité Sectorielle", coeff: 1.5, id: "compta_sec" },
            { name: "Comptabilité Intermédiaire II", coeff: 2.5, id: "compta_int2" },
            { name: "Contrôle Interne", coeff: 2.5, id: "ctrl_int" },
            { name: "IRPP/IS", coeff: 2.5, id: "irpp_is" },
            { name: "Système d'Information", coeff: 1.5, id: "si" },
            { name: "Anglais des Affaires II", coeff: 1, id: "eng_aff2" },
            { name: "Droit des Obligations", coeff: 1, id: "droit_obl" },
            { name: "Rapport de Stage", coeff: 2.5, id: "stage_lsc", type: "ds" }
        ],
        totalCoeff: 15
    },

    // 2eme BI
    "2BI_S1": {
        subjects: [
            { name: "Bases de Données", coeff: 1.5, id: "bd" },
            { name: "Conception OO SI", coeff: 1, id: "conception" },
            { name: "Fondamentaux IA", coeff: 1, id: "ia" },
            { name: "Statistiques Inférentielles", coeff: 1, id: "stat_inf_bi" },
            { name: "Économie Numérique", coeff: 1, id: "eco_num" },
            { name: "Programmation OO2", coeff: 1.5, id: "poo2", type: "ds" },
            { name: "Prog. Fonctionnelle (Scala)", coeff: 1.5, id: "scala", type: "ds" },
            { name: "Système d'exploitation II", coeff: 1.5, id: "th_lang", type: "ds" },
            { name: "Prog. Web I", coeff: 1, id: "web1", type: "ds" },
            { name: "Marketing Digital", coeff: 1, id: "mkt_dig", type: "ds" },
            { name: "Éthique et Loi IT", coeff: 1, id: "ethique", type: "ds" },
            { name: "Projet Prof. Personnel", coeff: 2, id: "ppp", type: "ds" }
        ],
        totalCoeff: 15
    },
    "2BI_S2": {
        subjects: [
            { name: "Programmation OO2", coeff: 2, id: "poo2_s2" },
            { name: "Théorie Graphes & RO", coeff: 2, id: "ro" },
            { name: "Architecture Logicielle", coeff: 1.5, id: "arch_log" },
            { name: "Modélisation Multidim.", coeff: 1.5, id: "model_multi" },
            { name: "Analyse & Fouille Données", coeff: 1, id: "fouille" },
            { name: "SGBD", coeff: 1, id: "sgbd" },
            { name: "XML et Services Web", coeff: 1, id: "xml" },
            { name: "Programmation Web II", coeff: 1, id: "web2", type: "ds" },
            { name: "Atelier Génie Logiciel", coeff: 1, id: "agl", type: "ds" },
            { name: "Analyse des Données", coeff: 1, id: "ana_don", type: "ds" },
            { name: "Entrepreneuriat", coeff: 1, id: "entrep", type: "ds" },
            { name: "Leadership", coeff: 1, id: "lead", type: "ds" }
        ],
        totalCoeff: 15
    },

    // 3eme LMGT
    "3LMGT_S1": {
        subjects: [

            { name: "Analyses Quantitatives et Qualitatives", coeff: 2.5, id: "analyses_3lmgt" },
            { name: "Théorie des Organisations", coeff: 2, id: "theo_org" },
            { name: "Management de la Qualité et Certification", coeff: 1.5, id: "mgt_qual" },
            { name: "Management de Projet", coeff: 1.5, id: "mgt_proj" },
            { name: "Business English", coeff: 1, id: "bus_eng_3lmgt_s1" },
            { name: "Business Plan", coeff: 1.5, id: "bus_plan_3lmgt" },
            { name: "Management International", coeff: 1.5, id: "mgt_int" },

            { name: "Négociation et Gestion des Conflits", coeff: 1, id: "nego_conflits" },
            { name: "Études de Cas en Management", coeff: 2.5, id: "etudes_cas_mgt", type: "ds" }
        ],
        totalCoeff: 15
    },
    "3LMGT_S2": {
        subjects: [
            { name: "Management Stratégique", coeff: 2.5, id: "mgt_strat" },
            { name: "Contrôle de Gestion", coeff: 2.5, id: "ctrl_gest_3lmgt_s2" },
            { name: "Système d'Information", coeff: 1.5, id: "si_3lmgt" },
            { name: "Droit du Travail et de Sécurité Sociale", coeff: 1.5, id: "droit_trav_s2" },
            { name: "Management Digital", coeff: 1.5, id: "mgt_digital" },
            { name: "Management de l'Innovation et Entreprenariat", coeff: 1, id: "mgt_innov" },
            { name: "Business English", coeff: 1, id: "bus_eng_3lmgt_s2" },
            { name: "Conduite de Changement", coeff: 1, id: "conduite_chang" },
            { name: "PFE", coeff: 2.5, id: "pfe_3lmgt", type: "pfe" }
        ],
        totalCoeff: 15
    },

    // 3eme LMKG
    "3LMKG_S1": {
        subjects: [
            { name: "Analyse du Comportement du Consommateur", coeff: 2, id: "comport_conso" },
            { name: "Recherche Marketing", coeff: 2, id: "rech_mkt" },
            { name: "Marketing International", coeff: 2, id: "mkt_int" },
            { name: "Stratégie Marketing", coeff: 1.5, id: "strat_mkt" },
            { name: "Business Plan", coeff: 1.5, id: "bus_plan_3lmkg" },
            { name: "Gestion des Points de Vente", coeff: 1.5, id: "gest_pdv" },
            { name: "Gestion des Prix et Produits", coeff: 1, id: "gest_prix_prod" },
            { name: "Business English", coeff: 1, id: "bus_eng_3lmkg_s1" },
            { name: "Études de Cas Marketing", coeff: 2.5, id: "etudes_cas_mkt", type: "ds" }
        ],
        totalCoeff: 15
    },
    "3LMKG_S2": {
        subjects: [
            { name: "Stratégie de Distribution", coeff: 2.5, id: "strat_distrib" },
            { name: "Communication Marketing", coeff: 2, id: "comm_mkt" },
            { name: "Analyse des Données Marketing", coeff: 2, id: "analyse_data_mkt" },
            { name: "Négociation Vente", coeff: 2, id: "nego_vente" },
            { name: "Communication Digitale", coeff: 1.5, id: "comm_digital" },
            { name: "Marketing Digital", coeff: 1.5, id: "mkt_digital_3lmkg" },
            { name: "Business English", coeff: 1, id: "bus_eng_3lmkg_s2" },
            { name: "PFE", coeff: 2.5, id: "pfe_3lmkg", type: "pfe" }
        ],
        totalCoeff: 15
    },

    // 3eme LFIN
    "3LFIN_S1": {
        subjects: [
            { name: "Gestion de Trésorerie", coeff: 2, id: "gest_treso_3lfin" },
            { name: "Économétrie", coeff: 2, id: "econometrie" },
            { name: "Gestion de Portefeuille", coeff: 2, id: "gest_portefeuille" },
            { name: "Finance International", coeff: 1.5, id: "fin_int" },
            { name: "Business Plan", coeff: 1.5, id: "bus_plan_3lfin" },
            { name: "Droit Financier", coeff: 1.5, id: "droit_fin_s1" },
            { name: "Gestion des Institutions Financières", coeff: 1, id: "gest_inst_fin" },
            { name: "Anglais", coeff: 1, id: "anglais_3lfin_s1" },
            { name: "Étude de Cas", coeff: 2.5, id: "etude_cas_fin", type: "ds" }
        ],
        totalCoeff: 15
    },
    "3LFIN_S2": {
        subjects: [
            { name: "Politiques Financières de l'Entreprise", coeff: 2.5, id: "pol_fin_entr" },
            { name: "Ingénierie Financière", coeff: 2.5, id: "ing_fin" },
            { name: "Contrôle de Gestion", coeff: 2.5, id: "ctrl_gest_3lfin" },
            { name: "Fintech", coeff: 1.5, id: "fintech" },
            { name: "Recherche Opérationnelle", coeff: 1.5, id: "rech_oper" },

            { name: "Paiements Internationaux", coeff: 1, id: "paie_int" },
            { name: "Anglais Comptable et Financier", coeff: 1, id: "anglais_compta_fin" },
            { name: "PFE", coeff: 2.5, id: "pfe_3lfin", type: "pfe" }
        ],
        totalCoeff: 15
    },

    // 3eme LSC
    "3LSC_S1": {
        subjects: [
            { name: "Droit d'Enregistrement", coeff: 1, id: "droit_enreg" },
            { name: "Comptabilité Avancée", coeff: 3, id: "compta_avanc" },
            { name: "Anglais", coeff: 1, id: "anglais_3lsc_s1" },
            { name: "Cadre Conceptuel", coeff: 2.5, id: "cadre_concept" },
            { name: "Gestion de Trésorerie", coeff: 1, id: "gest_treso_3lsc" },
            { name: "Contrôle de Gestion", coeff: 2.5, id: "ctrl_gest_3lsc" },
            { name: "Action de Communication", coeff: 1.5, id: "action_comm" },
            { name: "Fiscalité", coeff: 2.5, id: "fiscalite", type: "ds" }
        ],
        totalCoeff: 15
    },
    "3LSC_S2": {
        subjects: [
            { name: "IFRS", coeff: 3, id: "ifrs" },
            { name: "Audit", coeff: 2.5, id: "audit" },
            { name: "Décisions Financières", coeff: 2.5, id: "decis_fin" },
            { name: "PFE", coeff: 2.5, id: "pfe_3lsc", type: "pfe" },
            { name: "Logiciels d'Économétrie", coeff: 1.5, id: "logiciels_econom" },
            { name: "Anglais", coeff: 1, id: "anglais_3lsc_s2" },
            { name: "Finances Publiques", coeff: 1, id: "fin_publiques" },
            { name: "Droit des Moyens de Paiement", coeff: 1, id: "droit_moyens_paie" }
        ],
        totalCoeff: 15
    },

    // 3eme BI
    "3BI_S1": {
        subjects: [
            { name: "Développement .NET", coeff: 1.5, id: "dev_net" },
            { name: "Introduction au Big Data", coeff: 1.5, id: "intro_big_data" },
            { name: "Fondements de la Théorie de Décision", coeff: 1, id: "theo_decision" },
            { name: "Techniques de Prévision", coeff: 1, id: "tech_prevision" },
            { name: "Développement Mobile", coeff: 1, id: "dev_mobile" },
            { name: "Conception TB et Scoring", coeff: 1, id: "conception_tb" },
            { name: "Langages de Programmation Évolués", coeff: 1, id: "lang_prog_evolues" },
            { name: "Programmation Web Avancée", coeff: 1.5, id: "prog_web_avanc" },
            { name: "Gestion de Projet", coeff: 1.5, id: "gest_proj_3bi", type: "ds" },
            { name: "Gestion de la Technologie de l'Information", coeff: 1.5, id: "gest_tech_info", type: "ds" },
            { name: "Psy. et Soc. for Online Media Applications", coeff: 1.5, id: "psy_soc_media", type: "ds" },
            { name: "Fondamentaux de la Sécurité IT", coeff: 1, id: "secu_it", type: "ds" }
        ],
        totalCoeff: 15
    },
    "3BI_S2": {
        subjects: [
            { name: "PFE", coeff: 15, id: "pfe_3bi", type: "pfe" }
        ],
        totalCoeff: 15
    }
};

let currentSection = "";

document.addEventListener('DOMContentLoaded', () => {
    const sectionSelect = document.getElementById('section-select');
    const semesterSelect = document.getElementById('semester-select');

    function update() {
        const sec = sectionSelect.value;
        const sem = semesterSelect.value;
        // Always combine key now, as 1st year is also semesterized
        const key = `${sec}_${sem}`;

        currentSection = key;

        if (sectionsData[key]) {
            renderSubjects(key);
            clearResults();
            document.getElementById('subjects-grid').classList.remove('hidden');
        } else {
            document.getElementById('subjects-grid').innerHTML = '<p class="no-data">Pas de données pour cette sélection.</p>';
            clearResults();
        }
    }

    sectionSelect.addEventListener('change', update);
    semesterSelect.addEventListener('change', update);

    document.getElementById('calculate-btn').addEventListener('click', calculateFinalScore);

    // About Modal Logic
    const aboutBtn = document.getElementById('about-btn');
    const aboutModal = document.getElementById('about-modal');
    const closeModal = document.querySelector('.close-modal-btn');

    if (aboutBtn && aboutModal && closeModal) {
        aboutBtn.addEventListener('click', () => {
            aboutModal.classList.remove('hidden');
        });

        closeModal.addEventListener('click', () => {
            aboutModal.classList.add('hidden');
        });

        window.addEventListener('click', (event) => {
            if (event.target === aboutModal) {
                aboutModal.classList.add('hidden');
            }
        });
    }

    // Theme Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');

    // Check for saved user preference, if any, on load of the website
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        document.body.setAttribute('data-theme', 'dark');
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDark = document.body.getAttribute('data-theme') === 'dark';
            if (isDark) {
                document.body.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
                sunIcon.classList.remove('hidden');
                moonIcon.classList.add('hidden');
            } else {
                document.body.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                sunIcon.classList.add('hidden');
                moonIcon.classList.remove('hidden');
            }
        });
    }

    // Initial call
    update();
});

function renderSubjects(sectionKey) {
    const subjectsGrid = document.getElementById('subjects-grid');
    subjectsGrid.innerHTML = '';

    const data = sectionsData[sectionKey];

    data.subjects.forEach(sub => {
        const card = document.createElement('div');
        card.className = 'subject-card';

        let inputsHTML = '';
        const type = sub.type || 'std';

        if (type === 'std') {
            inputsHTML = `
                <div class="input-wrapper">
                    <label>Contrôle (30%)</label>
                    <input type="number" id="cc-${sub.id}" class="grade-input" min="0" max="20" step="0.25" placeholder="0-20">
                </div>
                <div class="input-wrapper">
                    <label>Examen (70%)</label>
                    <input type="number" id="exam-${sub.id}" class="grade-input" min="0" max="20" step="0.25" placeholder="0-20">
                </div>
            `;
        } else if (type === 'proj') {
            inputsHTML = `
                <div class="input-wrapper">
                    <label>Contrôle (40%)</label>
                    <input type="number" id="cc-${sub.id}" class="grade-input" min="0" max="20" step="0.25" placeholder="0-20">
                </div>
                <div class="input-wrapper">
                    <label>Projet (60%)</label>
                    <input type="number" id="proj-${sub.id}" class="grade-input" min="0" max="20" step="0.25" placeholder="0-20">
                </div>
            `;
        } else if (type === 'ds') {
            inputsHTML = `
                <div class="input-wrapper">
                    <label>Contrôle (20%)</label>
                    <input type="number" id="cc-${sub.id}" class="grade-input" min="0" max="20" step="0.25" placeholder="0-20">
                </div>
                <div class="input-wrapper">
                    <label>DS1 (40%)</label>
                    <input type="number" id="ds1-${sub.id}" class="grade-input" min="0" max="20" step="0.25" placeholder="0-20">
                </div>
                <div class="input-wrapper">
                    <label>DS2 (40%)</label>
                    <input type="number" id="ds2-${sub.id}" class="grade-input" min="0" max="20" step="0.25" placeholder="0-20">
                </div>
            `;
        } else if (type === 'pfe') {
            inputsHTML = `
                <div class="input-wrapper">
                    <label>Moyenne PFE</label>
                    <input type="number" id="pfe-${sub.id}" class="grade-input" min="0" max="20" step="0.25" placeholder="0-20">
                </div>
            `;
        }

        card.innerHTML = `
            <div class="subject-header">
                <span class="subject-name">${sub.name}</span>
                <span class="subject-coeff">x${sub.coeff}</span>
            </div>
            <div class="input-group">
                ${inputsHTML}
            </div>
            <div class="subject-average" id="avg-${sub.id}">
                Moyenne: <span>--</span>
            </div>
        `;
        subjectsGrid.appendChild(card);
    });

    const inputs = document.querySelectorAll('.grade-input');
    inputs.forEach(input => {
        input.addEventListener('input', (e) => {
            validateInput(e.target);
            updateSubjectAverage(e.target);
        });
    });
}

function validateInput(input) {
    const value = parseFloat(input.value);
    if (value < 0 || value > 20) {
        input.classList.add('invalid');
        return false;
    } else {
        input.classList.remove('invalid');
        return true;
    }
}

function updateSubjectAverage(input) {
    if (!input.id.includes('-')) return;

    const subId = input.id.split('-')[1];
    const section = sectionsData[currentSection];
    const sub = section.subjects.find(s => s.id === subId);
    if (!sub) return;

    const type = sub.type || 'std';
    let avg = null;

    if (type === 'std') {
        const cc = parseFloat(document.getElementById(`cc-${subId}`).value);
        const exam = parseFloat(document.getElementById(`exam-${subId}`).value);
        if (isValid(cc) && isValid(exam)) {
            avg = (cc * 0.3) + (exam * 0.7);
        }
    } else if (type === 'proj') {
        const cc = parseFloat(document.getElementById(`cc-${subId}`).value);
        const proj = parseFloat(document.getElementById(`proj-${subId}`).value);
        if (isValid(cc) && isValid(proj)) {
            avg = (cc * 0.4) + (proj * 0.6);
        }
    } else if (type === 'ds') {
        const cc = parseFloat(document.getElementById(`cc-${subId}`).value);
        const ds1 = parseFloat(document.getElementById(`ds1-${subId}`).value);
        const ds2 = parseFloat(document.getElementById(`ds2-${subId}`).value);
        if (isValid(cc) && isValid(ds1) && isValid(ds2)) {
            avg = (cc * 0.2) + (ds1 * 0.4) + (ds2 * 0.4);
        }
    } else if (type === 'pfe') {
        const pfe = parseFloat(document.getElementById(`pfe-${subId}`).value);
        if (isValid(pfe)) {
            avg = pfe;
        }
    }

    const avgDisplay = document.querySelector(`#avg-${subId}`);
    const avgSpan = avgDisplay.querySelector('span');

    if (avg !== null) {
        avgSpan.textContent = avg.toFixed(2);
        avgDisplay.classList.add('visible');
    } else {
        avgSpan.textContent = '--';
        avgDisplay.classList.remove('visible');
    }
}

function isValid(val) {
    return !isNaN(val) && val >= 0 && val <= 20;
}

function calculateFinalScore() {
    if (!sectionsData[currentSection]) return;
    const data = sectionsData[currentSection];
    let totalWeightedScore = 0;
    let allValid = true;
    let detailsHTML = '';

    const resultsBody = document.getElementById('results-body');
    resultsBody.innerHTML = '';

    for (const sub of data.subjects) {
        let moyenne = null;
        let validSub = true;
        const type = sub.type || 'std';

        if (type === 'std') {
            const ccInput = document.getElementById(`cc-${sub.id}`);
            const examInput = document.getElementById(`exam-${sub.id}`);
            const cc = parseFloat(ccInput.value);
            const exam = parseFloat(examInput.value);

            if (!isValid(cc) || !isValid(exam)) {
                validSub = false;
                if (!isValid(cc)) ccInput.classList.add('invalid');
                if (!isValid(exam)) examInput.classList.add('invalid');
            } else {
                moyenne = (cc * 0.3) + (exam * 0.7);
            }
        } else if (type === 'proj') {
            const ccInput = document.getElementById(`cc-${sub.id}`);
            const projInput = document.getElementById(`proj-${sub.id}`);
            const cc = parseFloat(ccInput.value);
            const proj = parseFloat(projInput.value);

            if (!isValid(cc) || !isValid(proj)) {
                validSub = false;
                if (!isValid(cc)) ccInput.classList.add('invalid');
                if (!isValid(proj)) projInput.classList.add('invalid');
            } else {
                moyenne = (cc * 0.4) + (proj * 0.6);
            }
        } else if (type === 'ds') {
            const ccInput = document.getElementById(`cc-${sub.id}`);
            const ds1Input = document.getElementById(`ds1-${sub.id}`);
            const ds2Input = document.getElementById(`ds2-${sub.id}`);
            const cc = parseFloat(ccInput.value);
            const ds1 = parseFloat(ds1Input.value);
            const ds2 = parseFloat(ds2Input.value);

            if (!isValid(cc) || !isValid(ds1) || !isValid(ds2)) {
                validSub = false;
                if (!isValid(cc)) ccInput.classList.add('invalid');
                if (!isValid(ds1)) ds1Input.classList.add('invalid');
                if (!isValid(ds2)) ds2Input.classList.add('invalid');
            } else {
                moyenne = (cc * 0.2) + (ds1 * 0.4) + (ds2 * 0.4);
            }
        } else if (type === 'pfe') {
            const pfeInput = document.getElementById(`pfe-${sub.id}`);
            const pfe = parseFloat(pfeInput.value);

            if (!isValid(pfe)) {
                validSub = false;
                pfeInput.classList.add('invalid');
            } else {
                moyenne = pfe;
            }
        }

        if (validSub && moyenne !== null) {
            const weightedScore = moyenne * sub.coeff;
            totalWeightedScore += weightedScore;

            detailsHTML += `
                <tr>
                    <td>${sub.name}</td>
                    <td><span style="font-weight: bold; color: ${moyenne >= 10 ? '#047857' : '#b91c1c'}">${moyenne.toFixed(2)}</span></td>
                    <td>${sub.coeff}</td>
                </tr>
            `;
        } else {
            allValid = false;
        }
    }

    if (!allValid) {
        alert("Veuillez remplir toutes les notes correctement (entre 0 et 20).");
        return;
    }

    const finalScore = totalWeightedScore / data.totalCoeff;
    displayResults(finalScore, detailsHTML);
}

function displayResults(score, detailsHTML) {
    const resultDisplay = document.getElementById('result-display');
    const finalScoreEl = document.getElementById('final-score');
    const messageEl = document.getElementById('result-message');
    const detailedSection = document.getElementById('detailed-results');
    const resultsBody = document.getElementById('results-body');

    finalScoreEl.textContent = score.toFixed(2);
    resultsBody.innerHTML = detailsHTML;

    messageEl.classList.remove('success', 'failure');
    if (score >= 10) {
        messageEl.textContent = "Félicitations ! Vous avez réussi à l'IHEC Carthage ! 🎉";
        messageEl.classList.add('success');
        document.querySelector('.score-circle').style.borderColor = '#047857';
    } else {
        messageEl.textContent = "Désolé, vous n'avez pas validé. Bon courage pour le contrôle ! 😔";
        messageEl.classList.add('failure');
        document.querySelector('.score-circle').style.borderColor = '#b91c1c';
    }

    resultDisplay.classList.remove('hidden');
    detailedSection.classList.remove('hidden');
    resultDisplay.scrollIntoView({ behavior: 'smooth' });
}

function clearResults() {
    document.getElementById('result-display').classList.add('hidden');
    document.getElementById('detailed-results').classList.add('hidden');
    document.getElementById('final-score').textContent = '0.00';
    document.getElementById('results-body').innerHTML = '';
}
