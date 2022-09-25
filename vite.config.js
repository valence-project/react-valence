import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const options = {}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
})
