import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'happy-dom', // 告诉 Vitest：在“假浏览器”里跑测试
    include: ['src/**/*.test.ts'], // 显式指定扫描规则（可省略，这里是默认值）
  }
})