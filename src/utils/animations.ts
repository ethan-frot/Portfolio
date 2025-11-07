import { Variants } from "framer-motion";

/**
 * Animation variants pour les textes avec effet de révélation linéaire
 * Le texte émerge d'une ligne en bas et se fait aspirer vers le haut lors de la sortie
 * À utiliser sur le contenu interne (avec overflow hidden sur le parent)
 */
export const textRevealVariants: Variants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -30,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

/**
 * Container variant pour les animations avec stagger
 * Utilise l'effet de révélation linéaire pour les enfants
 */
export const staggerContainerVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

/**
 * Item variant pour les éléments dans un container avec stagger
 * Le texte émerge d'une ligne en bas et se fait aspirer vers le haut lors de la sortie
 */
export const staggerItemVariants: Variants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -30,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

/**
 * Animation variants pour la ligne de bordure des inputs
 * La ligne apparaît de gauche à droite et disparaît de droite à gauche
 */
export const lineDrawVariants: Variants = {
  initial: {
    scaleX: 0,
    originX: 0,
  },
  animate: {
    scaleX: 1,
    originX: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    scaleX: 0,
    originX: 1,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

/**
 * Animation variants pour le remplissage du cercle de sélection
 * Le cercle se remplit progressivement de bas en haut comme un liquide
 */
export const circleFillVariants: Variants = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};
