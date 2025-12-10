// Initialize Icons
lucide.createIcons();

// JSON-LD Schema Injection
function injectSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "DefinedTermSet",
        "name": "Diccionario del Habla de Huelva",
        "hasDefinedTerm": [
            {
                "@type": "DefinedTerm",
                "name": "Trochería",
                "description": "Acción disparatada, locura exagerada o trabajo realizado de forma innecesariamente complicada.",
                "inDefinedTermSet": "Habla de Huelva"
            },
            {
                "@type": "DefinedTerm",
                "name": "Malajá",
                "description": "Contracción de 'mala hada'. Mala suerte, infortunio o carácter antipático y sin gracia.",
                "inDefinedTermSet": "Habla de Huelva"
            }
        ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
}

// Run the schema injection
injectSchema();

// Main Diagnosis Function
function calcularDiagnostico(e) {
    e.preventDefault(); // Evitar recarga de página

    // UI Feedback
    const btn = document.getElementById("btn-submit");
    const spinner = document.getElementById("spinner");
    const resultBox = document.getElementById("result-box");

    btn.style.display = "none";
    spinner.style.display = "block";

    // Calcular puntuación
    let trocheriaScore = 0;
    let malajaScore = 0;

    const formData = new FormData(e.target);
    for (let value of formData.values()) {
        if (value === "A") trocheriaScore++;
        if (value === "B") malajaScore++;
    }

    // Simular tiempo de carga (para efecto dramático)
    setTimeout(() => {
        spinner.style.display = "none";
        resultBox.style.display = "block";

        const title = document.getElementById("result-title");
        const desc = document.getElementById("result-desc");

        // Lógica de resultados
        if (trocheriaScore > malajaScore) {
            title.innerText = "Diagnóstico: ¡Tienes Trochería!";
            title.style.color = "var(--secondary)"; // Naranja
            desc.innerText =
                "Has seleccionado más opciones del lado izquierdo. Eres exagerado por naturaleza y haces las cosas a lo grande.";
        } else if (malajaScore > trocheriaScore) {
            title.innerText = "Diagnóstico: ¡Tienes Malajá!";
            title.style.color = "var(--primary-light)"; // Indigo claro
            desc.innerText =
                "Has seleccionado más opciones del lado derecho. Tienes ese 'no sé qué' negativo que te caracteriza.";
        } else {
            title.innerText = "Diagnóstico: Híbrido Caótico";
            title.style.color = "#ffffff";
            desc.innerText =
                "Tienes un equilibrio perfecto entre la trochería y la malajá. Eres impredecible.";
        }

        // Scroll suave hacia el resultado
        resultBox.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 1500); // 1.5 segundos de espera
}

// Attach Event Listener
// Attach Event Listener
const diagnosisForm = document.getElementById("diagnosis-form");
if (diagnosisForm) {
    diagnosisForm.addEventListener("submit", calcularDiagnostico);
}

// Mobile Menu Logic
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}