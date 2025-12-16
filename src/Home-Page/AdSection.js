"use client";
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { memo } from 'react';
import Button from '@/components/Button';
import SpotlightCard from '@/components/GlowCard';

// AudienceCard Component (Memoized)
const AudienceCard = memo(({ title, description, buttonLabel, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative border rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border-[var(--color-primary)]"
    >
      <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(255, 66, 0, 0.5)">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 bg-[var(--color-primary)] text-white">
            <ArrowRightIcon className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        </div>
        <p className="text-black-100 text-md mb-4">{description}</p>
      </SpotlightCard>
    </motion.div>
  );
});

AudienceCard.displayName = 'AudienceCard';

// WhoWeHelp Component
const WhoWeHelp = () => {
  const audiences = [
    {
      title: 'BISSBAY – Your Growth Partner in Enterprise Marketing',
      description:
        "Scaling your business doesn't have to be complicated. Enterprises need strategic, results-driven B2B marketing solutions to grow with confidence. We turn complexity into clarity building scalable, predictable demand engines that drive real revenue, not just MQLs.",
    },
    {
      title: 'For Founders Ready to Scale with Confidence',
      description:
        "Marketing can feel like a battle but it doesn't have to. Shift from chaos to clarity with a demand generation engine built for sustainable, scalable growth. No fluff, just a revenue-focused strategy that delivers results.",
    },
    {
      title: 'For Marketing Leaders Who Need More Than Just Another Agency',
      description:
        "BISSBAY gives you an expert team without the hassle of managing one yourself. Go beyond MQLs and focus on the metrics that truly drive predictable, scalable revenue. No fluff, just results that actually matter."
      },
    {
      title: 'For VCs Seeking Growth for Underperforming SaaS Portfolio Companies',
      description:
        "Struggling to scale? Get your portfolio back on the growth track with BISSBAY. We've built the team, so you don't have to. Delivering agile, buyer-centric marketing that drives real returns.",
    },
  ];

  return (
    <section
      id="who-we-help"
      className="py-20 bg-gradient-to-b from-white to-gray-50 min-h-screen h-screen flex items-center justify-center w-full"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Who We Help
          </h2>
          <p className="text-gray-600 text-xl">
            BISSBAY partners with B2B SaaS companies to build scalable, predictable demand generation engines that drive real revenue growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {audiences.map((audience, index) => (

            <AudienceCard
              key={index}
              title={audience.title}
              description={audience.description}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>

  );
};

export default WhoWeHelp;