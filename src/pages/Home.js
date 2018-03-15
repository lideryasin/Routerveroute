import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';
  

class Home extends React.Component{
    render(){
        return(

            <div>

            <Navbar />

            <Jumbotron title="Welcome" subtitle="Web Siteme Hoşgeldiniz"/>

            <div className="container">
            <div>
            <h4>Merhaba</h4>
            <p>
            Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı, sürekli 'buraya metin gelecek, buraya metin gelecek' yazmaya kıyasla daha dengeli bir harf dağılımı sağlayarak okunurluğu artırmasıdır. Şu anda birçok masaüstü yayıncılık paketi ve web sayfa düzenleyicisi, varsayılan mıgır metinler olarak Lorem Ipsum kullanmaktadır. Ayrıca arama motorlarında 'lorem ipsum' anahtar sözcükleri ile arama yapıldığında henüz tasarım aşamasında olan çok sayıda site listelenir. Yıllar içinde, bazen kazara, bazen bilinçli olarak (örneğin mizah katılarak), çeşitli sürümleri geliştirilmiştir.

            </p>
            </div>
            </div>
            </div>
        );
    }
}

export default Home;