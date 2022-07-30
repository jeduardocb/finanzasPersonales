<template>
  <div>
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <div class="px-4 sm:px-0">
          <h3 class="text-lg font-medium leading-6 text-gray-900">Cálculo de Valor Futuro con Interés Compuesto</h3>
        </div>
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2">
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="grid rows-3 gap-6">
                <div class="sm:col-span-3">
                  <label for="valorPresente" class="block text-sm font-medium">Valor Presente (VP)</label>
                  <input v-model="vp1" type="number" name="valorPresente" id="valorPresente" class="mt-1 p-1 block w-full sm:text-md text-input_black rounded-sm" />
                </div>

                <div class="sm:col-span-3">
                  <label for="rendimiento1" class="block text-sm font-medium text-gray-700">Tasa de interés (i)</label>
                  <input v-model="i1" type="number" name="rendimiento1" id="rendimiento1" class="mt-1 p-1  block w-full sm:text-md text-input_black rounded-sm" />
                </div>

                <div class="sm:col-span-3">
                  <label for="capitalizacion1" class="block text-sm font-medium text-gray-700">Plazo de capitalización</label>
                  <select name="capitalizacion1" id="capitalizacion1" v-model="capitalizacion1" class="mt-1 p-1 block w-full sm:text-md text-input_black rounded-sm">
                    <option value="1">Anual</option>
                    <option value="2">Semestral</option>
                    <option value="4">Trimestral</option>
                    <option value="12">Mensual</option>
                  </select>
                </div>  

                <div class="sm:col-span-3">
                  <label for="plazo1" class="block text-sm font-medium text-gray-700">Plazo (n)</label>
                  <input v-model="n1" type="number" name="plazo1" id="plazo1" class="mt-1 p-1 block w-full sm:text-md text-input_black rounded-sm" />
                </div>
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-center sm:px-6">
              <button @click="calculateFutureValue()" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white hover:bg-button hover:text-input_black hover:border-warning">Calcular</button>
            </div>
            <div>
              <p>Valor Futuro (VF) =  ${{vf1}}</p>
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
          <h3 class="text-lg font-medium leading-6 text-gray-900">Cálculo de Valor Presente con Interés Compuesto</h3>
        </div>
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2">
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="grid rows-3 gap-6">
                <div class="sm:col-span-3">
                  <label for="nominal2" class="block text-sm font-medium">Valor Futuro (VF)</label>
                  <input type="number" v-model="vf2" name="nominal2" id="nominal2" class="mt-1 p-1 block w-full sm:text-md text-input_black rounded-sm" />
                </div>

                <div class="sm:col-span-3">
                  <label for="rendimiento2" class="block text-sm font-medium text-gray-700">% Tasa de interés (i)</label>
                  <input v-model="i2" type="number" name="rendimiento2" id="rendimiento2" class="mt-1 p-1  block w-full sm:text-md text-input_black rounded-sm" />
                </div>

                <div class="sm:col-span-3">
                  <label for="plazo2" class="block text-sm font-medium text-gray-700">Plazo (n) en años</label>
                  <input v-model="n2" type="number" name="plazo2" id="plazo2" class="mt-1 p-1 block w-full sm:text-md text-input_black rounded-sm" />
                </div>
                <div class="sm:col-span-3">
                  <label for="capitalizacion2" class="block text-sm font-medium text-gray-700">Plazo de capitalización</label>
                  <select name="capitalizacion2" id="capitalizacion2" v-model="capitalizacion2" class="mt-1 p-1 block w-full sm:text-md text-input_black rounded-sm">
                    <option value="1">Anual</option>
                    <option value="2">Semestral</option>
                    <option value="4">Trimestral</option>
                    <option value="12">Mensual</option>
                  </select> 
                </div>             
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-center sm:px-6">
              <button class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white hover:bg-button hover:text-input_black hover:border-warning" @click="calculatePresentValue()">Calcular</button>
            </div>
            <div>
              <p>Valor Presente (VP) = ${{vp2}}</p>
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
    i1:0,
    i2: 0,
    n1: 0,
    n2: 0,
    c: 0,
    vf1: 0,
    vf2: 0, 
    vp1: 0,
    vp2: 0,
    capitalizacion1: 0,
    capitalizacion2: 0,
  }),
  methods: {
    calculateFutureValue(){
      var r = (this.i1/100)/parseInt(this.capitalizacion1)
      var n = this.n1 * parseInt(this.capitalizacion1)
      this.vf1 = this.vp1*(Math.pow((1+r),n))
      this.vf1 = this.vp1.toFixed(2)
    },
    calculatePresentValue(){
      var r = (this.i2/100)/parseInt(this.capitalizacion2)
      var n = this.n2 * parseInt(this.capitalizacion2)
      this.vp2 = this.vf2/(Math.pow((1+r),n))
      this.vp2 = this.vf2.toFixed(2)
    }
  }
};
</script>
