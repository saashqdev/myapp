const PrivacyPolicySection = () => {
  return (
    <div className='mx-auto max-w-7xl px-4 pt-20 md:px-6 md:pt-28 lg:px-8'>
      <div className='space-y-6 py-16 md:py-20'>
        <h1 className='mx-auto max-w-5xl bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-3xl font-bold text-transparent sm:text-4xl md:text-6xl'>
          Privacy Policy
        </h1>
        <p className='mx-auto mt-2 max-w-2xl text-center text-base text-muted-foreground sm:text-lg'>
          Last updated: March 2025
        </p>

        <div className='mx-auto max-w-4xl space-y-8'>
          {sections.map(({ title, content }, index) => (
            <section key={index}>
              <h2 className='text-lg font-semibold sm:text-xl'>{title}</h2>
              {Array.isArray(content) ? (
                <ul className='list-disc space-y-2 pl-5 text-sm sm:text-base'>
                  {content.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className='text-sm sm:text-base'>{content}</p>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}

const sections = [
  {
    title: '1. Introduction',
    content:
      'This Privacy Policy explains how inTake collects, uses, and protects your personal information.',
  },
  {
    title: '2. Information We Collect',
    content: [
      'Personal information you provide, such as name and email.',
      'Usage data automatically collected when using our services.',
    ],
  },
  {
    title: '3. How We Use Your Information',
    content: [
      'To provide, maintain, and improve our services.',
      'To communicate updates, security notices, and support messages.',
    ],
  },
  {
    title: '4. Sharing Your Information',
    content: [
      'We do not sell your personal data.',
      'We may share information with trusted third-party services for operational purposes.',
    ],
  },
  {
    title: '5. Data Security',
    content:
      'We take appropriate security measures to protect your data from unauthorized access, alteration, or disclosure.',
  },
  {
    title: '6. Your Rights',
    content: [
      'You have the right to access, update, or delete your personal information.',
      'You can opt out of marketing communications at any time.',
    ],
  },
  {
    title: '7. Changes to This Policy',
    content:
      'We may update this Privacy Policy, and we will notify you of significant changes.',
  },
  {
    title: '8. Contact Us',
    content:
      'If you have any questions about this Privacy Policy, please contact us.',
  },
]

export default PrivacyPolicySection
