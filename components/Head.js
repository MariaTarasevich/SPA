const viewport = document.createElement('meta'),
    charset = document.createElement('meta'),
    title = document.createElement('title');

viewport.setAttribute('name', 'viewport')
viewport.setAttribute('content', 'width=device-width, initial-scale=1.0')
charset.setAttribute('charset', 'UTF-8')

document.head.appendChild(viewport)
document.head.appendChild(charset)
document.head.appendChild(title)

export {title}