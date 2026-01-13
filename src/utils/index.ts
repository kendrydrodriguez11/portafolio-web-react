export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

export const openExternalLink = (url: string) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

export const openEmail = (email: string, subject = '', body = '') => {
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);
  window.location.href = `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;
};

export const formatPhoneNumber = (phone: string) => {
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3');
};