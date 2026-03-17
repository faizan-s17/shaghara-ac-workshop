import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Improve chunking to avoid very large single chunks
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          const pathAfter = id.split('node_modules/')[1]
          if (!pathAfter) return
          const parts = pathAfter.split('/')
          const pkg = parts[0].startsWith('@') ? `${parts[0]}/${parts[1]}` : parts[0]

          // Group very large libs explicitly
          if (pkg === 'react' || pkg === 'react-dom') return 'vendor-react'
          if (pkg === 'lucide-react') return 'vendor-icons'
          if (pkg === 'lodash') return 'vendor-lodash'

          // Default: create per-package vendor chunks
          return `vendor-${pkg.replace('@', '').replace('/', '-')}`
        }
      }
    }
  }
})
