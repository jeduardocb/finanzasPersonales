<template>
  <div class="flex flex-col gap-2 lg:gap-4">
    <h3 class="font-theme_bold text-2xl text-head_text">Sistema financiero en México</h3>
    <p>El sistema financiero en México se compone por las siguientes instituciones: </p>
    <div
      class="grid grid-cols-1 slg:grid-cols-2 gap-7 sm:gap-6 pt-8 mx-auto sm:w-5/6 slg:w-full"
    >
      <ProjectItem
        key="01"
        name="Secretaría de Hacienda y Crédito Público"
        image="src/assets/imgs/hacienda.png"
        description="Dependencia del Poder Ejecutivo Federal que tiene como misión proponer, dirigir y controlar la política económica del gobierno en materia financiera, fiscal, de gasto, de ingresos y deuda pública, con el propósito de consolidar un país con crecimiento económico de calidad."
        link="https://www.gob.mx/shcp"
      />
      <ProjectItem
        key="02"
        name="Banco de México"
        image="src/assets/imgs/banxico.jpg"
        description="Banco central del país que emite y circula la moneda nacional y tiene como objetivo el preservar el valor de la misma. Además, promueve el sano desarrollo de los sistemas financieros y de pagos."
        link="https://www.banxico.org.mx/"
      />
      <ProjectItem
        key="03"
        name="Instituto para la Protección del Ahorro Bancario"
        image="src/assets/imgs/ipab.png"
        description="Institución del gobierno federal encargada de administrar el seguro de depósitos bancarios en beneficio y protección de los ahorradores."
        link="https://www.gob.mx/ipab"
      />
      <ProjectItem
        key="04"
        name="CONDUSEF"
        image="src/assets/imgs/condusef.jpg"
        description="Organismo que protege y defiende los intereses y derechos de los usuarios ante las instituciones financieras."
        link="https://www.condusef.gob.mx/"
      />
      <ProjectItem
        key="05"
        name="Comisión Nacional Bancaria y de Valores"
        image="src/assets/imgs/cnbv.png"
        description="Supervisa y regula las instituciones integrantes del sistema financiero mexicano, procurando su estabilidad y correcto funcionamiento."
        link="https://www.gob.mx/cnbv"
      />
      <ProjectItem
        key="06"
        name="Comisión Nacional de Seguros y Fianzas"
        image="src/assets/imgs/cnsf.png"
        description="Supervisa las operaciones de los sectores asegurador y afianzador para asegurar que estas se apeguen al marco normativo, y asegurándose de preservar la solvencia y estabilidad financiera de las mismas."
        link="https://www.gob.mx/cnsf"
      />
      <ProjectItem
        key="07"
        name="CONSAR"
        image="src/assets/imgs/consar.png"
        description="Regula el sistema de ahorro para el retiro con el fin de proteger los intereses de la población trabajadora en lo que respecta al resguardo e inversión de sus recursos."
        link="https://www.gob.mx/consar"
      />
    </div>
  </div>
</template>
<script>
import ProjectItem from "../ui/ProjectItem.vue";

export default {
  components: { ProjectItem },
};
</script>
