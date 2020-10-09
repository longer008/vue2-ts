declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module 'vue/types/vue'{
  interface Vue{
    readonly $i18n:VueI18Next;
    $t:TranslationFunction;
  }
}
