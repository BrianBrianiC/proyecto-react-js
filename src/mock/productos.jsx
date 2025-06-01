const productos=[
    {
        id: '01',
        name: 'Remera Overzise',
        description: 'remera UwU',
        image: '',
        stock: '12',
        image: 'https://i.postimg.cc/9X6DP2t0/messina-Foto-Remera.jpg',
        category: 'Hombres'
    },
    {
        id: '02',
        name: 'Remera Overzise',
        description: 'remera UwU',
        image: '',
        stock: '2',
        image: 'https://i.postimg.cc/9X6DP2t0/messina-Foto-Remera.jpg',
        category: 'Hombres'
    },
    {
        id: '03',
        name: 'Remera Overzise',
        description: 'remera UwU',
        image: '',
        stock: '31',
        image: 'https://i.postimg.cc/9X6DP2t0/messina-Foto-Remera.jpg',
        category: 'Mujeres'
    },
    {
        id: '04',
        name: 'Remera Overzise',
        description: 'remera UwU',
        image: '',
        stock: '7',
        image: 'https://i.postimg.cc/9X6DP2t0/messina-Foto-Remera.jpg',
        category: 'Mujeres'
    },
    {
        id: '05',
        name: 'Remera Overzise',
        description: 'remera UwU',
        image: '',
        stock: '2',
        image: 'https://i.postimg.cc/9X6DP2t0/messina-Foto-Remera.jpg',
        category: 'Mujeres'
    },
    {
        id: '06',
        name: 'Remera Overzise',
        description: 'remera UwU',
        image: '',
        stock: '2',
        image:'https://i.postimg.cc/9X6DP2t0/messina-Foto-Remera.jpg',
        category: 'Inicio'
    },
    {
        id: '06',
        name: 'Remera Overzise',
        description: 'remera UwU',
        image: '',
        stock: '2',
        image: 'https://i.postimg.cc/9X6DP2t0/messina-Foto-Remera.jpg',
        category: 'Inicio'
    },
    {
        id: '07',
        name: 'Remera Overzise',
        description: 'remera UwU',
        image: '',
        stock: '2',
        image: 'https://i.postimg.cc/9X6DP2t0/messina-Foto-Remera.jpg',
        category: 'Inicio'
    },
    {
        id: '08',
        name: 'Remera Overzise',
        description: 'remera UwU',
        image: '',
        stock: '2',
        category: 'Inicio'
    },
    {
        id: '09',
        name: 'Remera Overzise',
        description: 'remera UwU',
        image: '',
        stock: '2',
        image: 'https://i.postimg.cc/9X6DP2t0/messina-Foto-Remera.jpg',
        category: 'Inicio'
    },
    {
        id: '10',
        name: 'Remera Overzise',
        description: 'remera UwU',
        image: '',
        stock: '2',
        image: 'https://i.postimg.cc/9X6DP2t0/messina-Foto-Remera.jpg',
        category: 'Inicio'
    },
    {
        id: '11',
        name: 'Remera Overzise',
        description: 'remera UwU',
        image: '',
        stock: '2',
        image: 'https://i.postimg.cc/9X6DP2t0/messina-Foto-Remera.jpg',
        category: 'Inicio'
    },
    {
        id: '12',
        name: 'Remera Overzise',
        description: 'remera UwU',
        image: '',
        stock: '2',
        image: 'https://i.postimg.cc/9X6DP2t0/messina-Foto-Remera.jpg',
        category: 'Inicio'
    },
    {
        id: '13',
        name: 'Remera Overzise',
        description: 'remera UwU',
        image: '',
        stock: '2',
        image: 'https://i.postimg.cc/9X6DP2t0/messina-Foto-Remera.jpg',
        category: 'Mujeres'
    },
    {
        id: '14',
        name: 'Remera Overzise',
        description: 'remera UwU',
        image: '',
        stock: '2',
        image: 'https://i.postimg.cc/9X6DP2t0/messina-Foto-Remera.jpg',
        category: 'Mujeres'
    },

    {
        id: '15',
        name: 'Remera Overzise',
        description: 'remera UwU',
        image: '',
        stock: '2',
        image: 'https://i.postimg.cc/9X6DP2t0/messina-Foto-Remera.jpg',
        category: 'Mujeres'
    },
    {
        id: '16',
        name: 'Remera Overzise',
        description: 'remera UwU',
        image: '',
        stock: '2',
        image: 'https://i.postimg.cc/9X6DP2t0/messina-Foto-Remera.jpg',
        category: 'Hombres'
    },{
        id: '17',
        name: 'Remera Overzise',
        description: 'remera UwU',
        image: '',
        stock: '2',
        image: 'https://i.postimg.cc/9X6DP2t0/messina-Foto-Remera.jpg',
        category: 'Hombres'
    },
    {
        id: '18',
        name: 'Remera Overzise',
        description: 'remera UwU',
        image: '',
        stock: '2',
        image: 'https://i.postimg.cc/9X6DP2t0/messina-Foto-Remera.jpg',
        category: 'Hombres'
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
        },3000);
    })
}