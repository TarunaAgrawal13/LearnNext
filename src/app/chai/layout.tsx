
export default function RootLayout({
  children,
}: Readonly<{ //itst typeScript saying only react like childrens are acceptable
  children: React.ReactNode;
}>) {
  return (
      <>
      <h2>inner Layout item</h2>
        {children}
      </>
  );
}
