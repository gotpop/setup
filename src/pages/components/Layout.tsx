import { AppShell } from "@mantine/core"
import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import NavBar from "./NavBar"

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <AppShell
        header={<Header />}
        navbar={<NavBar />}
        footer={<Footer />}
        styles={{
          main: {
            minHeight: "100vh",
            backgroundColor: "lightgray",
            minWidth: "100vw",
          },
        }}
      >
        {children}
      </AppShell>
    </>
  )
}
