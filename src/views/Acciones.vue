<template>
  <Title
    title="Mercado de Valores"
    description="Lugar en que las acciones de las empresas privadas se emiten y negocian."
  />
  <div class="grid grid-flow-col grid-rows-1 grid-cols-3 gap-10 mt-5 mb-5">
    <div>
      <img
        class="shadow-sm bg-white rounded-md w-full rounded-md slg:h-60"
        src="https://media0.giphy.com/media/JtBZm3Getg3dqxK0zP/giphy-downsized-large.gif"
        alt=""
      />
    </div>
    <div class="col-start-2 col-span-2">
      <MainProjectItem
        key="proj.id"
        name="Acciones"
        description="Representan una parte del patrimonio de una sociedad anónima abierta. Su posesión representa un derecho de propiedad y el control de un determinado porcentaje del total de la empresa. El total de acciones de una sociedad representa el total del patrimonio de la misma."
      />
    </div>
  </div>
  <div class="grid grid-flow-col grid-rows-1 grid-cols-4 gap-10 mt-5 mb-5">
    <div class="col-span-2">
      <MainProjectItem
        key="proj.id"
        name="Acciones Comunes"
        description="Aquellas que, de acuerdo con los estatutos sociales de la emisora, no tienen calificación o preferencia alguna."
      />
    </div>
    <div class="col-span-2">
      <MainProjectItem
        key="proj.id"
        name="Acciones Preferentes"
        description="Las acciones preferentes son acciones que se caracterizan por darle al accionista algún valor adicional al de las acciones ordinarias."
      />
      <LinkBtn link="/calculadora-acciones" name="Calculadora" />
    </div>
  </div>
  <hr class="bg-squgily bg-repeat border-0 h-[6px]" />
</template>

<script>
import MainProjectItem from "../components/ui/MainProjectItem.vue";
import Title from "../components/ui/Title.vue";
import LinkBtn from "../components/ui/LinkBtn.vue";

export default {
  components: { MainProjectItem, Title, LinkBtn },
};
</script>
