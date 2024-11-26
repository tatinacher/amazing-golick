const buddsTags = [
  {
    name: "@",
    x: 0.17,
    y: 0.29,
    className: ["purple", "round"],
    rotation: -15,
    width: 98,
    height: 98,
  },
  {
    name: "Редизайн",
    x: 0.3,
    y: 0.29,
    className: ["white"],
    rotation: 15,
    width: 265,
    height: 98,
  },
  {
    name: "UI",
    x: 0.24,
    y: 0.34,
    className: ["white"],
    rotation: 15,
    width: 145,
    height: 98,
  },
  {
    name: "%",
    x: 0.33,
    y: 0.36,
    className: ["green", "round"],
    rotation: 15,
    width: 98,
    height: 98,
  },
  {
    name: "Дизайн",
    x: 0.4,
    y: 0.23,
    className: ["white"],
    rotation: -15,
    width: 233,
    height: 98,
  },
  {
    name: "Кешбэк-сервис",
    x: 0.51,
    y: 0.32,
    className: ["white"],
    rotation: 30,
    width: 354,
    height: 98,
  },
  {
    name: "Аудит",
    x: 0.44,
    y: 0.37,
    className: ["white"],
    rotation: 15,
    width: 207,
    height: 98,
  },
  {
    name: "Приложение",
    x: 0.6,
    y: 0.27,
    className: ["white"],
    rotation: 15,
    width: 315,
    height: 98,
  },
  {
    name: "Мобильный",
    x: 0.73,
    y: 0.35,
    className: ["white"],
    rotation: -15,
    width: 297,
    height: 98,
  },
  {
    name: "UX",
    x: 0.78,
    y: 0.27,
    className: ["white"],
    rotation: -30,
    width: 157,
    height: 98,
  },
  {
    name: "#",
    x: 0.71,
    y: 0.23,
    className: ["purple", "round"],
    rotation: -15,
    width: 98,
    height: 98,
  },
  {
    name: "//",
    x: 0.87,
    y: 0.3,
    className: ["green", "round"],
    rotation: 15,
    width: 98,
    height: 98,
  },
];

// var p = document.getElementById("quote_text");
// p.innerHTML = "";
// var n = 0;
// var str =
//   "Хотел бы я знать о вас, когда только-только начинал работу над приложением Budds. Тогда не пришлось бы исправлять ошибки прошлой команды";
// var typeTimer = setInterval(function () {
//   n = n + 1;
//   p.innerHTML = str.slice(0, n);
//   if (n === str.length) {
//     clearInterval(typeTimer);
//     p.innerHTML = str;
//     n = 0;
//     setInterval(function () {
//       if (n === 0) {
//         p.innerHTML = str + "|";
//         n = 1;
//       } else {
//         p.innerHTML = str;
//         n = 0;
//       }
//     }, 500);
//   }
// }, 60);

/* Кнопка вверх */
document.addEventListener("DOMContentLoaded", function () {
  const stickyBtn = document.querySelector(".sticky-btn");
  let scrollTrigger = 2800; // Порог прокрутки, после которого кнопка станет фиксированной

  // Проверяем прокрутку и отображаем кнопку
  window.addEventListener("scroll", function () {
    if (window.scrollY > scrollTrigger) {
      // Показываем кнопку, когда прокрутка больше, чем scrollTrigger
      stickyBtn.classList.add("show");

      // Фиксируем кнопку, когда пользователь прокручивает дальше
      stickyBtn.classList.add("fixed");
    } else {
      // Скрываем кнопку, когда прокрутка меньше порога
      stickyBtn.classList.remove("show");

      // Убираем фиксированное положение кнопки
      stickyBtn.classList.remove("fixed");
    }
  });

  // Обработчик клика на кнопку (прокручиваем страницу наверх)
  stickyBtn.addEventListener("click", function () {
    if (!stickyBtn.classList.contains("clicked")) {
      stickyBtn.classList.add("clicked");
      scrollTrigger = 1700;
      window.scrollTo({
        top: 1800,
        left: 0,
        behavior: "smooth", // Плавная прокрутка
      });
    } else {
      stickyBtn.classList.remove("clicked");
      scrollTrigger = 2800;
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth", // Плавная прокрутка
      });
    }
  });
});

window.addEventListener("DOMContentLoaded", (event) => {
  // Split text into spans
  let typeSplit = new SplitType("[text-split]", {
    types: "words, chars",
    tagName: "span",
  });

  // Link timelines to scroll position
  function createScrollTrigger(triggerElement, timeline) {
    // Reset tl when scroll out of view past bottom of screen
    ScrollTrigger.create({
      trigger: triggerElement,
      start: "top bottom",
      onLeaveBack: () => {
        timeline.progress(0);
        timeline.pause();
      },
    });

    // Play tl when scrolled into view (60% from top of screen)
    ScrollTrigger.create({
      trigger: triggerElement,
      start: "top 80%",
      onEnter: () => timeline.play(),
    });
  }

  $("[letters-slide-up]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".char"), {
      yPercent: 100,
      duration: 0.4,
      ease: "power1.out",
      opacity: 0,
      stagger: { amount: 0.4 },
    });
    createScrollTrigger($(this), tl);
  });

  // Avoid flash of unstyled content
  gsap.set("[text-split]", { opacity: 1 });
});

let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      console.log("is Visible");
      entry.target.lastChild.firstChild.classList.add("animate-line");
      return;
    } else {
      console.log("is not Visible");
      entry.target.lastChild.firstChild.classList.remove("animate-line");
    }
  });
});

const contentBoxList = document.querySelectorAll(".content-card");
contentBoxList.forEach((el) => {
  observer.observe(el);
});

//Matter.js

const svgList = [
  {
    svg: `<svg class="svg-task" xmlns="http://www.w3.org/2000/svg" width="117" height="86" viewBox="0 0 117 86" fill="none">
            <rect x="14.4688" y="0.410156" width="101.592" height="68.1419" rx="10"
                transform="rotate(9.89768 14.4688 0.410156)" fill="#F3F3F3" stroke="#F3F3F3" stroke-width="3" />
            <path d="M10 14.2412L114.063 32.3987M111.327 48.0761L7.26451 29.9186" stroke="#141414" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" />
        </svg>`,
    width: 106,
    height: 68,
    x: 0.2,
    y: 0.6,
  },
  {
    svg: `<svg class="svg-task" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M15.2349 0.375977C17.2292 7.47948 22.7805 13.0307 29.884 15.025C22.7805 17.0192 17.2292 22.5705 15.2349 29.674C13.2407 22.5705 7.68944 17.0192 0.585938 15.025C7.68944 13.0307 13.2407 7.47948 15.2349 0.375977Z" fill="#F3F3F3" />
        </svg>`,
    width: 30,
    height: 30,
    x: 0.25,
    y: 0.9,
  },
  {
    svg: `<svg class="svg-task" xmlns="http://www.w3.org/2000/svg" width="44" height="41" viewBox="0 0 44 41" fill="none">
            <path d="M26.8118 39.3119C26.8118 39.3119 4.86117 31.8107 2.38099 18.2731C1.94254 15.88 2.34679 13.4088 3.52497 11.2801C4.70315 9.15134 6.58248 7.49657 8.8432 6.5973C11.1039 5.69802 13.6064 5.60979 15.9248 6.34761C18.2433 7.08544 20.2345 8.60374 21.5597 10.6442C22.0754 8.26647 23.399 6.14087 25.3053 4.62904C27.2116 3.11721 29.5828 2.31255 32.0155 2.35196C34.4482 2.39136 36.7921 3.27241 38.6484 4.84518C40.5047 6.41796 41.7588 8.58532 42.1973 10.9785C44.6774 24.516 26.8118 39.3119 26.8118 39.3119Z" fill="#B9F353" stroke="#B9F353" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        </svg>`,
    width: 41,
    height: 36,
    x: 0.3,
    y: 0.55,
  },
  {
    svg: `<svg class="svg-task" xmlns="http://www.w3.org/2000/svg" width="147" height="170" viewBox="0 0 147 170" fill="none">
            <path d="M23.563 76.0151L27.2222 110.229L21.5354 123.836L52.1118 136.615L82.6882 149.394L88.375 135.788L115.292 114.353L100.865 19.9657L74.1794 83.8143C80.7416 86.5571 83.8382 94.1003 81.0955 100.663C78.3528 107.225 70.8095 110.321 64.2472 107.579C57.6848 104.836 54.5883 97.2928 57.331 90.7304C60.0737 84.1681 67.617 81.0716 74.1794 83.8143L100.865 19.9657L23.563 76.0151Z" fill="#7E58F6" />
            <path d="M15.8487 137.442L46.4251 150.222L77.0015 163.001L82.6882 149.394L52.1118 136.615L21.5354 123.836L15.8487 137.442Z" fill="#7E58F6" />
            <path d="M100.865 19.9657L23.563 76.0151L27.2222 110.229L21.5354 123.836M100.865 19.9657L115.292 114.353L88.375 135.788L82.6882 149.394M100.865 19.9657L74.1794 83.8143M21.5354 123.836L15.8487 137.442L46.4251 150.222L77.0015 163.001L82.6882 149.394M21.5354 123.836L52.1118 136.615L82.6882 149.394M74.1794 83.8143C80.7416 86.5571 83.8382 94.1003 81.0955 100.663C78.3528 107.225 70.8095 110.321 64.2472 107.579C57.6848 104.836 54.5883 97.2928 57.331 90.7304C60.0737 84.1681 67.617 81.0716 74.1794 83.8143Z" stroke="#7E58F6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M18.4453 122.545L52.1102 136.615L85.7751 150.685" stroke="#141414" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M100.867 19.9669L74.1821 83.8154" stroke="#141414" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M64.2469 107.579C70.8093 110.322 78.3525 107.225 81.0952 100.663C83.8379 94.1008 80.7413 86.5575 74.1791 83.8147C67.6167 81.072 60.0735 84.1685 57.3308 90.7309C54.5881 97.2932 57.6845 104.836 64.2469 107.579Z" stroke="#141414" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        </svg>`,
    width: 100,
    height: 142,
    x: 0.5,
    y: 0.7,
  },

  {
    svg: `<svg class="svg-task" xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
  <path d="M18.1234 0.981445C20.5629 9.67121 27.3538 16.4621 36.0436 18.9017C27.3538 21.3413 20.5629 28.1321 18.1234 36.8219C15.6838 28.1321 8.89289 21.3413 0.203125 18.9017C8.89289 16.4621 15.6838 9.67121 18.1234 0.981445Z" fill="#7E58F6"/>
</svg>`,
    width: 36,
    height: 36,
    x: 0.7,
    y: 0.2,
  },
  {
    svg: `<svg class="svg-task" xmlns="http://www.w3.org/2000/svg" width="47" height="43" viewBox="0 0 47 43" fill="none">
<path d="M20.5375 40.9532C20.5375 40.9532 0.248989 26.6486 1.77248 11.9993C2.0418 9.40958 3.20007 6.99316 5.0502 5.16116C6.90034 3.32917 9.32806 2.19477 11.9203 1.95098C14.5126 1.70718 17.1092 2.36906 19.2685 3.82398C21.4277 5.27891 23.0162 7.43701 23.7637 9.93111C25.0083 7.64418 27.0069 5.85912 29.4193 4.87964C31.8317 3.90016 34.509 3.78676 36.9956 4.55874C39.4823 5.33072 41.6246 6.94039 43.0582 9.11389C44.4918 11.2874 45.128 13.8904 44.8587 16.4802C43.3352 31.1295 20.5375 40.9532 20.5375 40.9532Z" fill="#F3F3F3" stroke="#F3F3F3" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    width: 44,
    height: 38,
    x: 0.8,
    y: 0.77,
  },
];

document.addEventListener("DOMContentLoaded", function () {
  // Импорты Matter.js
  const { Engine, Render, Runner, World, Bodies, Events, Body } = Matter;

  /*
const canvasBlock = document.querySelector(".budds-task");

const canvasBlockTop = canvasBlock.getBoundingClientRect().top + + window.scrollY;

const screen_width = Math.min(canvasBlock.clientWidth, 1440);
const screen_height = canvasBlock.clientHeight;

// Создание движка и рендера
const engine = Engine.create();
const world = engine.world;

// Отключаем гравитацию
engine.gravity.y = 0;

const render = Render.create({
    element: canvasBlock,
    engine: engine,
    options: {
        width: screen_width,
        height: screen_height,
        wireframes: false, // Отключаем каркас
        background: 'transparent',
    },
});

Render.run(render);
const runner = Runner.create();
Runner.run(runner, engine);

const borderWidth = 5;

const bondaries = [
    // Левые и правые границы
    Bodies.rectangle(borderWidth / 2, screen_height / 2, borderWidth, screen_height, {
        isStatic: true, render: {
            fillStyle: 'transparent',
        },
    }),
    Bodies.rectangle(screen_width - borderWidth / 2, screen_height / 2, borderWidth, screen_height, {
        isStatic: true, render: {
            fillStyle: 'transparent',
        },
    }),
    // Верхние и нижние границы
    Bodies.rectangle(screen_width / 2, borderWidth / 2, screen_width, borderWidth, {
        isStatic: true, render: {
            fillStyle: 'transparent',
        },
    }),
    Bodies.rectangle(screen_width / 2, screen_height - borderWidth / 2, screen_width, borderWidth, {
        isStatic: true, render: {
            fillStyle: 'transparent',
        },
    }),
]

World.add(world, bondaries);


svgList.forEach(({ svg, width, height, x, y }) => {
    const svgContainer = document.createElement('div');
    svgContainer.innerHTML = svg;
    canvasBlock.appendChild(svgContainer);

    // Получаем SVG-элемент
    const svgElement = svgContainer.querySelector('svg');
    svgElement.style.transformOrigin = '50% 50%'; // Центр объекта

    const frictionAir = y < 0.5 ? 0.04 : 0.005;

    // Создание тела (например, прямоугольника)
    const body = Bodies.rectangle(screen_width * x, screen_height * y, width, height, {
        isStatic: false, // Объект движется
        restitution: 0.2, // Полный отскок
        frictionAir, // Низкое сопротивление воздуха
        render: {
            fillStyle: 'transparent', // Задаём красный цвет объекту
        },
    });

    Body.setVelocity(body, {
        x: (Math.random() - 0.5) * 0.5, // Скорость по X
        y: (Math.random() - 0.5) * 0.5, // Скорость по Y
    });

    // Постепенно добавляем небольшие случайные силы для "плавания"
    Events.on(engine, 'beforeUpdate', () => {
        world.bodies.forEach((body) => {
            if (!body.isStatic) {
                Body.applyForce(body, body.position, {
                    x: (Math.random() - 0.5) * 0.0001,
                    y: (Math.random() - 0.5) * 0.0001,
                });
            }
        });
    });

    // Добавляем тело в мир
    World.add(world, body);

    // // Синхронизация SVG и Matter.js тела
    Events.on(engine, 'afterUpdate', () => {
        const { x, y } = body.position;
        const angle = body.angle;

        // Применяем позицию и вращение к SVG
        svgElement.style.transform = `
        translate(${x - (width / 2)}px, ${y - (height / 2)}px) 
        rotate(${angle}rad)
    `;
    });

    const initialPosition = { x: body.position.x, y: body.position.y };
    const initialAngle = body.angle;
    let isFallen = false;
	const offset = 200;
  
    window.addEventListener("scroll", () => {
        targetY = initialPosition + window.scrollY;
    });

    Events.on(engine, "beforeUpdate", () => {
      console.log(canvasBlockTop);
        const currentScroll = window.scrollY; // Текущая позиция прокрутки

        if (currentScroll > canvasBlockTop + offset) {
            engine.world.gravity.y = 1; // Включаем гравитацию 
            isFallen = true;
        }
        if (isFallen && currentScroll <= canvasBlockTop + offset) {
            engine.world.gravity.y = 0;
            Body.setPosition(body, initialPosition);
            Body.setAngle(body, initialAngle);
            isFallen = false;
        }
    });
})
  */

  /* ---------BUDDS------------------------------*/

  // Импорты Matter.js

  const canvasBlock = document.querySelector(".budds_animation");

  const canvasBlockTop =
    canvasBlock.getBoundingClientRect().top + +window.scrollY;

  const screen_width = Math.min(canvasBlock.clientWidth, 1440);
  const screen_height = canvasBlock.clientHeight;

  // Создание движка и рендера
  const engine = Engine.create();
  const world = engine.world;

  // Отключаем гравитацию
  engine.gravity.y = 0;

  const render = Render.create({
    element: canvasBlock,
    engine: engine,
    options: {
      width: screen_width,
      height: screen_height,
      wireframes: false, // Отключаем каркас
      background: "transparent",
    },
  });

  Render.run(render);
  const runner = Runner.create();
  Runner.run(runner, engine);

  const borderWidth = 5;

  const bondaries = [
    // Левые и правые границы
    Bodies.rectangle(
      borderWidth / 2,
      screen_height / 2,
      borderWidth,
      screen_height,
      {
        isStatic: true,
        render: {
          fillStyle: "transparent",
        },
      }
    ),
    Bodies.rectangle(
      screen_width - borderWidth / 2,
      screen_height / 2,
      borderWidth,
      screen_height,
      {
        isStatic: true,
        render: {
          fillStyle: "transparent",
        },
      }
    ),
    // Верхние и нижние границы
    Bodies.rectangle(
      screen_width / 2,
      borderWidth / 2,
      screen_width,
      borderWidth,
      {
        isStatic: true,
        render: {
          fillStyle: "transparent",
        },
      }
    ),
    Bodies.rectangle(
      screen_width / 2,
      screen_height - borderWidth / 2,
      screen_width,
      borderWidth,
      {
        isStatic: true,
        render: {
          fillStyle: "transparent",
        },
      }
    ),
  ];

  World.add(world, bondaries);

  buddsTags.forEach(({ name, width, height, x, y, className, rotation }) => {
    //Создаем элемент с текстом
    const textElement = document.createElement("div");
    textElement.className = "text-block";
    textElement.classList.add(...className);
    textElement.innerText = name;
    canvasBlock.appendChild(textElement);

    const frictionAir = 0.005;
    // Создание тела (например, прямоугольника)
    const tag = Bodies.rectangle(
      screen_width * x,
      screen_height * y,
      width,
      height,
      {
        isStatic: false, // Объект движется
        restitution: 0, // Полный отскок
        frictionAir, // Низкое сопротивление воздуха
        render: {
          fillStyle: "transparent", // Задаём красный цвет объекту
        },
        chamfer: {
          radius: 50, // Радиус скругления углов
        },
      }
    );

    Matter.Body.rotate(tag, (rotation * Math.PI) / 180);

    Body.setVelocity(tag, {
      x: (Math.random() - 0.5) * 0.5, // Скорость по X
      y: (Math.random() - 0.5) * 0.5, // Скорость по Y
    });

    // Постепенно добавляем небольшие случайные силы для "плавания"
    Events.on(engine, "beforeUpdate", () => {
      world.bodies.forEach((tag) => {
        if (!tag.isStatic) {
          Body.applyForce(tag, tag.position, {
            x: (Math.random() - 0.5) * 0.0001,
            y: (Math.random() - 0.5) * 0.0001,
          });
        }
      });
    });

    // Добавляем тело в мир
    World.add(world, tag);

    // // Синхронизация SVG и Matter.js тела
    Events.on(engine, "afterUpdate", () => {
      const { x, y } = tag.position;
      const angle = tag.angle;

      // Применяем позицию и вращение к SVG
      textElement.style.transform = `
        translate(${x - width / 2}px, ${y - height / 2}px) 
        rotate(${angle}rad)
    `;
    });

    const initialPosition = { x: tag.position.x, y: tag.position.y };
    const initialAngle = tag.angle;
    let isFallen = false;

    window.addEventListener("scroll", () => {
      targetY = initialPosition + window.scrollY;
    });

    Events.on(engine, "beforeUpdate", () => {
      const currentScroll = window.scrollY; // Текущая позиция прокрутки

      if (currentScroll > canvasBlockTop + 500) {
        engine.world.gravity.y = 1; // Включаем гравитацию
        isFallen = true;
      }
      if (isFallen && currentScroll <= canvasBlockTop + 500) {
        engine.world.gravity.y = 0;
        Body.setPosition(tag, initialPosition);
        Body.setAngle(tag, initialAngle);
        isFallen = false;
      }
    });
  });
});
