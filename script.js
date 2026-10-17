// ARCHEON — басты беттің интерактивті функциялары

document.addEventListener("DOMContentLoaded", () => {
  // Бөлімдерге бірқалыпты өту
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
      const id = link.getAttribute("href");
      const target = document.querySelector(id);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // Белсенді мәзір сілтемесін белгілеу
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(item => item.classList.remove("active"));
      link.classList.add("active");
    });
  });

  console.log("ARCHEON сайты іске қосылды!");
});


/* ARCHEON — жәдігерлер галереясы */
(() => {
  const image = document.getElementById("artifactImage");
  const name = document.getElementById("artifactName");
  const description = document.getElementById("artifactDescription");
  const period = document.getElementById("artifactPeriod");
  const counter = document.getElementById("artifactCounter");
  const dotsContainer = document.getElementById("artifactDots");
  const gallery = document.querySelector(".artifact-gallery");

  // Галерея HTML-і осы бетте болмаса, ештеңе орындамайды.
  if (!gallery || !image || !name || !description ||
      !period || !counter || !dotsContainer) return;

  const artifacts = [
    {
      name: "Тас шапқы",
      period: "ПАЛЕОЛИТ",
      description: "Ежелгі адамдар пайдаланған тас еңбек құралы.",
      src: "images/paleolithic-handaxe.jpg",
      alt: "Палеолит дәуірінің тас шапқысы"
    },
    {
      name: "Тас қырғыш",
      period: "ПАЛЕОЛИТ",
      description: "Тері мен басқа материалдарды өңдеуге арналған құрал.",
      src: "images/stone-scraper.jpg",
      alt: "Ежелгі тас қырғыш"
    },
    {
      name: "Тас қалақшалар",
      period: "ПАЛЕОЛИТ",
      description: "Тас өзегінен бөлініп алынған ұсақ әрі жұқа бұйымдар.",
      src: "images/stone-blades.jpg",
      alt: "Археологиялық тас қалақшалар"
    },
    {
      name: "Микролиттер",
      period: "МЕЗОЛИТ",
      description: "Құрама құралдарда пайдаланылуы мүмкін шағын тас бөлшектер.",
      src: "images/mesolithic-microliths.jpg",
      alt: "Мезолит дәуірінің микролиттері"
    },
    {
      name: "Тас жебе ұштықтары",
      period: "МЕЗОЛИТ",
      description: "Аңшылық құралдарымен байланысты археологиялық бұйымдар.",
      src: "images/stone-arrowheads.jpg",
      alt: "Тас жебе ұштықтары"
    },
    {
      name: "Қыш ыдыс",
      period: "НЕОЛИТ",
      description: "Кейбір неолиттік қоғамдарда азық сақтау мен дайындауға қолданылған ыдыс.",
      src: "images/neolithic-pottery.jpg",
      alt: "Неолит дәуірінің қыш ыдысы"
    }
  ];

  let currentIndex = 0;

  function showArtifact(index) {
    currentIndex = (index + artifacts.length) % artifacts.length;
    const item = artifacts[currentIndex];

    image.src = item.src;
    image.alt = item.alt;
    name.textContent = item.name;
    description.textContent = item.description;
    period.textContent = item.period;
    counter.textContent =
      String(currentIndex + 1).padStart(2, "0") +
      " / " + String(artifacts.length).padStart(2, "0");

    [...dotsContainer.children].forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex);
      dot.setAttribute("aria-pressed", String(i === currentIndex));
    });
  }

  dotsContainer.innerHTML = "";

  artifacts.forEach((item, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "artifact-dot";
    dot.setAttribute("aria-label", item.name);
    dot.setAttribute("aria-pressed", "false");
    dot.addEventListener("click", () => showArtifact(index));
    dotsContainer.appendChild(dot);
  });

  gallery.querySelector(".artifact-prev")
    .addEventListener("click", () => showArtifact(currentIndex - 1));

  gallery.querySelector(".artifact-next")
    .addEventListener("click", () => showArtifact(currentIndex + 1));

  showArtifact(0);
})();




document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector(".artifact-gallery");
  if (!gallery) return;

  const image = gallery.querySelector("#artifactImage");
  const name = gallery.querySelector("#artifactName");
  const description = gallery.querySelector("#artifactDescription");
  const period = gallery.querySelector("#artifactPeriod");
  const counter = gallery.querySelector("#artifactCounter");
  const dots = gallery.querySelector("#artifactDots");
  const prev = gallery.querySelector(".artifact-prev");
  const next = gallery.querySelector(".artifact-next");

  if (!image || !name || !description || !period ||
      !counter || !dots || !prev || !next) {
    console.error("Галерея элементтері табылмады!");
    return;
  }

  const artifacts = [
    {
      name: "Тас шапқы",
      period: "ПАЛЕОЛИТ",
      description: "Ежелгі адамдар пайдаланған тас еңбек құралы.",
      src: "https://images.openai.com/static-rsc-4/qtiQvePFuxvqKWAObkrbU6CUasla32psLBMd3d6s7hwoi7aX0Xc2pO4wgb-PK5-EtxWcISITDNy-5-L1oJbRYobOL1DOZ1pZ1rdTwB5dd3_bFJkhxSNexW0FrO4zWSzDQaGGUVBO2NMR-C9YEqfoXSqKQMCsILSfbEBRXblS5to?purpose=inline"
    },
    {
      name: "Тас қырғыш",
      period: "ПАЛЕОЛИТ",
      description: "Тері мен басқа материалдарды өңдеуге арналған құрал.",
      src: "https://images.openai.com/static-rsc-4/dnebvyrhYhdXMTqYvk7wRt7j2xydNM-8sb8d2z2oKDWiOZnIOCzYuzbrBvPUWPV2kNKazG288xHBYwjwDLbDLEeMGU2AKnYzvdoUJLXHZU9pDI7weu8fkn7ZBZDmuYRlSNjvDVJXmn1IxzzM0-tUZM0QdB3-6nOAu8RhdYUucp_P5dDr7XLpNeGTiGdJG1yr?purpose=fullsize"
    },
    {
      name: "Тас қалақшалар",
      period: "ПАЛЕОЛИТ",
      description: "Тас өңдеу барысында алынған жұқа тас бұйымдар.",
      src: "https://images.openai.com/static-rsc-4/a9hChyf2YgUmIAZiZ2AQVeZsNuZYYQPkZI_wBGzMfZg5-lN85HN0g0mAQbxFj5WAP3rRP9iagODi5fjeE9i1OCb_weUinc6GjEoFlJomzGZOQtzx7fb4CUI4ve2ogeHnVhJsmyhOGBQWc3pOrIxX0IDsyCtcQqPV5p81u6XNkcfMrZumTjRbFGL44jH3y5Mm?purpose=fullsize"
    },
    {
      name: "Микролиттер",
      period: "МЕЗОЛИТ",
      description: "Мезолит кешендерінде кездесетін ұсақ тас бұйымдар.",
      src: "https://images.openai.com/static-rsc-4/kM-oDN9Ms8yOIHNsPNdiyw_3jsFFdJ-YULRu8Ya6jfRmnJ40Oro5u2rctw_mJ_nvn5vzcPjW20792ZwnMXdCPt0D5kkSK6tqha9dvXTb1Y2ryStFbH8dGubcxdfJXtXDHPLCYG3F8wzZqzD3JHm4C7fc1XCXSmlExLiagBkfNO4-8LhEi3KcHVe3KTHO_CZ2?purpose=fullsize"
    },
    {
      name: "Тас жебе ұштықтары",
      period: "МЕЗОЛИТ",
      description: "Аңшылық құралдарымен байланысты тас бұйымдар.",
      src: "https://images.openai.com/static-rsc-4/IfAGk3dgs1GN_3H54k-SrCgvn4Hy6qh3pcga6POsPuN3qXQTgVBWDv0oz1Xu7rmDtKw_iiSeg-QK4Q-BV6iP6zM6hRgRE_iSvBXuT9YpzdiWmTyQOhUdi0GXbqSjMbBn5Ed6NcIYi18nnZuLcGIJeKBFBoJ651avK2yXgYB9WaUBNuom4WfzUUq3DNWel8-V?purpose=fullsize"
    },
    {
      name: "Қыш ыдыс",
      period: "НЕОЛИТ",
      description: "Неолит дәуіріндегі кейбір қоғамдарда пайдаланылған ыдыс.",
      src: "https://images.openai.com/static-rsc-4/yUKColFKmsiei4QiyKgp2MCdqF6SYj_OSQ_blyBxNWKYdrmQehY1kMoV9pnRR7nKz3B0YHEoo3JDVKTEM9McUkP99JQ7HAov5rKAFCrogJZm1n_lod1JHn9UqnF87ALveijgH8HN_ydiK4Pa98cuweNGlSpZ1IR1c8EyQNq70Pc?purpose=inline"
    },
    
    {
      name: "Тас шапқыш",
      period: "ПАЛЕОЛИТ",
      description: "Жиегі өңделген малтатастан жасалған ежелгі еңбек құралы.",
      src: "https://images.openai.com/static-rsc-4/bq85UhQ3cV_cxMFffwDzvugV4r8k48Er3JvJOzgnhSfD2c7jKaO4qzDkXPTfiv_wcKiwo5K4kCvB47ABEJoKxlS0Ud6hZGxIxRxS9LzdLXQ55adlY4e--lCmtWjrd4hR5C1GtVkje9OpK3mK1VB2qHHj8NK71S2F5WmIsdRl8xA?purpose=inline"
    },
    {
      name: "Қосжақты тас құрал",
      period: "ПАЛЕОЛИТ",
      description: "Екі бетінен өңделген, әртүрлі еңбек әрекеттерінде пайдаланылған тас бұйым.",
      src: "https://images.openai.com/static-rsc-4/obmWV3McU99fNCFChBc0_hKHQRmdACVhz6MJZ_ZCPR5MkRd_VkseIGwOa7x8lmxH7zXUhE4Ng9KMxm1Z2_oY0PorD1L4J6_OwlDoJm3qx1RrMa02pcufLrG__xHeMDBgzLzwSnqcpBKXXHAlg29EjovCKD4CZZ3jh66UYGRAKwjdrg0ZROuu_epWBupXQAZK?purpose=fullsize"
    },
    {
      name: "Өзектастар (нуклеустар)",
      period: "ПАЛЕОЛИТ",
      description: "Тас жаңқалары мен қалақшаларды бөліп алуға арналған бастапқы тас дайындамалар.",
      src: "https://images.openai.com/static-rsc-4/kTvsjnbIiDKCkn7BABapQUJHCk5JkwSNyNDGB6UdLSUBlq4iWF-NoQep-JMjKfSvDA080AAQM77KQGbCPG4MuxAyYkPCp252I44jUPatkSlgIvpBmbzyLjX-HJ_RRV88r4GIPm9u-HCAkcDHPfYpSYvjxhSymTweEYGDnKRMcpE?purpose=inline"
    },
    {
      name: "Тас тескіш",
      period: "ПАЛЕОЛИТ",
      description: "Тері, сүйек және басқа материалдарды тесуге арналған үшкір тас құрал.",
      src: "https://images.openai.com/static-rsc-4/BlghthdyRbcZYizlu5ZAvMpFuJNdK7NgAzYq0VVqehYrulxb28PKfU_gUEOx70L8FURreGnTfgPpF0wnMBnxVRcf3ZlMgwI-YN6_XYx4OlaOqN4zFCFXyrStTp8KPe59_cmQRa0lfE3kp18AlLAOabzB20rR8hyAOWc7ng0ittkb_Z9i5_NuN2MfwGP4d6cY?purpose=fullsize"
    },
    {
      name: "Тас кескіш",
      period: "ПАЛЕОЛИТ",
      description: "Өткір қыры арқылы материалдарды кесуге және өңдеуге пайдаланылған тас бұйым.",
      src: "https://images.openai.com/static-rsc-4/tGQIleJFlwBmIit84KAw0enfe6mQN2oB3UbQkm53noU4Sk4VKim8yZ18x1hx6mZWAEZLla0Abrt5j6lP3tydQcaBUAR03E1tsrxKWn84RJwam2zKBs6YrVOmYxXk7BarthlnejZOSSo89mIdsX8B65_VcKB0BDKRFK8vViXNLQE?purpose=inline"
    },
    {
      name: "Жылтыратылған тас балта",
      period: "НЕОЛИТ",
      description: "Тегістеу және жылтырату арқылы жасалған еңбек құралы.",
      src: "https://images.openai.com/static-rsc-4/QhDUJtrraxB21nuTG1Fx75B03C52dvHe0VCWlbvkED4r62Tag6ci50GHqAVz6VxPHJO_wT9-2hOfvRo2xaa2Q36m0Ojl4W1ljRS1ZXvOclSkDDSTAxooK_9QbuxrgqvRsO9xHPLeqNBnOkyr0WyXvUEl5J26nxXF-g1sUBRQjfJDgPsv8w7_lxzHBpbmGzhm?purpose=fullsize"
    },
    {
      name: "Тас үккіш",
      period: "НЕОЛИТ",
      description: "Дәндер мен басқа материалдарды үгіп, ұнтақтауға арналған тас құрал.",
      src: "https://images.openai.com/static-rsc-4/F9sy6i6spCv_Vo_oBCeQoOitetO6wPnXwFiFCozdoKq7kR4qgCnAhNnR0F1Z4iL56Yz0omrrV2_OwxSXE_zAU67t5Sp5pyeGkhrRKCnawrEqYh9yziir9256pJXbPZlE9RnN7duHIDv9XrX4B8AoZb02xQV8wc25VzlC9pXDMHdNhTSedLouYC-2irfj2HF5?purpose=fullsize"
    },
    {
      name: "Тас шот",
      period: "НЕОЛИТ",
      description: "Ағаш өңдеу жұмыстарына пайдаланылған тас құрал түрі.",
      src: "https://images.openai.com/static-rsc-4/iyXNoaP40Domsd8m4kwNemQoI4Dde6YcKrS1CsV3-WQT-PlNOuKft9AeXlWDXbDu9Ro_I4qQ_R1LGRwiXswhjxj1Sou-eAo_rTEaLtXE5s2NJG84OOokSKf0MSAh-5dQPCHp1hXaWlVA9UjvfawGA7NyEy9twxa_jjWPT3YClhx01onqQu0ktxWlCGjerzdd?purpose=fullsize"
    },
    {
      name: "Сүйек біз",
      period: "ПАЛЕОЛИТ",
      description: "Сүйектен жасалған, материалдарды тесуге және өңдеуге пайдаланылған құрал.",
      src: "https://images.openai.com/static-rsc-4/ZVyyuebdoMtEmxwHtGKrcA6bWQVn1sH-Sh21wF7Ies4fExj1CHqHanNoXL6j7RFGfanSizWNrjJ9moZ_7THyGdTJEABzOIbjCN_kb1vWVHbP7ahWc_UNdDseTWCTf8RZ4P6U2U84j0oTWA374w9gvPS4SBcGbwZAPwc0WLwFFqcrnRzqKSV5P4BktdbnP9My?purpose=fullsize"
    }

  ];

  let index = 0;

  function renderDots() {
    dots.innerHTML = "";

    artifacts.forEach((artifact, i) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "artifact-dot";
      button.setAttribute("aria-label", artifact.name);
      button.addEventListener("click", () => showArtifact(i));
      dots.appendChild(button);
    });
  }

  function showArtifact(newIndex) {
    index = (newIndex + artifacts.length) % artifacts.length;
    const item = artifacts[index];

    image.src = item.src;
    image.alt = item.name;
    name.textContent = item.name;
    description.textContent = item.description;
    period.textContent = item.period;
    counter.textContent =
      String(index + 1).padStart(2, "0") + " / " +
      String(artifacts.length).padStart(2, "0");

    [...dots.children].forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  prev.addEventListener("click", () => showArtifact(index - 1));
  next.addEventListener("click", () => showArtifact(index + 1));

  renderDots();
  showArtifact(0);
});
