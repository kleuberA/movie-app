/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_KEY: string
    // mais variáveis ​​de ambiente...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }