import './globals.css'

export const metadata = {
  title: 'Color Matrix',
  description: 'A great start is half the work',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
