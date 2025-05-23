export default function formatDate(dateString: string) {
  const date = new Date(dateString);

  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date);
}
