//	import IMask from 'imask';

var lazyMask = IMask(
	document.querySelector('#date-of-birth'),
	{
		mask: Date,
		lazy: true,
		autofix: true,
		blocks: {
			d: { mask: IMask.MaskedRange, placeholderChar: 'd', from: 1, to: 31, maxLength: 2 },
			m: { mask: IMask.MaskedRange, placeholderChar: 'm', from: 1, to: 12, maxLength: 2 },
			Y: { mask: IMask.MaskedRange, placeholderChar: 'y', from: 1900, to: 2999, maxLength: 4 }
		}
	}
);
