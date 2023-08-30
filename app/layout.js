import './globals.css'


export const metadata = {
  title: 'UNICHAT',
  description: 'Bringing hearts Together!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className="relative h-screen w-screen bg-main-background-image bg-no-repeat">{children}</body>
    </html>
  )
}
