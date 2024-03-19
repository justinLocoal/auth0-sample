// app/layout.jsx
'use client';

import '../devlink/global.css'
import { DevLinkProvider } from "../devlink";
import { UserProvider } from '@auth0/nextjs-auth0/client';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
      <body>
        {/* Layout UI */}
        <DevLinkProvider>
        <main>
            {children}
        </main>
        </DevLinkProvider>
      </body>
      </UserProvider>
    </html>
  );
}
