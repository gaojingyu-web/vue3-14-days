// 引入测试工具
import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useCounterStore } from './counter'

// 每次测试前激活 Pinia（必须）
beforeEach(() => {
  setActivePinia(createPinia())
})

/* 测试套件 */
describe('counter store', () => {
  it('初始值应该是 0', () => {
    const counter = useCounterStore()
    expect(counter.count).toBe(0)
  })

  it('increment 后应该是 1', () => {
    const counter = useCounterStore()
    counter.increment()
    expect(counter.count).toBe(1)
  })

  it('decrement 后应该是 -1', () => {
    const counter = useCounterStore()
    counter.decrement()
    expect(counter.count).toBe(-1)
  })
})