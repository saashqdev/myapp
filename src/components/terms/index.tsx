const TermsSection = () => {
  return (
    <div className='mx-auto max-w-7xl px-4 pt-20 md:px-6 md:pt-28 lg:px-8'>
      <div className='space-y-6 py-16 md:py-20'>
        <h1 className='mx-auto max-w-5xl bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-3xl font-bold text-transparent sm:text-4xl md:text-6xl'>
          Terms and Conditions
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
    title: '1. Acceptance of Terms',
    content:
      'By using inTake, you acknowledge that you have read, understood, and agree to these Terms. If you do not agree, please do not use our services.',
  },
  {
    title: '2. Changes to Terms',
    content:
      'We may update these Terms periodically. Continued use of inTake after changes constitutes acceptance of the updated Terms.',
  },
  {
    title: '3. Use of Our Services',
    content: [
      'You must be at least [minimum age] years old to use inTake.',
      'You agree not to misuse our services, engage in illegal activities, or violate the rights of others.',
    ],
  },
  {
    title: '4. Accounts and Security',
    content: [
      'You are responsible for maintaining the security of your account and credentials.',
      'Notify us immediately if you suspect unauthorized access.',
    ],
  },
  {
    title: '5. Intellectual Property',
    content: [
      'All content, logos, and trademarks on inTake are owned by us or our licensors.',
      'You may not copy, distribute, or modify any content without permission.',
    ],
  },
  {
    title: '6. Limitation of Liability',
    content: [
      'We are not liable for any damages resulting from your use of inTake.',
      'Our services are provided "as is" without warranties of any kind.',
    ],
  },
  {
    title: '7. Termination',
    content:
      'We reserve the right to suspend or terminate your access to inTake if you violate these Terms.',
  },
  {
    title: '8. Contact Us',
    content: 'If you have any questions about these Terms, please contact us.',
  },
]

export default TermsSection
