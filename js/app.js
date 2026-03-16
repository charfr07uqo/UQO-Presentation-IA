// ── Constants ──

const LOGO_SVG = `<img src="icons/kiro.png" alt="Kiro" class="kiro-logo-icon">`;

// ── Theme toggle ──

function toggleTheme() {
    const html = document.documentElement;
    const btn = document.getElementById('themeBtn');
    if (html.getAttribute('data-theme') === 'light') {
        html.removeAttribute('data-theme');
        btn.textContent = '☀️';
    } else {
        html.setAttribute('data-theme', 'light');
        btn.textContent = '🌙';
    }
}

// ── Breadcrumb ──

let sectionMap = [];

function buildBreadcrumb(data) {
    const seen = new Set();
    data.forEach((slide, i) => {
        const s = slide.section;
        if (s && !seen.has(s)) {
            seen.add(s);
            sectionMap.push({ name: s, firstSlide: i });
        }
    });
    const container = document.getElementById('breadcrumb');
    if (!container) return;
    sectionMap.forEach((sec, idx) => {
        const span = document.createElement('span');
        span.className = 'breadcrumb-item';
        span.textContent = sec.name;
        span.dataset.section = sec.name;
        span.addEventListener('click', () => {
            currentSlide = sec.firstSlide;
            showSlide(currentSlide);
        });
        container.appendChild(span);
        if (idx < sectionMap.length - 1) {
            const sep = document.createElement('span');
            sep.className = 'breadcrumb-sep';
            sep.textContent = '›';
            container.appendChild(sep);
        }
    });
}

function updateBreadcrumb(index) {
    const currentSection = SLIDES_DATA[index]?.section || '';
    document.querySelectorAll('.breadcrumb-item').forEach(el => {
        el.classList.toggle('active', el.dataset.section === currentSection);
    });
    const bc = document.getElementById('breadcrumb');
    if (bc) bc.style.opacity = currentSection ? '1' : '0';
}

// ── Icon helper ──

function badgeHtml(b, style) {
    const iconImg = b.icon ? `<img src="${b.icon}" alt="" class="badge-icon">` : '';
    const s = style ? ` style="${style}"` : '';
    return `<span class="badge badge-${b.type}"${s}>${iconImg}${b.text}</span>`;
}

// ── Renderers by layout type ──

const renderers = {
    title(slide) {
        const badgesStr = (slide.badges || [])
            .map(b => badgeHtml(b)).join('');
        const footerHtml = slide.footer
            ? `<div style="margin-top:40px"><div class="highlight-box" style="display:inline-block;text-align:left">
                 <p style="color:var(--text-muted);font-size:1.7rem;line-height:1.8">${slide.footer}</p>
               </div></div>` : '';
        const presenterHtml = slide.presenter
            ? `<div class="presenter-info">${slide.presenter}</div>` : '';
        return `<div class="slide-content title-slide">
            <div class="title-header">
                <img src="logo_blanc.png" alt="Logo UQO" class="uqo-logo-title">
                <div class="title-header-text">
                    ${slide.logo ? `<div class="kiro-logo">${LOGO_SVG}<span>${slide.logo}</span></div>` : ''}
                    <h1>${slide.title}</h1>
                </div>
            </div>
            <p class="subtitle">${slide.subtitle}</p>
            ${badgesStr ? `<div style="margin-top:32px">${badgesStr}</div>` : ''}
            ${presenterHtml}
            ${footerHtml}
        </div>`;
    },

    agenda(slide) {
        const itemsHtml = slide.items.map((item, i) => `
            <div class="agenda-item">
                <div class="agenda-num">${i + 1}</div>
                <div class="agenda-text">${item}</div>
            </div>`).join('');
        return `<div class="slide-content">
            <span class="slide-tag">${slide.tag}</span>
            <h2>${slide.title}</h2>
            <p class="subtitle">${slide.subtitle}</p>
            <div style="margin-top:28px">${itemsHtml}</div>
        </div>`;
    },

    cards(slide) {
        const cardsHtml = slide.cards.map(c => `
            <div class="card">
                <span class="card-icon">${c.icon}</span>
                <h3>${c.title}</h3>
                <p>${c.text}</p>
            </div>`).join('');
        return `<div class="slide-content">
            <span class="slide-tag">${slide.tag}</span>
            <h2>${slide.title}</h2>
            <p class="subtitle">${slide.subtitle}</p>
            <div class="cards-grid" style="margin-top:30px;${slide.cardsStyle || ''}">${cardsHtml}</div>
        </div>`;
    },

    'simple-card'(slide) {
        const listHtml = slide.card.list.map(i => `<li>${i}</li>`).join('');
        const cardIcon = slide.card.icon ? `<img src="${slide.card.icon}" alt="" class="card-header-icon">` : '';
        return `<div class="slide-content">
            <span class="slide-tag">${slide.tag}</span>
            <h2>${slide.title}</h2>
            <p class="subtitle">${slide.subtitle}</p>
            <div style="margin-top:28px">
                <div class="card static"><h3>${cardIcon}${slide.card.title}</h3>
                    <ul class="styled-list">${listHtml}</ul>
                </div>
            </div>
        </div>`;
    },

    'simple-card-warning'(slide) {
        const listHtml = slide.card.list.map(i => `<li>${i}</li>`).join('');
        return `<div class="slide-content">
            <span class="slide-tag">${slide.tag}</span>
            <h2>${slide.title}</h2>
            <p class="subtitle">${slide.subtitle}</p>
            <div style="margin-top:28px">
                <div class="card static"><h3>${slide.card.title}</h3>
                    <ul class="styled-list">${listHtml}</ul>
                </div>
                <div class="warning-box" style="margin-top:20px">
                    <span style="font-size:1.5rem">💡</span>
                    <p>${slide.warning}</p>
                </div>
            </div>
        </div>`;
    },

    'two-cols-filetree'(slide) {
        const treeHtml = slide.fileTree.map(f => {
            const indent = '&nbsp;&nbsp;&nbsp;'.repeat(f.indent);
            return `${indent}<span class="${f.type}">${f.name}</span>`;
        }).join('<br>');
        const descsHtml = slide.descriptions.map(d =>
            `<div class="card static" style="margin-bottom:16px"><h3>${d.title}</h3><p>${d.text}</p></div>`
        ).join('');
        return `<div class="slide-content">
            <span class="slide-tag">${slide.tag}</span>
            <h2>${slide.title}</h2>
            <p class="subtitle">${slide.subtitle}</p>
            <div class="two-cols" style="margin-top:24px">
                <div><div class="file-tree">${treeHtml}</div></div>
                <div>${descsHtml}</div>
            </div>
        </div>`;
    },

    'two-cols-md'(slide) {
        const badges = (slide.left.badges || []).map(b =>
            `<div class="badge-line">${badgeHtml(b, 'font-size:1.2rem;padding:6px 16px')}</div>`).join('');
        const mdLines = slide.right.split('\n').map(line => {
            if (line.startsWith('# ')) return `<span class="md-h1">${line}</span>`;
            if (line.startsWith('## ')) return `<span class="md-h2">${line}</span>`;
            if (line.startsWith('- ')) return `<span class="md-li">${line}</span>`;
            if (line.startsWith('```')) return `<span class="md-fence">${line}</span>`;
            if (line === '') return '';
            return `<span class="md-text">${line}</span>`;
        }).join('<br>');
        return `<div class="slide-content">
            <span class="slide-tag">${slide.tag}</span>
            <h2>${slide.title}</h2>
            <p class="subtitle">${slide.subtitle}</p>
            <div class="two-cols" style="margin-top:24px">
                <div>
                    <div class="highlight-box" style="padding:28px">
                        <h3>${slide.left.title}</h3>
                        <p style="color:var(--text-muted);line-height:1.7;margin-top:12px;font-size:1.6rem">${slide.left.text}</p>
                        ${badges ? `<div style="margin-top:16px;display:flex;flex-direction:column;gap:10px">${badges}</div>` : ''}
                    </div>
                </div>
                <div><div class="md-preview">${mdLines}</div></div>
            </div>
        </div>`;
    },

    'single-highlight'(slide) {
        const badges = (slide.box.badges || []).map(b =>
            `<div class="badge-line">${badgeHtml(b, 'font-size:1.35rem;padding:8px 20px')}</div>`).join('');
        const noteHtml = slide.box.note
            ? `<p class="highlight-note">${slide.box.note}</p>` : '';
        return `<div class="slide-content">
            <span class="slide-tag">${slide.tag}</span>
            <h2>${slide.title}</h2>
            <p class="subtitle">${slide.subtitle}</p>
            <div class="highlight-box" style="margin-top:28px;padding:36px">
                <h3 style="font-size:2.8rem">${slide.box.title}</h3>
                <p style="color:var(--text-muted);line-height:1.7;margin-top:16px;font-size:2rem">${slide.box.text}</p>
                ${badges ? `<div style="margin-top:24px;display:flex;flex-direction:column;gap:14px">${badges}</div>` : ''}
                ${noteHtml}
            </div>
        </div>`;
    },

    'prompt-examples'(slide) {
        const promptsHtml = slide.prompts.map(p => {
            const cls = p.good ? '' : ' bad';
            const icon = p.good ? '✅' : '❌';
            return `<div class="prompt-card${cls}">${icon} ${p.text}</div>`;
        }).join('');
        return `<div class="slide-content">
            <span class="slide-tag">${slide.tag}</span>
            <h2>${slide.title}</h2>
            <p class="subtitle">${slide.subtitle}</p>
            <div style="margin-top:24px">
                ${promptsHtml}
                <p style="color:var(--text-muted);font-size:1.7rem;margin-top:16px;line-height:1.6">${slide.note}</p>
            </div>
        </div>`;
    },

    'icon-cards'(slide) {
        const cols = slide.columns || 3;
        const cardsHtml = slide.cards.map(c => `
            <div class="card icon-card">
                <span class="card-big-icon">${c.icon}</span>
                <h3>${c.title}</h3>
                <p>${c.text}</p>
            </div>`).join('');
        return `<div class="slide-content">
            <span class="slide-tag">${slide.tag}</span>
            <h2>${slide.title}</h2>
            <p class="subtitle">${slide.subtitle}</p>
            <div class="cards-grid" style="grid-template-columns:repeat(${cols},1fr);margin-top:24px">${cardsHtml}</div>
        </div>`;
    },

    steps(slide) {
        const stepsHtml = slide.steps.map((s, i) => `
            <div class="step">
                <div class="step-num">${i + 1}</div>
                <div class="step-content"><h3>${s.title}</h3><p>${s.text}</p></div>
            </div>`).join('');
        return `<div class="slide-content">
            <span class="slide-tag">${slide.tag}</span>
            <h2>${slide.title}</h2>
            <p class="subtitle">${slide.subtitle}</p>
            <div class="steps" style="margin-top:24px">${stepsHtml}</div>
        </div>`;
    },

    prompts(slide) {
        const promptsHtml = slide.prompts.map(p => {
            const badge = `<span class="badge badge-${p.badge.type}" style="margin-bottom:10px">${p.badge.text}</span>`;
            return `<div class="prompt-card">${badge}<br>${p.text}</div>`;
        }).join('');
        return `<div class="slide-content">
            <span class="slide-tag">${slide.tag}</span>
            <h2>${slide.title}</h2>
            <p class="subtitle">${slide.subtitle}</p>
            <div class="scroll-area" style="margin-top:24px">${promptsHtml}</div>
        </div>`;
    }
};

// ── Build slides from data ──

function buildSlides(data) {
    const container = document.getElementById('slidesContainer');
    data.forEach((slide, index) => {
        const renderer = renderers[slide.layout];
        if (!renderer) { console.warn('Unknown layout:', slide.layout); return; }
        const glowHtml = (slide.glow || [])
            .map(g => `<div class="bg-glow bg-glow-${g} animate-pulse"></div>`).join('');
        const div = document.createElement('div');
        div.className = 'slide' + (index === 0 ? ' active' : '');
        div.dataset.slide = index;
        div.innerHTML = glowHtml + renderer(slide);
        container.appendChild(div);
    });
}

// ── Navigation ──

let currentSlide = 0;
let totalSlides = 0;

function getSlides() { return document.querySelectorAll('.slide'); }

function showSlide(index) {
    const slides = getSlides();
    slides.forEach(s => s.classList.remove('active', 'exit-left'));
    slides[index].classList.add('active');
    document.getElementById('progressBar').style.width =
        ((index + 1) / totalSlides * 100) + '%';
    document.getElementById('slideCounter').textContent =
        (index + 1) + ' / ' + totalSlides;
    const watermark = document.getElementById('uqoWatermark');
    watermark.classList.toggle('hidden', index === 0);
    updateBreadcrumb(index);
}

function nextSlide() {
    if (currentSlide >= totalSlides - 1) return;
    const slides = getSlides();
    slides[currentSlide].classList.remove('active');
    slides[currentSlide].classList.add('exit-left');
    setTimeout(() => slides[currentSlide - 1]?.classList.remove('exit-left'), 600);
    currentSlide++;
    setTimeout(() => showSlide(currentSlide), 50);
}

function prevSlide() {
    if (currentSlide <= 0) return;
    getSlides()[currentSlide].classList.remove('active');
    currentSlide--;
    setTimeout(() => showSlide(currentSlide), 50);
}

// ── Init ──

document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); nextSlide(); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); prevSlide(); }
});

let touchStartX = 0;
document.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; });
document.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) { diff > 0 ? nextSlide() : prevSlide(); }
});

// Build from accumulated slide data
buildSlides(SLIDES_DATA);
buildBreadcrumb(SLIDES_DATA);
totalSlides = getSlides().length;
showSlide(0);