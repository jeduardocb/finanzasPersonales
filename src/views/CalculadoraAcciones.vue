<template>
  <div>
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <div class="px-4 sm:px-0">
          <h3 class="text-lg font-medium leading-6 text-gray-900">Acciones Preferentes</h3>
          <p class="mt-1 text-sm text-gray-600">El costo de las acciones preferentes, es la relación entre el dividendo de las acciones preferentes y las ganancias netas de la empresa por la venta de las acciones preferentes.</p>
        </div>
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2">
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="grid rows-3 gap-6">
                <div class="sm:col-span-3">
                  <label for="valor-accion-2" class="block text-sm font-medium">Valor de la acción</label>
                  <input v-model="valor" type="number" name="valor-accion-2" id="valor-accion-2" class="mt-1 p-1 block w-full sm:text-sm border-gray-300 rounded-sm" />
                </div>

                <div class="sm:col-span-3">
                  <label for="costo" class="block text-sm font-medium text-gray-700">Costo</label>
                  <input v-model="costo" type="number" name="costo" id="costo" class="mt-1 p-1  block w-full shadow-sm sm:text-sm border-gray-300 rounded-sm" />
                </div>

                <div class="sm:col-span-3">
                  <label for="perpetuidad" class="block text-sm font-medium text-gray-700">Porcentaje %</label>
                  <input v-model="porcentaje" type="number" name="perpetuidad" id="perpetuidad" class="mt-1 p-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-sm" />
                </div>
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-center sm:px-6">
              <button @click="calculatePreferentStock()" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">Calcular</button>
            </div>
            <div>
              <p>rp = dp/np</p>
              <p>rp= {{dp}}/{{np}}</p>
              <p>rp = {{rp}} %</p>
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
          <h3 class="text-lg font-medium leading-6 text-gray-900">Acciones Comunes</h3>
          <p class="mt-1 text-sm text-gray-600">El costo de las acciones ordinarias, es la tasa a la que los inversionistas descuentan los dividendos esperados de la empresa para determinar el valor de sus acciones.</p>
        </div>
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2">
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="grid rows-3 gap-6">
                <div class="sm:col-span-3">
                  <label for="valor-accion" class="block text-sm font-medium">Valor de la acción (P0)</label>
                  <input type="number" v-model="p0" name="valor-accion" id="valor-accion" class="mt-1 p-1 block w-full sm:text-sm border-gray-300 rounded-sm" />
                </div>

                <div class="sm:col-span-3">
                  <label for="dividendo" class="block text-sm font-medium text-gray-700">Dividendo al término del primer año (D1)</label>
                  <input v-model="d1" type="number" name="dividendo" id="dividendo" class="mt-1 p-1  block w-full shadow-sm sm:text-sm border-gray-300 rounded-sm" />
                </div>

                <div class="sm:col-span-3">
                  <label for="perpetuidad" class="block text-sm font-medium text-gray-700">Perpetuidad (g)</label>
                  <input v-model="g" type="number" name="perpetuidad" id="perpetuidad" class="mt-1 p-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-sm" />
                </div>
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-center sm:px-6">
              <button class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="calculateCommonStock()">Calcular</button>
            </div>
            <div>
              <p>rs = {{rs}} %</p>
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
    g:0,
    d1: 0,
    p0: 0,
    rs: 0,
    costo: 0,
    valor: 0,
    porcentaje: 0, 
    dp: 0,
    np: 0,
    rp: 0,
  }),
  methods: {
    calculateCommonStock(){
      this.rs = (this.d1/this.p0) + (this.g/100)
      this.rs = this.rs*100
    },
    calculatePreferentStock(){
      this.dp = this.valor*(this.porcentaje/100)
      this.np = this.valor-this.costo
      this.rp = this.dp/this.np
      this.rp = this.rp*100
    }
  }
};
</script>
