import "@/styles/global.scss";
import styles from "./layout.module.scss";

import LeftBar from "@/components/LeftBar";
import RightBar from "@/components/RightBar";

export default function RootLayout({
  children,
	modal,
}: Readonly<{
  children: React.ReactNode;
	modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
				<div className={styles.container}>
					<div className={styles.leftBar}>
						<LeftBar />
					</div>
					<div className={styles.content}>
						{children}
						{modal}
					</div>
					<div className={styles.rightBar}>
						<RightBar />
					</div>
				</div>
			</body>
    </html>
  );
}