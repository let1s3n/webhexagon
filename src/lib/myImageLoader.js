export default function myImageLoader({ src }) {
  return `${process.env.NEXT_PUBLIC_CDN}images/${src}`;
}
