<template>
    <Title
        title="Mercado de Valores"
        description="Lugar en que las acciones de las empresas privadas se emiten y negocian."
      />
<div class="grid grid-flow-col grid-rows-1 grid-cols-3 gap-10 mt-5 mb-5">
  <div>
    <img class="shadow-sm bg-white rounded-md w-full rounded-md slg:h-60" src="https://media0.giphy.com/media/JtBZm3Getg3dqxK0zP/giphy-downsized-large.gif" alt="">
  </div>
  <div class="col-start-2 col-span-2">
    <MainProjectItem
        key="proj.id"
        name="Acciones"
        description="descripción de acciones"
      />
  </div>
</div>
<div class="grid grid-flow-col grid-rows-1 grid-cols-4 gap-10 mt-5 mb-5">
  <div class="col-span-2">
    <MainProjectItem
        key="proj.id"
        name="Acciones Comunes"
        description="descripción de acciones"
      />
  </div>
  <div class="col-span-2">
    <MainProjectItem
        key="proj.id"
        name="Acciones Preferentes"
        description="descripción de acciones da click aqui"
      />
      <LinkBtn 
      link="/calculadora-acciones" 
      name="Calculadora"
      />
  </div>
</div>
<hr class="bg-squgily bg-repeat border-0 h-[6px]" />
</template>

<script>
import MainProjectItem from "../components/ui/MainProjectItem.vue";
import Title from "../components/ui/Title.vue";
import LinkBtn from "../components/ui/LinkBtn.vue";

export default {
  components: { MainProjectItem , Title, LinkBtn},

};
</script>
