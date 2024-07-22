export const isDemoMode = true;

// export const serverPath = "http://localhost:8080/requests"; // для локального JSON сервера
export const serverPath = "https://chiseled-aback-check.glitch.me/requests";

export const courseNames = [
  { id: "course-html", title: "Курс по верстке" },
  { id: "course-js", title: "Курс по JavaScript" },
  { id: "course-vue", title: "Курс по VUE JS" },
  { id: "course-php", title: "Курс по PHP" },
  { id: "course-wordpress", title: "Курс по WordPress" },
];

export const requestStatus = [
  { id: "new", className: "badge-danger", title: "Новый" },
  { id: "inwork", className: "badge-warning", title: "В работе" },
  { id: "complete", className: "badge-success", title: "Завершенный" },
];
