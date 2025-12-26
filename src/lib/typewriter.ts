// Borrowed from svelte typewriter tutorial
export function typewriter(
	node: HTMLElement,
	{ speed = 1, delay = 0 }
): {
	duration?: number;
	delay?: number;
	tick?: (t: number, u: number) => void;
} {
	const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

	if (!valid) {
		throw new Error(`This transition only works on elements with a single text node child`);
	}

	const text = node.textContent;

	if (!text) {
		throw new Error(`Text content is empty`);
	}

	const duration = text.length / (speed * 0.01);

	return {
		duration,
		delay,
		tick: (t) => {
			const i = ~~(text.length * t);
			node.textContent = text.slice(0, i);
		}
	};
}
