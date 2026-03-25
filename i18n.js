/* ============================================
   TCM Wisdom — Internationalization (i18n)
   20 world languages
   ============================================ */

const TRANSLATIONS = {
  en: {
    lang_name: "English",
    skip: "Skip", back: "Back", next: "Next", cancel: "Cancel",
    get_diagnosis: "Get Diagnosis", save: "Save",
    ob1_title: "Balance Begins Within",
    ob1_text: "Traditional Chinese Medicine has guided wellness for over 2,000 years through the harmony of Yin and Yang — opposing forces that sustain all life.",
    ob2_title: "The Five Elements",
    ob2_text: "Wood, Fire, Earth, Metal, and Water — each element governs specific organs and emotions, creating a web of interconnected health.",
    ob3_title: "What is Qi?",
    ob3_text: "Qi (氣) is the vital energy flowing through your body's meridians. When Qi flows freely, health thrives. When blocked, symptoms arise.",
    ob3_cta: "Start My Assessment",
    your_profile: "Your Profile",
    profile_intro: "Tell us about yourself so we can personalize your TCM experience.",
    full_name: "Full Name", age: "Age", bio_sex: "Biological Sex",
    female: "Female", male: "Male", prefer_not: "Prefer not to say",
    allergies: "Known Allergies", medications: "Current Medications",
    constitution_quiz: "Quick Constitution Quiz",
    quiz_hint: "Answer 3 questions to determine your baseline constitution type.",
    q1: "1. Do you tend to feel cold or warm?",
    q1a: "Often feel cold", q1b: "Usually comfortable", q1c: "Often feel warm",
    q2: "2. How are your energy levels?",
    q2a: "Often fatigued", q2b: "Variable throughout day", q2c: "Generally energetic",
    q3: "3. How would you describe your digestion?",
    q3a: "Slow, heavy feeling", q3b: "Generally smooth", q3c: "Fast or irregular",
    save_profile: "Save Profile",
    good_morning: "Good morning,", how_qi: "How is your Qi today?",
    current_pattern: "Current Pattern", liver_qi: "Liver Qi Stagnation", moderate: "Moderate",
    deficient: "Deficient", balanced: "Balanced", excess: "Excess",
    last_assessed: "Last assessed: March 15, 2026",
    new_assessment: "New Assessment", my_formulas: "My Formulas", history: "History",
    spring_tip: "Spring Season Tip", spring_element: "Wood Element · Liver & Gallbladder",
    spring_text: "Spring is the season of the Liver. Support smooth Qi flow with sour foods like lemon and vinegar. Gentle stretching and walks in nature help release stagnation that accumulated over winter.",
    nav_home: "Home", nav_assess: "Assess", nav_formulas: "Formulas", nav_history: "History", nav_profile: "Profile",
    symptom_assessment: "Symptom Assessment",
    select_systems: "Select all body systems you'd like to assess:",
    systems: "Systems", details: "Details", tongue: "Tongue", pulse: "Pulse",
    digestion: "Digestion", sleep: "Sleep", energy: "Energy", mood: "Mood",
    pain: "Pain", respiration: "Respiration", reproduction: "Reproduction",
    urination: "Urination", skin: "Skin", head_senses: "Head & Senses",
    your_diagnosis: "Your Diagnosis", strong_match: "Strong Match",
    liver_qi_stagnation: "Liver Qi Stagnation",
    affected_organs: "Affected Organ Systems", what_means: "What This Means For You",
    symptoms_matched: "Symptoms Matched",
    see_formula: "See Recommended Formula", learn_more: "Learn More About This Pattern",
    formula_detail: "Formula Detail", free_wanderer: "Free & Easy Wanderer",
    why_formula: "Why This Formula?", ingredients: "Ingredients",
    preparation: "Preparation", dosage_title: "Dosage Guidance",
    safety_check: "Safety Check", save_formula: "Save Formula",
    share_practitioner: "Share with Practitioner",
    decoction: "Decoction", powder: "Powder", patent_pill: "Patent Pill",
    history_tracking: "History & Tracking", symptom_trends: "Symptom Trends",
    assessment_history: "Assessment History", compare: "Compare Two Assessments",
    important_info: "Important Information",
    disclaimer1: "TCM Wisdom is an <strong>educational tool</strong> designed to help you explore Traditional Chinese Medicine concepts.",
    disclaimer2: "It <strong>does not</strong> provide medical diagnosis or replace consultation with a licensed TCM practitioner or healthcare provider.",
    disclaimer3: "<strong>Always consult a qualified professional</strong> before starting any herbal regimen, especially if you are pregnant, nursing, taking medications, or have existing health conditions.",
    i_understand: "I understand and agree to proceed",
    continue_profile: "Continue to Profile Setup",
    disclaimer_footer: "Accessible anytime from Settings > Legal",
  },

  ru: {
    lang_name: "Русский",
    skip: "Пропустить", back: "Назад", next: "Далее", cancel: "Отмена",
    get_diagnosis: "Получить диагноз", save: "Сохранить",
    ob1_title: "Гармония начинается внутри",
    ob1_text: "Традиционная китайская медицина направляет здоровье уже более 2 000 лет через гармонию Инь и Ян — противоположных сил, поддерживающих жизнь.",
    ob2_title: "Пять Элементов",
    ob2_text: "Дерево, Огонь, Земля, Металл и Вода — каждый элемент управляет определёнными органами и эмоциями, создавая сеть взаимосвязанного здоровья.",
    ob3_title: "Что такое Ци?",
    ob3_text: "Ци (氣) — жизненная энергия, текущая по меридианам вашего тела. Когда Ци течёт свободно, здоровье крепнет. Когда блокируется — появляются симптомы.",
    ob3_cta: "Начать оценку",
    your_profile: "Ваш профиль",
    profile_intro: "Расскажите о себе, чтобы мы могли персонализировать ваш опыт ТКМ.",
    good_morning: "Доброе утро,", how_qi: "Как ваша Ци сегодня?",
    current_pattern: "Текущий паттерн", liver_qi: "Застой Ци Печени", moderate: "Умеренный",
    deficient: "Дефицит", balanced: "Баланс", excess: "Избыток",
    last_assessed: "Последняя оценка: 15 марта 2026",
    new_assessment: "Новая оценка", my_formulas: "Мои формулы", history: "История",
    spring_tip: "Совет весеннего сезона", spring_element: "Элемент Дерево · Печень и Жёлчный пузырь",
    spring_text: "Весна — сезон Печени. Поддержите свободный поток Ци кислой пищей. Лёгкая растяжка и прогулки помогут снять застой.",
    nav_home: "Главная", nav_assess: "Оценка", nav_formulas: "Формулы", nav_history: "История", nav_profile: "Профиль",
    symptom_assessment: "Оценка симптомов", select_systems: "Выберите системы тела для оценки:",
    systems: "Системы", details: "Детали", tongue: "Язык", pulse: "Пульс",
    digestion: "Пищеварение", sleep: "Сон", energy: "Энергия", mood: "Настроение",
    pain: "Боль", respiration: "Дыхание", reproduction: "Репродукция",
    urination: "Мочеиспускание", skin: "Кожа", head_senses: "Голова и органы чувств",
    your_diagnosis: "Ваш диагноз", strong_match: "Сильное совпадение",
    liver_qi_stagnation: "Застой Ци Печени",
    affected_organs: "Затронутые системы органов", what_means: "Что это значит для вас",
    symptoms_matched: "Совпавшие симптомы",
    see_formula: "Рекомендованная формула", learn_more: "Узнать больше",
    formula_detail: "Детали формулы", free_wanderer: "Свободный и лёгкий странник",
    why_formula: "Почему эта формула?", ingredients: "Ингредиенты",
    preparation: "Приготовление", dosage_title: "Дозировка",
    safety_check: "Проверка безопасности", save_formula: "Сохранить формулу",
    share_practitioner: "Поделиться с врачом",
    decoction: "Отвар", powder: "Порошок", patent_pill: "Готовые пилюли",
    history_tracking: "История и отслеживание", symptom_trends: "Тренды симптомов",
    assessment_history: "История оценок", compare: "Сравнить две оценки",
    important_info: "Важная информация",
    disclaimer1: "TCM Wisdom — это <strong>образовательный инструмент</strong>, помогающий изучать концепции традиционной китайской медицины.",
    disclaimer2: "Он <strong>не является</strong> медицинской диагностикой и не заменяет консультацию врача.",
    disclaimer3: "<strong>Всегда консультируйтесь со специалистом</strong> перед началом приёма травяных препаратов.",
    i_understand: "Я понимаю и согласен продолжить",
    continue_profile: "Продолжить к профилю",
    disclaimer_footer: "Доступно в Настройки > Юридическая информация",
  },

  zh: {
    lang_name: "简体中文",
    skip: "跳过", back: "返回", next: "下一步", cancel: "取消",
    get_diagnosis: "获取诊断", save: "保存",
    ob1_title: "平衡始于内心",
    ob1_text: "中医已有两千多年的历史，通过阴阳和谐来指导健康。",
    ob2_title: "五行学说",
    ob2_text: "木、火、土、金、水——每种元素掌管特定的器官和情志，构建互相关联的健康网络。",
    ob3_title: "什么是气？",
    ob3_text: "气（氣）是流经身体经络的生命能量。气流通畅则健康；气滞则生症状。",
    ob3_cta: "开始评估",
    your_profile: "您的档案", profile_intro: "请告诉我们关于您的信息。",
    good_morning: "早上好，", how_qi: "今天的气如何？",
    current_pattern: "当前证型", liver_qi: "肝气郁结", moderate: "中等",
    deficient: "虚", balanced: "平衡", excess: "实",
    new_assessment: "新评估", my_formulas: "我的方剂", history: "历史",
    spring_tip: "春季养生提示", spring_element: "木行 · 肝与胆",
    spring_text: "春季是肝的季节。用酸性食物促进气的顺畅流动。轻柔伸展有助释放冬季积累的郁滞。",
    nav_home: "首页", nav_assess: "评估", nav_formulas: "方剂", nav_history: "历史", nav_profile: "档案",
    symptom_assessment: "症状评估", select_systems: "请选择要评估的身体系统：",
    systems: "系统", details: "详情", tongue: "舌象", pulse: "脉象",
    digestion: "消化", sleep: "睡眠", energy: "精力", mood: "情绪",
    pain: "疼痛", respiration: "呼吸", reproduction: "生殖",
    urination: "排尿", skin: "皮肤", head_senses: "头部与感官",
    your_diagnosis: "您的诊断", strong_match: "高度匹配",
    liver_qi_stagnation: "肝气郁结",
    affected_organs: "受影响的脏腑", what_means: "这对您意味着什么",
    symptoms_matched: "匹配的症状",
    see_formula: "查看推荐方剂", learn_more: "了解更多",
    formula_detail: "方剂详情", free_wanderer: "逍遥散",
    why_formula: "为什么推荐此方？", ingredients: "组成",
    preparation: "制备方法", dosage_title: "用量指导",
    safety_check: "安全检查", save_formula: "保存方剂", share_practitioner: "分享给医师",
    decoction: "汤剂", powder: "散剂", patent_pill: "成药",
    history_tracking: "历史与跟踪", symptom_trends: "症状趋势",
    assessment_history: "评估历史", compare: "对比两次评估",
    important_info: "重要信息",
    disclaimer1: "TCM Wisdom是一个<strong>教育工具</strong>，旨在帮助您探索中医概念。",
    disclaimer2: "它<strong>不提供</strong>医疗诊断，不能替代医师咨询。",
    disclaimer3: "在开始任何草药方案之前，<strong>请务必咨询专业人士</strong>。",
    i_understand: "我理解并同意继续", continue_profile: "继续设置档案",
    disclaimer_footer: "可在 设置 > 法律信息 中查看",
  },

  es: {
    lang_name: "Español",
    skip: "Omitir", back: "Atrás", next: "Siguiente", cancel: "Cancelar",
    get_diagnosis: "Obtener diagnóstico",
    ob1_title: "El equilibrio comienza dentro",
    ob1_text: "La Medicina Tradicional China ha guiado el bienestar durante más de 2.000 años a través de la armonía del Yin y el Yang.",
    ob2_title: "Los Cinco Elementos",
    ob2_text: "Madera, Fuego, Tierra, Metal y Agua — cada elemento gobierna órganos y emociones específicos.",
    ob3_title: "¿Qué es el Qi?",
    ob3_text: "El Qi (氣) es la energía vital que fluye por los meridianos de tu cuerpo.",
    ob3_cta: "Comenzar evaluación",
    your_profile: "Tu perfil", good_morning: "Buenos días,", how_qi: "¿Cómo está tu Qi hoy?",
    current_pattern: "Patrón actual", liver_qi: "Estancamiento del Qi de Hígado", moderate: "Moderado",
    new_assessment: "Nueva evaluación", my_formulas: "Mis fórmulas", history: "Historial",
    spring_tip: "Consejo de primavera", spring_element: "Elemento Madera · Hígado y Vesícula",
    spring_text: "La primavera es la estación del Hígado. Apoya el flujo del Qi con alimentos ácidos.",
    nav_home: "Inicio", nav_assess: "Evaluar", nav_formulas: "Fórmulas", nav_history: "Historial", nav_profile: "Perfil",
    symptom_assessment: "Evaluación de síntomas", select_systems: "Selecciona los sistemas a evaluar:",
    systems: "Sistemas", details: "Detalles", tongue: "Lengua", pulse: "Pulso",
    digestion: "Digestión", sleep: "Sueño", energy: "Energía", mood: "Ánimo",
    pain: "Dolor", respiration: "Respiración", reproduction: "Reproducción",
    urination: "Micción", skin: "Piel", head_senses: "Cabeza y sentidos",
    your_diagnosis: "Tu diagnóstico", strong_match: "Coincidencia fuerte",
    liver_qi_stagnation: "Estancamiento del Qi de Hígado",
    affected_organs: "Órganos afectados", what_means: "Qué significa para ti",
    symptoms_matched: "Síntomas coincidentes", see_formula: "Ver fórmula recomendada",
    formula_detail: "Detalle de fórmula", free_wanderer: "El viajero libre y sereno",
    why_formula: "¿Por qué esta fórmula?", ingredients: "Ingredientes",
    preparation: "Preparación", dosage_title: "Guía de dosificación",
    safety_check: "Verificación de seguridad", save_formula: "Guardar fórmula",
    history_tracking: "Historial y seguimiento", symptom_trends: "Tendencias",
    assessment_history: "Historial de evaluaciones", compare: "Comparar evaluaciones",
    important_info: "Información importante",
    disclaimer1: "TCM Wisdom es una <strong>herramienta educativa</strong> para explorar la Medicina Tradicional China.",
    disclaimer2: "<strong>No proporciona</strong> diagnóstico médico ni reemplaza consulta profesional.",
    disclaimer3: "<strong>Consulta siempre a un profesional</strong> antes de iniciar cualquier régimen herbal.",
    i_understand: "Entiendo y acepto continuar", continue_profile: "Continuar al perfil",
  },

  fr: {
    lang_name: "Français",
    skip: "Passer", back: "Retour", next: "Suivant", cancel: "Annuler",
    get_diagnosis: "Obtenir le diagnostic",
    ob1_title: "L'équilibre commence en soi",
    ob1_text: "La Médecine Traditionnelle Chinoise guide le bien-être depuis plus de 2 000 ans grâce à l'harmonie du Yin et du Yang.",
    ob2_title: "Les Cinq Éléments", ob3_title: "Qu'est-ce que le Qi ?",
    ob3_text: "Le Qi (氣) est l'énergie vitale circulant dans les méridiens de votre corps.",
    ob3_cta: "Commencer mon évaluation",
    your_profile: "Votre profil", good_morning: "Bonjour,", how_qi: "Comment va votre Qi ?",
    current_pattern: "Schéma actuel", liver_qi: "Stagnation du Qi du Foie", moderate: "Modéré",
    new_assessment: "Nouvelle évaluation", my_formulas: "Mes formules", history: "Historique",
    nav_home: "Accueil", nav_assess: "Évaluer", nav_formulas: "Formules", nav_history: "Historique", nav_profile: "Profil",
    symptom_assessment: "Évaluation des symptômes", select_systems: "Sélectionnez les systèmes à évaluer :",
    systems: "Systèmes", details: "Détails", tongue: "Langue", pulse: "Pouls",
    your_diagnosis: "Votre diagnostic", strong_match: "Correspondance forte",
    liver_qi_stagnation: "Stagnation du Qi du Foie",
    affected_organs: "Organes affectés", what_means: "Ce que cela signifie",
    formula_detail: "Détail formule", free_wanderer: "Le Vagabond Libre et Serein",
    why_formula: "Pourquoi cette formule ?", ingredients: "Ingrédients",
    preparation: "Préparation", safety_check: "Vérification sécurité",
    history_tracking: "Historique et suivi", symptom_trends: "Tendances",
    important_info: "Information importante",
    disclaimer1: "TCM Wisdom est un <strong>outil éducatif</strong> pour la Médecine Traditionnelle Chinoise.",
    i_understand: "Je comprends et accepte", continue_profile: "Continuer vers le profil",
  },

  de: {
    lang_name: "Deutsch",
    skip: "Überspringen", back: "Zurück", next: "Weiter", cancel: "Abbrechen",
    get_diagnosis: "Diagnose erhalten",
    ob1_title: "Balance beginnt von innen",
    ob1_text: "Die Traditionelle Chinesische Medizin leitet Wohlbefinden seit über 2.000 Jahren durch Yin und Yang.",
    ob2_title: "Die Fünf Elemente", ob3_title: "Was ist Qi?",
    ob3_cta: "Bewertung starten",
    your_profile: "Ihr Profil", good_morning: "Guten Morgen,", how_qi: "Wie ist Ihr Qi heute?",
    current_pattern: "Aktuelles Muster", liver_qi: "Leber-Qi-Stagnation", moderate: "Mäßig",
    new_assessment: "Neue Bewertung", my_formulas: "Meine Formeln", history: "Verlauf",
    nav_home: "Start", nav_assess: "Bewerten", nav_formulas: "Formeln", nav_history: "Verlauf", nav_profile: "Profil",
    symptom_assessment: "Symptombewertung", your_diagnosis: "Ihre Diagnose", strong_match: "Starke Übereinstimmung",
    formula_detail: "Formeldetail", free_wanderer: "Der freie Wanderer",
    ingredients: "Inhaltsstoffe", preparation: "Zubereitung", safety_check: "Sicherheitscheck",
    history_tracking: "Verlauf & Tracking", important_info: "Wichtige Information",
    disclaimer1: "TCM Wisdom ist ein <strong>Bildungswerkzeug</strong> für Traditionelle Chinesische Medizin.",
    i_understand: "Ich verstehe und stimme zu",
  },

  ja: {
    lang_name: "日本語",
    skip: "スキップ", back: "戻る", next: "次へ", cancel: "キャンセル",
    get_diagnosis: "診断を取得",
    ob1_title: "バランスは内側から", ob2_title: "五行説", ob3_title: "気とは？",
    ob3_cta: "評価を開始",
    your_profile: "プロフィール", good_morning: "おはようございます、", how_qi: "今日の気の調子は？",
    current_pattern: "現在の証", liver_qi: "肝気鬱結",
    new_assessment: "新しい評価", my_formulas: "処方一覧", history: "履歴",
    nav_home: "ホーム", nav_assess: "評価", nav_formulas: "処方", nav_history: "履歴", nav_profile: "プロフィール",
    symptom_assessment: "症状評価", your_diagnosis: "診断結果", strong_match: "高い一致",
    formula_detail: "処方詳細", free_wanderer: "逍遙散",
    ingredients: "構成生薬", safety_check: "安全性チェック",
    history_tracking: "履歴と追跡", important_info: "重要な情報",
    disclaimer1: "TCM Wisdomは中医学の概念を探求するための<strong>教育ツール</strong>です。",
    i_understand: "理解し同意して続行します",
  },

  ko: {
    lang_name: "한국어",
    skip: "건너뛰기", back: "뒤로", next: "다음", cancel: "취소",
    get_diagnosis: "진단 받기",
    ob1_title: "균형은 내면에서 시작됩니다", ob2_title: "오행 이론", ob3_title: "기(氣)란?",
    ob3_cta: "평가 시작",
    your_profile: "프로필", good_morning: "좋은 아침이에요,", how_qi: "오늘 기의 상태는?",
    current_pattern: "현재 증상", liver_qi: "간기울결",
    new_assessment: "새 평가", my_formulas: "내 처방", history: "기록",
    nav_home: "홈", nav_assess: "평가", nav_formulas: "처방", nav_history: "기록", nav_profile: "프로필",
    symptom_assessment: "증상 평가", your_diagnosis: "진단 결과",
    formula_detail: "처방 상세", free_wanderer: "소요산",
    ingredients: "구성 약재", safety_check: "안전 확인",
    history_tracking: "기록 및 추적", important_info: "중요 정보",
    i_understand: "이해하고 동의합니다",
  },

  ar: {
    lang_name: "العربية",
    skip: "تخطي", back: "رجوع", next: "التالي", cancel: "إلغاء",
    get_diagnosis: "الحصول على التشخيص",
    ob1_title: "التوازن يبدأ من الداخل", ob2_title: "العناصر الخمسة", ob3_title: "ما هو تشي؟",
    ob3_cta: "ابدأ التقييم",
    your_profile: "ملفك الشخصي", good_morning: "صباح الخير،", how_qi: "كيف طاقتك اليوم؟",
    current_pattern: "النمط الحالي", liver_qi: "ركود تشي الكبد",
    new_assessment: "تقييم جديد", my_formulas: "وصفاتي", history: "السجل",
    nav_home: "الرئيسية", nav_assess: "تقييم", nav_formulas: "الوصفات", nav_history: "السجل", nav_profile: "الملف",
    symptom_assessment: "تقييم الأعراض", your_diagnosis: "تشخيصك",
    formula_detail: "تفاصيل الوصفة", ingredients: "المكونات", safety_check: "فحص السلامة",
    history_tracking: "السجل والمتابعة", important_info: "معلومات مهمة",
    i_understand: "أفهم وأوافق على المتابعة",
  },

  hi: {
    lang_name: "हिन्दी",
    skip: "छोड़ें", back: "वापस", next: "आगे", cancel: "रद्द",
    get_diagnosis: "निदान प्राप्त करें",
    ob1_title: "संतुलन भीतर से शुरू होता है", ob2_title: "पाँच तत्व", ob3_title: "ची क्या है?",
    ob3_cta: "मूल्यांकन शुरू करें",
    your_profile: "आपकी प्रोफ़ाइल", good_morning: "सुप्रभात,", how_qi: "आज आपकी ची कैसी है?",
    current_pattern: "वर्तमान पैटर्न", liver_qi: "लिवर ची ठहराव",
    new_assessment: "नया मूल्यांकन", my_formulas: "मेरे फॉर्मूले", history: "इतिहास",
    nav_home: "होम", nav_assess: "मूल्यांकन", nav_formulas: "फॉर्मूले", nav_history: "इतिहास", nav_profile: "प्रोफ़ाइल",
    symptom_assessment: "लक्षण मूल्यांकन", your_diagnosis: "आपका निदान",
    formula_detail: "फॉर्मूला विवरण", ingredients: "सामग्री", safety_check: "सुरक्षा जांच",
    history_tracking: "इतिहास और ट्रैकिंग", important_info: "महत्वपूर्ण जानकारी",
    i_understand: "मैं समझता/समझती हूँ और सहमत हूँ",
  },

  pt: {
    lang_name: "Português",
    skip: "Pular", back: "Voltar", next: "Próximo", cancel: "Cancelar",
    ob1_title: "O equilíbrio começa por dentro", ob2_title: "Os Cinco Elementos", ob3_title: "O que é Qi?",
    ob3_cta: "Iniciar avaliação",
    your_profile: "Seu perfil", good_morning: "Bom dia,", how_qi: "Como está seu Qi?",
    current_pattern: "Padrão atual", liver_qi: "Estagnação do Qi do Fígado",
    new_assessment: "Nova avaliação", my_formulas: "Minhas fórmulas", history: "Histórico",
    nav_home: "Início", nav_assess: "Avaliar", nav_formulas: "Fórmulas", nav_history: "Histórico", nav_profile: "Perfil",
    symptom_assessment: "Avaliação de sintomas", your_diagnosis: "Seu diagnóstico",
    formula_detail: "Detalhe da fórmula", ingredients: "Ingredientes", safety_check: "Verificação de segurança",
    history_tracking: "Histórico e rastreamento", important_info: "Informação importante",
    i_understand: "Entendo e concordo em continuar",
  },

  it: {
    lang_name: "Italiano",
    skip: "Salta", back: "Indietro", next: "Avanti",
    ob1_title: "L'equilibrio inizia dentro", ob2_title: "I Cinque Elementi", ob3_title: "Cos'è il Qi?",
    ob3_cta: "Inizia la valutazione",
    your_profile: "Il tuo profilo", good_morning: "Buongiorno,",
    nav_home: "Home", nav_assess: "Valuta", nav_formulas: "Formule", nav_history: "Cronologia", nav_profile: "Profilo",
    symptom_assessment: "Valutazione sintomi", your_diagnosis: "La tua diagnosi",
    formula_detail: "Dettaglio formula", ingredients: "Ingredienti", safety_check: "Controllo sicurezza",
    important_info: "Informazione importante", i_understand: "Comprendo e accetto",
  },

  tr: {
    lang_name: "Türkçe",
    skip: "Atla", back: "Geri", next: "İleri",
    ob1_title: "Denge İçten Başlar", ob2_title: "Beş Element", ob3_title: "Qi Nedir?",
    ob3_cta: "Değerlendirmeyi Başlat",
    your_profile: "Profiliniz", good_morning: "Günaydın,",
    nav_home: "Ana Sayfa", nav_assess: "Değerlendir", nav_formulas: "Formüller", nav_history: "Geçmiş", nav_profile: "Profil",
    symptom_assessment: "Semptom Değerlendirmesi", your_diagnosis: "Tanınız",
    formula_detail: "Formül Detayı", ingredients: "İçindekiler", safety_check: "Güvenlik Kontrolü",
    important_info: "Önemli Bilgi", i_understand: "Anlıyorum ve kabul ediyorum",
  },

  vi: {
    lang_name: "Tiếng Việt",
    skip: "Bỏ qua", back: "Quay lại", next: "Tiếp theo",
    ob1_title: "Cân bằng từ bên trong", ob2_title: "Ngũ Hành", ob3_title: "Khí là gì?",
    ob3_cta: "Bắt đầu đánh giá",
    your_profile: "Hồ sơ", good_morning: "Chào buổi sáng,",
    nav_home: "Trang chủ", nav_assess: "Đánh giá", nav_formulas: "Bài thuốc", nav_history: "Lịch sử", nav_profile: "Hồ sơ",
    symptom_assessment: "Đánh giá triệu chứng", your_diagnosis: "Chẩn đoán",
    formula_detail: "Chi tiết bài thuốc", ingredients: "Thành phần",
    important_info: "Thông tin quan trọng", i_understand: "Tôi hiểu và đồng ý",
  },

  th: {
    lang_name: "ภาษาไทย",
    skip: "ข้าม", back: "กลับ", next: "ถัดไป",
    ob1_title: "สมดุลเริ่มจากภายใน", ob2_title: "ธาตุทั้งห้า", ob3_title: "ชี่คืออะไร?",
    ob3_cta: "เริ่มการประเมิน",
    your_profile: "โปรไฟล์", good_morning: "สวัสดีตอนเช้า",
    nav_home: "หน้าหลัก", nav_assess: "ประเมิน", nav_formulas: "สูตรยา", nav_history: "ประวัติ", nav_profile: "โปรไฟล์",
    symptom_assessment: "การประเมินอาการ", your_diagnosis: "การวินิจฉัย",
    important_info: "ข้อมูลสำคัญ", i_understand: "เข้าใจและยินยอม",
  },

  id: {
    lang_name: "Bahasa Indonesia",
    skip: "Lewati", back: "Kembali", next: "Berikutnya",
    ob1_title: "Keseimbangan dari Dalam", ob2_title: "Lima Elemen", ob3_title: "Apa itu Qi?",
    ob3_cta: "Mulai Penilaian",
    your_profile: "Profil Anda", good_morning: "Selamat pagi,",
    nav_home: "Beranda", nav_assess: "Nilai", nav_formulas: "Ramuan", nav_history: "Riwayat", nav_profile: "Profil",
    symptom_assessment: "Penilaian Gejala", your_diagnosis: "Diagnosis Anda",
    important_info: "Informasi Penting", i_understand: "Saya mengerti dan setuju",
  },

  pl: {
    lang_name: "Polski",
    skip: "Pomiń", back: "Wstecz", next: "Dalej",
    ob1_title: "Równowaga zaczyna się wewnątrz", ob3_cta: "Rozpocznij ocenę",
    your_profile: "Twój profil", good_morning: "Dzień dobry,",
    nav_home: "Start", nav_assess: "Ocena", nav_formulas: "Formuły", nav_history: "Historia", nav_profile: "Profil",
    important_info: "Ważna informacja", i_understand: "Rozumiem i zgadzam się",
  },

  nl: {
    lang_name: "Nederlands",
    skip: "Overslaan", back: "Terug", next: "Volgende",
    ob1_title: "Balans begint van binnenuit", ob3_cta: "Start mijn beoordeling",
    your_profile: "Uw profiel", good_morning: "Goedemorgen,",
    nav_home: "Home", nav_assess: "Beoordeel", nav_formulas: "Formules", nav_history: "Geschiedenis", nav_profile: "Profiel",
    important_info: "Belangrijke informatie", i_understand: "Ik begrijp het en ga akkoord",
  },

  uk: {
    lang_name: "Українська",
    skip: "Пропустити", back: "Назад", next: "Далі",
    ob1_title: "Гармонія починається зсередини", ob3_cta: "Почати оцінку",
    your_profile: "Ваш профіль", good_morning: "Доброго ранку,",
    nav_home: "Головна", nav_assess: "Оцінка", nav_formulas: "Формули", nav_history: "Історія", nav_profile: "Профіль",
    important_info: "Важлива інформація", i_understand: "Розумію та погоджуюсь",
  },

  sv: {
    lang_name: "Svenska",
    skip: "Hoppa över", back: "Tillbaka", next: "Nästa",
    ob1_title: "Balans börjar inifrån", ob3_cta: "Starta min bedömning",
    your_profile: "Din profil", good_morning: "God morgon,",
    nav_home: "Hem", nav_assess: "Bedöm", nav_formulas: "Formler", nav_history: "Historik", nav_profile: "Profil",
    important_info: "Viktig information", i_understand: "Jag förstår och samtycker",
  },

  he: {
    lang_name: "עברית",
    skip: "דלג", back: "חזור", next: "הבא",
    ob1_title: "האיזון מתחיל מבפנים", ob3_cta: "התחל הערכה",
    your_profile: "הפרופיל שלך", good_morning: "בוקר טוב,",
    nav_home: "בית", nav_assess: "הערכה", nav_formulas: "נוסחאות", nav_history: "היסטוריה", nav_profile: "פרופיל",
    important_info: "מידע חשוב", i_understand: "אני מבין/ה ומסכים/ה",
  },

  bn: {
    lang_name: "বাংলা",
    skip: "এড়িয়ে যান", back: "পিছনে", next: "পরবর্তী",
    ob1_title: "ভারসাম্য ভেতর থেকে শুরু হয়", ob3_cta: "মূল্যায়ন শুরু করুন",
    your_profile: "আপনার প্রোফাইল", good_morning: "সুপ্রভাত,",
    nav_home: "হোম", nav_assess: "মূল্যায়ন", nav_formulas: "সূত্র", nav_history: "ইতিহাস", nav_profile: "প্রোফাইল",
    important_info: "গুরুত্বপূর্ণ তথ্য", i_understand: "আমি বুঝেছি এবং সম্মত",
  },
};

// ── i18n Engine ──
let currentLang = localStorage.getItem('tcm-lang') || navigator.language?.split('-')[0] || 'en';
if (!TRANSLATIONS[currentLang]) currentLang = 'en';

function t(key) {
  return TRANSLATIONS[currentLang]?.[key] || TRANSLATIONS.en[key] || key;
}

function setLang(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  localStorage.setItem('tcm-lang', lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === 'ar' || lang === 'he') ? 'rtl' : 'ltr';
  applyTranslations();
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (el.hasAttribute('data-i18n-html')) {
      el.innerHTML = val;
    } else {
      el.textContent = val;
    }
  });
}

// ── Language Selector ──
function createLangSelector() {
  document.getElementById('lang-selector')?.remove();
  const container = document.createElement('div');
  container.id = 'lang-selector';
  container.innerHTML = `
    <button class="lang-toggle" id="lang-toggle" aria-label="Change language">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7.5" stroke="currentColor" stroke-width="1.3" fill="none"/><path d="M1.5 9h15M9 1.5c2 2.5 3 5 3 7.5s-1 5-3 7.5M9 1.5c-2 2.5-3 5-3 7.5s1 5 3 7.5" stroke="currentColor" stroke-width="1.3" fill="none"/></svg>
      <span>${TRANSLATIONS[currentLang]?.lang_name || 'English'}</span>
    </button>
    <div class="lang-dropdown" id="lang-dropdown">
      ${Object.entries(TRANSLATIONS).map(([code, tr]) =>
        `<button class="lang-option ${code === currentLang ? 'active' : ''}" data-lang="${code}">${tr.lang_name}</button>`
      ).join('')}
    </div>`;
  const style = document.createElement('style');
  style.id = 'lang-styles';
  if (!document.getElementById('lang-styles')) {
    style.textContent = `
      #lang-selector{position:fixed;top:8px;right:8px;z-index:200}
      .lang-toggle{display:flex;align-items:center;gap:5px;padding:6px 12px;background:rgba(45,80,22,.9);color:#fff;border:none;border-radius:20px;font-family:Inter,sans-serif;font-size:12px;font-weight:500;cursor:pointer;backdrop-filter:blur(8px);box-shadow:0 2px 8px rgba(0,0,0,.15)}
      .lang-dropdown{display:none;position:absolute;top:100%;right:0;margin-top:6px;background:#fff;border-radius:12px;box-shadow:0 8px 32px rgba(0,0,0,.18);max-height:320px;overflow-y:auto;min-width:160px;padding:6px}
      .lang-dropdown.open{display:block}
      .lang-option{display:block;width:100%;text-align:left;padding:10px 14px;border:none;background:none;font-family:Inter,sans-serif;font-size:13px;color:#2C2C2C;cursor:pointer;border-radius:8px}
      .lang-option:hover{background:#F5ECD7}
      .lang-option.active{background:rgba(45,80,22,.1);color:#2D5016;font-weight:600}
      [dir=rtl] #lang-selector{right:auto;left:8px}
      [dir=rtl] .lang-dropdown{right:auto;left:0}
      @media(min-width:421px){#lang-selector{top:auto;bottom:20px;right:20px}.lang-dropdown{bottom:100%;top:auto;margin-bottom:6px}}`;
    document.head.appendChild(style);
  }
  document.body.appendChild(container);
  document.getElementById('lang-toggle').addEventListener('click', e => {
    e.stopPropagation();
    document.getElementById('lang-dropdown').classList.toggle('open');
  });
  document.addEventListener('click', () => document.getElementById('lang-dropdown')?.classList.remove('open'));
  container.querySelectorAll('.lang-option').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      setLang(btn.dataset.lang);
      createLangSelector();
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.lang = currentLang;
  document.documentElement.dir = (currentLang === 'ar' || currentLang === 'he') ? 'rtl' : 'ltr';
  createLangSelector();
});
