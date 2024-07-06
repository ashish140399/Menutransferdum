import StyledComponentsRegistry from "./lib/registry";
import { AppProvider } from "./utilities/contexts/AppContext";
import "./globals.css";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import { MapProvider } from "./utilities/providers/MapProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body suppressHydrationWarning={true}>
        <StyledComponentsRegistry>
          <AppProvider>
            <MapProvider>
              <Header />
              {children}
              <Footer />
            </MapProvider>
          </AppProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
