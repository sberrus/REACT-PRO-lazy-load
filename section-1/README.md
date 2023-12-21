# Conceptos a tratar

# Lazyload

React crea un bundle del código de js el cual se descarga y se ejecuta al momento de que se inicializa la aplicacion en el cliente, pero hay veces en las que debido a que una porción del proyecto es muy pesada, es más eficiente que se cargue de manera dinamica y que esta se cargue por separado evitando una sobrecarga en los procesos y evitar que canibalice los recursos del cliente.