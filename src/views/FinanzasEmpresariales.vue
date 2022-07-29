<template>
    <Title
        key="01"
        title="Finanzas Empresariales"
        description="Área de las finanzas que tiene por objetivo incrementar la rentabilidad y, por lo tanto, el valor de una empresa a través de la obtención y aplicación de los recursos de una empresa."
      />
    <div class="flex flex-col items-center justify-center gap-28">
      <Paragraph
        key="proj.id"
        name="Capital de Trabajo"
        description="Hace referencia a los activos circulantes de una empresa y sirve como una medida de liquidez, salud financiera y eficiencia operativa a corto plazo."
        formula = "Capital de Trabajo = Activo Circulante - Pasivo Circulante"
      />
    </div>
    <hr class="bg-squgily bg-repeat border-0 h-[6px]" />
    <div class="flex flex-col gap-2">
      <h3 class="text-3xl font-theme_bold text-head_text">Graveyard</h3>
      <p>Python projects I worked on and are no longer maintained.</p>
      <div class="flex flex-col mt-10 gap-8">
        <div v-for="proj in grave" :key="proj.id" class="flex flex-col gap-1">
          <a class="font-theme_bold text-head_text text-lg" :href="proj.link"
            >{{ proj.name }}
            <Icon class="inline text-xl" icon="ep:top-right" color="#eaeaea"
          /></a>
          <p class="font-theme text-sm lg:text-lg">{{ proj.description }}</p>
        </div>
      </div>
    </div>
</template>

<script>
import Paragraph from "../components/ui/Paragraph.vue";
import Title from "../components/ui/Title.vue";

export default {
  components: { Paragraph , Title},
};
</script>
