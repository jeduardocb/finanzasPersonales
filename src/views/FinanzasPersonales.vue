<template>
  <Title
    key="01"
    title="Finanzas Personales"
    description="Aplicación de los principios de finanzas en la gestión de los recursos de un individuo, busca que los individuos conozcan las herramientas o productos financieros a los que tienen acceso y enseña a optimizar el manejo de sus recursos."
  />
  <div class="flex flex-col gap-8 -topbar">
    <br />
    <h3 class="font-theme_bold text-2xl text-head_text">
      Componentes de una planeación personal.
    </h3>
    <ul class="list-disc">
      <li class="pl-4">Obtener recursos financieros.</li>
      <li class="pl-4">Planificación de tu presupuesto.</li>
      <li class="pl-4">Ahorros para gastos inesperados.</li>
      <li class="pl-4">Obtener un crédito de manera inteligente.</li>
      <li class="pl-4">Gastos para cubrir necesidades diarias.</li>
      <li class="pl-4">Controlar riesgos por medio de un seguro.</li>
      <li class="pl-4">Inversiones a largo plazo para un buen futuro.</li>
      <li class="pl-4">Pensar en el retiro y en activos duraderos.</li>
    </ul>
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
        >Calculadora de interés</ActionButton
      >
    </div>
    <MainProjectItem
      key="Créditos"
      name="Amortización"
      description="En este método se realizan una serie de pagos periódicos; cuando estos pagos son iguales, el caso habitual, su tamaño puede determinarse mediante los procedimientos de anualidad."
    />
    <br />
    <h3 class="font-theme_bold text-2xl text-head_text">
      Variables de una tabla de amortización
    </h3>
    <ul class="list-decimal">
      <li class="pl-4">
        <span class="font-bold"> Período: </span>Establece cada uno de los
        períodos en los que se tiene que realizar un pago.
      </li>
      <li class="pl-4">
        <span class="font-bold">Intereses: </span>los intereses que el
        prestatario paga al prestamista en cada período. Se calcula
        multiplicando el tipo de interés pactado por el capital pendiente. Los
        intereses pueden ser fijos o variables.
      </li>
      <li class="pl-4">
        <span class="font-bold">Amortización del capital:</span> Consiste en la
        devolución del préstamo, sin contar los intereses. Es decir, es el
        importe del capital pendiente que se descuenta en cada período.
        Porcentaje de la cuota a pagar que se va a ir a capital.
      </li>
      <li class="pl-4">
        <span class="font-bold">Cuota a pagar:</span> Consiste en la suma de los
        intereses y la amortización del capital. Se calcula con PMT.
      </li>
      <li class="pl-4">
        <span class="font-bold">Capital a pagar:</span> Es lo que resta de pagar
        del prestamo sin contar intereses.
      </li>
      <li class="pl-4">
        <span class="font-bold">Capital:</span> Acumulado de amortizacion (lo
        que se paga a capital).
      </li>
    </ul>

    <br />
    <h3 class="font-theme_bold text-2xl text-head_text">
      Tipos de amortización
    </h3>
    <ul class="list-disc">
      <li class="pl-4">
        <span class="font-bold"> Francesa: </span>Pagos iguales.
      </li>
      <li class="pl-4">
        <span class="font-bold">Alemana: </span>Amortización compuesta (pagos a
        capital) , intereses más bajos.
      </li>
      <li class="pl-4">
        <span class="font-bold">Americana:</span> Pagos de intereses durante la
        vida del crédito, pago de capital al final .
      </li>
    </ul>

    <br />
    <h3 class="font-theme_bold text-2xl text-head_text">
      Tipos de perfiles de gastos
    </h3>
    <ul class="list-disc">
      <li class="pl-4">
        <span class="font-bold"> Saver: </span>El sabe que ahorrar es un deber,
        tienen disciplina para esto.
      </li>
      <li class="pl-4">
        <span class="font-bold">Spender: </span>Lo más imporante es vivir el día
        a día, las personas se deben de dar cuenta cuanto tengo
      </li>
      <li class="pl-4">
        <span class="font-bold">No control:</span> No tienen idea de cuanto
        ganaron ni cuanto gastaron.
      </li>
      <li class="pl-4">
        <span class="font-bold">Distracted:</span> Gasta menos de lo que tiene,
        aún así no saben cuanto ahorraron en algunas ocasiones.
      </li>
      <li class="pl-4">
        <span class="font-bold">Financial:</span> Cuentan con nu budget, control
        de gastos, saben lo que significan las inversiones y usan su dinero
        inteligentemente.
      </li>
    </ul>
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
