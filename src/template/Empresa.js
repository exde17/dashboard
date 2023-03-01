import React from 'react'

const Empresa = () => {
  return (
    // <div class="bg-gray-100 mx-auto max-w-6xl bg-white py-20 px-12 lg:px-24 shadow-xl mb-24 rounded-md">
    <form>
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
      <div class="-mx-3 md:flex mb-6">
         <div class="md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="uppercase tracking-wide text-black text-xs mb-2" for="S_empresa">
              Sevicio ofertado*
            </label>
            <div>
              <select class="w-full h-9 border border-gray-200 text-black text-xs px-4 pr-8 mb-3 rounded" id="S_empresa">
                <option>Desarrollo a la medida</option>
                <option>Comercializacion de productos</option>
                <option>infraestructura tecnologica</option>
                
              </select>
            </div>
          </div>
          
          <div class="md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="uppercase tracking-wide text-black text-xs mb-2" for="A_economica">
            Sector del negocio*
            </label>
            <div>
              <select class="w-full h-9 border border-gray-200 text-black text-xs px-4 pr-8 mb-3 rounded" id="A_economica">
                <option>BPO</option>
                <option>KTO</option>
                <option>ITO</option>
                
              </select>
            </div>
          </div>
        </div>

        {/* ----------------------------------------------------------------------------- */}

        

        <div class="-mx-3 md:flex mb-6">
            <div class="md:w-1/2 px-3">
            <label class="uppercase tracking-wide text-black text-xs mb-2" for="title">
              Numero de empleados con abilidades en TI*
            </label>
            <input class="w-full h-9 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="title" type="number" placeholder=""/>
            </div>

            <div class="md:w-1/2 px-3">
            <label class="uppercase tracking-wide text-black text-xs mb-2" for="title">
              Numero de empleados de la region*
            </label>
            <input class="w-full h-9 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="title" type="number" placeholder=""/>
            </div>
        </div>

        {/* ---------------------------------------------------------------------------------- */}

        <div class="-mx-3 md:flex mb-6">
            <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="uppercase tracking-wide text-black text-xs mb-2" for="T_idenficacion">
                Comercializacion directa o con terceros*
                </label>
                <div>
                <select class="w-full h-9 border border-gray-200 text-black text-xs px-4 pr-8 mb-3 rounded" id="T_idenficacion">
                    <option>Directa</option>
                    <option>Terceros</option>
                    
                </select>
                </div>
            </div>

            
        </div>


       
                
        <div class="-mx-3 md:flex mt-2 justify-center">
          <div class="md:w-[30%] px-3">
            <button class="md:w-full bg-purple-600 text-white py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full">
              GUARDAR
            </button>
          </div>
        </div>
      </div>
    </form>
  // </div>
  )
}

export default Empresa