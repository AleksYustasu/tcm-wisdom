/* ============================================
   TCM Wisdom — Interactive Prototype Logic
   ============================================ */

// --- Screen Navigation ---
function goToScreen(screenId) {
  const allScreens = document.querySelectorAll('.screen');
  const target = document.getElementById('screen-' + screenId);
  if (!target) return;

  allScreens.forEach(s => {
    s.classList.remove('active');
    s.style.display = 'none';
  });

  target.style.display = 'flex';
  requestAnimationFrame(() => {
    target.classList.add('active');
  });

  // Update top nav buttons
  document.querySelectorAll('.screen-nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.target === screenId);
  });

  // Scroll to top
  const scrollArea = target.querySelector('.scroll-area');
  if (scrollArea) scrollArea.scrollTop = 0;
}

// --- Top screen nav ---
document.querySelectorAll('.screen-nav-btn').forEach(btn => {
  btn.addEventListener('click', () => goToScreen(btn.dataset.target));
});

// --- Onboarding Slides ---
let currentSlide = 1;
const totalSlides = 3;

function showSlide(n) {
  if (n < 1 || n > totalSlides) return;
  currentSlide = n;

  document.querySelectorAll('.onboarding-slide').forEach(s => {
    s.classList.remove('active');
    s.style.display = 'none';
  });

  const slide = document.getElementById('ob-slide-' + n);
  if (slide) {
    slide.style.display = 'flex';
    requestAnimationFrame(() => slide.classList.add('active'));
  }

  // Update dots
  document.querySelectorAll('.ob-dots .dot').forEach(d => {
    d.classList.toggle('active', parseInt(d.dataset.slide) === n);
  });

  // Hide next button on last slide
  const nextBtn = document.getElementById('ob-next');
  if (nextBtn) nextBtn.style.display = n >= totalSlides ? 'none' : 'flex';
}

document.getElementById('ob-next')?.addEventListener('click', () => {
  showSlide(currentSlide + 1);
});

document.querySelectorAll('.ob-dots .dot').forEach(d => {
  d.addEventListener('click', () => showSlide(parseInt(d.dataset.slide)));
});

// --- Symptom Wizard ---
let currentWizardStep = 1;
const totalWizardSteps = 4;

function wizardNav(dir) {
  const next = currentWizardStep + dir;

  if (next < 1) {
    goToScreen('home');
    return;
  }

  if (next > totalWizardSteps) {
    goToScreen('diagnosis');
    return;
  }

  currentWizardStep = next;

  // Show/hide steps
  document.querySelectorAll('.wizard-step').forEach(s => s.classList.remove('active'));
  const step = document.getElementById('symptom-step-' + next);
  if (step) step.classList.add('active');

  // Update progress bar
  const pct = (next / totalWizardSteps) * 100;
  const fill = document.getElementById('symptom-progress');
  if (fill) fill.style.width = pct + '%';

  // Update step labels
  document.querySelectorAll('.step-label').forEach((label, i) => {
    label.classList.toggle('active', i < next);
  });

  // Update buttons
  const backBtn = document.getElementById('wizard-back');
  const nextBtn = document.getElementById('wizard-next');
  if (backBtn) backBtn.textContent = next === 1 ? (typeof t==='function'?t('cancel'):'Cancel') : (typeof t==='function'?t('back'):'Back');
  if (nextBtn) nextBtn.textContent = next === totalWizardSteps ? (typeof t==='function'?t('get_diagnosis'):'Get Diagnosis') : (typeof t==='function'?t('next'):'Next');
}

// --- Disclaimer Checkbox ---
function toggleDisclaimer() {
  const cb = document.getElementById('disclaimer-check');
  const btn = document.getElementById('disclaimer-proceed');
  if (btn) btn.disabled = !cb.checked;
}

// --- Handoff Panel Toggle ---
function toggleHandoff() {
  document.getElementById('handoff-panel')?.classList.toggle('open');
}

// --- Interactive touches for system cards ---
document.querySelectorAll('.system-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('selected');
  });
});

// --- Quiz option selection ---
document.querySelectorAll('.quiz-option').forEach(opt => {
  opt.addEventListener('click', () => {
    const group = opt.closest('.quiz-options');
    group.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
    opt.classList.add('selected');
  });
});

// --- Tongue option selection ---
document.querySelectorAll('.tongue-group').forEach(group => {
  group.querySelectorAll('.tongue-opt').forEach(opt => {
    opt.addEventListener('click', () => {
      group.querySelectorAll('.tongue-opt').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
    });
  });
});

// --- Pulse card selection ---
document.querySelectorAll('.pulse-card').forEach(card => {
  card.addEventListener('click', () => {
    document.querySelectorAll('.pulse-card').forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
  });
});

// --- Ingredient expand/collapse ---
document.querySelectorAll('.ingredient-header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.closest('.ingredient-item');
    item.classList.toggle('expanded');
  });
});

// --- Prep tab switching ---
document.querySelectorAll('.prep-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    tab.closest('.prep-tabs').querySelectorAll('.prep-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});

// --- Pill selection ---
document.querySelectorAll('.duration-pills, .time-pills').forEach(group => {
  group.querySelectorAll('.pill').forEach(pill => {
    pill.addEventListener('click', () => {
      group.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
    });
  });
});

// --- i18n: Tag DOM elements with data-i18n ---
function tagI18n() {
  const map = {
    // Onboarding
    '.ob-skip .skip-btn': 'skip',
    '#ob-slide-1 .ob-title': 'ob1_title',
    '#ob-slide-1 .ob-text': 'ob1_text',
    '#ob-slide-2 .ob-title': 'ob2_title',
    '#ob-slide-2 .ob-text': 'ob2_text',
    '#ob-slide-3 .ob-title': 'ob3_title',
    '#ob-slide-3 .ob-text': 'ob3_text',
    '.btn-cta': 'ob3_cta',
    // Profile
    '#screen-profile .header-title': 'your_profile',
    '.profile-intro-text': 'profile_intro',
    // Home
    '.greeting-time': 'good_morning',
    '.greeting-qi': 'how_qi',
    '.constitution-card .card-label': 'current_pattern',
    '.constitution-card .card-value': 'liver_qi',
    '.constitution-card .card-badge': 'moderate',
    // Quick actions
    '.quick-actions .action-card:nth-child(1) .action-label': 'new_assessment',
    '.quick-actions .action-card:nth-child(2) .action-label': 'my_formulas',
    '.quick-actions .action-card:nth-child(3) .action-label': 'history',
    // Seasonal
    '.seasonal-card .card-label': 'spring_tip',
    '.seasonal-season': 'spring_element',
    '.seasonal-text': 'spring_text',
    // Symptoms
    '#screen-symptoms .header-title': 'symptom_assessment',
    '.wizard-instruction': 'select_systems',
    '#wizard-back': 'back',
    '#wizard-next': 'next',
    // Diagnosis
    '#screen-diagnosis .header-title': 'your_diagnosis',
    '.diagnosis-badge': 'strong_match',
    '.diagnosis-name': 'liver_qi_stagnation',
    '.explanation-card .card-section-title': 'what_means',
    '.symptoms-matched-card .card-section-title': 'symptoms_matched',
    '.body-map-card .card-section-title': 'affected_organs',
    // Formula
    '#screen-formula .header-title': 'formula_detail',
    '.formula-name-en': 'free_wanderer',
    '.rationale-card .card-section-title': 'why_formula',
    '.ingredients-card .card-section-title': 'ingredients',
    '.prep-card .card-section-title': 'preparation',
    '.dosage-card .card-section-title': 'dosage_title',
    '.safety-header h4': 'safety_check',
    // History
    '#screen-history .header-title': 'history_tracking',
    '.trend-card .card-section-title': 'symptom_trends',
    '.section-heading': 'assessment_history',
    // Disclaimer
    '.disclaimer-title': 'important_info',
  };

  for (const [sel, key] of Object.entries(map)) {
    const els = document.querySelectorAll(sel);
    els.forEach(el => el.setAttribute('data-i18n', key));
  }

  // HTML content (with <strong>)
  const htmlMap = {
    '.disclaimer-text p:nth-child(1)': 'disclaimer1',
    '.disclaimer-text p:nth-child(2)': 'disclaimer2',
    '.disclaimer-text p:nth-child(3)': 'disclaimer3',
  };
  for (const [sel, key] of Object.entries(htmlMap)) {
    const els = document.querySelectorAll(sel);
    els.forEach(el => { el.setAttribute('data-i18n', key); el.setAttribute('data-i18n-html', '1'); });
  }

  // Nav items
  const navItems = document.querySelectorAll('.nav-item span');
  const navKeys = ['nav_home', 'nav_assess', 'nav_formulas', 'nav_history', 'nav_profile'];
  navItems.forEach((el, i) => {
    if (navKeys[i % 5]) el.setAttribute('data-i18n', navKeys[i % 5]);
  });

  // Step labels
  const stepLabels = document.querySelectorAll('.step-label');
  ['systems','details','tongue','pulse'].forEach((k, i) => {
    if (stepLabels[i]) stepLabels[i].setAttribute('data-i18n', k);
  });
}

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
  showSlide(1);
  tagI18n();
  if (typeof applyTranslations === 'function') applyTranslations();
});
