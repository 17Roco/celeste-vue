import type {InjectionKey} from "vue";

export const SymbolArticleFilter = Symbol() as InjectionKey<ArticleFilter>

export const SymbolArticleList = Symbol() as InjectionKey<Page<Article>>