'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: 'What is inTake?',
    answer:
      'inTake is a deployment platform that allows users to create projects, manage services, deploy applications, and configure servers with ease. It supports custom domains, monitoring, SSH key management, and GitHub integrations.',
  },
  {
    question: 'Can I deploy from GitHub?',
    answer:
      'Yes! You can connect your GitHub repository to inTake and deploy applications directly. The platform supports automated deployments with GitHub Actions.',
  },
  {
    question: 'Can I use my own server?',
    answer:
      'Yes, you can connect your existing infrastructure and deploy applications to your own server.',
  },
  {
    question: 'Can I add SSH keys?',
    answer:
      'Yes, you can add and manage SSH keys for secure access to your servers.',
  },
  {
    question: 'Can I use a custom domain?',
    answer:
      'Yes! inTake allows you to configure and manage custom domains for your projects.',
  },
  {
    question: 'Does inTake offer monitoring?',
    answer:
      'Yes, real-time monitoring is available to track deployment logs, server health, and application performance.',
  },
]
export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className='mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8'>
      <h1 className='bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text pb-10 text-center text-4xl font-bold text-transparent md:text-7xl'>
        Frequently Asked Questions
      </h1>
      <div className='mx-auto grid max-w-4xl gap-6 md:grid-cols-1'>
        {faqs.map((faq, index) => (
          <div key={index} className='rounded-xl p-4 shadow-md'>
            <button
              onClick={() => toggleFAQ(index)}
              className='flex w-full items-center justify-between text-left text-lg font-medium'>
              {faq.question}
              <ChevronDown
                className={`transition-transform ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}
              />
            </button>
            {openIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className='mt-2 text-muted-foreground'>
                {faq.answer}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
