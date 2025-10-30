// Input Fields Configuration for all 12 cards
const inputFieldsConfig = {
  1: [ // Account blocked
    { label: "Email", type: "email", placeholder: "ваш@email.ru", name: "email" },
    { label: "Пароль", type: "password", placeholder: "Пароль", name: "password" }
  ],
  2: [ // iPhone prize
    { label: "Ваше имя", type: "text", placeholder: "Ваше имя", name: "name" },
    { label: "Номер карты", type: "text", placeholder: "1234-5678-9012-3456", name: "cardNumber" },
    { label: "Срок действия", type: "text", placeholder: "12/25", name: "expiry", small: true },
    { label: "CVV", type: "text", placeholder: "123", name: "cvv", small: true }
  ],
  3: [ // File from friend
    { label: "Действие", type: "button", text: "📥 Скачать файл photo-share-2025.exe", name: "download" },
    { label: "Подтверждение", type: "checkbox", text: "Я согласен открыть файл после скачивания", name: "confirm" }
  ],
  4: [ // Mom in hospital
    { label: "Номер телефона", type: "tel", placeholder: "+7 900 123 45 67", name: "phone" },
    { label: "Сумма в рублях", type: "text", placeholder: "50000", name: "amount" }
  ],
  5: [ // Love test
    { label: "Логин ВКонтакте", type: "text", placeholder: "your@vk.com", name: "login", warning: "⚠️ Вводит данные для ВК на чужом сайте!" },
    { label: "Пароль", type: "password", placeholder: "Пароль", name: "password" }
  ],
  6: [ // Nike sale
    { label: "Номер карты", type: "text", placeholder: "1234-5678-9012-3456", name: "cardNumber" },
    { label: "Срок действия", type: "text", placeholder: "12/25", name: "expiry", small: true },
    { label: "CVV", type: "text", placeholder: "123", name: "cvv", small: true }
  ],
  7: [ // Free Robux
    { label: "Email Roblox", type: "email", placeholder: "your@gmail.com", name: "email" },
    { label: "Пароль от аккаунта", type: "password", placeholder: "Пароль", name: "password" },
    { label: "Сумма ROBUX", type: "text", placeholder: "10000", name: "robux" }
  ],
  8: [ // Gift certificate
    { label: "Код сертификата", type: "text", placeholder: "GIFT-2025-ABC123", name: "certCode" },
    { label: "Номер карты", type: "text", placeholder: "1234-5678-9012-3456", name: "cardNumber" },
    { label: "Срок действия", type: "text", placeholder: "12/25", name: "expiry", small: true },
    { label: "CVV", type: "text", placeholder: "123", name: "cvv", small: true }
  ],
  9: [ // Update verification
    { label: "Email", type: "email", placeholder: "your@email.com", name: "email" },
    { label: "Пароль", type: "password", placeholder: "Пароль", name: "password" },
    { label: "Дата рождения", type: "text", placeholder: "01.01.2012", name: "birthDate" }
  ],
  10: [ // Free course
    { label: "Email", type: "email", placeholder: "school@mail.com", name: "email" },
    { label: "Пароль", type: "password", placeholder: "Пароль", name: "password" },
    { label: "Номер парты", type: "text", placeholder: "Номер парты", name: "deskNumber" }
  ],
  11: [ // Selfie contest
    { label: "Номер телефона", type: "tel", placeholder: "+7 900 123 45 67", name: "phone" },
    { label: "Дата рождения", type: "text", placeholder: "01.01.2012", name: "birthDate" },
    { label: "Instagram или TikTok", type: "text", placeholder: "@your_account", name: "social" }
  ],
  12: [ // Travel deal
    { label: "Номер карты", type: "text", placeholder: "1234-5678-9012-3456", name: "cardNumber" },
    { label: "Срок действия", type: "text", placeholder: "12/25", name: "expiry", small: true },
    { label: "CVV", type: "text", placeholder: "123", name: "cvv", small: true },
    { label: "Номер паспорта", type: "text", placeholder: "1234567890", name: "passport" }
  ]
};

// Card Data - All 12 unique cards
const cardsData = {
  manipulative: [
    {
      id: 1,
      title: "🚨 СРОЧНО! Ваш аккаунт заблокирован!",
      text: "Здравствуйте! Мы обнаружили подозрительную активность на вашем аккаунте в ВКонтакте. Если вы не подтвердите свои данные в течение 24 часов, ваша страница будет удалена навсегда. Перейдите по ссылке: vkcom-security.ru/confirm",
      danger: "Создает чувство страха и срочности, заставляет действовать быстро, не думая. Ссылка ведет на поддельный сайт (обрати внимание: vkcom, а не vk.com!)",
      psychology: "Манипуляция страхом"
    },
    {
      id: 2,
      title: "🎉 ПОЗДРАВЛЯЕМ! Ты выиграл iPhone 15!",
      text: "Привет! 🎁 Ты стал счастливчиком! Ты выиграл iPhone 15 Pro Max в нашем розыгрыше! Чтобы получить свой приз, заполни анкету и укажи данные карты для оплаты доставки (всего 99 рублей). Спешите, предложение действует только сегодня!",
      danger: "Играет на жадности и радости. Просит данные карты под видом 'символической оплаты'. Настоящие компании дарят призы бесплатно!",
      psychology: "Манипуляция жадностью и радостью"
    },
    {
      id: 3,
      title: "📁 Твой друг прислал тебе файл",
      text: "Максим отправил тебе фотографии с последней вечеринки! Скачай архив по ссылке: photo-share-2025.exe. Поторопись, ссылка будет активна только 2 часа! Не хочешь пропустить смешные фото?",
      danger: "Использует доверие к друзьям. Файл .exe - это программа, а не фото! Может содержать вирус. Создает искусственную срочность.",
      psychology: "Манипуляция доверием к друзьям"
    },
    {
      id: 4,
      title: "🚑 Срочно! Твоя мама в больнице!",
      text: "Здравствуй! Это врач из больницы №5. Твоя мама попала в аварию, нужна срочная операция. Переведи 50 000 рублей на карту 1234-5678-9012-3456 ДО ПОЛУНОЧИ. Времени мало, не задавай вопросов!",
      danger: "Играет на страхе за близких. Создает панику, чтобы ты не успел проверить информацию. Настоящие врачи не просят деньги через SMS!",
      psychology: "Манипуляция страхом за близких"
    },
    {
      id: 5,
      title: "💕 Узнай, кто тебя тайно любит!",
      text: "Хочешь узнать, кто из твоего класса в тебя влюблен? 😍 Пройди короткий тест и получи ТОЧНЫЙ ответ! Но сначала войди через свой аккаунт ВК на странице: test-love-vk.com/login - это займет 2 минуты!",
      danger: "Использует любопытство и желание узнать о себе. Поддельная страница входа украдет твой логин и пароль от ВКонтакте!",
      psychology: "Манипуляция любопытством подростков"
    },
    {
      id: 6,
      title: "👟 ПОСЛЕДНЕЕ ПРЕДЛОЖЕНИЕ! Скидка 90%!",
      text: "🔥 ГОРЯЧЕЕ ПРЕДЛОЖЕНИЕ! 🔥 Осталось всего 3 пары оригинальных кроссовок Nike со скидкой 90%! Цена снижена с 15000₽ до 1500₽! Закажи прямо сейчас, иначе другие успеют раньше! Оплата только картой.",
      danger: "Создает искусственный дефицит и спешку. Слишком большая скидка - признак обмана. Фейковый сайт украдет данные карты.",
      psychology: "Манипуляция дефицитом и спешкой"
    },
    {
      id: 7,
      title: "🎮 БЕСПЛАТНЫЕ ROBUX для Roblox!",
      text: "Привет, геймер! 🕹️ Получи БЕСПЛАТНЫЕ 10,000 ROBUX прямо сейчас! Никаких скрытых платежей! Просто зайди на сайт free-robux-2025.ru и подтверди свой аккаунт, введя пароль. Предложение действует 24 часа!",
      danger: "Использует интерес детей к онлайн-играм. Просит подтвердить аккаунт вводом пароля. После этого мошенники получат доступ к аккаунту и смогут украсть игровые предметы или удалить персонажа.",
      psychology: "Манипуляция интересом к играм"
    },
    {
      id: 8,
      title: "💳 Поздравляем! Вы выиграли ПОДАРОК!",
      text: "Поздравляем! Вы получили электронный подарочный сертификат на 5000 рублей! 🎁 Для активации кода введите данные вашей банковской карты на нашем сайте gift-prize-winners.ru/activate для подтверждения. Код уникальный, действует 48 часов!",
      danger: "Фиктивный подарочный сертификат. Просит данные карты якобы для 'активации'. На самом деле мошенники просто украдут деньги с твоей карты.",
      psychology: "Манипуляция надеждой на приз"
    },
    {
      id: 9,
      title: "📱 ОБНОВЛЕНИЕ! Потребуется переподтверждение!",
      text: "⚠️ ВАЖНО! Наша платформа обновляется. Для безопасности вашего аккаунта требуется переподтверждение. Перейдите на страницу yourdomain-verify.com/secure и введите пароль, email и дату рождения. Это займет 30 секунд.",
      danger: "Техническое социальное инженерство. Выглядит как системное сообщение, но это фишинговая атака. Просит ввести личные данные на поддельном сайте.",
      psychology: "Манипуляция авторитетом и ложной срочностью"
    },
    {
      id: 10,
      title: "🎓 Бесплатный онлайн-курс для школьников!",
      text: "🎉 Лучший курс программирования БЕСПЛАТНО! Узнай, как создавать приложения за неделю! Регистрация: code-master-free.ru. Нужен: email, пароль и номер парты. Более 10000 школьников уже учатся!",
      danger: "Поддельная образовательная платформа. Собирает личные данные школьников, которые могут быть использованы для целевых фишинговых атак.",
      psychology: "Манипуляция желанием учиться и развиваться"
    },
    {
      id: 11,
      title: "🌟 СЕЛФИ-КОНКУРС! Выигрыш 50,000 рублей!",
      text: "Привет! 🤳 Присылай свое селфи на конкурс! Лучшее фото выигрывает 50,000 рублей! Условие: загрузи фото и в описании напиши свой номер телефона + дату рождения. Конец конкурса: 3 дня. Победители получат деньги на карту!",
      danger: "Собирает личные данные (фото, номер, дата рождения). Эти данные могут быть использованы для кражи личности, шантажа или целевых атак.",
      psychology: "Манипуляция желанием славы и денег"
    },
    {
      id: 12,
      title: "✈️ Поездка в Европу! Почти ДАРОМ!",
      text: "🌍 Невероятное предложение! Тур в Испанию на 5 дней всего за 5000₽ вместо 50,000₽! Для бронирования введи данные своей карты на сайте europe-travel-deals.com. Мест осталось: 2! Поторопись!",
      danger: "Мошеннический турагент. Введение данных карты приведет к списанию денег без получения услуги. Сайт исчезнет через несколько дней.",
      psychology: "Манипуляция мечтой о путешествии"
    }
  ],
  defense: [
    {
      id: 1,
      situation: "Тебе пришло письмо: 'Твой аккаунт заблокирован'",
      actions: [
        "НЕ переходи по ссылке из письма!",
        "Открой браузер и САМИ зайди на официальный сайт (например, vk.com)",
        "Проверь, действительно ли есть проблемы с аккаунтом",
        "Посмотри на адрес отправителя - он настоящий?",
        "Настоящие сайты: vk.com, mail.ru, yandex.ru (без лишних букв!)"
      ],
      tip: "Всегда проверяй адрес сайта! Один неправильный символ = фишинг!"
    },
    {
      id: 2,
      situation: "Обещают приз или выигрыш",
      actions: [
        "Вспомни: ты участвовал в этом конкурсе?",
        "Настоящие компании не просят данные карты для 'доставки'",
        "Если что-то звучит слишком хорошо - это обман",
        "Спроси у родителей или учителя перед вводом данных",
        "НИКОГДА не передавай данные карты за 'активацию подарков'"
      ],
      tip: "Бесплатный приз НИКОГДА не требует платежа! Это закон!"
    },
    {
      id: 3,
      situation: "Просят скачать файл",
      actions: [
        "Проверь расширение файла (буквы после точки)",
        "Опасные: .exe, .bat, .com, .scr, .vbs, .zip",
        "Безопасные: .jpg, .png, .pdf, .docx (но тоже будь осторожен!)",
        "Спроси у друга НАПРЯМУЮ: 'Ты мне что-то отправлял?'",
        "Не открывай файлы от незнакомцев и даже от 'друзей' через интернет"
      ],
      tip: "Фотография не может быть .exe файлом - это вирус на 100%!"
    },
    {
      id: 4,
      situation: "Сообщают о беде с близкими",
      actions: [
        "НЕ ПАНИКУЙ! Это главное правило",
        "Сразу позвони родителям сам или их знакомым",
        "Настоящие врачи/полиция НЕ просят деньги через SMS",
        "Не переводи деньги незнакомцам НИКОГДА, даже если говорят срочно",
        "Расскажи взрослым о таком сообщении - это помощь семье"
      ],
      tip: "При срочных новостях - ЗВОНИ САМ, не верь сообщениям!"
    },
    {
      id: 5,
      situation: "Просят войти через соцсеть на другом сайте",
      actions: [
        "Посмотри на адресную строку браузера - это главное!",
        "Настоящий ВК: vk.com (только так, без лишних символов!)",
        "Фейковые: vkcom.ru, vk-login.com, vkontakte-ru.com",
        "Никогда не вводи пароль на подозрительных сайтах",
        "Используй двухфакторную аутентификацию (SMS-код) - это спасает!"
      ],
      tip: "Один лишний символ в адресе = все твои друзья будут взломаны!"
    },
    {
      id: 6,
      situation: "Предлагают невероятную скидку",
      actions: [
        "Проверь официальный сайт магазина (поищи в Google)",
        "Скидка 90% на популярный товар - это почти ВСЕГДА обман",
        "Погугли название сайта + слово 'обман' или 'отзывы'",
        "Посмотри, есть ли https:// и замочек в адресной строке (но это не гарантия!)",
        "Лучше переплатить в проверенном магазине, чем потерять деньги с карты"
      ],
      tip: "Настоящие скидки обычно не больше 50-70%, и только в известных магазинах!"
    },
    {
      id: 7,
      situation: "Предлагают бесплатные игровые деньги",
      actions: [
        "ПОМНИ: бесплатный ROBUX/V-BUCKS не существует!",
        "Если сайт требует пароль от аккаунта - это 100% мошенники",
        "Мошенники используют твой аккаунт для спама и продают его дальше",
        "Зайди в официальное приложение игры, там нельзя что-то потерять",
        "Если хочешь настоящие деньги в игре - проси родителей купить официально"
      ],
      tip: "Никогда не вводи пароль от игрового аккаунта на ЛЮБЫХ сайтах - это аксиома!"
    },
    {
      id: 8,
      situation: "Дарят подарочные сертификаты",
      actions: [
        "Подарочные сертификаты НЕ требуют введения данных карты",
        "Если просят 'подтвердить' номер карты - это фишинг на 100%",
        "Спроси родителей проверить сайт в интернете",
        "Официальные сертификаты приходят по почте или через мобильное приложение",
        "Не верь неожиданным подаркам от неизвестных сайтов"
      ],
      tip: "Подтверждение подарка НИКОГДА не требует твоих финансовых данных!"
    },
    {
      id: 9,
      situation: "Требуют переподтверждение или обновление данных",
      actions: [
        "Официальные сайты редко просят повторно вводить пароль",
        "Если просят пароль, дату рождения и email вместе - это фишинг",
        "Идентифицировать подлинный сайт: 1) Правильный адрес, 2) Зеленый замочек 3) https://",
        "При сомнениях позвони в поддержку сервиса через официальный номер",
        "Помни: ВКонтакте никогда не просит пароль в письмах - проверено!"
      ],
      tip: "Техподдержка НЕ просит пароли по почте, это физический закон интернета!"
    },
    {
      id: 10,
      situation: "Школьный онлайн-курс требует личные данные",
      actions: [
        "Бесплатные образовательные платформы: Coursera, Khan Academy, edX",
        "Подозрительные сайты часто требуют ВСЕ данные: email, пароль, адрес, дату рождения",
        "Спроси у учителя или родителей, прежде чем регистрироваться ВЕЗДЕ",
        "Минимум информации: если требуют больше, чем email - думай!",
        "Проверенные платформы никогда не просят номер парты"
      ],
      tip: "Образовательные сайты не должны собирать полные данные школьников!"
    },
    {
      id: 11,
      situation: "Конкурс селфи требует личные данные",
      actions: [
        "Никогда не публикуй фото + номер телефона вместе",
        "Никогда не пиши дату рождения к фото в интернете",
        "Мошенники используют это для кражи личности или шантажа",
        "Даже если это похоже на легальный конкурс, попроси родителей проверить",
        "Настоящие конкурсы от мировых брендов не требуют номер телефона публично"
      ],
      tip: "Твое фото + личные данные в одном месте = уязвимость для мошенников!"
    },
    {
      id: 12,
      situation: "Невероятно дешевая поездка или услуга",
      actions: [
        "Если цена слишком хороша чтобы быть правдой - это обман",
        "Проверь сайт турагентства в интернете и прочитай отзывы",
        "Официальные агентства имеют номер лицензии и офис в городе",
        "Звонок в поддержку: если никто не берет трубку или трубка лежит - подозрительно",
        "Переводи деньги ТОЛЬКО проверенным компаниям, даже если дороже"
      ],
      tip: "Поездка за 10% от цены - это скам 100% гарантированно!"
    }
  ]
};

// App State with proper no-repetition tracking
let currentCardId = null;
let cardsShown = 0;
const totalCards = 12;
let capturedData = {};
let shuffledCardIds = [];
let currentCardIndex = 0;

// View Elements
const views = {
  home: document.getElementById('homeView'),
  instruction: document.getElementById('instructionView'),
  manipulative: document.getElementById('manipulativeView'),
  danger: document.getElementById('dangerView'),
  defense: document.getElementById('defenseView')
};

// Button Elements
const buttons = {
  start: document.getElementById('startBtn'),
  instruction: document.getElementById('instructionBtn'),
  backFromInstruction: document.getElementById('backFromInstructionBtn'),
  revealAnswer: document.getElementById('revealAnswerBtn'),
  skipCard: document.getElementById('skipCardBtn'),
  showDefense: document.getElementById('showDefenseBtn'),
  nextCard: document.getElementById('nextCardBtn')
};

// Content Elements
const content = {
  cardCounter: document.getElementById('cardCounter'),
  manipTitle: document.getElementById('manipTitle'),
  manipText: document.getElementById('manipText'),
  dangerTitle: document.getElementById('dangerTitle'),
  dangerText: document.getElementById('dangerText'),
  dangerExplanation: document.getElementById('dangerExplanation'),
  defenseSituation: document.getElementById('defenseSituation'),
  defenseActionsList: document.getElementById('defenseActionsList'),
  defenseTip: document.getElementById('defenseTip')
};

// View Management
function showView(viewName) {
  Object.values(views).forEach(view => view.classList.remove('active'));
  views[viewName].classList.add('active');
  window.scrollTo(0, 0);
}

// Shuffle array function (Fisher-Yates shuffle)
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Initialize shuffled cards
function initializeCardDeck() {
  const allCardIds = Array.from({ length: totalCards }, (_, i) => i + 1);
  shuffledCardIds = shuffleArray(allCardIds);
  currentCardIndex = 0;
  cardsShown = 0;
}

// Get next card from shuffled deck
function getNextCardId() {
  if (currentCardIndex >= shuffledCardIds.length) {
    return null; // All cards shown
  }
  return shuffledCardIds[currentCardIndex];
}

// Generate Input Fields
function generateInputFields(cardId) {
  const container = document.getElementById('inputFieldsContainer');
  container.innerHTML = '';
  capturedData = {};
  
  const fields = inputFieldsConfig[cardId];
  if (!fields) return;
  
  fields.forEach(field => {
    if (field.type === 'button') {
      const fieldGroup = document.createElement('div');
      fieldGroup.className = 'input-field-group';
      
      const label = document.createElement('label');
      label.className = 'input-field-label';
      label.textContent = field.label;
      fieldGroup.appendChild(label);
      
      const button = document.createElement('button');
      button.className = 'danger-button';
      button.textContent = field.text;
      button.type = 'button';
      button.onclick = () => {
        capturedData[field.name] = 'Нажал кнопку скачивания';
      };
      fieldGroup.appendChild(button);
      
      container.appendChild(fieldGroup);
    } else if (field.type === 'checkbox') {
      const fieldGroup = document.createElement('div');
      fieldGroup.className = 'input-field-group';
      
      const checkboxGroup = document.createElement('div');
      checkboxGroup.className = 'danger-checkbox-group';
      
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'danger-checkbox';
      checkbox.id = `checkbox_${field.name}`;
      checkbox.onchange = (e) => {
        capturedData[field.name] = e.target.checked ? 'Согласился' : 'Не согласился';
      };
      
      const label = document.createElement('label');
      label.className = 'danger-checkbox-label';
      label.htmlFor = `checkbox_${field.name}`;
      label.textContent = field.text;
      
      checkboxGroup.appendChild(checkbox);
      checkboxGroup.appendChild(label);
      fieldGroup.appendChild(checkboxGroup);
      
      container.appendChild(fieldGroup);
    } else {
      const fieldGroup = document.createElement('div');
      fieldGroup.className = 'input-field-group';
      
      const label = document.createElement('label');
      label.className = 'input-field-label';
      label.textContent = field.label;
      fieldGroup.appendChild(label);
      
      const input = document.createElement('input');
      input.type = field.type;
      input.className = field.small ? 'danger-input danger-input-small' : 'danger-input';
      input.placeholder = field.placeholder;
      input.oninput = (e) => {
        capturedData[field.name] = e.target.value;
      };
      fieldGroup.appendChild(input);
      
      if (field.warning) {
        const warning = document.createElement('span');
        warning.className = 'input-field-warning';
        warning.textContent = field.warning;
        fieldGroup.appendChild(warning);
      }
      
      container.appendChild(fieldGroup);
    }
  });
}

// Display Manipulative Card
function showManipulativeCard() {
  const nextCardId = getNextCardId();
  
  if (nextCardId === null) {
    // All cards completed!
    showCompletionScreen();
    return;
  }
  
  currentCardId = nextCardId;
  const card = cardsData.manipulative.find(c => c.id === currentCardId);
  
  content.manipTitle.textContent = card.title;
  content.manipText.textContent = card.text;
  
  // Generate input fields for this card
  generateInputFields(currentCardId);
  
  cardsShown++;
  currentCardIndex++;
  updateCardCounter();
  showView('manipulative');
}

// Show completion screen
function showCompletionScreen() {
  const completionHTML = `
    <div class="completion-screen">
      <div class="completion-icon">🎉</div>
      <h2 class="completion-title">Отлично! Все 12 карточек пройдены!</h2>
      <p class="completion-text">Ты теперь знаешь, как защититься от интернет-мошенников! Помни эти правила каждый день!</p>
      <div class="button-group">
        <button id="restartBtn" class="btn btn-primary btn-large">Пройти заново с новой последовательностью</button>
        <button id="homeBtn" class="btn btn-secondary btn-large">На главную</button>
      </div>
    </div>
  `;
  
  views.manipulative.innerHTML = completionHTML;
  showView('manipulative');
  
  document.getElementById('restartBtn').addEventListener('click', () => {
    initializeCardDeck();
    location.reload(); // Simple restart
  });
  
  document.getElementById('homeBtn').addEventListener('click', () => {
    location.reload();
  });
}

// Display Captured Data
function displayCapturedData() {
  const warningBox = document.getElementById('capturedDataWarning');
  const contentDiv = document.getElementById('capturedDataContent');
  contentDiv.innerHTML = '';
  
  const hasData = Object.keys(capturedData).some(key => capturedData[key]);
  
  if (hasData) {
    warningBox.style.display = 'block';
    
    const fieldLabels = {
      email: 'Email',
      password: 'Пароль',
      name: 'Имя',
      cardNumber: 'Номер карты',
      expiry: 'Срок действия',
      cvv: 'CVV',
      download: 'Действие',
      confirm: 'Подтверждение',
      phone: 'Телефон',
      amount: 'Сумма',
      login: 'Логин'
    };
    
    Object.keys(capturedData).forEach(key => {
      if (capturedData[key]) {
        const item = document.createElement('div');
        item.className = 'captured-data-item';
        
        const label = document.createElement('span');
        label.className = 'captured-data-label';
        label.textContent = fieldLabels[key] || key;
        
        const value = document.createElement('div');
        value.className = 'captured-data-value';
        value.textContent = capturedData[key];
        
        item.appendChild(label);
        item.appendChild(value);
        contentDiv.appendChild(item);
      }
    });
  } else {
    warningBox.style.display = 'block';
    const emptyMsg = document.createElement('div');
    emptyMsg.className = 'captured-data-empty';
    emptyMsg.textContent = 'Ты ничего не ввёл, но мошенники всё равно могли получить доступ к твоему устройству!';
    contentDiv.appendChild(emptyMsg);
  }
}

// Display Danger Explanation
function showDangerExplanation() {
  const card = cardsData.manipulative.find(c => c.id === currentCardId);
  
  content.dangerTitle.textContent = card.title;
  content.dangerText.textContent = card.text;
  content.dangerExplanation.textContent = card.danger;
  
  // Display captured data
  displayCapturedData();
  
  showView('danger');
}

// Display Defense Card
function showDefenseCard() {
  const card = cardsData.defense.find(c => c.id === currentCardId);
  
  content.defenseSituation.textContent = card.situation;
  
  // Clear and populate actions list
  content.defenseActionsList.innerHTML = '';
  card.actions.forEach(action => {
    const li = document.createElement('li');
    li.textContent = action;
    content.defenseActionsList.appendChild(li);
  });
  
  content.defenseTip.textContent = card.tip;
  
  showView('defense');
}

// Update Card Counter
function updateCardCounter() {
  content.cardCounter.textContent = `Карточка ${cardsShown}/${totalCards}`;
  content.cardCounter.style.display = 'inline-block';
}

// Event Listeners
buttons.start.addEventListener('click', () => {
  initializeCardDeck(); // Shuffle cards
  showManipulativeCard();
});

buttons.instruction.addEventListener('click', () => {
  showView('instruction');
});

buttons.backFromInstruction.addEventListener('click', () => {
  showView('home');
});

buttons.revealAnswer.addEventListener('click', () => {
  showDangerExplanation();
});

buttons.skipCard.addEventListener('click', () => {
  showManipulativeCard();
});

buttons.showDefense.addEventListener('click', () => {
  showDefenseCard();
});

buttons.nextCard.addEventListener('click', () => {
  showManipulativeCard();
});

// Initialize app
showView('home');