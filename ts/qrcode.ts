import { toDataURL } from 'qrcode'

var share = document.querySelector('.share') as HTMLDivElement

const qr = document.querySelector('.qr') as HTMLImageElement
qr.addEventListener('click', () => {
	const qrCodeImage = toDataURL('https://example.com', {
		width: 300,
		color: { dark: '#0a2647', light: '#dde6ed' },
	})

	const qrShare = document.querySelector('.share > div') as HTMLDivElement
	share.style.display = 'flex'

	qrCodeImage.then((img: string) => {
		qrShare.innerHTML = `
		<img src="${img}" alt="" />
	`
	})
})

document.body.addEventListener('click', (ev: MouseEvent) => {
	if (ev.target === share) {
		share.style.animation = 'fadeOut 0.5s forwards'
		setTimeout(() => {
			share.style.display = 'none'
			share.style.animation = 'fadeIn 0.5s forwards'
		}, 500)
	}
})
