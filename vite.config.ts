import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import postCssTsClassnames from 'postcss-ts-classnames';
import tailwind from 'tailwindcss';
import { defineConfig } from 'vite';
import sassDts from 'vite-plugin-sass-dts';

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    server: {
      watch: {
        ignored: ['**/cssClasses.d.ts', '**/*module.scss.d.ts'],
      },
    },
    css: {
      postcss: {
        plugins: [
          tailwind,
          autoprefixer,
          postCssTsClassnames({
            dest: 'src/styles/cssClasses.d.ts',
            // Set isModule if you want to import ClassNames from another file
            isModule: true,
            exportAsDefault: true, // to use in combination with isModule
          }),
        ],
      },
    },
    plugins: [react(), sassDts()],
  };
});
