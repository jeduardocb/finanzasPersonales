<template>
    <Title
        key="01"
        title="Finanzas Empresariales"
        description="Área de las finanzas que tiene por objetivo incrementar la rentabilidad y, por lo tanto, el valor de una empresa a través de la obtención y aplicación de los recursos de una empresa."
      />
    <div class="flex flex-col items-center justify-center mb-10">
      <Paragraph
        key="proj.id"
        name="Capital de Trabajo"
        description="Hace referencia a los activos circulantes de una empresa y sirve como una medida de liquidez, salud financiera y eficiencia operativa a corto plazo."
        formula = "Capital de Trabajo = Activo Circulante - Pasivo Circulante"
      />
    </div>
        <div class="flex flex-col items-center justify-center gap-15">
      <h3 class="text-3xl font-theme_bold text-head_text">Componentes del capital de trabajo</h3>
    <div>
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-3 mt-5">
        <div class="px-4 sm:px-0">
          <h3 class="text-2xl font-theme_bold">Activos Circulantes</h3>
          <p class="mt-1 text-sm text-gray-600">Beneficios económicos que la empresa puede liquidar o espera recibir en los próximos doce meses.
          </p>
          <span class="text-highlight_text">E J E M P L O S</span>
          <ul class="list-disc ml-5">
            <li>Efectivo y equivalentes.</li>
            <li>Inventario.</li>
            <li>Cuentas y documentos por cobrar.</li>
            <li>Gastos anticipados.</li>
          </ul>
        </div>
      </div>
      <div class="md:col-span-3 mt-5">
        <div class="px-4 sm:px-0">
          <h3 class="text-2xl font-theme_bold">Pasivos Circulantes</h3>
          <p class="mt-1 text-sm text-gray-600">Todas las deudas que una empresa debe o tendrá que pagar en los próximos doce meses. El objetivo general del capital de trabajo es comprender si una empresa podrá cubrir todas estas deudas con los activos circulantes.
          </p>
          <span class="text-highlight_text">E J E M P L O S</span>
          <ul class="list-disc ml-5">
            <li>Cuentas por pagar.</li>
            <li>Sueldos por pagar.</li>
            <li>Porción actual de la deuda a largo plazo.</li>
            <li>Dividendo por pagar.</li>
            <li>Anticipos de ventas.</li>
            <li>Impuesto acumulado por pagar.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
    </div>
    <div class="flex flex-col items-center justify-center gap-20 mt-10">
      <div class="grid grid-flow-col text-center grid-rows-1 grid-cols-3 mt-10">
        <div class="row-start-1 col-span-4">
          <h3 class="text-3xl font-theme_bold text-head_text mb-5">Clasificación del Activo</h3>
        </div>
        <div class="row-start-2">
          <h3 class="text-xl font-theme_bold text-head_text">Activo Circulante</h3>
          <p class="text-sm lg:text-lg">Recursos que están destinados a convertirse en efectivo a corto plazo.</p>
        </div>
        <div class="row-start-2">
          <h3 class="text-xl font-theme_bold text-head_text">Activo Fijo</h3>
          <p class="text-sm lg:text-lg">Recursos de la empresa que se ocupan en el desarrollo de sus actividades del día a día.</p>
        </div>
        <div class="row-start-2">
          <h3 class="text-xl font-theme_bold text-head_text">Activo Diferido</h3>
          <p class="text-sm lg:text-lg">Desembolsos que con el transcurso del tiempo se convierten en gastos.</p>
        </div>
      </div>
      <div class="grid grid-flow-col text-center grid-rows-1 grid-cols-3 mt-10">
        <div class="row-start-1 col-span-4">
          <h3 class="text-3xl font-theme_bold text-head_text mb-5">Clasificación del Pasivo</h3>
        </div>
        <div class="row-start-2">
          <h3 class="text-xl font-theme_bold text-head_text">Pasivo Circulante</h3>
          <p class="text-sm lg:text-lg">Adeudos que la empresa debe de liquidar en un plazo menor a doce meses.</p>
        </div>
        <div class="row-start-2">
          <h3 class="text-xl font-theme_bold text-head_text mt-2">Pasivo Fijo</h3>
          <p class="text-sm lg:text-lg">Adeudos que la empresa debe de liquidar en un plazo mayor a doce meses.</p>
        </div>
        <div class="row-start-2">
          <h3 class="text-xl font-theme_bold text-head_text mt-2">Créditos Diferidos</h3>
          <p class="text-sm lg:text-lg">Importes recibidos a cambio de otrogar un servicio o producto.</p>
        </div>
      </div>
      </div>
      <div class="mt-20">
      <MainProjectItem
        key="proj.id"
        name="Análisis Financiero"
        description="Estudio e interpretación de la información contable de una empresa u organización con el fin de diagnosticar su situación actual y proyectar su desenvolvimiento futuro."
      />
      <p class="text-sm lg:text-lg">Existen tres conceptos básicos sobre los cuales se debe informar:</p>
      <ul class="list-disc text-sm lg:text-lg mt-5 " >
        <li><span class="text-highlight_text">Rentabilidad</span> Se trata de determinar el valor de la compañía, su composición, calidad, evolución y proyección a futuro. Se observan las cuentas relacionadas con ingresos, costos y resultados. </li>
        <li><span class="text-highlight_text">Liquidez</span> Determinar la capacidad de la empresa de hacer frente a sus necesidades de recursos y de cumplir con sus deudas de corto plazo. Se observan variables como: endeudamiento,  activo circulante, periodo de maduración, rotación, etc.</li>
        <li><span class="text-highlight_text">Solvencia</span> Determina la capacidad de la empresa de cumplir con las deudas a largo plazo y su capacidad de inversión para crecimiento. En este caso observamos variables como: endeudamiento a largo plazo, patrimonio, fuentes de financiación, etc.</li>
      </ul>
      </div>
      <div class="flex flex-col items-center justify-center gap-20 pt-20">
      <MainProjectItem
        key="proj.id"
        name="Evaluación de Proyectos de Inversión"
        description="Conjunto de decisiones estructuradas y variables para lograr que un proyecto tenga probabilidades de éxito."
      />
      <ActionButton link="/calculadora-wacc-capm">Calculadora de WACC y CAPM</ActionButton>
      </div>

</template>

<script>
import Paragraph from "../components/ui/Paragraph.vue";
import Title from "../components/ui/Title.vue";
import MainProjectItem from "../components/ui/MainProjectItem.vue";
import ActionButton from "../components/ui/ActionButton.vue"

export default {
  components: { Paragraph , Title, MainProjectItem, ActionButton},
};
</script>
