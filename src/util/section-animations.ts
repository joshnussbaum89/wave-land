function handleActiveSiteSectionsOnScroll() {
  if (!window.IntersectionObserver) return console.log('IntersectionObserver not supported')

  // Grab sections
  const sections = document.querySelectorAll('.site-section') as NodeListOf<HTMLElement>

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const section = entry.target as HTMLElement
        section.classList.add('active')
      }
    })
  }, options)

  sections.forEach((section) => observer.observe(section))
}

window.addEventListener('load', handleActiveSiteSectionsOnScroll)
document.addEventListener('scroll', handleActiveSiteSectionsOnScroll)
