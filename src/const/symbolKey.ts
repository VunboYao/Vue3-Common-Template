/**
 * @file symbolKey.js
 * @author VunboYao
 * @date 2023/4/11 15:48
 */
import type { InjectionKey } from 'vue'

export const key = Symbol('demo') as InjectionKey<string>
export const noProvideKey = Symbol('noValue') as InjectionKey<string>
