import { useCallback, useMemo, useState } from 'react';

import { products } from '../data/products.js';
import { useT } from '../i18n/index.jsx';
import ProductCard from './ProductCard.jsx';
import ProductDetails from './ProductDetails.jsx';
import SectionHeading from './SectionHeading.jsx';

export default function Products() {
  const t = useT();
  const items = useMemo(
    () => products.map((product) => ({ ...product, ...t.products.items[product.id] })),
    [t],
  );
  const [open, setOpen] = useState(null);
  const close = useCallback(() => setOpen(null), []);

  return (
    <section id="products" className="relative px-4 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t.products.eyebrow}
          title={
            <>
              {t.products.titleLead} <span className="text-gradient">{t.products.titleGlow}</span>
            </>
          }
          intro={t.products.intro}
        />
        <div className="mt-16 space-y-8 sm:space-y-10">
          {items.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              reverse={index % 2 === 1}
              onLearnMore={setOpen}
            />
          ))}
        </div>
      </div>
      <ProductDetails product={open} onClose={close} />
    </section>
  );
}
