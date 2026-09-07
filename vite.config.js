import { defineConfig } from 'vite'

// base relativa: o build funciona servido por HTTP e também aberto direto
// do disco (file://), onde caminhos absolutos como /brand/... quebram.
export default defineConfig({
  base: './',
})
