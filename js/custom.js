(function() {

    const modal = document.getElementById('modal')
    const modalBackground = modal.querySelector('#modal_background')
    modalBackground.addEventListener('click', () => {
        hideModal()
        for(let node of modalContent.children) {
            // remove all the children inside modal content
            node.remove();
        }
    })

    function hideModal() {
        modal.classList.add('hidden')
        document.body.style.overflow = "scroll"
    }

    function showModal() {
        document.body.style.overflow = 'hidden'
        modal.classList.remove('hidden')
    }

    const modalContent = modal.querySelector('#modal_content')

    const images = document.querySelectorAll('img.expandInModal')

    images.forEach(img => {
        img.addEventListener('click', e => {
            const container = document.createElement('div')
            container.style.height = "800px"
            container.style.width = "1400px"

            const imgx = document.createElement('img')
            imgx.src = img.src
            imgx.addEventListener('click', e => {
                imgx.classList.toggle('zoom-in')
            })

            showModal()
            modalContent.append(imgx)
        })
    })


})()