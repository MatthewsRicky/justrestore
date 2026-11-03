export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen pt-[76px] lg:pt-[88px]">{children}</main>
  );
}
