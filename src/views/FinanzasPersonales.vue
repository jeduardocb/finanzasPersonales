<template>
  <Title
    key="01"
    title="Finanzas Personales"
    description="Son las finanzas relacionadas con la capacidad de ahorrar por parte de los individuos, así como obtener recursos financieros adicionales procedentes, además engloban las decisiones de inversión de los excedentes de recursos financieros disponibles."
  />
  <div class="flex flex-col gap-8 -topbar">
    <MainProjectItem
      key="Créditos"
      name="Créditos"
      description="Es un préstamo de dinero que una parte otorga a otra, con el compromiso de que, en el futuro, quien lo recibe devolverá dicho préstamo en forma gradual (mediante el pago de cuotas) o en un solo pago y con un interés adicional que compensa a quien presta, por todo el tiempo que no tuvo ese dinero."
    />

    <h3 class="font-theme_bold text-2xl text-head_text">5'Cs del Crédito</h3>
    <ul class="list-disc">
      <li class="pl-4">
        <span class="font-bold"> Carácter: </span>Si la persona es buen pagador,
        historial crediticio.
      </li>
      <li class="pl-4">
        <span class="font-bold">Patrimonio: </span>Si la persona cuenta con el
        patrimonio para cubrir el monto prestado.
      </li>
      <li class="pl-4">
        <span class="font-bold">Capacidad:</span> Activos líquidos de la persona
        con la que realizará los pagos fijados.
      </li>
      <li class="pl-4">
        <span class="font-bold">Colateral: </span>Garantías que se dejan a
        cambio del préstamo
      </li>
      <li class="pl-4">
        <span class="font-bold">Condiciones: </span>Plazo, tasa y demás sobre
        los cuales se hizo el trato del préstamo.
      </li>
    </ul>
    <div class="flex flex-col items-center">
      <ActionButton link="/calculadora-interes"
        >Calculadora de créditos</ActionButton
      >
    </div>
  </div>
</template>
<script>
import Title from "../components/ui/Title.vue";
import MainProjectItem from "../components/ui/MainProjectItem.vue";
import ActionButton from "../components/ui/ActionButton.vue";
export default {
  components: { Title, MainProjectItem, ActionButton },
};
</script>
