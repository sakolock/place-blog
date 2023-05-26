export function classNames(...args) {
  return args.map((arg) => arg).join(' ');
}

export const formatDate = (date) =>  new Date(date).toLocaleDateString('en-us', { year: 'numeric', month: 'long', day: 'numeric' });
