const showOrders = document.querySelector('.showOrders')

document.addEventListener('DOMContentLoaded', () => {
    showOrders.addEventListener('click', (e) => {
        e.preventDefault()
        window.location.href = '/orders'
    })
})