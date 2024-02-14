import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Salim Protfolio',
  description: 'Salim Protfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <meta charSet="utf-8" />
    <meta
      name="viewport"
      content="height=device-height, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
    />
 
    <link rel="shortcut icon" href="assets/images/fav.png" type="image/x-icon" />
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&display=swap"
      rel="stylesheet"
    />
    <link rel="shortcut icon" href="assets/images/fav.jpg" />
    <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
    <link rel="stylesheet" href="assets/css/all.min.css" />
    <link rel="stylesheet" href="assets/css/animate.min.css" />
    <link
      rel="stylesheet"
      href="assets/plugins/slider/css/owl.carousel.min.css"
    />
    <link
      rel="stylesheet"
      href="assets/plugins/slider/css/owl.theme.default.css"
    />
    <link rel="stylesheet" type="text/css" href="assets/css/style.css" />
  

      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
