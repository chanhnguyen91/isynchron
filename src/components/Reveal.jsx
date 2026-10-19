import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

/** Fades and slides its content up once it scrolls into view. */
export function Reveal({ as = 'div', delay = 0, y = 28, className, children, ...rest }) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease, delay }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** Container whose <RevealItem> children enter one after another. */
export function RevealGroup({ as = 'div', stagger = 0.12, className, children }) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: '-80px' }}
      variants={{ shown: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </Tag>
  );
}

export function RevealItem({ as = 'div', className, children, ...rest }) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      variants={{
        hidden: { opacity: 0, y: 28 },
        shown: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
