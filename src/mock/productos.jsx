const productos = [
    {
        id: '01',
        name: 'Remera Overzise',
        description: 'remera UwU',
        stock: '12',
        image: 'https://i.postimg.cc/9X6DP2t0/messina-Foto-Remera.jpg',
        category: 'Hombres',
        price: '22000'
    },
    {
        id: '02',
        name: 'Remera Overzise',
        description: 'remera UwU',
        stock: '2',
        image: 'https://i.postimg.cc/9X6DP2t0/messina-Foto-Remera.jpg',
        category: 'Hombres',
        price: '22000'
    },
    {
        id: '03',
        name: 'Remera Overzise',
        description: 'remera UwU',
        stock: '31',
        image: 'https://i.postimg.cc/9X6DP2t0/messina-Foto-Remera.jpg',
        category: 'Mujeres',
        price: '22000'
    },
    {
        id: '04',
        name: 'Remera Overzise',
        description: 'remera UwU',
        stock: '7',
        image: 'https://i.postimg.cc/9X6DP2t0/messina-Foto-Remera.jpg',
        category: 'Mujeres',
        price: '22000'
    },
    {
        id: '05',
        name: 'Remera Overzise',
        description: 'remera UwU',
        stock: '2',
        image: 'https://i.postimg.cc/9X6DP2t0/messina-Foto-Remera.jpg',
        category: 'Mujeres',
        price: '22000'
    },
    {
        id: '06',
        name: 'Remera Overzise',
        description: 'remera UwU',
        stock: '2',
        image: 'https://i.postimg.cc/9X6DP2t0/messina-Foto-Remera.jpg',
        category: 'Inicio',
        price: '22000'
    },
    {
        id: '07',
        name: 'Remera Overzise',
        description: 'remera UwU',
        stock: '2',
        image: 'https://i.postimg.cc/9X6DP2t0/messina-Foto-Remera.jpg',
        category: 'Inicio',
        price: '22000'
    },
    {
        id: '08',
        name: 'Remera Overzise',
        description: 'remera UwU',
        stock: '2',
        image: 'https://i.postimg.cc/9X6DP2t0/messina-Foto-Remera.jpg',
        category: 'Inicio',
        price: '22000'
    },
    {
        id: '09',
        name: 'Remera Overzise',
        description: 'remera UwU',
        stock: '2',
        image: 'https://i.postimg.cc/9X6DP2t0/messina-Foto-Remera.jpg',
        category: 'Inicio',
        price: '22000'
    },
    {
        id: '10',
        name: 'Remera Overzise',
        description: 'remera UwU',
        stock: '2',
        image: 'https://i.postimg.cc/9X6DP2t0/messina-Foto-Remera.jpg',
        category: 'Inicio',
        price: '22000'
    },
    {
        id: '11',
        name: 'Remera Overzise',
        description: 'remera UwU',
        stock: '2',
        image: 'https://i.postimg.cc/9X6DP2t0/messina-Foto-Remera.jpg',
        category: 'Inicio',
        price: '22000'
    },
    {
        id: '12',
        name: 'Remera Overzise',
        description: 'remera UwU',
        stock: '2',
        image: 'https://i.postimg.cc/9X6DP2t0/messina-Foto-Remera.jpg',
        category: 'Inicio',
        price: '22000'
    },
    {
        id: '13',
        name: 'Remera Overzise',
        description: 'remera UwU',
        stock: '2',
        image: 'https://i.postimg.cc/9X6DP2t0/messina-Foto-Remera.jpg',
        category: 'Mujeres',
        price: '22000'
    },
    {
        id: '14',
        name: 'Remera Overzise',
        description: 'remera UwU',
        stock: '2',
        image: 'https://i.postimg.cc/9X6DP2t0/messina-Foto-Remera.jpg',
        category: 'Mujeres',
        price: '22000'
    },
    {
        id: '15',
        name: 'Remera Overzise',
        description: 'remera UwU',
        stock: '2',
        image: 'https://i.postimg.cc/9X6DP2t0/messina-Foto-Remera.jpg',
        category: 'Mujeres',
        price: '22000'
    },
    {
        id: '16',
        name: 'Remera Overzise',
        description: 'remera UwU',
        stock: '2',
        image: 'https://i.postimg.cc/9X6DP2t0/messina-Foto-Remera.jpg',
        category: 'Hombres',
        price: '22000'
    },
    {
        id: '17',
        name: 'Remera Overzise',
        description: 'remera UwU',
        stock: '2',
        image: 'https://i.postimg.cc/9X6DP2t0/messina-Foto-Remera.jpg',
        category: 'Hombres',
        price: '22000'
    },
    {
        id: '18',
        name: 'Remera Overzise',
        description: 'remera UwU',
        stock: '2',
        image: 'https://i.postimg.cc/9X6DP2t0/messina-Foto-Remera.jpg',
        category: 'Hombres',
        price: '22000'
    }
];


let error=false;

export const getProducts = () =>{
    return new Promise((resolve,reject) =>{ 
        setTimeout(()=>{
            if(!error){
                resolve(productos);
            }else{
                reject('Fallo algo');
            }
        },1000);
    })
}