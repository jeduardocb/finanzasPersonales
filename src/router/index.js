import { createRouter, createWebHistory } from "vue-router";
import NotFound from "../views/NotFound.vue";
import TheHome from "../views/TheHome.vue";
import FinanzasEmpresariales from "../views/FinanzasEmpresariales.vue";
import FinanzasPersonales from "../views/FinanzasPersonales.vue";
import Bonos_Fondos from "../views/Bonos_Fondos.vue";
import Acciones from "../views/Acciones.vue";
import CalculadoraBonos from "../views/CalculadoraBonos.vue";
import CalculadoraAcciones from "../views/CalculadoraAcciones.vue";
import CalculaduraInteres from "../views/CalculadoraInteres.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: TheHome,
  },
  {
    path: "/home",
    name: "home",
    redirect: "/",
  },
  {
    path: "/finanzas-empresariales",
    name: "finanzas-empresariales",
    component: FinanzasEmpresariales,
  },
  {
    path: "/finanzas-personales",
    name: "finanzas-personales",
    component: FinanzasPersonales,
  },
  {
    path: "/acciones",
    name: "acciones",
    component: Acciones,
  },
  {
    path: "/bonos-fondos",
    name: "bonos-fondos",
    component: Bonos_Fondos,
  },
  {
    path: "/calculadora-bonos",
    name: "calculadora-bonos",
    component: CalculadoraBonos,
  },
  {
    path: "/calculadora-acciones",
    name: "calculadora-acciones",
    component: CalculadoraAcciones,
  },
  {
    path: "/calculadora-interes",
    name: "calculadora-interes",
    component: CalculaduraInteres,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to) return { top: 0, behavior: "smooth" };
  },
});

export default router;
