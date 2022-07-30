<template>
  <div>
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <div class="px-4 sm:px-0">
          <h3 class="text-2xl font-theme_bold">WACC</h3>
          <h3 class="text-lg font-medium leading-6 text-gray-900">Weighted Average Cost of Capital</h3>
          <p class="mt-1 text-sm text-gray-600">Rendimiento mínimo que debe ofrecer una inversión para que valga la pena realizarla desde el punto de vista de los actuales poseedores de una empresa.</p>
          <div class="flex flex-col items-center justify-center mt-20">
              <p v-if="!error" class="text-3xl">{{wacc}} %</p>
          </div>
        </div>
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2">
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="grid rows-3 gap-6">
                <div class="sm:col-span-3">
                  <label for="cap_percentage" class="block text-sm font-medium">% Porcentaje de Capital</label>
                  <input v-model="cap_percentage" type="number" name="cap_percentage" id="cap_percentage" class="mt-1 p-1 block w-full sm:text-md text-input_black rounded-sm" />
                </div>

                <div class="sm:col-span-3">
                  <label for="costo_capital" class="block text-sm font-medium text-gray-700">Costo de Capital (ke)</label>
                  <input v-model="costo_capital" type="number" name="costo_capital" id="costo_capital" class="mt-1 p-1  block w-full shadow-sm sm:text-md text-input_black rounded-sm" />
                </div>

                <div class="sm:col-span-3">
                  <label for="debt_percentage" class="block text-sm font-medium text-gray-700">% Porcentaje de Deuda</label>
                  <input v-model="debt_percentage" type="number" name="debt_percentage" id="debt_percentage" class="mt-1 p-1 block w-full shadow-sm sm:text-md text-input_black rounded-sm" />
                </div>

                <div class="sm:col-span-3">
                  <label for="costo_deuda" class="block text-sm font-medium text-gray-700">Costo de deuda (kd)</label>
                  <input v-model="costo_deuda" type="number" name="costo_deuda" id="costo_deuda" class="mt-1 p-1 block w-full shadow-sm sm:text-md text-input_black rounded-sm" />
                </div>

                <div class="sm:col-span-3">
                  <label for="isr" class="block text-sm font-medium text-gray-700">ISR</label>
                  <input v-model="isr" type="number" name="isr" id="isr" class="mt-1 p-1 block w-full shadow-sm sm:text-md text-input_black rounded-sm" />
                </div>
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-center sm:px-6">
              <button @click="calculateWACC()" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white hover:bg-button hover:text-input_black hover:border-warning">Calcular</button>
            </div>
            <div>
              <div v-if="error" class="bg-error_msg text-center py-4 lg:px-4 rounded-md">
                <div class="p-2 items-center leading-none lg:rounded-full flex lg:inline-flex" role="alert">
                  <span class="flex rounded-full uppercase px-2 py-1 text-lg font-bold mr-3 text-warning">Error</span>
                  <span class="font-semibold mr-2 text-left flex-auto text-warning">La suma del porcentaje de deuda más el porcentaje de capital debe ser igual a 100%.</span>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>

  <div class="hidden sm:block" aria-hidden="true">
    <div class="py-5">
      <div class="border-t border-gray-200" />
    </div>
  </div>

  <div class="mt-10 sm:mt-0">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <div class="px-4 sm:px-0">
          <h3 class="text-2xl font-theme_bold">CAPM</h3>
          <h3 class="text-lg font-medium leading-6 text-gray-900">Capital Asset Pricing Model</h3>
          <p class="mt-1 text-sm text-gray-600">Describe la relación entre el rendimiento requerido y el riesgo no diversificable de la empresa medida por el coeficiente beta del sector.</p>
          <div class="flex flex-col items-center justify-center mt-7">
              <p class="text-3xl">{{capm}} %</p>
          </div>
        </div>
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2">
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="grid rows-3 gap-6">
                <div class="sm:col-span-3">
                  <label for="valor-accion" class="block text-sm font-medium">Rentabilidad Libre de Riesgo</label>
                  <input type="number" v-model="rentabilidad" name="valor-accion" id="valor-accion" class="mt-1 p-1 block w-full sm:text-md text-input_black rounded-sm" />
                </div>

                <div class="sm:col-span-3">
                  <label for="dividendo" class="block text-sm font-medium text-gray-700">Coeficiente Beta del Sector</label>
                  <input v-model="beta" type="number" name="dividendo" id="dividendo" class="mt-1 p-1  block w-full shadow-sm rounded-sm sm:text-md text-input_black" />
                </div>

                <div class="sm:col-span-3">
                  <label for="perpetuidad" class="block text-sm font-medium text-gray-700">Prima de Riesgo del Mercado</label>
                  <input v-model="prima_riesgo" type="number" name="perpetuidad" id="perpetuidad" class="mt-1 p-1 block w-full shadow-sm rounded-sm sm:text-md text-input_black" />
                </div>
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-center sm:px-6">
              <button class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white hover:bg-button hover:text-input_black hover:border-warning" @click="calculateCAPM()">Calcular</button>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainProjectItem from "../components/ui/MainProjectItem.vue";
import Title from "../components/ui/Title.vue";
import LinkBtn from "../components/ui/LinkBtn.vue";

export default {
  components: { MainProjectItem , Title, LinkBtn},
  data: () => ({
    wacc:0,
    capm: 0,
    debt_percentage: 0,
    cap_percentage: 0,
    costo_deuda: 0,
    costo_capital: 0,
    rentabilidad: 0, 
    beta: 0,
    prima_riesgo: 0,
    isr: 0,
    error: false,
  }),
  methods: {
    calculateWACC(){
      if(this.debt_percentage + this.cap_percentage == 100){
        var capital = this.cap_percentage/100
        var kd = this.costo_deuda/100
        var ke = this.costo_capital/100
        var deuda = this.debt_percentage/100
        var ISR = this.isr/100
        this.wacc = (capital * ke) + (deuda * (kd * (1-ISR)))
        this.wacc = (this.wacc * 100).toFixed(2)
        this.error = false
      } else {
        this.error = true
      }
    },
    calculateCAPM(){
      this.capm = (this.rentabilidad/100) + ((this.beta/100) * (this.prima_riesgo/100))
      this.capm = (this.capm*100).toFixed(2)
    }
  }
};
</script>
