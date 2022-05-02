import requireContext from 'require-context.macro';

export const heroImages = requireContext('../assets/heroes', true); // Leer una imagen de forma dinamica
// true para que busque en subdirectorios