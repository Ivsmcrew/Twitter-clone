import { useEffect } from "react";

/**
 * Locks the body scroll when the modal is open and resets it when the modal is closed
 */
export const useBodyScrollLock = (enabled: boolean) => {
		useEffect(() => {
			if (!enabled) {
				return;
			}

			const originalStyle = {
				overflow: document.body.style.overflow,
				paddingRight: document.body.style.paddingRight,
			}

			const scrollbarWidth = window.innerWidth - document.body.clientWidth;
			document.body.style.overflow = "hidden";
			if (scrollbarWidth > 0) {
				document.body.style.paddingRight = `${scrollbarWidth}px`;
			}

			return () => {
				document.body.style.overflow = originalStyle.overflow;
				document.body.style.paddingRight = originalStyle.paddingRight;
			};
		}, [enabled]);
}