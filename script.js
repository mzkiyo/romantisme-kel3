/**
 * 1. SATU OBJEK DATA BESAR (MENAMPUNG SEMUA MATERI & MEDIA)
 */
const PRESENTATION_DATA = {
  meta: {
    title: "Seni Lukis Romantisme",
    subtitle: "Eksplorasi Emosi, Drama, dan Keagungan Alam dalam Karya Maestro Nasional & Internasional",
    team: [
      { name: "M. Salman", role: "Anggota Tim", photo: "assets/m-salman.jpg", fallback: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80" },
      { name: "M. Marcell", role: "Anggota Tim", photo: "assets/m-marcell.jpg", fallback: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" },
      { name: "Charlie", role: "Anggota Tim", photo: "assets/charlie.jpg", fallback: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80" }
    ],
    agenda: [
      "01. Pengertian Seni Lukis Romantisme",
      "02. Latar Belakang Kemunculan",
      "03. 5 Tokoh Romantisme Nasional + Karya",
      "04. Transisi & 5 Tokoh Internasional + Karya",
      "05. 3 Pertanyaan Diskusi Audiens",
      "06. Penutup & Kesimpulan"
    ]
  },

  content: {
    pengertian: {
      definisi: "Seni Lukis Romantisme adalah aliran seni rupa yang mengutamakan ekspresi emosi mendalam, kebebasan imajinasi, drama pementasan, serta keagungan alam liar. Lahir sebagai gerakan perlawanan terhadap Neoklasisisme yang dinilai kaku dan terlalu terikat rasio.",
      poinPenting: [
        { judul: "Emosional & Dramatis", ket: "Menekankan gejolak perasaan seperti ketakutan, patriotisme, keharuan, dan drama." },
        { judul: "The Sublime", ket: "Menggambarkan dahsyatnya alam liar di mana manusia sangat kerdil di hadapannya." },
        { judul: "Kebebasan Ekspresi", ket: "Seniman bebas mengekspresikan intuisi pribadi tanpa terikat pakem akademis." }
      ]
    },
    latarBelakang: [
      { judul: "1. Penolakan Neoklasisisme", ket: "Reaksi atas aliran Neoklasik akhir abad ke-18 yang kaku, teratur, dan rasional murni yang dinilai mematikan gejolak emosi jiwa manusia." },
      { judul: "2. Pengaruh Revolusi Sosial", ket: "Revolusi Industri membawa era mekanis yang dingin, sedangkan Revolusi Prancis membakar semangat perlawanan, drama politik, dan kebebasan individu." }
    ],
    rangkumanNasional: "Meskipun sejarah mencatat Raden Saleh sebagai satu-satunya maestro Romantisme murni abad ke-19 di Indonesia, para pelukis era Mooi Indie (Basoeki Abdullah, Abdullah Suriosubroto, Wakidi, dan Mas Pirngadie) tetap membawa elemen Romantisme lewat dramatisasi mitologi, puitisnya lanskap gunung/pesisir, dan eksotisme alam.",
    rangkumanInternasional: "Tokoh Eropa seperti Delacroix, Goya, dan Géricault menyoroti gejolak emosi ekstrem manusia (perang, revolusi, perjuangan hidup), sementara Friedrich dan Turner mengeksplorasi misteri dan keagungan alam liar yang dahsyat.",
    pertanyaan: [
      "Menurut kalian, apa perbedaan emosional paling mendasar antara lukisan aliran Neoklasik dan Romantisme?",
      "Mengapa lukisan Raden Saleh 'Penangkapan Pangeran Diponegoro' dianggap sebagai simbol perlawanan terhadap penjajahan?",
      "Antara Romantisme Drama Perjuangan (Delacroix) dan Romantisme Misteri Alam (Friedrich), gaya mana yang lebih menyentuh emosi kalian?"
    ]
  },

  nationalArtists: [
    {
      name: "Raden Saleh Syarif Bustaman",
      artworkTitle: "Penangkapan Pangeran Diponegoro (1857)",
      artistPhoto: "assets/raden-saleh-artist.jpg",
      artistPhotoOnline: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Raden_Saleh.jpg/440px-Raden_Saleh.jpg",
      artworkImg: "assets/penangkapan-pangeran-diponegoro.jpg",
      artworkImgOnline: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Raden_Saleh_-_Pangeran_Diponegoro.jpg/1280px-Raden_Saleh_-_Pangeran_Diponegoro.jpg",
      bio: "Pelopor seni lukis modern Indonesia dan satu-satunya maestro Romantisme sejati abad ke-19 asal Asia yang diakui secara internasional.",
      desc: "Melukiskan peristiwa pengkhianatan penangkapan Pangeran Diponegoro oleh Belanda pada tahun 1830. Dipenuhi gestur dramatis, ekspresi martabat perlawanan, dan pesan politik tersirat."
    },
    {
      name: "Basoeki Abdullah",
      artworkTitle: "Nyai Roro Kidul",
      artistPhoto: "assets/basoeki-abdullah-artist.jpg",
      artistPhotoOnline: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Basoeki_Abdullah_1955.jpg/440px-Basoeki_Abdullah_1955.jpg",
      artworkImg: "assets/nyai-roro-kidul.jpg",
      artworkImgOnline: "https://upload.wikimedia.org/wikipedia/id/thumb/7/70/Nyai_Roro_Kidul_by_Basoeki_Abdullah.jpg/800px-Nyai_Roro_Kidul_by_Basoeki_Abdullah.jpg",
      bio: "Maestro Mooi Indie bernuansa Realistis-Romantis yang terkenal dengan pencahayaan molek dan pementasan teater pada kanvasnya.",
      desc: "Menggambarkan dewi penguasa Laut Selatan dengan estetika memukau, dikelilingi gelombang ombak dramatis dan suasana magis yang menyentuh emosi."
    },
    {
      name: "Abdullah Suriosubroto",
      artworkTitle: "Pemandangan Gunung dan Sawah",
      artistPhoto: "assets/abdullah-suriosubroto-artist.jpg",
      artistPhotoOnline: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Abdullah_Suriosubroto.jpg/440px-Abdullah_Suriosubroto.jpg",
      artworkImg: "assets/pemandangan-gunung-sawah.jpg",
      artworkImgOnline: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Abdullah_Suriosubroto_-_Pemandangan_Sawah.jpg/1280px-Abdullah_Suriosubroto_-_Pemandangan_Sawah.jpg",
      bio: "Ayah dari Basoeki Abdullah dan pelopor seni lukis pemandangan Indonesia yang menempuh pendidikan seni di Belanda.",
      desc: "Membawa elemen 'The Sublime Nature'. Lukisan ini menonjolkan keagungan, puitisnya cahaya fajar, dan kedamaian lanskap Nusantara."
    },
    {
      name: "Wakidi",
      artworkTitle: "Ngarai Sianok",
      artistPhoto: "assets/wakidi-artist.jpg",
      artistPhotoOnline: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Wakidi_portrait.jpg/440px-Wakidi_portrait.jpg",
      artworkImg: "assets/ngarai-sianok.jpg",
      artworkImgOnline: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Ngarai_Sianok_Wakidi.jpg/1280px-Ngarai_Sianok_Wakidi.jpg",
      bio: "Pelukis legendaris asal Minangkabau yang konsisten mengeksplorasi keindahan pesona alam Sumatra Barat.",
      desc: "Mengabadikan tebing terjal Ngarai Sianok yang megah diselimuti kabut dan gradasi warna melankolis yang puitis."
    },
    {
      name: "Mas Pirngadie",
      artworkTitle: "Pantai Pelabuhan Ratu",
      artistPhoto: "assets/mas-pirngadie-artist.jpg",
      artistPhotoOnline: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Mas_Pirngadie.jpg/440px-Mas_Pirngadie.jpg",
      artworkImg: "assets/pantai-pelabuhan-ratu.jpg",
      artworkImgOnline: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Mas_Pirngadie_-_Coast_of_Pelabuhan_Ratu.jpg/1280px-Mas_Pirngadie_-_Coast_of_Pelabuhan_Ratu.jpg",
      bio: "Pelukis Mooi Indie sezaman Abdullah Suriosubroto yang juga aktif membuat ilustrasi etnografi dan pemandangan alam eksotis.",
      desc: "Merekam pemandangan Pantai Pelabuhan Ratu dengan ombak bergelora dan deburan pencahayaan alami yang memancarkan romantisme eksotisme pesisir."
    }
  ],

  internationalArtists: [
    {
      name: "Eugène Delacroix (Prancis)",
      artworkTitle: "Liberty Leading the People (1830)",
      artistPhoto: "assets/eugene-delacroix-artist.jpg",
      artistPhotoOnline: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Eug%C3%A8ne_Delacroix_by_Th%C3%A9odule_Dev%C3%A9ria.jpg/440px-Eug%C3%A8ne_Delacroix_by_Th%C3%A9odule_Dev%C3%A9ria.jpg",
      artworkImg: "assets/liberty-leading-the-people.jpg",
      artworkImgOnline: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg/1280px-Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg",
      bio: "Raja Romantisme Prancis yang memelopori pemberontakan estetika melawan Neoklasisme kaku lewat sapuan kuas emosional.",
      desc: "Simbol Revolusi Prancis 1830. Menggambarkan sosok alegori 'Kebebasan' memimpin rakyat di atas medan pertempuran dramatis."
    },
    {
      name: "Caspar David Friedrich (Jerman)",
      artworkTitle: "Wanderer above the Sea of Fog (1818)",
      artistPhoto: "assets/caspar-david-friedrich-artist.jpg",
      artistPhotoOnline: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Caspar_David_Friedrich_by_Gerhard_von_K%C3%BCgelgen.jpg/440px-Caspar_David_Friedrich_by_Gerhard_von_K%C3%BCgelgen.jpg",
      artworkImg: "assets/wanderer-above-the-sea-of-fog.jpg",
      artworkImgOnline: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg/1280px-Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg",
      bio: "Pelopor Romantisme Jerman yang berfokus pada misteri alam, lanskap kontemplatif, dan kesendirian puitis.",
      desc: "Menggambarkan pria berdiri di atas puncak tebing membelakangi penonton, menatap lautan kabut. Masterpiece simbol kontemplasi jiwa."
    },
    {
      name: "Francisco Goya (Spanyol)",
      artworkTitle: "The Third of May 1808 (1814)",
      artistPhoto: "assets/francisco-goya-artist.jpg",
      artistPhotoOnline: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Vicente_L%C3%B3pez_Porta%C3%B1a_-_El_pintor_Francisco_de_Goya.jpg/440px-Vicente_L%C3%B3pez_Porta%C3%B1a_-_El_pintor_Francisco_de_Goya.jpg",
      artworkImg: "assets/the-third-of-may-1808.jpg",
      artworkImgOnline: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/El_tres_de_mayo_de_1808_en_Madrid%2C_by_Francisco_de_Goya%2C_from_Prado_in_Google_Earth.jpg/1280px-El_tres_de_mayo_de_1808_en_Madrid%2C_by_Francisco_de_Goya%2C_from_Prado_in_Google_Earth.jpg",
      bio: "Maestro Spanyol yang merekam kegelapan, ketakutan, dan tragedi kemanusiaan dengan pencahayaan kontras teatrikal.",
      desc: "Melukiskan eksekusi pejuang Spanyol oleh tentara Napoleon. Menonjolkan horor perang dan penderitaan emosional korban."
    },
    {
      name: "J.M.W. Turner (Inggris)",
      artworkTitle: "The Slave Ship (1840)",
      artistPhoto: "assets/jmw-turner-artist.jpg",
      artistPhotoOnline: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/John_Jackson_-_Portrait_of_Joseph_Mallord_William_Turner.jpg/440px-John_Jackson_-_Portrait_of_Joseph_Mallord_William_Turner.jpg",
      artworkImg: "assets/the-slave-ship.jpg",
      artworkImgOnline: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Slave-ship-1840-turner.jpg/1280px-Slave-ship-1840-turner.jpg",
      bio: "Dijuluki 'The Painter of Light', maestro lanskap Inggris yang memelopori penggambaran badai dan ombak secara ekspresif.",
      desc: "Kapal perbudakan di tengah kecamuk badai dahsyat. Permainan warna membara menyampaikan tragedi kemanusiaan dan keganasan alam."
    },
    {
      name: "Théodore Géricault (Prancis)",
      artworkTitle: "The Raft of the Medusa (1819)",
      artistPhoto: "assets/theodore-gericault-artist.jpg",
      artistPhotoOnline: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Th%C3%A9odore_G%C3%A9ricault_by_Alexandre-Marie_Colin.jpg/440px-Th%C3%A9odore_G%C3%A9ricault_by_Alexandre-Marie_Colin.jpg",
      artworkImg: "assets/the-raft-of-the-medusa.jpg",
      artworkImgOnline: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/JEAN_LOUIS_TH%C3%89ODORE_G%C3%89RICAULT_-_La_Balsa_de_la_Medusa_%28Museo_del_Louvre%2C_1818-1819%29.jpg/1280px-JEAN_LOUIS_TH%C3%89ODORE_G%C3%89RICAULT_-_La_Balsa_de_la_Medusa_%28Museo_del_Louvre%2C_1818-1819%29.jpg",
      bio: "Pelukis muda Romantisme Prancis yang mengguncang dunia seni lewat lukisan peristiwa tragis realitas manusia secara emosional.",
      desc: "Korban selamat kapal karam Medusa terombang-ambing di atas rakit. Menyoroti penderitaan, histeria, dan harapan emosional manusia."
    }
  ]
};

/**
 * 2. STATE MANAGEMENT & SLIDES GENERATOR
 */
let currentSlideIndex = 0;

function buildSlidesArray() {
  const data = PRESENTATION_DATA;

  return [
    // Slide 1: Judul
    {
      render: () => `
        <div class="slide">
          <span class="badge">Apresiasi Seni Rupa</span>
          <h1 class="hero-title">${data.meta.title}</h1>
          <p class="subtitle">${data.meta.subtitle}</p>
          <div style="margin-top: 30px; color: var(--accent-color); font-weight: 600; font-size: 0.9rem;">Swipe HP / Gunakan Panah Keyboard untuk Navigasi</div>
        </div>
      `
    },

    // Slide 2: Tim
    {
      render: () => `
        <div class="slide">
          <span class="badge">Kelompok Presentasi</span>
          <h2 class="slide-title">Tim Penyusun</h2>
          <div class="team-grid">
            ${data.meta.team.map(m => `
              <div class="team-card">
                <div class="team-photo-frame">
                  <img src="${m.photo}" alt="${m.name}" onerror="this.src='${m.fallback}'">
                </div>
                <h3>${m.name}</h3>
                <p style="color: var(--text-muted); font-size: 0.85rem;">${m.role}</p>
              </div>
            `).join('')}
          </div>
        </div>
      `
    },

    // Slide 3: Agenda
    {
      render: () => `
        <div class="slide">
          <span class="badge">Agenda</span>
          <h2 class="slide-title">Alur Pembahasan</h2>
          <div class="agenda-grid">
            ${data.meta.agenda.map(item => `
              <div class="agenda-card">
                <span class="agenda-num">&bull;</span>
                <div>${item}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `
    },

    // Slide 4: Pengertian
    {
      render: () => `
        <div class="slide">
          <span class="badge">Konsep Utama</span>
          <h2 class="slide-title">Pengertian Seni Lukis Romantisme</h2>
          <div class="card-box" style="margin-top: 16px;">
            <p style="font-size: 1.1rem; line-height: 1.6; margin-bottom: 16px;">${data.content.pengertian.definisi}</p>
            <ul style="padding-left: 20px; color: var(--text-muted); line-height: 1.8;">
              ${data.content.pengertian.poinPenting.map(p => `
                <li><strong style="color: var(--text-main);">${p.judul}:</strong>${p.ket}</li>
              `).join('')}
            </ul>
          </div>
        </div>
      `
    },

    // Slide 5: Latar Belakang
    {
      render: () => `
        <div class="slide">
          <span class="badge">Sejarah</span>
          <h2 class="slide-title">Latar Belakang Kemunculan</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; width: 100%; max-width: 900px; margin-top: 16px;">
            ${data.content.latarBelakang.map(lb => `
              <div class="card-box">
                <h3 style="color: var(--accent-color); margin-bottom: 8px;">${lb.judul}</h3>
                <p style="color: var(--text-muted); line-height: 1.6; font-size: 0.95rem;">${lb.ket}</p>
              </div>
            `).join('')}
          </div>
        </div>
      `
    },

    // Slide 6 - 10: Tokoh Nasional 1 - 5
    ...data.nationalArtists.map((item, idx) => ({
      render: () => `
        <div class="slide">
          <div class="artist-dual-layout">
            <div class="media-column">
              <div class="media-card artist-port">
                <img src="${item.artistPhoto}" class="artist-avatar" alt="${item.name}" onerror="this.src='${item.artistPhotoOnline}'">
                <div>
                  <span class="badge" style="margin:0; font-size:0.7rem;">Tokoh Nasional #${idx + 1}</span>
                  <h3 style="font-size: 1rem; margin-top: 4px;">${item.name}</h3>
                </div>
              </div>
              <div class="media-card">
                <div class="artwork-frame">
                  <img src="${item.artworkImg}" alt="${item.artworkTitle}" onerror="this.src='${item.artworkImgOnline}'">
                </div>
                <p class="media-caption">Karya: ${item.artworkTitle}</p>
              </div>
            </div>
            <div>
              <h2 class="slide-title">${item.name}</h2>
              <p style="color: var(--accent-color); font-weight: 600; font-style: italic;">"${item.artworkTitle}"</p>
              <div class="desc-card">
                <p><strong>Profil Tokoh:</strong> ${item.bio}</p>
                <p><strong>Ulasan Karya:</strong> ${item.desc}</p>
              </div>
            </div>
          </div>
        </div>
      `
    })),

    // Slide 11: Rangkuman Nasional
    {
      render: () => `
        <div class="slide">
          <span class="badge">Rangkuman</span>
          <h2 class="slide-title">Karakteristik Romantisme Nasional</h2>
          <div class="card-box" style="margin-top: 16px;">
            <p style="font-size: 1.1rem; line-height: 1.7;">${data.content.rangkumanNasional}</p>
          </div>
        </div>
      `
    },

    // Slide 12: Transisi Internasional
    {
      render: () => `
        <div class="slide">
          <span class="badge">Bagian Kedua</span>
          <h1 class="hero-title">Tokoh Romantisme Internasional</h1>
          <p class="subtitle">Menjelajahi Karya Raksasa Romantisme Eropa Abad ke-18 sampai 19</p>
        </div>
      `
    },

    // Slide 13 - 17: Tokoh Internasional 1 - 5
    ...data.internationalArtists.map((item, idx) => ({
      render: () => `
        <div class="slide">
          <div class="artist-dual-layout">
            <div class="media-column">
              <div class="media-card artist-port">
                <img src="${item.artistPhoto}" class="artist-avatar" alt="${item.name}" onerror="this.src='${item.artistPhotoOnline}'">
                <div>
                  <span class="badge" style="margin:0; font-size:0.7rem;">Tokoh Internasional #${idx + 1}</span>
                  <h3 style="font-size: 1rem; margin-top: 4px;">${item.name}</h3>
                </div>
              </div>
              <div class="media-card">
                <div class="artwork-frame">
                  <img src="${item.artworkImg}" alt="${item.artworkTitle}" onerror="this.src='${item.artworkImgOnline}'">
                </div>
                <p class="media-caption">Karya: ${item.artworkTitle}</p>
              </div>
            </div>
            <div>
              <h2 class="slide-title">${item.name}</h2>
              <p style="color: var(--accent-color); font-weight: 600; font-style: italic;">"${item.artworkTitle}"</p>
              <div class="desc-card">
                <p><strong>Profil Tokoh:</strong> ${item.bio}</p>
                <p><strong>Ulasan Karya:</strong> ${item.desc}</p>
              </div>
            </div>
          </div>
        </div>
      `
    })),

    // Slide 18: Rangkuman Internasional
    {
      render: () => `
        <div class="slide">
          <span class="badge">Rangkuman</span>
          <h2 class="slide-title">Karakteristik Romantisme Internasional</h2>
          <div class="card-box" style="margin-top: 16px;">
            <p style="font-size: 1.1rem; line-height: 1.7;">${data.content.rangkumanInternasional}</p>
          </div>
        </div>
      `
    },

    // Slide 19: Q&A
    {
      render: () => `
        <div class="slide">
          <span class="badge">Diskusi</span>
          <h2 class="slide-title">Pertanyaan untuk Audiens</h2>
          <div class="qa-stack">
            ${data.content.pertanyaan.map((q, i) => `
              <div class="qa-card">
                <span class="qa-badge">Q${i + 1}</span>
                <p style="font-size: 1rem;">${q}</p>
              </div>
            `).join('')}
          </div>
        </div>
      `
    },

    // Slide 20: Penutup
    {
      render: () => `
        <div class="slide">
          <h1 class="hero-title">Terima Kasih!</h1>
          <p class="subtitle">Sekian Presentasi dari Kelompok Kami</p>
          <p style="margin-top: 20px; color: var(--accent-color); font-weight: 600;">Disusun oleh: M. Salman, M. Marcell, & Charlie</p>
        </div>
      `
    }
  ];
}

/**
 * 3. CORE RENDER & FULLSCREEN GATE CONTROLLER
 */
let slides = [];

function initGate() {
  const appContainer = document.getElementById('app');
  slides = buildSlidesArray();

  // Tampilkan Gate Screen awal untuk minta Fullscreen
  appContainer.innerHTML = `
    <div class="fullscreen-gate">
      <span class="badge">Apresiasi Seni Rupa</span>
      <h1 class="hero-title">${PRESENTATION_DATA.meta.title}</h1>
      <p class="subtitle">${PRESENTATION_DATA.meta.subtitle}</p>
      <button class="start-btn" id="startBtn">&#9654; Mulai Presentasi (Fullscreen)</button>
    </div>
  `;

  document.getElementById('startBtn').addEventListener('click', requestFullscreenAndStart);
}

function requestFullscreenAndStart() {
  const elem = document.documentElement;

  // Request Fullscreen Mode Browser
  if (elem.requestFullscreen) {
    elem.requestFullscreen().catch(() => {});
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }

  // Mulai Render App Presentasi Utama
  renderMainShell();
}

function renderMainShell() {
  const appContainer = document.getElementById('app');
  appContainer.innerHTML = `
    <main class="presentation-viewport" id="viewport"></main>
    <footer class="nav-bar">
      <button class="nav-btn" id="prevBtn">&larr; Sebelum</button>
      <span class="slide-counter" id="counter">1 / ${slides.length}</span>
      <button class="nav-btn" id="nextBtn">Lanjut &rarr;</button>
    </footer>
  `;

  renderSlide(currentSlideIndex);
  attachEventListeners();
}

function renderSlide(index) {
  const viewport = document.getElementById('viewport');
  viewport.innerHTML = slides[index].render();

  // Scroll viewport kembali ke atas (Bermanfaat di HP)
  viewport.scrollTop = 0;

  const counter = document.getElementById('counter');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  counter.innerText = `${index + 1} / ${slides.length}`;
  
  prevBtn.style.opacity = index === 0 ? '0.3' : '1';
  prevBtn.style.pointerEvents = index === 0 ? 'none' : 'auto';

  nextBtn.style.opacity = index === slides.length - 1 ? '0.3' : '1';
  nextBtn.style.pointerEvents = index === slides.length - 1 ? 'none' : 'auto';
}

function nextSlide() {
  if (currentSlideIndex < slides.length - 1) {
    currentSlideIndex++;
    renderSlide(currentSlideIndex);
  }
}

function prevSlide() {
  if (currentSlideIndex > 0) {
    currentSlideIndex--;
    renderSlide(currentSlideIndex);
  }
}

function attachEventListeners() {
  document.getElementById('nextBtn').addEventListener('click', nextSlide);
  document.getElementById('prevBtn').addEventListener('click', prevSlide);

  // Navigasi Keyboard PC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'Space') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  });

  // Navigasi Touch Swipe HP
  let touchStartX = 0;
  let touchStartY = 0;
  const viewport = document.getElementById('viewport');

  viewport.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });

  viewport.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    const touchEndY = e.changedTouches[0].screenY;

    const diffX = touchStartX - touchEndX;
    const diffY = touchStartY - touchEndY;

    // Pastikan gestur berupa swipe horizontal, bukan scroll vertical
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX > 0) nextSlide();
      else prevSlide();
    }
  }, { passive: true });
}

// Inisialisasi awal saat halaman dibuka
window.addEventListener('DOMContentLoaded', initGate);
