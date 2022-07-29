<template>
    <Title
        title="Instrumentos Financieros"
        description="Contratos negociables que facilitan el flujo de capital entre dos partes donde el tenedor gozará de un activo financiero el cual le da derecho a recibir ciertos recursos económicos y el emisor tendrá la obligación de liquidar ese derecho.
"
      />
    <div class="flex flex-col items-center justify-center gap-20 pt-20">
      <MainProjectItem
        key="proj.id"
        name="Bonos"
        description="Instrumento financiero de deuda que emite una empresa o entidad con fines de financiar su operación. La emisión de estos obliga al emisor a devolver la cantidad prestada más una cantidad de intereses a una tasa pactada previamente con el comprador."
      />
      <ActionButton link="/calculadora-bonos">Calculadora de bonos</ActionButton>
      <MainProjectItem
        key="proj.id"
        name="Fibras"
        description="Instrumentos de inversión que sirven para financiar la adquisición o construcción de bienes inmuebles para su posterior arrendamiento. El comprador adquiere derechos sobre los ingresos de las rentas hasta un 95%."
      />
      <MainProjectItem
        key="proj.id"
        name="Warrants"
        description="Instrumento financiero que confiere a sus tenedores el derecho de comprar o vender un activo a un precio y en una fecha establecida (futuro). El ejercicio de este instrumento es opcional pero en caso de no ejercerlo se deberá pagar una comisión."
      />
      <MainProjectItem
        key="proj.id"
        name="Fondos de Inversión"
        description="Portafolios con una combinación de activos financieros e instrumentos que tienen una gestión común y son constituidos a través de un intermediario financiero."
      />
      <div class="grid grid-flow-col text-center grid-rows-1 grid-cols-4">
        <div class="row-start-1 col-span-4">
          <h3 class="text-3xl font-theme_bold text-head_text">Calificación de Fondos</h3>
        </div>
        <div class="row-start-2 col-span-2 mt-10 mr-5">
          <h3 class="text-2xl font-theme_bold text-head_text">Calidad Crediticia</h3>
          <p class="text-sm lg:text-lg">Capacidad de los emisores de pagar sus deudas.</p>
        </div>
        <div class="row-start-2 col-span-2 mt-10 ml-5">
          <h3 class="text-2xl font-theme_bold text-head_text">Riesgo de Mercado</h3>
          <p class="text-sm lg:text-lg">Sensibilidad del valor de la cartera a cambios de mercado.</p>
        </div>
      </div>
    </div>
</template>

<script>
import MainProjectItem from "../components/ui/MainProjectItem.vue";
import Title from "../components/ui/Title.vue";
import ActionButton from "../components/ui/ActionButton.vue";
import Calculator from "../components/ui/Calculator.vue";

export default {
  components: { MainProjectItem , Title, ActionButton, Calculator},

};
</script>
